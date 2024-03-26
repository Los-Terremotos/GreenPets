import axios from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetchCareGuides(responseObject: Record<string, any>) {
    console.log('LINE 5 IN FETCH CARE GUIDES')
    
  // loop through our response object
  for (const [key, value] of Object.entries(responseObject)) {
    console.log('KEY:', key)
    if (key === "care_guides") {
      try {
        const fetchCareGuide = await axios.get(value);
        // save response to state
        console.log(`Hello from line 13 inside fetchCareGuides`);
        console.log(`ReSpoNsE: ${JSON.stringify(fetchCareGuide)}`);
      } catch (error) {
        console.error(
          `Failed to fetch care guides. fetchCareGuides.tsx line 15`,
          error
        );
      }
    }
  }
}
  // conditional to check if current field property === "care_guides"
  // if it does, use an axios fetch request
  // await response from fetch question