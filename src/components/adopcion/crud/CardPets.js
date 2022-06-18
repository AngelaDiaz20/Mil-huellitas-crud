import Swal from 'sweetalert2';
import axios from 'axios';
import './style.css' 

function CardPets({pet, setUplist, upList, handleOpen, setDataModal}) {

    /* 1. Definir url del API a la que me voy a conectar */
    const url = "http://localhost:5000/pets";

    /* 2. Función asincrona para borr<r a partir del listener del botón eliminar */
    const handleDelete = async () => {
        Swal.fire({
            title: '¿Está seguro que desea eliminar este peludito Mil Huellitas?',
            text: "¡No puede revertir esta acción!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, ¡bórralo!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                /* Eliminando el registro de la base de datos falsa */
                axios.delete(`${url}/${pet.id}`).then((response) => {
                    console.log(response);
                    if (response.status === 200) {
                        Swal.fire(
                            'Eliminado',
                            'El peludito ha sido eliminado :(',
                            'success'
                        )
                        setUplist(!upList);
                    }
                    else {
                        Swal.fire(
                            'Error',
                            'Este peludito se resiste a ser eliminado',
                            'error'
                        )
                    }
                })

            }
        })
    }

    const handleEdit = () => {
        handleOpen();
        setDataModal(pet);
    }

    return (
        <div className="container-crud adoption-galery">
        
        <div className="adoption-galery__pet"><br/>
             <div className="adoption-galery__image">
                <img src={pet.image} alt={pet.name}/>
            </div>

            <div className="adoption-galery__information">
                <p className="information pet__name">{pet.name} </p>
                <p className="information pet__age">Edad: {pet.age}</p>
                <p className="information pet__size">Tamaño: {pet.size}</p>
            </div>

            <div className='buttons-crud'>
                <button className='crudEditar' onClick={handleEdit}>Editar</button>
                <button className='crudEliminar' onClick={handleDelete}>Eliminar</button>
            </div>

        </div> 
    </div>
        );
}

export default CardPets;