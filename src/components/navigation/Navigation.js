import React, {useState} from 'react';
import './navigation.css';
import Logo from './logo2.svg';
import {Link} from 'react-router-dom';



function Navigation() {
    const [show,setShow]=useState(false)
  return (

    <div className='header-nav'>
        <div className="h-left">
            <Link to="/"><img src={Logo} /></Link>
        </div>
        <div className="h-right">
            <ul className="navbar">        
                <li><Link className="nav-header" to="/">Accueil</Link></li>
                <li>
                    <Link onClick={()=>setShow(!show)} className="nav-header menu-btn" id='drop-btn' to="#">Nos services</Link>
                  {
                    show?<ul className="sub-menu" id='hidden-menu'>
                        <li><Link className="nav-submenu" to="/nos-services/conseil">Conseil & SI</Link></li>
                        <li><Link className="nav-submenu" to="/nos-services/migration">Migration ERP</Link></li>
                        <li><Link className="nav-submenu" to="/nos-services/data">Data</Link></li>
                        <li><Link className="nav-submenu" to="/nos-services/ipa">IPA & RPA</Link></li>
                    </ul>
                    :null
                  }      
                </li>
                <li><Link className="nav-header" to="/nous-rejoindre">Nous rejoindre</Link></li>
                <li><Link className="nav-header" to="/contact">Contact</Link></li>
            </ul> 
        </div>
        <div className='hamburger'><Link className='btn-hamb' to="/navigation-mob"><i class="bi bi-list"></i></Link></div>
    </div>

  )
}

export default Navigation;
