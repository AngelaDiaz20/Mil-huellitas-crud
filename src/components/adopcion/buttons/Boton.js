import '../../../css/adopcion/boton.css';

function Boton(props) {
    return(
    <section className='botonc'>

        <div className='btn-container'>
            <a className="la_a" href={props.link}>
                <button className='btn_pago'> {props.description} </button>
                <i class="fa-solid fa-paper-plane"></i>
            </a>
        </div>
   
    </section>
    );
}

export default Boton;