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

const tabs = ["Overview", "Care Details", "Growth & Propagation", "Healthy & Safety", "Flower & Fauna"];

const ContentWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
`;

const TabList = styled.div`
  border: 2px solid royalblue;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  justify-content: space-around;
`;

const TabButton = styled.button<TabButtonProps>`
  border: 2px solid yellow;
  padding: 10px 30px;
  height: 100%;
  width: 100%; // fit-content
  cursor: pointer;
  opacity: 0.6;
  outline: none;
  background-color: #EEF0E5; // Default background
  font-size: 16px;
  transition: background-color 0.5s ease-in-out;

  ${({ $active }) =>
    $active &&
    `
      opacity: 1;
      background-color: #ddd
    `
  }
`;

const ContentArea = styled.div`
  padding: 10px 0;
  border: 2px solid orange;
  flex: 1;
  overflow: scroll;
`;

const ContentTopic = styled.div`
  border: 2px solid pink;
  width: fit-content;
  min-height: 20px;
  height: auto;
  margin: 10px 0;
  text-align: left;

`;

const ArrayData =  styled.div`
  border: 2px solid blue;
  width: fit-content;
  text-align: left;
  margin: 10px 0;
`;

const ContentTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const { data: plantsMoreInfo } = useSelector(selectDetailCardState);
  const careGuidesData = useSelector((state: RootState) => state.detailCard.careGuides);


  // function to render content based on Active tab
  const renderTabContent = () => {
    const contentFields = tabDataMapping[activeTab as keyof TabDataMapping];
    if (!plantsMoreInfo || !contentFields) return <div>No data available.</div>

    return contentFields.map(field => {
      // Dynamically access the data fields; handle arrays and object uniquely
      const fieldValue = plantsMoreInfo[field as keyof PlantInfo];

      if (Array.isArray(fieldValue)) {
        return <ArrayData key={field}>{formatTitles(field)}: {fieldValue.join(', ')}</ArrayData>;
      } 
      else if (typeof fieldValue === 'object' && fieldValue !== null) {

        return Object.entries(fieldValue).map(([key, value]) => 
          <ContentTopic key={`${field}-${key}`}>
            {formatTitles(key)}: {value}
          </ContentTopic>
        );
      }
      // conditional to render care guides only
      else if (field === "care_guides"){
        //console.log(`We got care guides : ${JSON.stringify(careGuidesData)}`);
        if (careGuidesData) {
          const entries: [string, string][] = Object.entries(careGuidesData);

          return (
            <>
              {entries.map(([key, value]) => (
                <ContentTopic key={key}>
                  {formatTitles(key)} : {value}
                </ContentTopic>
              ))}
            </>
          )
        }
      }

      return <ContentTopic key={field}>{formatTitles(field)}: {fieldValue}</ContentTopic>
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