import axios from 'axios';
import { Form } from 'react-bootstrap';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

import { ContainerFormulario, Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError, Select, Textarea } from '../../../elements/adopcion/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { Input } from '../../../elements/adopcion/Formularios';

function FormPet() {

    /* Validación */
    //const [category, changeCategory] = useState({ campo: '', valido: null });
    const [name, changeName] = useState({ campo: '', valido: null });
    const [age, changeAge] = useState({ campo: '', valido: null });
    //const [size, changeSize] = useState({ campo: '', valido: null });
    const [image, changeImage] = useState({ campo: '', valido: null });
    const [history, changeHistory] = useState({ campo: '', valido: null });
    const [photo1, changePhoto1] = useState({ campo: '', valido: null });
    const [photo2, changePhoto2] = useState({ campo: '', valido: null });
    const [photo3, changePhoto3] = useState({ campo: '', valido: null });
    //const [gender, changeGender] = useState({ campo: '', valido: null });
    //const [sterilization, changeSterilization] = useState({ campo: '', valido: null });
    //const [deworming, changeDeworming] = useState({ campo: '', valido: null });
    const [color, changeColor] = useState({ campo: '', valido: null });
    const [teeth, changeTeeth] = useState({ campo: '', valido: null });
    const [eyes, changeEyes] = useState({ campo: '', valido: null });
    const [weight, changeWeight] = useState({ campo: '', valido: null });
    const [observations, changeObservations] = useState({ campo: '', valido: null });
    //const [terminos, cambiarTerminos] = useState(false);
    const [formularioValido, cambiarFormularioValido] = useState(null);

    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos
        peso: /^[0-99]{1,3}$/,
        numeros: /^[0-99]+[,]+[0-99]$/, // 7 a 5 numeros.
        textarea: /^[a-zA-ZÀ-ÿ\s]{1,500}$/,
        edad: /^[a-zA-Z0-9-]$/
    }

    /*const onSubmit = (e) => {
        e.preventDefault();

        if (
            //category.valido === 'true' &&
            name.valido === 'true' &&
            age.valido === 'true' &&
            //size.valido === 'true' &&
            image.valido === 'true' &&
            history.valido === 'true' &&
            //gender.valido === 'true' &&
            //sterilization.valido === 'true' &&
            //deworming.valido === 'true' &&
            color.valido === 'true' &&
            teeth.valido === 'true' &&
            eyes.valido === 'true' &&
            weight.valido === 'true' &&
            observations.valido === 'true'
        ) {
            cambiarFormularioValido(true);
            //changeCategory({ campo: '', valido: null });
            changeName({ campo: '', valido: null });
            changeAge({ campo: '', valido: null });
            //changeSize({ campo: '', valido: null });
            changeImage({ campo: '', valido: null });
            changeHistory({ campo: '', valido: null });
            //changeGender({ campo: '', valido: null });
            //changeSterilization({ campo: '', valido: null });
            //changeDeworming({ campo: '', valido: null });
            changeColor({ campo: '', valido: null });
            changeTeeth({ campo: '', valido: null });
            changeEyes({ campo: '', valido: null });
            changeWeight({ campo: '', valido: null });
            changeObservations({ campo: '', valido: null });
            // ... 
        } else {
            cambiarFormularioValido(false);
        }
    }*/



    /* Una ruta useHistory useNavigate constante para que retorne al listar */
    const navigate = useNavigate();

    /* Inicializando los inputs en el estado, para poder escribir los datros o los valores que el usuario digite en el form y manejarlos o controlarlos*/
    const [data, setData] = useState({ id: "", category: "", name: "", age: "", size: "", image: "", history: "", photo1: "", photo2: "", photo3: "", gender: "", sterilization: "", deworming: "", color: "", teeth: "", eyes: "", weight: "", observations: "" });

    const handleChange = ({ target }) => {
        setData({
            ...data,
            [target.name]: target.value
        })
    }

    /* Peticiones asincronas conectar con bd */
    const url = "http://localhost:5000/pets";


    const onSubmit = async (e) => {
        e.preventDefault();
        if (
            //category.valido === 'true' &&
            name.valido === 'true' &&
            age.valido === 'true' &&
            //size.valido === 'true' &&
            image.valido === 'true' &&
            history.valido === 'true' &&
            //gender.valido === 'true' &&
            //sterilization.valido === 'true' &&
            //deworming.valido === 'true' &&
            color.valido === 'true' &&
            teeth.valido === 'true' &&
            eyes.valido === 'true' &&
            weight.valido === 'true' &&
            observations.valido === 'true'
        ) {
            cambiarFormularioValido(true);
            //changeCategory({ campo: '', valido: null });
            changeName({ campo: '', valido: null });
            changeAge({ campo: '', valido: null });
            //changeSize({ campo: '', valido: null });
            changeImage({ campo: '', valido: null });
            changeHistory({ campo: '', valido: null });
            //changeGender({ campo: '', valido: null });
            //changeSterilization({ campo: '', valido: null });
            //changeDeworming({ campo: '', valido: null });
            changeColor({ campo: '', valido: null });
            changeTeeth({ campo: '', valido: null });
            changeEyes({ campo: '', valido: null });
            changeWeight({ campo: '', valido: null });
            changeObservations({ campo: '', valido: null });
        }
        else {
            cambiarFormularioValido(false);
        }       
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(onSubmit(cambiarFormularioValido===(true))){
            const response = await axios.post(url, data);
            //console.log(response)
            if (response.status === 201){
                Swal.fire(
                    'Guardado!',
                    `El peludito <strong>
                    ${response.data.name}
                    </strong>
                    ha sido guardado exitosamente!`,
                    'success'
                )
                navigate("/pet");
            } else {
                Swal.fire(
                    'Error!',
                    `Este pokemon es demasiado salvaje y se rehusa a ser registrado`,
                    'error'
                )
            }}else{
                alert("errrrror")
            }
    }

    return (
        <div>
            <ContainerFormulario>

                <h1>Registro de un nuevo peludito Mil Huellitas</h1>

                <Formulario action="" onSubmit={handleSubmit} className='form'>

            
                    <Select
                        name="category"
                        required
                        onChange={handleChange}
                        >
                        <option>Seleccione la categoria</option>
                        <option value="Perro">Perro</option>
                        <option value="Gato">Gato</option>
                    </Select>

                
                    <Input
                        estado={name}
                        cambiarEstado={changeName}
                        tipo="text"
                        label="Nombre"
                        placeholder="Pandamonio"
                        name="name"
                        leyendaError="El nombre solo puede contener letras y espacios."
                        expresionRegular={expresiones.nombre}

                        value={data.name}
                        onChange={handleChange}
                    />

                    <Input
                        estado={age}
                        cambiarEstado={changeAge}
                        tipo="text"
                        label="Edad"
                        placeholder="8"
                        name="age"
                        leyendaError="La edad solo puede contener números"
                        expresionRegular={expresiones.edad}

                        value={data.age}
                        onChange={handleChange}
                    />

                    <Select
                        name="size"
                        required
                        onChange={handleChange}
                        >
                        <option>Tamaño</option>
                        <option value="Grande">Grande</option>
                        <option value="Mediano">Mediano</option>
                        <option value="Pequeño">Pequeño</option>
                    </Select>   

                    <Input
                        estado={image}
                        cambiarEstado={changeImage}
                        tipo="text"
                        label="Foto principal"
                        placeholder="URL de la imagen"
                        name="image"
                        leyendaError="Campo requerido"

                        value={data.image}
                        onChange={handleChange}
                    />

                    <Input
                        estado={photo1}
                        cambiarEstado={changePhoto1}
                        tipo="text"
                        label="Foto 1"
                        placeholder="URL de la imagen"
                        name="photo1"

                        value={data.photo1}
                        onChange={handleChange}
                    />

                    <Input
                        estado={photo2}
                        cambiarEstado={changePhoto2}
                        tipo="text"
                        label="Foto 2"
                        placeholder="URL de la imagen"
                        name="photo2"

                        value={data.photo2}
                        onChange={handleChange}
                    />

                    <Input
                        estado={photo3}
                        cambiarEstado={changePhoto3}
                        tipo="text"
                        label="Foto 3"
                        placeholder="URL de la imagen"
                        name="photo3"

                        value={data.photo3}
                        onChange={handleChange}
                    />

                    <Select
                        name="gender"
                        required
                        onChange={handleChange}
                        >
                        <option>Sexo</option>
                        <option value="Hembra">Hembra</option>
                        <option value="Macho">Macho</option>
                    </Select>

                    <Select
                        name="sterilization"
                        required
                        onChange={handleChange}
                        >
                        <option>Esterilización</option>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                    </Select>

                    <Select
                        name="deworming"
                        required
                        onChange={handleChange}
                        >
                        <option>Castración</option>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                    </Select>

                    <Input
                        estado={color}
                        cambiarEstado={changeColor}
                        tipo="text"
                        label="color"
                        placeholder="Rojo fuego"
                        name="color"
                        leyendaError="El color solo puede contener letras y espacios"
                        expresionRegular={expresiones.nombre}

                        value={data.color}
                        onChange={handleChange}
                    />

                    <Input
                        estado={teeth}
                        cambiarEstado={changeTeeth}
                        tipo="text"
                        label="Dentadura"
                        placeholder="Permanentes, completos"
                        name="teeth"
                        leyendaError="Este campo solo puede contener letras y espacios"
                        expresionRegular={expresiones.textarea}

                        value={data.teeth}
                        onChange={handleChange}
                    />

                    <Input
                        estado={eyes}
                        cambiarEstado={changeEyes}
                        tipo="text"
                        label="Ojos"
                        placeholder="Ovales, color azul"
                        name="eyes"
                        leyendaError="Este campo solo puede contener letras y espacios"
                        expresionRegular={expresiones.nombre}

                        value={data.eyes}
                        onChange={handleChange}
                    />

                    <Input
                        estado={weight}
                        cambiarEstado={changeWeight}
                        tipo="text"
                        label="Peso (lbs)"
                        placeholder="25"
                        name="weight"
                        leyendaError="El peso solo puede contener números"
                        expresionRegular={expresiones.peso}

                        value={data.weight}
                        onChange={handleChange}
                    />

                    <Input
                        estado={observations}
                        cambiarEstado={changeObservations}
                        tipo="text"
                        label="Observaciones"
                        placeholder="Observaciones del peludito"
                        name="observations"
                        leyendaError="Este campo solo puede tener letras y espacios"
                        expresionRegular={expresiones.textarea}

                        value={data.observations}
                        onChange={handleChange}
                    />

                    <Textarea 
                        rows={3}
                        name="history"
                        placeholder='Historia del peludito'
                        required
                        onChange={handleChange}
                    />
                
                    {formularioValido === false && <MensajeError>
					<p>
						<FontAwesomeIcon icon={faExclamationTriangle}/>
						<b>Error:</b> Por favor rellena el formulario correctamente.
					</p>
				</MensajeError>}
				<ContenedorBotonCentrado>
					<Boton type="submit">Enviar</Boton>
					{formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
				</ContenedorBotonCentrado>

                </Formulario>
            </ContainerFormulario>
        </div>
    );

}
export default FormPet;