import React, {useState} from 'react';
import './submenu-mob.css';
import {Link} from 'react-router-dom';


function SubMenuMob(){
    const [show,setReveal]=useState(false)
    return(
        <div className='submenu-mob'>
            <div className='cancel-mob'><Link to="/"><i class="bi cancel-btn-mob bi-x-lg"></i></Link></div>
               
                <ul>
                    <div className='menu-nav-mob'>
                        <Link to="/"><li className="nav-mob">Accueil</li></Link>
                        <Link onClick={()=>setReveal(!show)} to="#"><li className="nav-mob">Nos services <i class="bi bi-caret-down-fill"></i>
                        
                        {
                            show?<ul className='subdrop-mob'>
                                    <Link to="/nos-services/conseil"><li className="navsub-mob" >Conseil & SI</li></Link>
                                    <Link to="/nos-services/migration"><li className="navsub-mob" >Migration ERP</li></Link>
                                    <Link to="/nos-services/data"><li className="navsub-mob">Data</li></Link>
                                    <Link to="/nos-services/ipa"><li className="navsub-mob">IPA & RPA</li></Link> 
                                 </ul>
                            :null
                        }      
                        </li></Link>
                        <Link to="/nous-rejoindre"><li className="nav-mob">Nous rejoindre</li></Link>
                        <Link to="/contact"><li className="nav-mob">Contact</li></Link>
                    </div>
                </ul>
                
        </div>
    )
}

export default SubMenuMob;