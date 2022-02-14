import {Routes as Switch} from 'react-router-dom';
import {Route} from "react-router";
import Home from './pages/home/Home';
import Conseil from './pages/nos-services/conseil/Conseil';
import Migration from './pages/nos-services/migration/Migration';
import Data from './pages/nos-services/data/Data';
import Ipa from './pages/nos-services/ipa/Ipa';
import JoinUs from './pages/join-us/JoinUs';
import Offre from './pages/join-us/offre/Offre';
import Cand from './pages/join-us/candidature/Cand';
import CandSpont from './pages/join-us/candidature/CandSpont';
import Contact from './pages/contact/Contact';
import Engagement from './pages/footer/Engagements';
import Mention from './pages/footer/Mention';
import Valeurs from './pages/footer/Valeurs';
import ErrorPage from './components/error-page/ErrorPage';

function RouteApp(){
    return (
        
    <Switch>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/nos-services/conseil" element={<Conseil />} />
    <Route exact path="/nos-services/migration" element={<Migration />} />
    <Route exact path="/nos-services/data" element={<Data />} />
    <Route exact path="/nos-services/ipa" element={<Ipa />} />
    <Route exact path="/nous-rejoindre" element={<JoinUs />} />
    <Route exact path="/nous-rejoindre/nos-offres" element={<Offre />} />
    <Route exact path="/candisp" element={<CandSpont />} />
    <Route exact path="/candisp"element={<Cand />} />
    <Route exact path="/contact" element={<Contact />} />
    <Route exact path="/nos-engagements" element={<Engagement />} />
    <Route exact path="/nos-valeurs" element={<Valeurs />} />
    <Route exact path="/page-en-cours-de-production" element={<ErrorPage />} />
    <Route path="/nos-mentions-legales" element={<Mention />} />
    </Switch>


    )

}

export default RouteApp;
