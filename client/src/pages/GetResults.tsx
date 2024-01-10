/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useState } from 'react'
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components'
import mockDataList1 from '../mockData/plantListData';


  const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 4em;
  background: #404337;
  border-radius: 10px;
  max-width: 100%;
`;
const Name = styled.ol`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
background: white;
border-radius: 4px;
width: auto;
text-wrap: wrap;
min-height: 50px;
color: #75472F;
box-shadow: 1px 1px 4px black;
`;
  const Card = styled.ul`
  text-align: center;
  width: 15%;
  background: #A5A58D;
  font-size: 1.2em;
  padding: 40px; 
  border-radius: 10px;
  margin: 10px;
  box-shadow: 5px 5px 10px black;
  `;
  const Image = styled.img`
  border-radius: 10px;
  margin-top: 10px;
  box-shadow: 1px 1px 4px black;

  `;
  const Item = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: whitesmoke;
  width: auto;
  text-wrap: wrap;
  min-height: 50px;
  color: #7E7E63;
  `;
  const ViewMoreBtn = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: #75472F;
  color: white;
  &:hover {
    background-color: #CB9B7C;
    cursor: pointer;
    color: white;
  }
  `;

  const GET_INFO = gql`
query PlantsBasicInfo($inputNumber: Int!, $inputString: String!) {
  plantsBasicInfo(inputNumber: $inputNumber, inputString: $inputString) {
    id
    common_name
    watering
    default_image {
      thumbnail
    }
  }
}
`;



  const GetResults = () => {
    const { loading, error, data } = useQuery(GET_INFO, {
      variables: {
        inputNumber: 3, 
        inputString: "outdoor",
      },
    });

    if(loading) return `Loading...`;
    if(error) return `Error! ${error.message}`;
    
    console.log("GraphQL Data:", data);


  
    // const singlePlant = mockDataList1.data.slice(0,8);
    // const [expandIndex, setExpandIndex] = useState(-1);

    // const viewMoreBtn = (index: number) => {
    //   //setExpandIndex((prevIndex) => (prevIndex === index ? -1 : index));
    // };
  
    return (
      <>
        <h1>Results Page</h1>
        {data.plantsBasicInfo ? (
          <Wrapper>
            {data.plantsBasicInfo.map((plant, index) => (
              <Card key={index}>
                <>
                  <Name>{plant.common_name}</Name>
                  <Image src={plant.default_image?.thumbnail} alt={plant.common_name} />
                </>
              </Card>
            ))}
          </Wrapper>
        ) : (
          <p>No data available</p>
        )}
      </>
    );


  }
 
export default GetResults


/*
<Wrapper>
{singlePlant.map((plant, index) => (
  <Card key={index}>
    <>
      <Name>{plant.common_name}</Name>
      <Image src={plant.default_image?.thumbnail} alt={plant.common_name} />
  
      {expandIndex === index && (
        <>
          <Item>Watering: {plant.watering}</Item>
          <Item>Sunlight: {plant.sunlight}</Item>
          <Item>Scientfic name: {plant.scientific_name}</Item>
          <Item>Cycle: {plant.cycle}</Item>
          
        </>
      )}
      <ViewMoreBtn onClick={() => viewMoreBtn(index)}>More info</ViewMoreBtn>
    </>
  </Card>
))}
</Wrapper>
*/
