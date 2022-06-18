import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import FormPet from '../../components/adopcion/crud/FormPet';

function FormRegisterPet(){
    return(
        <div>
            <Header />
            <FormPet />
            <Footer />
        </div>
    )
}

export default FormRegisterPet;