import React from 'react'
import './styles.css'

export default function Header() {

    return (
        <header className='header'>
            <nav class="nav">
                <ul class="lista_nav">
                    <li class="hijas_lista_nav">
                        <a class="barra" href="index.html"> HOME | </a>
                    </li>
                    <li class="hijas_lista_nav">
                        <a class="barra" href="genres.html"> GÉNEROS | </a>
                    </li>
                    <li class="hijas_lista_nav">
                        <a class="barra" href="favorites.html"> FAVORITOS </a>
                    </li>
                </ul>
            </nav>

            <img class="logo" src="./img/logo.png" alt="Logo" />

            <form class="formulario" action="./search-results.html" method="GET">
                <input
                    class="busqueda"
                    placeholder="Búsqueda"
                    name="busqueda"
                    type="text"
                />
                <button type="submit">Buscar</button>
            </form>
        </header>
    )
}