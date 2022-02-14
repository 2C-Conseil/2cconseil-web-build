import React from 'react';
import './candidature.css'
import CandSvg from './cand-icon.svg';


function Cand() {
    return(
        <div className='Cand'>
         <div class="cont-left">
                <div class="left-content">
                    <div class="titleCS">
                        <h1>Rejoignez nos équipes !</h1>
                    </div>
                    <div class="formu"> 
                        <form action="">
                            <div className='field'>
                                <p className='title-field'>Nom/Prénom<span className='dot'>*</span></p>
                                <input className='inin'  type="name" required />
                            </div>
                            <div className='field right-move'>
                                <p className='title-field'>E-mail<span className='dot'>*</span></p>
                                <input className='inin'  type="email" required />
                            </div>
                            <div className='field'> 
                                <p className='title-field '>Numéro de téléphone</p> 
                                <input className='inin'  type="text" required />
                            </div>
                            <div className='field right-move'>
                                <p className='title-field'>Date disponible</p>
                                <input className='inin'  type="date" />
                            </div>
                            <div className='field'>
                                <p className='title-field'>Importer CV<span className='dot'>*</span></p>
                                <input  className='imp inin' type="file" placeholder="CV" />
                            </div>
                            <div className='field right-move'>
                                <p className='title-field '>Importer Lettre de motivation<span className='dot'>*</span></p>
                                <input className='imp inin' type="file" placeholder="CV" />
                            </div>
                            <input class="btn" type="submit" value="Envoyer" />
                        </form>
                    </div>
                </div>
            </div>
            <div class="cont-right">
                <div class="x-icon">
                    <i class="bi bi-x-lg"></i>
                </div>
                <div class="right-content">
                    <img src={CandSvg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Cand;