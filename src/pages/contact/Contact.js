import React, {useEffect} from 'react';
import "aos/dist/aos.css";
import Aos from 'aos';
import './contact.scoped.css'
import hContImg from './img/head-contact.svg'

function Contact() {

    useEffect(() => {
        Aos.init({});
       }, []);

  return (
    <div className="Contact">
        <div className='Cimg'>
            <img className="cont-img" src={hContImg}  alt="En-tete contact" />
            <div className='ban-contact-mob'>Contact</div>
        </div>
        <section class="info-contoct">
                <div class="bloc-contact leftC" data-aos="fade-up"
                                            data-aos-duration="2600">
                    <h1 className='title-info-contact'>Adresse</h1>
                    <p>11 Rue Antoine Lavoisier <br />
                       Roissy en brie 77860, France</p>
                </div>
                <div class="bloc-contact centerC" data-aos="fade-up"
                                                 data-aos-duration="2800">
                    <h1 className='title-info-contact'>Coordonnées</h1>
                    <p>Tél. 09 73 88 09 37 <br />
                       contact@2cconseil.com
                    </p>
                </div>
                <div class="bloc-contact rightC" data-aos="fade-up"
                                                data-aos-duration="3000">
                    <h1 className='title-info-contact'>Horaires d'ouverture</h1>
                    <p>Lundi - Vendredi <br />
                       9h30 - 18h30
                    </p>
                </div>
            </section>
            <section class="form-frame" data-aos="fade-up"
                                        data-aos-duration="1200">
                <div class="formulaire">
                    <form className="formCt" action="">
                        <div class="title-input">
                            <h4>Nom et Prénom <span class="dot">*</span></h4>
                            <input className="fieldCt"  type="name" required />
                        </div>
                        <div class="title-input">
                            <h4>E-mail <span class="dot">*</span></h4>
                            <input className="fieldCt" type="mail" required />
                        </div>
                        <div class="title-input">
                            <h4>Message <span class="dot">*</span></h4>
                            <textarea name="message" id="message" required></textarea>
                        </div>
                        <button  class="submiter" type="button">Envoyer</button>
                    </form>
                </div>
                <div className='frame'>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2628.186116994747!2d2.648345115672219!3d48.79742637928154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6059717fc7005%3A0x1eeb7a1348a6a0ab!2s11%20Rue%20Antoine%20Lavoisier%2C%2077680%20Roissy-en-Brie!5e0!3m2!1sfr!2sfr!4v1637573057236!5m2!1sfr!2sfr "
                    allowfullscreen=" " loading="lazy " />
                </div>
            </section>
        </div>
  
  )
};

export default Contact;
