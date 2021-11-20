import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 30%;
  padding: 50px 0;
  border-radius: 10px;
`;
export const StyledInput = styled.input`
  height: 2rem;
  border-radius: 5px;
  padding: 8px;
  font-size: 1rem;
  min-width: 14.5rem;
  font-family: "Roboto", sans-serif;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.87);
  outline: none;
  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.87);
  }
  &:focus {
    border: 2px solid rgb(33, 150, 243);
  }
`;
export const StyledLabel = styled.label`
  background-color: #fff;
  position: absolute;
  top: -0.7rem;
  left: -0.2em;
  font-size: 1rem;
  transform: scale(0.75);
  font-family: "Roboto", sans-serif;
  color: #757575;
  z-index: 1;
  padding: 2px;
  ${StyledInput}:hover ~ & {
    color: rgba(0, 0, 0, 0.87);
  }
  ${StyledInput}:focus ~ & {
    color: rgb(33, 150, 243);
  }
`;

export const StyledFormField = styled.div`
  position: relative;
  margin: 20px 0;
  &:focus ${StyledLabel} {
    color: blue;
  }
`;

export const StyledErrorField = styled.p`
  color: red;
  max-width: 14.5rem;
`;
