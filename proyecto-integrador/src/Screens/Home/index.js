import React, { Component } from 'react'
import PopularesContainer from "../../Components/PopularesContainer"
import CartelContainer from "../../Components/CartelContainer"
import { options } from '../../Utils/Constants';
import './styles.css'
let PeliculasPopulares = 'https://api.themoviedb.org/3/movie/popular'
let PeliculasEnCartel = 'https://api.themoviedb.org/3/movie/now_playing'


class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            populares: [],
            enCartel: []
        }
    }

    componentDidMount() {
        this.traerPopulares()
        this.traerEnCartel()
    }

    traerPopulares() {
        fetch(PeliculasPopulares, options)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                this.setState({
                    populares: data.results.slice(0, 5)
                })
            })
            .catch(err => console.log(err))
    }


    traerEnCartel() {
        fetch(PeliculasEnCartel, options)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                this.setState({
                    enCartel: data.results.slice(0, 5)
                })
            })
            .catch(err => console.log(err))
    }


    render() {
        return (
            <main>
                <h2 className="titulos">PELÍCULAS POPULARES  <a className='titulos' href='/todasPopulares'>(Ver todas)</a></h2>
                <PopularesContainer populares={this.state.populares} />
                <h2 className="titulos">PELÍCULAS EN CARTELERA <a className='titulos' href='/todasCartel'>(Ver todas)</a></h2>
                <CartelContainer enCartel={this.state.enCartel} />
            </main>
        )
    }
}

export default index