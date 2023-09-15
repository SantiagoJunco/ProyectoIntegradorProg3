import React, { Component } from 'react'
import './styles.css'

export default class FormularioFiltrar extends Component {
    constructor(props) {
        super(props);
        this.state = { valor: '' };
    }
    evitarSubmit(evento) {
        evento.preventDefault()

    }

    controlarCambios(evento) {
        this.setState({ valor: evento.target.value }, () => this.props.filtrarPeliculas(this.state.valor));
    }

    render() {
        return (
            <form className="formulario" onSubmit={(evento) => this.evitarSubmit(evento)}>
                <input
                    className="busqueda"
                    placeholder="Búsqueda"
                    name="busqueda"
                    type="text" onChange={(event) => this.controlarCambios(event)} value={this.state.valor}
                />
                <button type="submit">Buscar</button>
            </form>
        )
    }
}