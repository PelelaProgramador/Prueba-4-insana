'use client'
import  './styles/estilos.css'
import  './styles/reset.css'
import { Saludo } from './Componentes/Saludo'
import { Formulario } from './Componentes/Formulario'
import {BrowserRouter} from 'react-router-dom'
import { Header } from './layout/Header'
import { Cabeza } from './Componentes/cabeza'
import { ContenedorWebsite } from './Componentes/ContenedorWebSite'
import { Info } from './Componentes/Info'
import { AppRouter } from './router/AppRouter'
import { Footer } from './layout/Footer'
import { RedesSociales} from './Componentes/RedesSociales'
import { Galeria } from './Componentes/Galeria'
import { InfoLast} from './Componentes/Info-last'


export default function Home() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <AppRouter/>
        <Cabeza/>
        <ContenedorWebsite/>
        <Info/>
        <RedesSociales/>
        <Galeria/>
        <InfoLast/>
      </BrowserRouter>
      
    </>
  )
}
