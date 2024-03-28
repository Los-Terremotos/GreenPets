//import axios from "axios";

interface CareGuideProps {
  type: string;
  description: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetchCareGuides(responseObject: Record<string, any>) {
  let updatedCareGuide: Record<string, string> = {}

  // loop through our response object
  for (const [key, value] of Object.entries(responseObject)) {
    //console.log('KEY:', key)
    if (key === "care_guides") {
      try {
        //console.log(`inside where key === care_guides. This is value: ${value}`);
        const careGuideUrl = value;

        const response = await fetch('http://localhost:4000/api/fetch-care-guide', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ careGuideUrl }),
        });

        const data = await response.json();
        //console.log(`care Guide request Response: ${JSON.stringify(data)}`);

        const createCareGuide = (arr: CareGuideProps[]) => {
          const result: Record<string, string> = {};
        
          for (let i = 0; i < arr.length; i++) {
            const type = arr[i].type;
            const description = arr[i].description;
        
            result[type] = description;
          }
          return result;
        };

        updatedCareGuide = createCareGuide(data["data"][0]["section"]);

        console.log(`Final CHECK for updatedCareGuide: ${JSON.stringify(updatedCareGuide)}`);
        
      } catch (error) {
        console.error(
          `Failed to fetch care guides. Inside fetchCareGuides.tsx: `,
          error
        );
      }
    }
  }
  return updatedCareGuide;
}
