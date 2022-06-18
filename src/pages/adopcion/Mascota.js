import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

import { getPet } from "../../js/adopcion/pets";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import '../../css/adopcion/Mascota.css';
import Huella from '../../assets/adopcion/img/huella.svg';
import Buttoncat from "../../components/adopcion/buttons/ButtonCat";
import Boton from "../../components/adopcion/buttons/Boton";
import BtnGato  from "../../assets/adopcion/img/btongato.svg";
import BtnPerro from "../../assets/adopcion/img/dog-bton.svg";
import BtnDog from "../../assets/adopcion/img/Perro.png";
import BtnCat from "../../assets/adopcion/img/Gato.png";

function Mascota(){
    const params = useParams();
    const pet=getPet(parseInt(params.id));

    let hideInformation = document.getElementById('hideInformation');
    //let hideInformation_cares = document.getElementById('hideInformation_cares');
    let link;

    function toggleText(e){
    e.preventDefault();
    hideInformation.classList.toggle('show');

    if(hideInformation.classList.contains('show')){
      link.innerHTML = `<i class="fa-solid fa-minus"></i>`;
    }
    else{
      link.innerHTML = `<i class="fa-solid fa-plus"></i>`;
    }
} 

    return(
        <>

        <Header />

        <div id="adoption-kirara">
            <main id="peludito">
                <h1>{pet.name}</h1>

                <div class="container-pet">

                    <section id="pet">

                        <article class="img-pet">   
                            {pet.image}
                        </article>

                        <article class="pet-resumen">
                            <br/><br/>
                            <input type="radio" name="filtro" id="description" checked/>
                            <label class="label-description" for="description">Descripción</label>

                            <input type="radio" name="filtro" id="history"/>
                            <label class="label-history" for="history">Historia</label>

                            <div class="info-mascota">
                                <ul class="folder-pet">
                                    <li><strong>Animal:</strong>&nbsp;{pet.category}</li>
                                    <li><strong>Edad:</strong>&nbsp;{pet.age}</li>
                                    <li><strong>Sexo:</strong>&nbsp;{pet.gender}</li>
                                    <li><strong>Tamaño:</strong>&nbsp;{pet.size}</li>
                                    <li><strong>Esterilización/castración</strong>&nbsp;{pet.sterilization}</li>
                                    <li><strong>Desparasitado:</strong>&nbsp;{pet.deworming}</li>
                                    <li><strong>Color:</strong>&nbsp;{pet.color}</li>
                                    <li><strong>Dentadura:</strong>&nbsp;{pet.teeth}</li>
                                    <li><strong>Ojos:</strong>&nbsp;{pet.eyes}</li>
                                    <li><strong>Peso apróximado:</strong>&nbsp;{pet.weight}</li>
                                    <li><strong>Observaciones:</strong>&nbsp;{pet.observations}</li>
                                </ul>
                            </div>

                        <div class="history-pet">
                            <div class="folder-pet">
                                <p>{pet.history}</p>
                            </div>
                        </div></article> </section>

                        <div class="slider-galery-pet">

                            <div class="container">
                                <input type="radio" name="slider" id="item-1" checked/>
                                <input type="radio" name="slider" id="item-2"/>
                                <input type="radio" name="slider" id="item-3"/>
                    
                                <div class="cards">
                                    <label class="card" for="item-1" id="selector-1">
                                        <img src={pet.photo1} alt="Galería de imagenes de la mascota"/>
                                    </label>
                                    <label class="card" for="item-2" id="selector-2">
                                        <img src={pet.photo2} alt="Galería de imagenes de la mascota"/>
                                    </label>
                                    <label class="card" for="item-3" id="selector-3">
                                        <img src={pet.photo3} alt="Galería de imagenes de la mascota"/>
                                    </label>
                    
                                </div>
                            </div>
                    
                        </div></div>

                        <div className="cat-bton btn__pets">
                            <Link to='/'>
                                <button className="bton-cat"> 
                                <img src={BtnDog} alt="Imagen de botón de gato"></img>
                                Sigue mirando más peluditos
                                <img src={BtnCat} alt="Imagen de botón de gato"></img>
                        </button></Link></div>

            <section id="adoption-process">
           
            <h2 class="ocult">Inicia el proceso de adopción</h2>     

            <div class="bg-documents">   
            <article class="process-step1">
            
            <div class="step1">
                <h2 class="h2-ocult">Inicia el proceso de adopción</h2>
                <h2 class="subtitle">Paso 1</h2>
                <img src={Huella} alt=""/>

                <a href="/formulario" className="la_a">
                <div className='btn-container'>
                    <button className='btn_pago'> Llenar formulario </button>
                    <i class="fa-solid fa-paper-plane"></i>
                </div></a>
                <a href="https://drive.google.com/file/d/1U5FpQ_L3SDP6QixE57KnE4UdmpGJw4xg/view" target="blank"> O haz click aquí para descargarlo </a>
            </div>

            <div class="documents">
                <h3>DOCUMENTOS ADICIONALES</h3>
                <p>A continuación encontrará el listado de documentos y formatos descargables que debe consultar para su proceso de adopción:</p>
                <ul>
                    <li>Acta de adopción</li>
                    <li>Instrucciones para adoptar o apadrinar un animal del refugio canino.</li>
                    <li>Instrucciones para adoptantes de animales cachorros.</li>
                    <li>Instrucciones para adoptantes de animales adultos.</li>
                </ul>
            </div></article>

            <article class="process-step2">
            <div class="step2">
                <h2>Paso 2</h2>
                    <div class="huellas-step2">
                        <img class="huella1" src={Huella} alt=""/>
                        <img class="huella2" src={Huella} alt=""/>
                    </div>
                    <p>Una vez diligenciado, completa los campos y espera nuestra respuesta.</p>
            </div>

            <div class="formulario">
            <form action="post">
                <div class="form-group">
                    <label for=""></label>
                    <input type="text" placeholder="&nbsp;Nombre"/>
                </div>
                <div class="form-group">
                    <label for=""></label>
                    <input type="text" placeholder="&nbsp;Número teléfonico"/>
                </div>
                <div class="form-group">
                    <label for=""></label>
                    <input type="text" placeholder="&nbsp;Correo electrónico"/>
                </div>
            </form>     
            </div>

            <div className='btn-container'>
                    <button className='btn_pago'> Enviar </button>
                    <i class="fa-solid fa-paper-plane"></i>
            </div>

            </article> 
            </div> 
            </section>

        </main>

        <Footer />

        </div>
        </>
    )
}

export default Mascota;