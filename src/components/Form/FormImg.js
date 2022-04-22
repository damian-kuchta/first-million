import classes from './FormImg.module.css';
import formImg from '../../assets/img/person_clock.png'

const FormImg = (props) => {
  let animationClass = classes.active;

  if(props.submitIsHovered) {
    animationClass =`${classes.active} ${classes['submit-hover']}`;
  }
  
  return (
    <aside className={`${props.formIsShown ? animationClass : null}`}>
      <img
        className={classes['form-img']}
        src={formImg}
        alt="Person on clock"
      />
    </aside>
  );
};

export default FormImg;
