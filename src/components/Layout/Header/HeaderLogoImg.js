import classes from './HeaderLogoImg.module.css';
import logoImg from '../../../assets/img/money_clock.png';
const HeaderLogoImg = (props) => {
    return ( 
    <img
        className={classes.logo}
        src={logoImg}
        alt="logo-clock"
      ></img> );
}
 
export default HeaderLogoImg;