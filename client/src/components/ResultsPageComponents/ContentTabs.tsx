import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectDetailCardState } from '../../Features/DetailsCard/cardSlice';
import { TabDataMapping } from '../../../types';


const tabs = ["Overview", "Care Details", "Growth & Propagation", "Healthy & Safety", "Environmental Preferences", "Flower & Fauna", "Additional Resources"];

const tabDataMapping: TabDataMapping = {
  "Overview": ["scientific_name", "type", "origin", "description", "maintenance_level", "default_image"],
  "Care Details": ["watering", "sunlight", "soil", "pruning"],
  "Growth & Propagation": ["growth_rate", "dimension", "propagation", "hardiness"],
  "Healthy & Safety": ["pest_susceptibility", "drought_tolerance", "salt_tolerance", "thorny", "poisonous_to_humans", "poisonous_to_pets"],
  "Environmental Preferences": ["indoor", "drought_tolerance", "salt_tolerance", "temperature_ranges"],
  "Flora & Fauna": ["flowers", "fruit", "leaf", "attracts"],
  "Additional Resources": ["care_guides", "hardiness_map", "medicinal_uses"]
};

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

const TabButton = styled.button`
  border: 2px solid yellow;
  padding: 10px 30px;
  height: 100%;
  width: 100%; // fit-content
  cursor: pointer;
  opacity: 0.6;
  outline: none;
  background-color: #EEF0E5; // Default background
  font-size: 16px;

  ${({ active }) =>
    active &&
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
  
`;


const ContentTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const { data: plantsMoreInfo } = useSelector(selectDetailCardState);

  // function to render content based on Active tab
  const renderTabContent = () => {
    const contentFields = tabDataMapping[activeTab];
    if (!plantsMoreInfo || !contentFields) return <div>No data available.</div>

    return contentFields.map(field => {
      // Dynamically access the data fields; handle arrays and object uniquely
      const fieldValue = plantsMoreInfo[field];

      if (Array.isArray(fieldValue)) {
        return <div key={field}>{field}: {fieldValue.join(', ')}</div>;
      } else if (typeof fieldView === 'object' && fieldValue !== null) {
        // handling objects lime 'dimension', 'default_image', etc.
        return Object.entries(fieldValue).map(([key, value]) => 
          <div key={`${field}-${key}`}>
            {key}: {value}
          </div>
        );
      }
      return <div key={field}>{field}: {fieldValue}</div>
    });
  };

  return (
    <>
      <ContentWrapper>
        <TabList>
          {tabs.map((tab, index) => (
            <TabButton
              key={index}
              active={tab === activeTab}
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