import classes from './Button.module.css'

const Button = (props) => {
    return ( 
        <button onClick={props.onClick} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} type={props.type} disabled={props.disabled} className={props.className? `${classes.btn} ${props.className}` : classes.btn}>{props.children}</button>
     );
}
 
export default Button;