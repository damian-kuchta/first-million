import resultImg from '../../../assets/img/result-img.png';
import classes from './ResultControlPanel.module.css';
import Button from '../../UI/Button';
import html2canvas from "html2canvas";

const ResultControlPanel = (props) => {

  const appViewStateHandler = () => {
    props.showResult(false);
    props.showInitialPage(true);
  }

  const saveResultImg = (()=> {
    html2canvas(document.querySelector("body")).then(canvas => {
        if(window.navigator.msSaveBlob) {
            window.navigator.msSaveBlob(canvas.msToBlob(),"zarobki.png")
        }
        else {
            const a = document.createElement('a');
            document.body.appendChild(a);
            a.href = canvas.toDataURL();
            a.download = 'twoje_zarobki.png';
            a.click();
            document.body.removeChild(a);
        }
    });
});


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
        <Button onClick={saveResultImg} className={`${classes['result-controls__btn']} ${classes['result-controls__btn--black']}`} disabled={false}>Pobierz PNG</Button>
        <Button onClick={appViewStateHandler} className={`${classes['result-controls__btn']} ${classes['result-controls__btn--close']}`}>Zamknij!</Button>
      </div>
    </div>
  );
};

export default ResultControlPanel;
