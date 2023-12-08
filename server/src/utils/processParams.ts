function processParams(inputNumber: number, inputString: string) {
  // Mapping for inputNumber to corresponding string
  const numToString: { [key: number]: string } = {
    1: "none",
    2: "minimum",
    3: "average",
    4: "frequent",
  };

  // Convert inputNumber to wateringParam
  const wateringParam = numToString[inputNumber];
  if (!wateringParam) {
    console.error(`Invalid inputNumber: ${inputNumber}`);
  }

  // Convert inputString to indoorParam
  let indoorParam;
  if (inputString.toLowerCase() === "indoor") {
    indoorParam = 1;
  } else if (inputString.toLowerCase() === "outdoor") {
    indoorParam = 0;
  } else {
    console.error(`Invalid inputString: ${inputString}`);
    indoorParam = null; // or some default value
  }

  return { wateringParam, indoorParam };
}

export default processParams;