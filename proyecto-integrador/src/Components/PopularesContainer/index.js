import React, { Component } from 'react'
import './styles.css'
import Popular from "../Popular"


class PopularesContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className="listado_detalle_generos-Favoritos-home-search" id="section">
                {
                   this.props.populares.length === 0 ? (
                    <h1 className='titulos'>Trayendo peliculas...</h1>
                  ) 
                  :
                  (
                    this.props.populares.map((popular) => (
                      <Popular
                        key={popular.id}
                        id={popular.id}
                        imagen={'https://image.tmdb.org/t/p/w500' + popular.poster_path}
                        titulo={popular.title}
                        descripcion={popular.overview}
                      />
                    ))
                  )
                }
            </section>
        )
    }
}

export default PopularesContainer