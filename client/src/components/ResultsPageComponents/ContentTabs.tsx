import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectDetailCardState } from '../../Features/DetailsCard/cardSlice';
import { PlantInfo, TabDataMapping } from '../../../types';
import tabDataMapping from './TabDataMapping';
import { RootState } from '../../App/store';
import { formatTitles } from '../../utils/formatTitles';

interface TabButtonProps {
  $active: boolean;
}

interface BaseFieldProps {
  field: string;
}

interface SimpleFieldProps extends BaseFieldProps {
  fieldValue: string | boolean | undefined;
}

interface ArrayFieldProps extends BaseFieldProps {
  fieldValue: string[];
}

interface ObjectFieldProps extends BaseFieldProps {
  fieldValue: Record<string, string>;
}

const tabs = ["Overview", "Care Details", "Growth & Propagation", "Healthy & Safety", "Flower & Fauna"];

const ContentWrapper = styled.div`
  //border: 2px solid green;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  gap: 30px;

  @media(max-width: 768px){
    flex-direction: column;
  }
`;

const TabList = styled.div`
  //border: 2px solid royalblue;
  display: flex;
  flex-direction: column;
  //padding: 10px 0;
  justify-content: space-around;
`;

const TabButton = styled.button<TabButtonProps>`
  //border: 2px solid yellow;
  padding: 10px 30px;
  height: 100%;
  width: 100%; // fit-content
  cursor: pointer;
  opacity: 0.6;
  outline: none;
  background-color: #EEF0E5; // Default background
  font-size: 16px;
  transition: background-color 0.5s ease-in-out;
  font-family: 'Arial', sans-serif;
  border-style: none;
  font-weight: 900;

  ${({ $active }) =>
    $active &&
    `
      opacity: 1;
      background-color: #ddd
    `
  }
`;

const ContentArea = styled.div`
  //border: 2px solid orange;
  padding: 10px 20px;
  flex: 1;
  overflow: scroll;
`;

const ContentTopic = styled.div`
  //border: 2px solid pink;
  width: fit-content;
  min-height: 20px;
  height: auto;
  margin: 10px 0;
  text-align: left;
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  padding: 10px 15px;
`;

const ArrayData =  styled.div`
  //border: 2px solid blue;
  width: fit-content;
  text-align: left;
  margin: 10px 0;
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  padding: 10px 15px;
`;


const ContentTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const { data: plantsMoreInfo } = useSelector(selectDetailCardState);
  const careGuidesData = useSelector((state: RootState) => state.detailCard.careGuides);

  // abstracted helper functions to render specific kinds of fields from the morePlantsInfo response object
  // helper function to render string and booleans
  const renderSimpleField = ({ field, fieldValue }: SimpleFieldProps) => {
    let displayValue = fieldValue;
    if (typeof fieldValue === 'boolean') {
      displayValue = fieldValue? 'Yes' : 'No';
    }

    return (
      <ContentTopic key={field}>
        <strong>{formatTitles(field)}</strong>: {displayValue}
      </ContentTopic>
    );
  };

  // helper function to render array fields
  const renderArrayField = ({ field, fieldValue }: ArrayFieldProps) => {
    return (
      <ArrayData key={field}>
        <strong>{formatTitles(field)}</strong>: {fieldValue.join(', ')}
      </ArrayData>
    )
  };

  // helper function to render object fields (excluding booleans)
  const renderObjectField = ({ field, fieldValue }: ObjectFieldProps) => {
    return (
      Object.entries(fieldValue).map(([key, value]) => 
        <ContentTopic key={`${field}-${key}`}>
          <strong>{formatTitles(key)}</strong>: {typeof value === 'object' ? JSON.stringify(value) : value}
        </ContentTopic>
      )
    )
  };

  // function to render content based on Active tab
  const renderTabContent = () => {
    const contentFields = tabDataMapping[activeTab as keyof TabDataMapping];
    if (!plantsMoreInfo || !contentFields) return <div>No data available.</div>

    return contentFields.map(field => {
      // Dynamically access the data fields; handle arrays and object uniquely
      const fieldValue = plantsMoreInfo[field as keyof PlantInfo];
      
      if (Array.isArray(fieldValue)) {
        return renderArrayField({ field, fieldValue });
      } 
      else if (typeof fieldValue === 'object' && fieldValue !== null) {
        return renderObjectField({ field, fieldValue }); 
      }
      // conditional to render care guides only
      else if (field === "care_guides"){
        //console.log(`We got care guides : ${JSON.stringify(careGuidesData)}`);
        if (careGuidesData) {
          const entries: [string, string][] = Object.entries(careGuidesData);

          return (
            <>
              {entries.map(([key, value]) => (
                <ContentTopic key={`care-guide-${key}`}>
                  <strong>{formatTitles(key)}</strong> : {value}
                </ContentTopic>
              ))}
            </>
          )
        }
      }
      else {
        return renderSimpleField({ field, fieldValue });
      }
    });
  };


  return (
    <>
      <ContentWrapper>
        <TabList>
          {tabs.map((tab) => (
            <TabButton
              key={tab}
              $active={tab === activeTab}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </TabButton>
          ))}
        </TabList>

        <ContentArea>
          {renderTabContent()}
        </ContentArea>
      </ContentWrapper>
    </>
  )
}

export default ContentTabs;