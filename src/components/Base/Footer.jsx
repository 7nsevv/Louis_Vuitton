import React from "react";
import logo from '../../assets/home/logo.png';
import flagfr from '../../assets/home/flag_fr.png';

export default function Footer() {
  return (
    <footer className="lv-footer">
      <div className="lv-footer__main">
        <div className="lv-footer__col">
          <div className="lv-footer__title">AIDE</div>
          <div className="lv-footer__text">
            Service client disponible 7j/7, au{" "}
            <a className="underline" href="tel:+33977404077">+33 9 77 40 40 77</a>, par{" "}
            <a className="underline" href="#">Whatsapp</a> ou par <a className="underline" href="#">email</a>.
          </div>
          <a href="#">FAQ</a>
          <a href="#">Conseils d’entretien</a>
          <a href="#">Caractéristiques environnementales</a>
          <a href="#">Trouver un magasin ou restaurant</a>
          <a href="#">Prendre un rendez-vous en magasin</a>
        </div>
        <div className="lv-footer__col">
          <div className="lv-footer__title">SERVICES</div>
          <a href="#">Réparations</a>
          <a href="#">Personnalisation</a>
          <a href="#">L'Art d'Offrir</a>
          <a href="#">Téléchargez nos applications</a>
        </div>
        <div className="lv-footer__col">
          <div className="lv-footer__title">A PROPOS DE LOUIS VUITTON</div>
          <a href="#">Défilés</a>
          <a href="#">Arts & Culture</a>
          <a href="#">La Maison</a>
          <a href="#">Développement Durable</a>
          <a href="#">Nouveautés</a>
          <a href="#">Carrière</a>
          <a href="#">Fondation Louis Vuitton</a>
        </div>
        <div className="lv-footer__col">
          <div className="lv-footer__title">SUIVEZ-NOUS</div>
          <div className="lv-footer__text">
            <a className="underline" href="#">Souscrivez à la Newsletter</a> pour recevoir en
            exclusivité les dernières actualités de la Maison, les pré-lancements
            exclusifs en ligne et les nouvelles collections.
          </div>
          <a href="#">Réseaux sociaux</a>
        </div>
      </div>
      <div className="lv-footer__bottom">
        <div className="lv-footer__delivery">
          Pays de livraison :{" "}
          <span className="lv-footer__flag">
            <img src={flagfr}/>
          </span>{" "}
          <a href="#" className="lv-footer__country">
            France
          </a>
        </div>
        <div className="lv-footer__links">
          <a href="#">Plan du Site</a>
          <a href="#">Mentions légales</a>
          <a href="#">Accessibilité : partiellement conforme</a>
          <a href="#">Cookies</a>
        </div>
      </div>
      <div className="lv-footer__brand">
        <img href="/" src={logo} alt="Louis Vuitton" />
      </div>
    </footer>
  );
}
