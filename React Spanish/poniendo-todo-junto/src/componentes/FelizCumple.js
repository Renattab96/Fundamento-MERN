import React, {Component} from 'react'

class FelizCumple extends Component {

    constructor(props){
        super(props);
        this.state= {edad: this.props.edad }
    }

    SumaEdad = ()=>{
        this.setState({edad: this.state.edad + 1})
    }    

    render(){
        
        return(
            <div>
            <h1> {this.props.apellido}, {this.props.nombre}</h1>
            <p>Edad: {this.state.edad}</p>
            <p>Color de Pelo: {this.props.peloColor} </p>
            <button onClick={this.SumaEdad} >Feliz Cumple</button>
            </div>
        )
    }
}

export default FelizCumple