import React, {Component} from "react";
import '../styles/Main.css'
import Advertisement from "./Advertisement";
import SubContent from "./SubContents";

class Main extends Component{
    render(){
        return(
            <main  className="main" >
                <div className="mainSection"></div>
                <div className="mainAdvertisement" >
                    <Advertisement />
                </div>
            </main>
        )
    }
}

export default Main