import resultImg from '../../../assets/img/result-img.png';
import classes from './ResultControlPanel.module.css';
import Button from '../../UI/Button';

const ResultControlPanel = (props) => {

  const appViewStateHandler = () => {
    props.showResult(false);
    props.showInitialPage(true);
  }

  return (
    <div className={classes['result-controls']}>
      <div className={classes['result-controls__img-wrap']}>
        <img
        className={classes['result-controls__img']}
          src={resultImg}
          alt="Result - moneys"
        />
      </div>
      <div className={classes['result-controls__btn-wrap']} data-html2canvas-ignore>
        <Button className={`${classes['result-controls__btn']} ${classes['result-controls__btn--black']}`} disabled>Pobierz PNG</Button>
        <Button onClick={appViewStateHandler} className={`${classes['result-controls__btn']} ${classes['result-controls__btn--close']}`}>Zamknij!</Button>
      </div>
    </div>
  );
};

export default ResultControlPanel;
