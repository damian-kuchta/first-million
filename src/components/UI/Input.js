import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes["input-wrap"]}>
      <label className={classes.label} htmlFor={props.id}>
        Pensja:
      </label>
      <input
        onBlur={(e) =>
          props.onBlur({ type: "setSalary", payload: e.target.value })
        }
        required={props.required}
        className={classes.input}
        type={props.type}
        id={props.id}
        min={props.min}
        max={props.max}
      ></input>
    </div>
  );
};

export default Input;
