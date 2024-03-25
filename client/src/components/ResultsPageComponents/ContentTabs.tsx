import React, { useState } from 'react';
import styled from 'styled-components';

const tabs = ["Overview", "Care Details", "Growth & Propagation", "Healthy & Safety", "Environmental Preferences", "Flower & Fauna", "Additional Resources"];

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
          
        </ContentArea>
      </ContentWrapper>
    </>
  )
}

export default ContentTabs;