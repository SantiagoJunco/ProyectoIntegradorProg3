import React, { Component } from 'react'
import Resultado from "../Resultado"
import './styles.css'


class ResultsContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className="listado_detalle_generos-Favoritos-home-search" id="section">
                {
                    this.props.busqueda.map((peliculaBuscada) => <Resultado
                        key={peliculaBuscada.id}
                        id={peliculaBuscada.id}
                        imagen={'https://image.tmdb.org/t/p/w500' + peliculaBuscada.poster_path}
                        titulo={peliculaBuscada.title}
                        descripcion={peliculaBuscada.overview}
                    />)
                }
            </section>
        )
    }
}

export default ResultsContainer