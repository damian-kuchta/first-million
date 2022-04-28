import classes from './GitHubLink.module.css';
import gitHubImg from '../../../assets/img/GitHub-Mark.png';

const GitHubLink = (props) => {
  return (
    <a className={classes['github-link']} href="https://github.com/damian-kuchta/">
      <img
        className={classes['github-logo']}
        src={gitHubImg}
        alt="GitHub logo"
      />
    </a>
  );
};

export default GitHubLink;
