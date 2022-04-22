import classes from './InitialPage.module.css';
import Button from "../../UI/Button";
import personImg from '../../../assets/img/person_tree.png';

const InitialPage = (props) => {

    const changeViewStateHandler = () => {
        props.showInitialPage(false);
        props.showForm(true);
    }
    
    return ( 
        <section className={classes['initial-page']}>
            <p className={classes['initial-page__info']}>Aplikacja "PIERWSZY MILION" pozwala na obliczenie zarobków na sekundę, minutę, godzinę oraz dzień.</p>
            <p className={classes['initial-page__info']}>Wskazuje również przybliżony czas potrzebny do zarobienia MILIONA.</p>
            <div className={classes['initial-page__lower-part']}>
                <img className={classes['initial-page__img']} src={personImg} alt=""/>
                <Button onClick={changeViewStateHandler}>Przejdź dalej</Button>
            </div>
        </section>
     );
}
 
export default InitialPage;