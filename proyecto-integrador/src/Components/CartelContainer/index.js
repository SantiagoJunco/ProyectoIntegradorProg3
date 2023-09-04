import React, { Component } from 'react'
import './styles.css'
import Cartel from '../Cartel';


class CartelContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className="listado_detalle_generos-Favoritos-home-search" id="section2">
                {
                    this.props.enCartel.length === 0 ?
                        <h1>Trayendo peliculas...</h1> :
                        this.props.enCartel.map((cartel) => <Cartel
                        key={cartel.id}
                        id={cartel.id}
                        imagen={'https://image.tmdb.org/t/p/w500' + cartel.poster_path}
                        titulo={cartel.title}
                        descripcion={cartel.overview}
                    /> )
                }
            </section>
        )
    }
}

export default CartelContainer