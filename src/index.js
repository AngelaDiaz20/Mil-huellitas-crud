import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

/*Páginas adopción*/
import Adopcion from './pages/adopcion/Adopcion';
import Form from './pages/adopcion/Formulario';
import FormAdoptantes from './pages/adopcion/FormAdoptantes';
import Mascota from './pages/adopcion/Mascota';

import PetCrud from './pages/adopcion/PetCrud';
import FormRegisterPet from './pages/adopcion/FormRegisterPet';
import MascotaCrud from './pages/adopcion/Mascotas-crud';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
      <Routes>

        <Route path="/" element={<Adopcion/>}></Route>
        <Route path='/adopcion'  element={<Navigate replace to={"/"} />}></Route>
        <Route path='/form-adoptantes' element={<FormAdoptantes/>}></Route>
        <Route path='/formulario' element={<Form/>}></Route>
        <Route path='/:id' element={<Mascota/>}></Route>

        <Route path='/pet/' element={<PetCrud/>}></Route>
        <Route path='/pet/new' element={<FormRegisterPet/>}></Route>

        <Route path='/mascota-crud' element={<MascotaCrud/>}></Route>

      </Routes>
    
    </BrowserRouter>
);


