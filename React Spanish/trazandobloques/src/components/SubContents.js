import React, {Component} from "react";
import styles from '../styles/SubContent.module.css'


class SubContent extends Component{
    render(){
        return(
            <section className={styles.section}>Subcontent en react {this.props.SubContent} </section>
        )
    }
}

export default SubContent