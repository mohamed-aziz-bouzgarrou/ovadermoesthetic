import { useState } from 'react'
import { ArrowLeft, ArrowUpRight, Check, Clock3, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { services } from '../data/services.js'
import heroImage from '../assets/hero.webp'

const timeSlots = ['09:00', '10:30', '12:00', '14:00', '15:30', '17:00']

function AppointmentPage() {
  const [category, setCategory] = useState(services[0].category)
  const [treatment, setTreatment] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const selectedService = services.find((service) => service.category === category)

  function handleCategoryChange(event) {
    setCategory(event.target.value)
    setTreatment('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
    console.info('Demande de rendez-vous Ovadermoesthetic envoyée localement.')
  }

  return (
    <div className="booking-page">
      <div className="booking-banner">
        <div className="booking-banner-photo" style={{ backgroundImage: `linear-gradient(90deg, transparent 60%, #e8ded6 100%), url(${heroImage})` }} />
        <div className="booking-banner-copy">
          <Link to="/" className="back-link"><ArrowLeft size={15} /> Retour à l’accueil</Link>
          <span className="eyebrow">Un instant rien que pour vous</span>
          <h1>Prendre<br /><em>rendez-vous.</em></h1>
          <p>Choisissez votre soin et vos disponibilités. Nous vous recontacterons pour confirmer votre demande.</p>
        </div>
      </div>

      <section className="booking-content section-wrap">
        <div className="booking-aside">
          <span className="booking-step">01 <span>/ VOTRE DEMANDE</span></span>
          <h2>Commençons<br /><em>par vous.</em></h2>
          <p>Quelques informations nous aideront à préparer votre venue dans les meilleures conditions.</p>
          <div className="booking-callout">
            <span className="callout-icon"><Clock3 size={17} /></span>
            <p>Votre demande ne vaut pas confirmation. Nous vous appelons pour valider ensemble le créneau.</p>
          </div>
          <a className="booking-phone" href="tel:+33785924509"><Phone size={16} /> ou appelez-nous au <strong>07 85 92 45 09</strong></a>
        </div>

        <div className="booking-form-wrap">
          {submitted ? (
            <div className="confirmation" role="status">
              <span className="confirmation-icon"><Check size={24} /></span>
              <span className="eyebrow">Demande prise en compte</span>
              <h2>Merci pour<br /><em>votre confiance.</em></h2>
              <p>Votre demande a bien été préparée. Nous vous contacterons pour confirmer votre rendez-vous.</p>
              <button className="button button-dark" type="button" onClick={() => setSubmitted(false)}>Envoyer une autre demande <ArrowUpRight size={16} /></button>
            </div>
          ) : (
            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="form-section-title"><span>01</span><h2>Le soin souhaité</h2></div>
              <label className="field field-full">
                <span>Catégorie de soin</span>
                <select value={category} onChange={handleCategoryChange} required>
                  {services.map((service) => <option key={service.category} value={service.category}>{service.category}</option>)}
                </select>
              </label>
              <label className="field field-full">
                <span>Soin souhaité</span>
                <select value={treatment} onChange={(event) => setTreatment(event.target.value)} required>
                  <option value="" disabled>Choisir une prestation</option>
                  {selectedService?.items.map((item) => <option key={item.name} value={item.name}>{item.name} · {item.duration} · {item.price} €</option>)}
                </select>
              </label>

              <div className="form-section-title"><span>02</span><h2>Vos disponibilités</h2></div>
              <label className="field field-full">
                <span>Date souhaitée</span>
                <input type="date" min={new Date().toISOString().split('T')[0]} required />
              </label>
              <fieldset className="field field-full time-field">
                <legend>Créneau préféré</legend>
                <div className="time-options">
                  {timeSlots.map((slot) => (
                    <label className="time-option" key={slot}>
                      <input type="radio" name="time" value={slot} required />
                      <span>{slot}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="form-section-title"><span>03</span><h2>Vos coordonnées</h2></div>
              <div className="form-grid">
                <label className="field">
                  <span>Nom et prénom</span>
                  <input type="text" name="name" autoComplete="name" placeholder="Votre nom" required />
                </label>
                <label className="field">
                  <span>Téléphone</span>
                  <input type="tel" name="phone" autoComplete="tel" placeholder="06 00 00 00 00" required />
                </label>
                <label className="field field-full">
                  <span>Adresse e-mail</span>
                  <input type="email" name="email" autoComplete="email" placeholder="vous@exemple.fr" required />
                </label>
                <label className="field field-full">
                  <span>Votre message <small>(facultatif)</small></span>
                  <textarea name="notes" rows="4" placeholder="Une précision à nous partager ?" />
                </label>
              </div>
              <button className="button button-dark submit-button" type="submit">Envoyer ma demande <ArrowUpRight size={17} /></button>
              <p className="form-disclaimer">Aucune donnée n’est enregistrée sur ce site. Votre demande sert uniquement à simuler une prise de rendez-vous.</p>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}

export default AppointmentPage