import React from 'react';
import {Link} from 'react-router-dom';
import './footer.scoped.css'

function Footer() {
    return (
        <div className='footer'>
          
                <Link to="/nos-mentions-legales"><p class="nav-footer" >Nos Mentions Légales</p></Link>

                <Link to="/nos-engagements"><p class="nav-footer" >Nos Engagements</p></Link>  

                <Link to="/nos-valeurs"><p class="nav-footer">Nos Valeurs</p></Link>       
        
         </div>      
    )
};

export default Footer;