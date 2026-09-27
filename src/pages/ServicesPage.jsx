import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { services } from '../data/services.js'

function ServicesPage() {
  return (
    <section className='services-page section-wrap'>
      <div className='section-heading services-page-heading'>
        <div>
          <span className='eyebrow'>Tous nos soins</span>
          <h2>
            Des prestations pensées
            <br />
            <em>pour chaque besoin.</em>
          </h2>
        </div>
        <Link className='text-link' to='/rendez-vous'>
          Réserver <ArrowUpRight size={15} />
        </Link>
      </div>

      <div className='services-page-grid'>
        {services.map((service, index) => (
          <article key={service.category} className='service-card service-card-full' style={{ '--card-index': index }}>
            <div className='service-card-top'>
              <span className='service-number'>{String(index + 1).padStart(2, '0')}</span>
              <span className='service-rule' />
            </div>
            <h3>{service.category}</h3>
            <ul className='treatment-list'>
              {service.items.map((item) => (
                <li key={item.name}>
                  <span className='treatment-name'>{item.name}</span>
                  <span className='treatment-price'>{item.price} €</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ServicesPage
