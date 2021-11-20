import { useContext } from "react";
import RootContext from "../context/context";
import {
  StyledInput,
  StyledLabel,
  StyledFormField,
  StyledErrorField,
} from "./FormStyles";

const PizzaSubForm = () => {
  const context = useContext(RootContext);

  const {
    diameter,
    handlePizzaDiameterChange,
    pizzaSlices,
    handleNoOfPizzaSlicesChange,
    validateNoOfPizzaSlices,
    isPizzaSlicessTouched,
    validatePizzaDiamteter,
    isPizzaDiamteterTouched,
  } = context;
  const isPizzaSlicesValid = !validateNoOfPizzaSlices && isPizzaSlicessTouched;
  const isPizzaDiameterValid =
    !validatePizzaDiamteter && isPizzaDiamteterTouched;
  return (
    <>
      <StyledFormField>
        <StyledInput
          type="number"
          step="1"
          min="1"
          name="no_of_slices"
          id="no_of_slices"
          value={pizzaSlices ? pizzaSlices : ""}
          onChange={handleNoOfPizzaSlicesChange}
        />
        <StyledLabel htmlFor="no_of_slices">Amount of pizza slices</StyledLabel>
        {isPizzaSlicesValid && (
          <StyledErrorField>This field is required.</StyledErrorField>
        )}
      </StyledFormField>
      <StyledFormField>
        <StyledInput
          type="number"
          step="0.1"
          min="0"
          id="diameter"
          name="diameter"
          value={diameter ? diameter : ""}
          onChange={handlePizzaDiameterChange}
        />
        <StyledLabel htmlFor="diameter">Diameter of pizza</StyledLabel>
        {isPizzaDiameterValid && (
          <StyledErrorField>This field is required.</StyledErrorField>
        )}
      </StyledFormField>
    </>
  );
};
export default PizzaSubForm;
