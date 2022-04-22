import { useReducer, useState} from "react";

import classes from "./Form.module.css";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Select from "../UI/Select";
import FormImg from "./FormImg";
import selectValues from "./select-values/select-values";

const reducer = (state, action) => {
  switch (action.type) {
    case "setSalary":
      return { ...state, salary: +action.payload };
    case "setWorkingDays":
      return { ...state, workingDays: +action.payload };
    case "setWorkingHours":
      return { ...state, workingHours: +action.payload };
    default: {
      return state;
    }
  }
};

const Form = (props) => {
  const [formState, dispatch] = useReducer(reducer, {
    salary: 0,
    workingDays: 20,
    workingHours: 8,
  });
  const [submitIsHovered, setSubmitHover] = useState(false);

  const calculateResult = (formData) => {
    const perDay = +(formData.salary / formData.workingDays).toFixed(2);
    const perHour = +(perDay / formData.workingHours).toFixed(2);
    const perMinute = +(perHour / 60).toFixed(2);
    let perSecond = +(perMinute / 60).toFixed(2);

    if (perSecond < 0.01) {
      perSecond = "poniżej 1 grosza";
    }
    props.setResults({perDay, perHour, perMinute, perSecond})
  };

  const calculateDateToMillion = (salary) => {
    let daysToMillion = 0;
    const perNonWorkingDay = +(salary / 30).toFixed(2);
    const hasRest = 1000000 % perNonWorkingDay ? true : false;
    hasRest
      ? (daysToMillion = Math.floor(1000000 / perNonWorkingDay + 1))
      : (daysToMillion = 1000000 / perNonWorkingDay);

    const milliseconds = Date.now() + daysToMillion * 86400000;
    const dateToMillion = new Date(milliseconds).toLocaleDateString();
    props.setDateToMillion(dateToMillion);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    calculateResult(formState);
    calculateDateToMillion(formState.salary);
    props.showResult(true);
    props.showForm(false);
  };
  
  return (
    <section className={classes["user-data-wrap"]}>
      <form onSubmit={submitFormHandler} className={`${classes.form} ${classes.active}`}>
        <Input
          onBlur={dispatch}
          type="number"
          id="salary"
          required={true}
          min='1'
          max='1000000'
        />
        <Select
          onChange={dispatch}
          actionType="setWorkingDays"
          label="Dni robocze/miesiąc:"
          data={selectValues.workingDays}
          value="20"
          id="working-days"
        />
        <Select
          onChange={dispatch}
          actionType="setWorkingHours"
          label="Godziny robocze/dzień"
          data={selectValues.workingHours}
          value="8"
          id="working-hours"
        />
        <Button
          onMouseEnter={()=> {setSubmitHover(true)}}
          onMouseLeave={()=> {setSubmitHover(false)}}
          type="submit"
          className={classes["form__btn"]}
        >
          Oblicz!
        </Button>
        <FormImg formIsShown={props.formIsShown} submitIsHovered={submitIsHovered} />
      </form>
    </section>
  );
};

export default Form;
