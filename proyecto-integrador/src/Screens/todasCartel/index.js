import React, { Component } from 'react'
import { options } from '../../Utils/Constants';
import CartelContainer from '../../Components/CartelContainer'
import FormularioFiltrar from '../../Components/FormularioFiltrar';
import './styles.css'
let PeliculasEnCartel = 'https://api.themoviedb.org/3/movie/now_playing'

class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            enCartel: [],
            backup: [],
            page: 1
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
            this.setState({
                enCartel: data.results.slice(0,14),
                backup: data.results.slice(0,14)
            })
        })
        .catch(err => console.log(err))
    }

    traerMas() {
        fetch(PeliculasEnCartel+'?page='+this.state.page + 1, options)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                this.setState({
                    enCartel: this.state.enCartel.concat(data.results),
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
            enCartel: peliculasFiltradas
        })
    }

    render() {
        return (
            <main>
                <h2 className="titulos">PELÍCULAS EN CARTELERA <FormularioFiltrar filtrarPeliculas={(nombre)=> this.filtrarPeliculas(nombre)} /> </h2>
                <CartelContainer enCartel={this.state.enCartel} />
                <section className='contenedorVerMas'> <button onClick={() => this.traerMas()} className='masPelis'>Ver más</button> </section>
            </main>
        )
    }
}

export default index