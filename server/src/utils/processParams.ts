export function processParams(inputNumber: number, inputString: string) {
  const numToString: { [key: number]: string } = {
    1: "none",
    2: "minimum",
    3: "average",
    4: "frequent",
  };

  const wateringParam = numToString[inputNumber];

  let indoorParam;
  if (inputString === "indoor" || inputString === "Indoor") {
    indoorParam = 1;
  } else if (inputString === "outdoor" || inputString === "Outdoor") {
    indoorParam = 0;
  }
  return {
    wateringParam,
    indoorParam,
  };
}
