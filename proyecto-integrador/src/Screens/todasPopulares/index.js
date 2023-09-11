import React, { Component } from 'react'
import { options } from '../../Utils/Constants';
import PopularesContainer from '../../Components/PopularesContainer'
import FormularioFiltrar from '../../Components/FormularioFiltrar';
import './styles.css'
let PeliculasPopulares = 'https://api.themoviedb.org/3/movie/popular'


class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            populares: [],
            backup: [],
            page: 1
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
                this.setState({
                    populares: data.results.slice(0,14),
                    backup: data.results.slice(0,14)
                })
            })
            .catch(err => console.log(err))
    }
    traerMas() {
        fetch(PeliculasPopulares+'?page='+this.state.page + 1, options)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                this.setState({
                    populares: this.state.populares.concat(data.results),
                    backup: this.state.backup.concat(data.results),
                    page: this.state.page + 1
                })
            })
            .catch(err => console.log(err))
    }
    filtrarPeliculas(nombre){
        let peliculasFiltradas = this.state.backup.filter((elm)=> elm.title.toLowerCase().includes(nombre.toLowerCase()))
        console.log(peliculasFiltradas );
        this.setState({
            populares: peliculasFiltradas
        })
    }


    render() {
        return (
            <main>
                <h2 className="titulos">PELÍCULAS POPULARES <FormularioFiltrar filtrarPeliculas={(nombre)=> this.filtrarPeliculas(nombre)} /></h2>
                <PopularesContainer populares={this.state.populares}/>
                <section className='contenedorVerMas'> <button onClick={() => this.traerMas()} className='masPelis'>Ver más</button> </section>
            </main>
        )
    }
}

export default index