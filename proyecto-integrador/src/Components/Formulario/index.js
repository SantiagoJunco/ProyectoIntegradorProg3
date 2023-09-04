import React, { Component } from 'react'

export default class formulario extends Component {
    constructor(props) {
        super(props);
        this.state = {valor: ''};
      }
    evitarSubmit(evento){
        evento.preventDefault()
      }

    controlarCambios(evento) {
        this.setState({valor: evento.target.value}, () => this.buscarPelicula());
      }

    buscarPelicula(){
       //
      }

    render() {
        return (
            <form className="formulario" onSubmit={(evento)=> this.evitarSubmit(evento)}>
                <input
                    className="busqueda"
                    placeholder="Búsqueda"
                    name="busqueda"
                    type="text" onSubmit={(event)=>this.controlarCambios(event)} value={this.state.valor} 
                />
                <button type="submit">Buscar</button>
            </form>
        )
    }
}