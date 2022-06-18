import Banner_primary from '../../../assets/adopcion/img/slide/banner1.png';
import Banner_secondary from '../../../assets/adopcion/img/slide/banner2.svg';
import Banner_tertiary from '../../../assets/adopcion/img/slide/banner3.png';
import Banner_quaternary from '../../../assets/adopcion/img/slide/banner5.png';
import '../../../css/adopcion/Slide.css'

function Slides(){
 return(
    /*Características del componente*/
    <section className='banner'>
            <ul>
                <li><img src={Banner_primary} alt="Imagen del banner 1"/></li>
                <li><img src={Banner_secondary} alt="Imagen del banner 2"/></li>
                <li><img src={Banner_tertiary} alt="Imagen del banner 3"/></li>
                <li><img src={Banner_quaternary} alt="Imagen del banner 4"/></li>
            </ul>
    </section>
 );
}

export default Slides;