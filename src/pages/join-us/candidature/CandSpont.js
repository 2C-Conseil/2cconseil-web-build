import React from 'react';
import {Link} from 'react-router-dom';
import './candidature.scoped.css'
import "aos/dist/aos.css";
import CandSsvg from './candsp-icon.svg';



function CandSpont() {
    return(
    
  <div className='CandSpont' id='candspo'> 
         <div class="cont-left">
                <div class="left-content">
                    <div class="titleCS">
                       <h1>Rejoignez nos équipes en un clic !</h1> 
                    </div>
                    <div class="formu"> 
                        <form action="">
                            <div className='field'>
                                <p className='title-field'>Nom/Prénom<span className='dot'>*</span></p>
                                <input className='inin' type="name" required />
                            </div>
                            <div className='field right-move'>
                                <p className='title-field'>E-mail<span className='dot'>*</span></p>
                                <input className='inin'  type="email" required />
                            </div>
                            <div className='field'> 
                                <p className='title-field '>Numéro de téléphone<span className='dot'>*</span></p> 
                                <input className='inin'  type="text" required />
                            </div>
                            <div className='field right-move'>
                                <p className='title-field'>Date disponible</p>
                                <input className='inin' type="date" />
                            </div>
                            <div className='field'>
                                <p className='title-field'>CV<span className='dot'>*</span></p>
                                <input className='imp inin' type="file" placeholder="CV" />
                            </div>
                            <div className='field right-move'>
                                <p className='title-field '>Lettre de motivation</p>
                                <input className='imp inin' type="file" placeholder="CV" />
                            </div>
                            <input class="btn" type="submit" value="Envoyer" />
                        </form>
                    </div>
                </div>
          </div>
            <div class="cont-right">
                <div class="x-icon">
                    <Link to="/nous-rejoindre"><i class="bi bi-x-lg"></i></Link>
                </div>
                <div class="right-content">
                    <img src={CandSsvg} alt="logo vectoriel candidature spontanée" />
                </div>
            </div>
    </div>
    )
}

export default CandSpont;