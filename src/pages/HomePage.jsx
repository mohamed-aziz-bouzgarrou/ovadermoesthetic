import { ArrowDown, ArrowUpRight, Heart, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard.jsx";
import { services } from "../data/services.js";
import hero from "../assets/hero.webp";
import footerImage from "../assets/footer.webp";

const featuredServices = services.slice(0, 4);

function HomePage() {
  return (
    <>
      <section className='hero' aria-labelledby='hero-title'>
        <img
          className='hero-image'
          src={hero}
          alt='Portrait lumineux, beauté naturelle et regard mis en valeur'
        />
        <div className='hero-shade' />
        <div className='hero-content'>
          <p className='eyebrow hero-eyebrow'>
            <span /> Institut de beauté · Choisy-le-Roi
          </p>
          <h1 id='hero-title'>Ovadermoesthetic</h1>
          <p className='hero-tagline'>Révéler votre beauté, tout en douceur.</p>
          <Link className='button button-light' to='/rendez-vous'>
            Réserver mon rendez-vous <ArrowUpRight size={17} />
          </Link>
        </div>
        <a className='hero-scroll' href='#about'>
          <span>Découvrir l’institut</span>
          <ArrowDown size={15} />
        </a>
        <span className='hero-index'>01 / BEAUTÉ SUR MESURE</span>
      </section>

      <section className='intro-section section-wrap' id='about'>
        <div className='intro-label'>
          <span className='eyebrow'>Bienvenue chez Ova</span>
          <span className='intro-line' />
        </div>
        <div className='intro-copy'>
          <h2>
            Un savoir-faire précis.
            <br />
            <em>Une beauté qui vous ressemble.</em>
          </h2>
          <p>
            Ovadermoesthetic est un institut spécialisé en dermopigmentation et
            beauté du regard, au cœur de Choisy-le-Roi. Du maquillage permanent
            aux soins du visage, chaque geste est pensé pour révéler votre
            beauté naturelle.
          </p>
          <p>
            Microblading, microshading, maquillage des lèvres et des yeux,
            détatouage sans laser, camouflage des cicatrices, extensions et
            rehaussement de cils, beauté des mains et épilations : nous vous
            accueillons avec un service professionnel et des produits premium.
          </p>
          <Link className='text-link' to='/rendez-vous'>
            Rencontrons-nous <ArrowUpRight size={15} />
          </Link>
        </div>
        <div className='intro-stamp' aria-hidden='true'>
          <Sparkles size={20} />
          <span>
            Expertise
            <br />& douceur
          </span>
          <Heart size={13} />
        </div>
      </section>

      <section className='services-section' id='services'>
        <div className='section-wrap'>
          <div className='section-heading'>
            <div>
              <span className='eyebrow'>Le menu des soins</span>
              <h2>
                Votre rituel,
                <br />
                <em>notre expertise.</em>
              </h2>
            </div>
            <p>
              Des gestes experts, des pigments choisis avec soin, et une
              attention portée à chaque détail.
            </p>
          </div>
          <div className='services-grid'>
            {featuredServices.map((service, index) => (
              <ServiceCard
                key={service.category}
                service={service}
                index={index}
              />
            ))}
          </div>
          <div className='services-actions'>
            <Link className='button button-dark' to='/nos-soins'>
              Voir tous les soins <ArrowUpRight size={17} />
            </Link>
          </div>
          <p className='price-note'>
            Tarifs indicatifs, susceptibles d’évoluer. Un diagnostic
            personnalisé peut être proposé avant chaque prestation.
          </p>
        </div>
      </section>

      <section className='location-section' id='location'>
        <img
          className='location-photo'
          src={footerImage}
          alt="Intérieur apaisant d'un institut de beauté"
        />
        <div className='location-content'>
          <span className='eyebrow'>À deux pas de vous</span>
          <h2>
            Un moment pour soi,
            <br />
            <em>à Choisy-le-Roi.</em>
          </h2>
          <p>
            Nous vous accueillons dans un espace dédié à votre beauté et à votre
            bien-être.
          </p>
          <address>
            <MapPin size={18} />
            <span>
              25 Rue du N<br />
              94600 Choisy-le-Roi
            </span>
          </address>
          <a
            className='text-link'
            href='https://maps.google.com/?q=25+Rue+du+N,+94600+Choisy-le-Roi'
            target='_blank'
            rel='noreferrer'>
            Itinéraire <ArrowUpRight size={15} />
          </a>
          <div className='map-embed-wrap'>
            <iframe
              title='Carte Ovadermoesthetic'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1314.7307546381953!2d2.420072674867147!3d48.77307891196246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6749deeebf99b%3A0xcf6868eeaffd504f!2sOvaadermoesthetic!5e0!3m2!1sen!2stn!4v1790543875094!5m2!1sen!2stn'
              width='600'
              height='450'
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='strict-origin-when-cross-origin'
            />
          </div>
          <p className='hours-note'>
            Horaires sur rendez-vous · Contactez-nous pour convenir d’un
            créneau.
          </p>
        </div>
      </section>
    </>
  );
}

export default HomePage;
