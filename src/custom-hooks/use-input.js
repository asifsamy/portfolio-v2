import { useState } from "react";

const useInput = (validationLogic) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  //   const [valueIsValid, setValueIsValid] = useState(false);
  //   useEffect(() => {
  //     const identifier = setTimeout(() => {
  //       console.log("Checking Form Validation!");
  //       setValueIsValid(validationLogic(enteredValue));
  //     }, 500);

  //     return () => {
  //       console.log("CLEANUP");
  //       clearTimeout(identifier);
  //     };
  //   }, [enteredValue, validationLogic]);

  const valueIsValid = validationLogic(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
