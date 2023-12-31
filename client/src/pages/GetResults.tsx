//import React from 'react';
import styled from 'styled-components'
import mockDataList1 from '../mockData/plantListData';

  /* 
  We know data is an array that we'll need to iterate on 
  From that array we have an object with the following properties as keys:
  1. id
  2. common_name
  3.default_image
  
  
  */
  /* Inside our mockData is the ofllowing:
  1. data key with the value of an array
  2. In the array is an object for each plantListData */

  /* assign this to a dataArr and iterate through */

  // interface plantData {
  //   'common_name': string;
  // }

  const Card = styled.ul`
  font-size: 1.5em;
  border: 2px solid blue;
  padding-top: 40px;
  text-align: center;
  align-items: center;  
  `;

  const Name = styled.ol`
  border: 2px solid black;
  color: red;
  text-align: center;
  align-items: center;  
  `;


  const Image = styled.img`
  border-radius: 10px;

  `;

  const GetResults = () => {
    const singlePlant = mockDataList1.data.slice(0,4);
  
    return (
      <>
        <h1>Results Page</h1>
        {/* <ul item is the card component */}
        <Card> 
          {singlePlant.map((plant, index) => (
            // <ol item is the name component
            <><Name key={index}>{plant.common_name}</Name>
            <Image src={plant.default_image?.thumbnail} alt={plant.common_name} /></>
          ))}

        </Card>
        {console.log(mockDataList1.data[0].default_image)}
      </>
    );
  }
  

export default GetResults


