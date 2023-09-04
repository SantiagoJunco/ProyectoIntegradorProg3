import React from 'react'
import { Link } from 'react-router-dom';
import Formulario from '../Formulario'
import './styles.css'

export default function Header() {
    let navegacion = [
        {
            nombre: 'HOME',
            ruta: '/',
        },
        {
            nombre: 'FAVORITOS',
            ruta: '/Favoritos',
        }
    ]
    return (
        <header className='header'>
            <nav className="nav">
                <ul className="lista_nav">
                    {
                        navegacion.map((elm) => <li className="hijas_lista_nav">
                            <Link to={elm.ruta} className="barra">
                                | {elm.nombre} |
                            </Link>
                        </li>)
                    }
                </ul>
            </nav>

            <img className="logo" src="./img/logo.png" alt="Logo" />

            <Formulario/>
           
        </header>
    )
}