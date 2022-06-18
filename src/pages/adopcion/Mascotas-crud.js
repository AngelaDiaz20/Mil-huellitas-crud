import ListPet from "../../components/adopcion/crud/ListPet";
//import Header from "../components/header/Header";
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

import Slides from '../../components/adopcion/slide/Slide';
import Requirement from '../../components/adopcion/requirement/Requirement';

function MascotaCrud (){
    return(
        <>  
            <Header />
            <Slides />
            <h1 className="text-center">Peluditos Mil Huellitas</h1> <br/>
            <ListPet />
            <Requirement />
            <Footer />
        </>
    )
}

export default MascotaCrud;
