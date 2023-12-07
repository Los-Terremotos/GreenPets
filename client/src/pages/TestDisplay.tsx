//import { useState, useEffect } from 'react';
//import axios from 'axios';
import styled from 'styled-components';

//const plantKey = "sk-4MQn656f96f3d272a3341";
//const v1 = "sk-uNmR656650b903d513175";
//const plantKey = process.env.PLANT_API;
//const plantId = 5;

const DisplayPage = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  height: auto;
  width: 100vh;
  border: solid;
  border-color: darkgreen;
  justify-content: center;
  align-items: center;
  
`

const DisplayHeader = styled.h1`
  color: whitesmoke;
  background-color: green;
  padding: 1rem;
  margin: 1rem;
`

const DisplayContainer = styled.div`
  box-sizing: border-box;
  border: 5px solid #BF4F74;
  border-radius: 5px;
  max-height: calc(40% - 20px);
  width: calc(100% - 20px);
  margin: 1rem;
`

const DataContent = styled.div`
  margin: 1rem;
  overflow: auto; /* or overflow: hidden; depending on your requirement */
  height: 100%;
  width: 100% /* Ensure it takes up the full width */
  margin: 1rem;
`
// &indoor=1

function TestDisplay () {
  //const [list, setList] = useState(null);
  //const [details, setDetails] = useState(null);

  // useEffect(() => {
  //   async function fetchData() {
  //       try {
  //           const response = await axios.get(`https://perenual.com/api/species-list?key=${plantKey}&watering=frequent&indoor=0`);
  //           setList(response.data);
  //       } catch (error) {
  //           console.error("Error fetching data:", error);
  //       }
  //   }
    
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   async function fetchData() {
  //       try {
  //           const response = await axios.get(`https://perenual.com/api/species/details/${plantId}?key=${plantKey}`);
  //           setDetails(response.data);
  //       } catch (error) {
  //           console.error("Error fetching data:", error);
  //       }
  //   }
    
  //   fetchData();
  // }, []);



  return (
    <>
      <DisplayPage>
        <DisplayHeader>
          P l a n t L i s t ~ D i s p l a y  F i e l d
        </DisplayHeader>
        <DisplayContainer>
          <DataContent>
            <h1>API Data ~ INSERT MOCK DATA BELOW</h1>
            {/* <pre>{JSON.stringify(list, null, 2)}</pre> */}
          </DataContent>
        </DisplayContainer>

        <br />
        <DisplayHeader>
          P l a n t D e t a i l s ~ D i s p l a y  F i e l d
        </DisplayHeader>
        <DisplayContainer>
          <DataContent>
            <h1>API Data ~ INSERT MOCK DATA BELOW</h1>
            {/* <pre>{JSON.stringify(details, null, 4)}</pre> */}
          </DataContent>
        </DisplayContainer>

      </DisplayPage>
    </>
  )
}

export default TestDisplay;

// display: flex;
  // justify-content: center;
  // align-items: center;