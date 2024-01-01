//import React from 'react';
import styled from 'styled-components'
import mockDataList1 from '../mockData/plantListData';


  const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 4em;
  background: #FFE8D6;
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
color: #7E7E63;
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

  const GetResults = () => {
    const singlePlant = mockDataList1.data.slice(0,8);
  
  
    return (
      <>
        <h1>Results Page</h1>
        {/* <ul item is the card component */}
        
        <Wrapper>
          {singlePlant.map((plant, index) => (
            // <ol item is the name component
            <Card> 
            <><Name key={index}>{plant.common_name}</Name>
            <Image src={plant.default_image?.thumbnail} alt={plant.common_name} /></>
            </Card>
          ))}
        </Wrapper>

        
        {console.log(mockDataList1.data[0].default_image)}
      </>
    );
  }
  

export default GetResults


