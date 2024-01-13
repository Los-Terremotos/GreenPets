import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useQuery, gql } from '@apollo/client';
import { useParams } from "react-router-dom";
import QueryResult from '../components/query-result';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../App/store';
import { updateTestBoolean, updateTestBGColor } from '../Features/playTime/playTestSlice';

const plantKey = "sk-4MQn656f96f3d272a3341";
//const v1 = "sk-uNmR656650b903d513175";
//const plantKey = process.env.PLANT_API;
const plantId = 5;


const TESTQUERY = gql`
  query Query($inputNumber: Int!, $inputString: String!) {
  plantsBasicInfo(inputNumber: $inputNumber, inputString: $inputString) {
    id
    common_name
    watering
    default_image {
      thumbnail
    }
  }
}
`

const ColorBox = styled.div`
  box-sizing: border-box;
  border: 5px solid black;
  width: 75%;
  height: 500px;
  background-color: ${(props) => props.color};
  margin: 10px;
`


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
  border: 5px solid red;
  border-radius: 5px;
  max-height: calc(40% - 20px);
  width: calc(100% - 20px);
  margin: 1rem;
`

const DisplayContainer2 = styled.div`
  box-sizing: border-box;
  border: 5px solid pink;
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

function TestDisplay() {
  const dispatch = useDispatch();

  const testDisplayState = useSelector((state : RootState) => state.testField.testBoolean);
  console.log("render");

  const testBGColor = useSelector((state : RootState) => state.testField.testBGColor);

  const updateBtn = () => {
    console.log(`Clicking button in updateBtn`);

    dispatch(updateTestBoolean());
  }


  const handleColorUpdate = () => {
    console.log(`Color change`);

    dispatch(updateTestBGColor());
  } 

  // const [list, setList] = useState(null);
  // const [details, setDetails] = useState(null);

  // useEffect(() => {
  //   async function fetchData() {
  //       try {
  //           const response = await axios.get(`https://perenual.com/api/species-list?key=${plantKey}&watering=average&indoor=1`);
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

  
  // const GET_PLANTS_BASIC_INFO = gql `
  //   query GetPlantsBasicInfo($inputNumber: Int!, $inputString: String!) {
  //     plantList() { 
  //       id
  //       common_name
  //       watering
  //       default_image {
  //         thumbnail
  //       }
  //     }
  //   }
  // `;


const TESTQUERY = gql`
  query Query($inputNumber: Int!, $inputString: String!) {
  plantsBasicInfo(inputNumber: $inputNumber, inputString: $inputString) {
    id
    common_name
    watering
    default_image {
      thumbnail
    }
  }
}
`

  // these are coming from Cristian's page-- not useParams, but idk where that is rn
  // const { inputNumber } = useParams();
  // const { inputString } = useParams();
  // const inputNumber = 2;
  // const inputString = "indoor";

  // const { loading, error, data } = useQuery(TESTQUERY, {
  //   variables: { inputNumber, inputString }
  // });


  return (
    <>
      <DisplayPage>
        <DisplayHeader>
          R E D U X ~ T K
        </DisplayHeader>
        <DisplayContainer2>
          <p> BEFORE: Checking current state of button: {String(testDisplayState)}</p>
          <button onClick={updateBtn}>Change Boolean state</button>
          <p> AFTER: Checking current state of button: {String(testDisplayState)}</p>

          <br/>
          <br/>
          <ColorBox color={testBGColor}/>
          <button onClick={handleColorUpdate}>Change color</button>
        </DisplayContainer2>

        {/* <DisplayHeader>
          GraphQL ~ D i s p l a y  F i e l d
        </DisplayHeader>
        <DisplayContainer>
          <DataContent>
            <h1>See GraphQL Query Responses Here:</h1>
            <QueryResult error={error} loading={loading} data={data}>
              {data && data.plantsBasicInfo && data.plantsBasicInfo[0] && (
                <div>
                  {data.plantsBasicInfo[0].id}
                  <br />
                  {data.plantsBasicInfo[0].common_name}
                  <br />
                  {data.plantsBasicInfo[0].watering}
                  <br />
                  <img src={data.plantsBasicInfo[0].default_image.thumbnail}/>
                  <br />
                  {console.log(`Inside of QuErYReSULT: data, ${JSON.stringify(data)}`)}
                </div>
              )}
            </QueryResult>
          </DataContent>
        </DisplayContainer> */}

        <br />

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