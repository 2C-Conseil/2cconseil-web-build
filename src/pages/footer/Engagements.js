import React from 'react';
import './engagement.css'


function Engagement(){
    return(

        <div class="Engagement-container">
            <div class="head-ban">
                <div class="ban"></div>
                <div class="title"><p>Nos Engagements</p></div>
            </div>
            <section class="engage">
                <div class="droit">
                    <h1>Vos besoins et objectifs</h1>
                    <p>Dès le départ d’une mission, nous sommes attentifs à l’expression de vos besoins et objectifs pour orienter au mieux notre accompagnement vers vos objectifs.</p>
                </div>
                <div class="comp">
                    <h1>Compétence métier et technique</h1>
                    <p>Nous vous apportons une double compétence métier et technique. Les associés et seniors font équipe avec nos juniors, apportant connaissances et compétences, encadrant et validant tous les livrables.
                    Toutes informations et éléments qui nous seront transmises, seront réputées comme non confidentielles.</p>

                </div>
                <div class="design">
                    <h1>Best practicess</h1>
                    <p>
                        Nous veillons à appliquer, dans nos domaines et dans les vôtres, les best practices en vigueur, que ce soit en matière d’expertise, de méthode de travail ou d’éthique.
                    </p>
                </div>
            </section>
        </div>
    )
}


export default Engagement;