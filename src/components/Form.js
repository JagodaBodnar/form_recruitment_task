import { useContext } from "react";
import PizzaSubForm from "./PizzaSubForm";
import SandwichSubForm from "./SandwichSubForm";
import SoupSubForm from "./SoupSubForm";
import RootContext from "../context/context";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledFormField,
  StyledErrorField,
} from "./FormStyles";

const Form = () => {
  const context = useContext(RootContext);
  const {
    name,
    handleNameChange,
    type,
    handleTypeChange,
    submit,
    value,
    handlePreparationTimeChange,
    validateName,
    isNameTouched,
  } = context;
  const validName = !validateName && isNameTouched;
  return (
    <>
      <StyledForm onSubmit={submit}>
        <StyledFormField>
          <StyledInput
            name="name"
            id="name"
            value={name ? name : ""}
            onChange={handleNameChange}
          />
          <StyledLabel htmlFor="name">Dish name</StyledLabel>
          {validName && (
            <StyledErrorField>
              This field is required and must have at least 5 characters.
            </StyledErrorField>
          )}
        </StyledFormField>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <TimePicker
              sx={{ minWidth: 250 }}
              ampm={false}
              openTo="hours"
              views={["hours", "minutes", "seconds"]}
              inputFormat="HH:mm:ss"
              mask="__:__:__"
              label="Preparation time"
              value={value}
              onChange={(newValue) => {
                handlePreparationTimeChange(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>
        <FormControl sx={{ mt: 3, mb: 3, minWidth: 250 }}>
          <InputLabel id="demo-simple-select-helper-label">Dish</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={type}
            name="type"
            onChange={handleTypeChange}
            label="Dish"
          >
            <MenuItem value="pizza">Pizza</MenuItem>
            <MenuItem value="soup">Soup</MenuItem>
            <MenuItem value="sandwich">Sandwich</MenuItem>
          </Select>
        </FormControl>
        {type === "pizza" ? (
          <PizzaSubForm />
        ) : type === "soup" ? (
          <SoupSubForm />
        ) : (
          <SandwichSubForm />
        )}
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </StyledForm>
      <div id="response"></div>
    </>
  );
};

export default Form;
