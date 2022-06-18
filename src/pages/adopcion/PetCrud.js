//import { Link } from "react-router-dom";
import ListPet from "../../components/adopcion/crud/ListPet";
//import Header from "../components/header/Header";
import Buttoncat from "../../components/adopcion/buttons/ButtonCat";
import BotonGato from '../../assets/adopcion/img/btongato.svg'

function PetCrud (){
    return(
        <>  
            <div className="presentation"> <br/>
                <Buttoncat 
                    description="Registrar nuevo peludito"
                    link="/pet/new"
                    image={BotonGato}
                /> <br/>

                <h1 className="text-center">Peluditos Mil Huellitas</h1> <br/>
                <ListPet />
                
            </div>
        </>
    )
}

export default PetCrud;