import React, { Component } from 'react'
import './styles.css'
import { options } from '../../Utils/Constants';
import Popular from "../Popular"

let PeliculasPopulares = 'https://api.themoviedb.org/3/movie/popular'


class PopularesContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            populares: []
        }
    }

    componentDidMount() {
        this.traerPopulares()
    }

    traerPopulares() {
        fetch(PeliculasPopulares, options)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                let primerasCinco = [];
                for (let i = 0; i < 5 && i < data.results.length; i++) {
                    primerasCinco.push(data.results[i]);
                };
                this.setState({
                    populares: primerasCinco
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <section className="listado_detalle_generos-Favoritos-home-search" id="section">
                {
                    this.state.populares.length === 0 ?
                        <h1>Trayendo peliculas...</h1> :
                        this.state.populares.map((popular) => <Popular
                        key={popular.id}
                        imagen={'https://image.tmdb.org/t/p/w500' + popular.poster_path}
                        titulo={popular.title}
                        descripcion={popular.overview}
                    /> )
                }
            </section>
        )
    }
}

export default PopularesContainer