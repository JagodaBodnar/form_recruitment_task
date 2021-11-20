import Form from "./components/Form";
import { useEffect, useState } from "react";
import { StyledAppContainer } from "./AppStyles";
import RootContext from "./context/context";
import moment from "moment";

const App = () => {
  const [type, setType] = useState("pizza");
  const [name, setName] = useState();
  const [value, setValue] = useState(new Date());
  const [time, setTime] = useState();
  const [pizzaSlices, setPizzaSlices] = useState();
  const [diameter, setDiameter] = useState();
  const [spiciness, setSpiciness] = useState();
  const [breadSlices, setBreadSlices] = useState();
  const [validateName, setValidateName] = useState(false);
  const [isNameTouched, setIsNameTouched] = useState(false);
  const [validateNoOfPizzaSlices, setValidateOfPizzaSlices] = useState(false);
  const [isPizzaSlicessTouched, setIsPizzaSlicesTouched] = useState(false);
  const [validatePizzaDiamteter, setValidatePizzaDiamteter] = useState(false);
  const [isPizzaDiamteterTouched, setIsPizzaDiamteterouched] = useState(false);
  const [validateBreadSlices, setValidateBreadSlices] = useState(false);
  const [isBreadTouched, setIsBreadTouched] = useState(false);

  useEffect(() => {
    handlePreparationTimeChange();
  }, [value]);
  useEffect(() => {
    validate();
  }, [name, pizzaSlices, diameter, breadSlices]);

  const handlePreparationTimeChange = (newValue) => {
    const transform = moment(value).format("HH:mm:ss");
    setTime(transform);
    setValue(newValue);
  };
  const handleTypeChange = (event) => {
    console.log(type);
    setType(event.target.value);
  };
  const handleNameChange = (event) => {
    console.log(name);
    setName(event.target.value);
  };

  const handleNoOfPizzaSlicesChange = (event) => {
    setPizzaSlices(Number(event.target.value));
  };

  const handlePizzaDiameterChange = (event) => {
    setDiameter(Number(event.target.value));
  };
  const handleSpicinessChange = (event) => {
    console.log(spiciness);
    setSpiciness(Number(event.target.value));
  };
  const handleNoOfBreadChange = (event) => {
    setBreadSlices(Number(event.target.value));
  };

  async function postData(formVals) {
    fetch("https://frosty-wood-6558.getsandbox.com:443/dishes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formVals),
    })
      .then((response) => response.json())
      .then(
        (data) =>
          (document.getElementById("response").innerText = JSON.stringify(data))
      );
  }
  const isEmpty = (value) => `${value}`.length === 0 || value === undefined;
  const isNotFiveChars = (value) => `${value}`.length !== 5;
  const validate = () => {
    const enteredNameisValid = !isEmpty(name) && !isNotFiveChars(name);
    setValidateName(enteredNameisValid);
    const enteredPizzaSlicesValid = !isEmpty(pizzaSlices);
    setValidateOfPizzaSlices(enteredPizzaSlicesValid);
    const enteredPizzaDiamteter = !isEmpty(diameter);
    setValidatePizzaDiamteter(enteredPizzaDiamteter);
    const enteredBreadSlicesValid = !isEmpty(breadSlices);
    setValidateBreadSlices(enteredBreadSlicesValid);
  };

  const submit = async (event) => {
    event.preventDefault();
    validate();
    setIsNameTouched(true);
    setIsPizzaSlicesTouched(true);
    setIsPizzaDiamteterouched(true);
    setIsBreadTouched(true);

    const formIsValid =
      validateName && validateNoOfPizzaSlices && validatePizzaDiamteter;
    if (formIsValid) {
      switch (type) {
        case "soup": {
          return postData({
            name: name,
            preparation_time: time,
            type: type,
            spiciness_scale: spiciness,
          });
        }
        case "sandwich": {
          return postData({
            name: name,
            preparation_time: time,
            type: type,
            slices_of_bread: breadSlices,
          });
        }
        default:
          return postData({
            name: name,
            preparation_time: time,
            type: type,
            diameter: diameter,
            no_of_slices: pizzaSlices,
          });
      }
    }
  };

  return (
    <RootContext.Provider
      value={{
        type,
        name,
        pizzaSlices,
        breadSlices,
        spiciness,
        diameter,
        value,
        handlePreparationTimeChange,
        submit,
        handleNameChange,
        handleNoOfBreadChange,
        handleNoOfPizzaSlicesChange,
        handlePizzaDiameterChange,
        handleSpicinessChange,
        handleTypeChange,
        validateName,
        isNameTouched,
        validateNoOfPizzaSlices,
        isPizzaSlicessTouched,
        isPizzaDiamteterTouched,
        validatePizzaDiamteter,
        isPizzaDiamteterTouched,
        validatePizzaDiamteter,
        validateBreadSlices,
        isBreadTouched,
      }}
    >
      <StyledAppContainer>
        <Form />
      </StyledAppContainer>
    </RootContext.Provider>
  );
};

export default App;
