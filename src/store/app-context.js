import { createContext, useState } from "react";
import animalsAgeList from "./animalsAgeList";

const AppContext = createContext({
  animalIsChosen: false,
  chooseAnimal: () => {},
  goToStartPage: () => {},

  form: {
    animalType: "",
    animalName: "",
    animalAge: 0,
    monthIsActive: false,
    formIsSubmitted: false,

    setAge: () => {},
    setName: () => {},
    toggleMonthActive: () => {},
    setFormIsSubmitted: () => {},
  },

  result: 0,
  calculateResult: () => {},
});

export const AppContextProvider = (props) => {
  const [animalName, setAnimalName] = useState("");
  const [animalAge, setAnimalAge] = useState(0);
  const [monthIsActive, setMonthActive] = useState(false);
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  const [animalIsChosen, setAnimalIsChosen] = useState(false);
  const [animalType, setAnimalType] = useState("");
  const [result, setResult] = useState(0);

  const chooseAnimalHandler = (e, type) => {
    setAnimalType(e.target.dataset.animal);
    setAnimalType(type);
    setAnimalIsChosen(true);
  };

  const goToStartPageHandler = () => {
    setAnimalIsChosen(false);
    setFormIsSubmitted(false);
    setMonthActive(false);
  };

  const setNameHandler = (e) => {
    if(e.target.value.trim().length === 0) {
      e.target.value = '';
      return;
    }
    setAnimalName(e.target.value);
  };

  const setAgeHandler = (e) => {
    
    setAnimalAge(e.target.value);
  };

  const toggleMonthActiveHandler = (e) => {
    setMonthActive((monthActive) => !monthActive);
  };

  const calculateResultHandler = (e, type) => {
    e.preventDefault();

    let result = 0;

    if (!monthIsActive) {
      if (animalAge > 20) {
        result = `${animalName} jest nieśmiertelny/a!`;
      } else {
        result = `${animalName} ma ${animalsAgeList[type].years[animalAge]}`;
      }
    } else {
      result = `${animalName} ma ${animalsAgeList[type].months[animalAge]}`;
    }

    setResult(result);
    setFormIsSubmitted(true);
  };

  return (
    <AppContext.Provider
      value={{
        animalIsChosen: animalIsChosen,
        chooseAnimal: chooseAnimalHandler,
        goToStartPage: goToStartPageHandler,

        form: {
          animalType: animalType,
          animalName: animalName,
          animalAge: animalAge,
          monthIsActive: monthIsActive,
          formIsSubmitted: formIsSubmitted,

          setAge: setAgeHandler,
          setName: setNameHandler,
          toggleMonthActive: toggleMonthActiveHandler,
          setFormIsSubmitted: setFormIsSubmitted,
        },

        result: result,
        calculateResult: calculateResultHandler,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
