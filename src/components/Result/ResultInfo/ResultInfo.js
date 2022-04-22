import { useEffect, useState } from "react";
import classes from "./ResultInfo.module.css";

const ResultInfo = (props) => {
  const [itemsAreAnimated, animateItems] = useState(false);

  useEffect(() => {
    animateItems(true);
  }, []);

  return (
    <div className={classes["result-info"]}>
      <p className={classes["result-info__list-title"]}>Zarabiasz:</p>
      <ul className={classes["result-info__list"]}>
        <li
          className={`${classes["result-info__list-item"]} ${
            classes["result-info__list-item--1"]
          }
          ${itemsAreAnimated && classes["active"]}`}
        >
          - <span>{props.results.perDay} </span>
          zł. na dzień.
        </li>
        <li
          className={`${classes["result-info__list-item"]} ${
            classes["result-info__list-item--2"]
          } 
            ${itemsAreAnimated && classes["active"]}`}
        >
          - <span>{props.results.perHour} </span>
          zł. na godzinę.
        </li>
        <li
          className={`${classes["result-info__list-item"]} ${
            classes["result-info__list-item--3"]
          } ${itemsAreAnimated && classes["active"]} `}
        >
          - <span>{props.results.perMinute} </span>
          zł. na minutę.
        </li>
        <li
          className={`${classes["result-info__list-item"]} ${
            classes["result-info__list-item--4"]
          } ${itemsAreAnimated && classes["active"]}`}
        >
          - <span>{props.results.perSecond} </span>zł. na sekundę.
        </li>
      </ul>
      <p
        className={`${classes["result-info__first-million"]} ${
          classes["result-info__list-item--4"]
        } ${itemsAreAnimated && classes["active"]}`}
      >
        Swój pierwszy milion zarobisz <span>{props.dateToMillion}</span> r.
      </p>
    </div>
  );
};

export default ResultInfo;
