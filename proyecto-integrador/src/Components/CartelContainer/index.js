import React, { Component } from 'react'
import './styles.css'
import { options } from '../../Utils/Constants';
import Cartel from '../Cartel';

let PeliculasEnCartel = 'https://api.themoviedb.org/3/movie/now_playing'


class CartelContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            enCartel: []
        }
    }

    componentDidMount() {
        this.traerEnCartel()
    }

    traerEnCartel(){
        fetch(PeliculasEnCartel, options)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            let primerasCinco = [];
            for (let i = 0; i < 5 && i < data.results.length; i++) {
                primerasCinco.push(data.results[i]);
            };
            this.setState({
                enCartel: primerasCinco
            })
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <section className="listado_detalle_generos-Favoritos-home-search" id="section2">
                {
                    this.state.enCartel.length === 0 ?
                        <h1>Trayendo peliculas...</h1> :
                        this.state.enCartel.map((cartel) => <Cartel
                        key={cartel.id}
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