import React from 'react'
import './styles.css'

export default function Header() {
    return (
        <header className='header'>
            <nav className="nav">
                <ul className="lista_nav">
                    <li className="hijas_lista_nav">
                        <a className="barra" href="index.html"> HOME | </a>
                    </li>
                    <li className="hijas_lista_nav">
                        <a className="barra" href="favorites.html">| FAVORITOS </a>
                    </li>
                </ul>
            </nav>

            <img className="logo" src="./img/logo.png" alt="Logo" />

            <form className="formulario" action="./search-results.html" method="GET">
                <input
                    className="busqueda"
                    placeholder="Búsqueda"
                    name="busqueda"
                    type="text"
                />
                <button type="submit">Buscar</button>
            </form>
        </header>
    )
}