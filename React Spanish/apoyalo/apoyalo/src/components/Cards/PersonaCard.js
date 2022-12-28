import React, {Component} from "react";
class PersonaCard extends Component {
    constructor(props){
        super(props)
        const {nombre, apellido, edad, colorcabello} = props;
        this.state={
            nombre: nombre,
            apellido:apellido,
            edad:edad,
            colorcabello:colorcabello
            }
    }
    render(){
        return(
                <div>
                    <h1>{this.props.apellido}, {this.props.nombre}</h1>
                    <p>Edad: {this.props.edad}</p>
                    <p>Color de Cabello: {this.props.colorcabello}</p>

                </div>
        );
    }
}
export default PersonaCard;