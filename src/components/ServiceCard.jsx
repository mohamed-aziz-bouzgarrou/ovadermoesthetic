import { ArrowUpRight, Clock3 } from 'lucide-react'
import { Link } from 'react-router-dom'

function ServiceCard({ service, index }) {
  return (
    <article className="service-card" style={{ '--card-index': index }}>
      <div className="service-card-top">
        <span className="service-number">{String(index + 1).padStart(2, '0')}</span>
        <span className="service-rule" />
      </div>
      <h3>{service.category}</h3>
      <ul className="treatment-list">
        {service.items.map((item) => (
          <li key={item.name}>
            <span className="treatment-name">{item.name}</span>
            <span className="treatment-meta"><Clock3 size={13} /> {item.duration}</span>
            <span className="treatment-price">{item.price} €</span>
          </li>
        ))}
      </ul>
      <Link className="card-booking" to="/rendez-vous">
        Choisir ce soin <ArrowUpRight size={15} />
      </Link>
    </article>
  )
}

export default ServiceCard