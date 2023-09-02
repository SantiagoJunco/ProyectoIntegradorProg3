import React, { Component } from 'react'
import PopularesContainer from "../../Components/PopularesContainer"
import CartelContainer from "../../Components/CartelContainer"

class index extends Component {
    render() {
        return (
            <main>
                <h2 className="titulos">PELÍCULAS POPULARES</h2>
                <PopularesContainer/>
                <h2 className="titulos">PELÍCULAS EN CARTELERA</h2>
                <CartelContainer/>
            </main>
        )
    }
}

export default index