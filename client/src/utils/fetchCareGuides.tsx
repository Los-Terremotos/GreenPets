import axios from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetchCareGuides(responseObject: Record<string, any>) {
    
  // loop through our response object
  for (const [key, value] of Object.entries(responseObject)) {
    console.log('KEY:', key)
    if (key === "care_guides") {
      try {
        console.log(`inside where key === care_guides. This is value: ${value}`);
        const careGuideResponse = await axios.get(value);
        // save response to state
        console.log(`careGuideResponse: ${careGuideResponse}`);
      } catch (error) {
        console.error(
          `Failed to fetch care guides. fetchCareGuides.tsx line 15`,
          error
        );
      }
    }
  }
}
