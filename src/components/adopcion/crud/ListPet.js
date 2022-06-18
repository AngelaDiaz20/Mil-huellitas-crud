import axios from 'axios';
import { useEffect, useState } from 'react';
import { Modal} from 'react-bootstrap';
import CardPets from './CardPets';
import Swal from 'sweetalert2';
import './style.css'
import {Formulario, Select, Textarea, Input } from '../../../elements/adopcion/Formularios';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import TablePuchamones from './TablePuchamones';

function ListPet() {

    /* 1. Definir url del API a la que me voy a conectar */
    const url = "http://localhost:5000/pets";

    /* 2. Generar función asincrona para conectarme al API */
    const getData = async () => {
        const response = axios.get(url);
        return response;
    }

    /* 3. UseState para guardar la respueta de la petición */
    const [list, setList] = useState([]);

    /* 5. Crear otro estado para refrescar el listado despuéss de eliminar */
    const [upList, setUplist] = useState([false]);

    /* Agregar una constante para actualizar el estado del modal*/
    const [show, setShow] = useState(false);
    const handleClose = () => { setShow(false); }
    const handleOpen = () => { setShow(true); }

    /* Estado para obtener los datos del registro que se va a editar */
    const [dataModal, setDataModal] = useState({});

    const handleChangeModal = ({ target }) => {
        setDataModal({
            ...dataModal,
            [target.name]: target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.put(`${url}/${dataModal.id}`, dataModal);
        console.log(response);
        if (response.status === 200) {
            Swal.fire(
                'Cambio Guardado!',
                `El pokemon <strong> ${response.data.name} </strong> ha sido actualizado exitosamente!`,
                'success'
            )
            handleClose();
            setUplist(!upList);
        }
        else {
            Swal.fire(
                'Error!',
                'Hubo un problema al actualizar el pokemon!',
                'error'
            )
        }
    }

    /* 4. Hook useEffect, ejecutar funciones cada vez que renderizamos un componente */
    useEffect(() => {
        getData().then((response) => {
            setList(response.data);
        });
    }, [upList]);

    console.log(list);

    return (

        <div className='container-all'>
            <div className='row'>
                {
                    list.map((pet, index) => (
                        <CardPets
                            key={index}
                            pet={pet}
                            setUplist={setUplist}
                            upList={upList}
                            handleClose={handleClose}
                            handleOpen={handleOpen}
                            setDataModal={setDataModal}
                        />
                    ))
                }
            </div>

            {<Modal show={show} onHide={handleClose} className="modal">

                <Formulario onSubmit={handleSubmit}>

                            <Select
                                name="category"
                                onChange={handleChangeModal}
                            >
                                <option value={dataModal.category}>{dataModal.category}</option>
                                <option>Seleccione el tamaño</option>
                                <option value="Perro">Perro</option>
                                <option value="Gato">Gato</option>
                            </Select>

                            <Input className='input'
                                type="text"
                                placeholder="Motitas"
                                label="Nombre"
                                name="name"
                                required
                                value={dataModal.name}
                                onChange={handleChangeModal}
                            />

                            <Input
                                type="text"
                                label="Edad"
                                placeholder="8"
                                name="age"
                                value={dataModal.age}
                                onChange={handleChangeModal}
                            />

                            <Select
                                name="size"
                                onChange={handleChangeModal}
                                >
                                <option value={dataModal.size}>{dataModal.size}</option>
                                <option>Tamaño</option>
                                <option value="Grande">Grande</option>
                                <option value="Mediano">Mediano</option>
                                <option value="Pequeño">Pequeño</option>
                            </Select>  

                            <Input
                                type="text"
                                label="Foto principal"
                                placeholder="URL de la imagen"
                                name="image"

                                value={dataModal.image}
                                onChange={handleChangeModal}
                            />

                            <Input
                                type="text"
                                label="Foto 1"
                                placeholder="URL de la imagen"
                                name="photo1"

                                value={dataModal.photo1}
                                onChange={handleChangeModal}
                            />

                            <Input
                                type="text"
                                label="Foto 2"
                                placeholder="URL de la imagen"
                                name="photo2"

                                value={dataModal.photo2}
                                onChange={handleChangeModal}
                            />

                            <Input
                                type="text"
                                label="Foto 3"
                                placeholder="URL de la imagen"
                                name="photo3"

                                value={dataModal.photo3}
                                onChange={handleChangeModal}
                            />

                            <Select
                                name="gender"
                                onChange={handleChangeModal}
                                >
                                <option value={dataModal.gender}>{dataModal.gender}</option>
                                <option>Sexo</option>
                                <option value="Hembra">Hembra</option>
                                <option value="Macho">Macho</option>
                            </Select>

                            <Select
                                name="sterilization"
                                onChange={handleChangeModal}
                                >
                                <option value={dataModal.sterilization}>{dataModal.sterilization}</option>
                                <option>Esterilización</option>
                                <option value="Si">Si</option>
                                <option value="No">No</option>
                            </Select>

                            <Select
                                name="deworming"
                                required
                                onChange={handleChangeModal}
                                >
                                <option value={dataModal.deworming}>{dataModal.deworming}</option>
                                <option>Castración</option>
                                <option value="Si">Si</option>
                                <option value="No">No</option>
                            </Select>

                            <Input
                                type="text"
                                label="color"
                                placeholder="Rojo fuego"
                                name="color"

                                value={dataModal.color}
                                onChange={handleChangeModal}
                            />

                            <Input
                                type="text"
                                label="Dentadura"
                                placeholder="Permanentes, completos"
                                name="teeth"

                                value={dataModal.teeth}
                                onChange={handleChangeModal}
                            />

                            <Input
                                tipo="text"
                                label="Ojos"
                                placeholder="Ovales, color azul"
                                name="eyes"

                                value={dataModal.eyes}
                                onChange={handleChangeModal}
                            />

                            <Input
                                type="text"
                                label="Peso (lbs)"
                                placeholder="25"
                                name="weight"

                                value={dataModal.weight}
                                onChange={handleChangeModal}
                            />

                            <Input
                                type="text"
                                label="Observaciones"
                                placeholder="Observaciones del peludito"
                                name="observations"

                                value={dataModal.observations}
                                onChange={handleChangeModal}
                            />

                            <Textarea 
                                rows={3}
                                name="history"
                                placeholder='Historia del peludito'
                                value={dataModal.history}
                                onChange={handleChangeModal}
                            />

                            <div className='footer'>
                                <button className='btn btn-secondary' onClick={handleClose}>Cerrar</button>
                                <button className='btn btn-primary' type="submit">Guardar cambios</button>
                            </div>

                </Formulario>

            </Modal>}
        </div>
    );
}

export default ListPet;