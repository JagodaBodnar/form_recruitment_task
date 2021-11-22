import { useContext } from "react";
import RootContext from "../context/context";
import {
  StyledInput,
  StyledLabel,
  StyledFormField,
  StyledErrorField,
} from "./FormStyles";

const SandwichSubForm = () => {
  const context = useContext(RootContext);

  const {
    breadSlices,
    handleNoOfBreadChange,
    isBreadTouched,
    validateBreadSlices,
  } = context;
  const isBreadValid = !validateBreadSlices && isBreadTouched;
  return (
    <>
      <StyledFormField>
        <StyledInput
          type="number"
          step="1"
          min="1"
          value={breadSlices}
          onChange={handleNoOfBreadChange}
        />
        <StyledLabel htmlFor="no_of_slices">Amount of bread slices</StyledLabel>
        {isBreadValid && (
          <StyledErrorField>This field is required.</StyledErrorField>
        )}
      </StyledFormField>
    </>
  );
};
export default SandwichSubForm;
