import GitHubLink from './GitHubLink';
import classes from './Footer.module.css';

const Footer = (props) => {
  return (
    <footer className={classes.footer} data-html2canvas-ignore>
      <p className={classes['footer__author']} >created by Damian Kuchta</p>
      <GitHubLink/>
    </footer>
  );
};

export default Footer;
