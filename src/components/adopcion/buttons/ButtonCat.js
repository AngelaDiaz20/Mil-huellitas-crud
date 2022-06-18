//import Btn_gato from '../../../assets/adopcion/img/btongato.svg'
import '../../../css/adopcion/Buttoncat.css';
import { Link } from 'react-router-dom';

const Buttoncat=(props)=>{

    return(
        <div className="cat-bton">
            <Link to={props.link}>
                <button className="bton-cat"> {props.description}
                    <img src={props.image} alt="Imagen de botón"></img>
                </button>
            </Link>
        </div>
    );
}

export default Buttoncat;