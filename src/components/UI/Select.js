import classes from "./Select.module.css";

const Select = (props) => {

  const optionList = props.data.map((el, key) => {
    return (
      <option key={`${props.id}_${key}`} value={el}>
        {el}
      </option>
    );
  });

  return (
    <div className={classes["select-wrap"]}>
      <label htmlFor={props.id}>{props.label}</label>
      <select
        onChange={(e)=>props.onChange({type: props.actionType, payload: e.target.value})}
        defaultValue={props.value}
        className={classes.select}
        name=""
        id={props.id}
      >
        {optionList}
      </select>
    </div>
  );
};

export default Select;
