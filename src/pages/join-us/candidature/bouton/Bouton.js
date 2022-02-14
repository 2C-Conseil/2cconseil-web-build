import React, {Component} from "react";
import {Link} from 'react-router-dom';
import './bouton.css';

export default  class Bouton extends Component {


    render() {

        return(
            <div>
                <Link to="/nous-rejoindre/candidature-spontanée"></Link><button className="cand-btn" onClick={this.Show} >Candidature spontanée</button>
            </div>


        )
    }
}
