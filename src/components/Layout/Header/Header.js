import classes from './Header.module.css';
import HeaderLogoImg from './HeaderLogoImg';

const Header = (props) => {
  return (
    <header className={classes.header}>
    <HeaderLogoImg/>
    <a href="index.html" className={classes['header__link']}>
        <h1 className={classes['header__title']}>{props.appTitle}</h1>
    </a>
    <HeaderLogoImg/>
    </header>
  );
};

export default Header;
