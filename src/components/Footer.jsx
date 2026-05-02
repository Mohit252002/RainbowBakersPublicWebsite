import { Link } from 'react-router-dom'

const HOURS = [
  { day: 'Monday – Sunday', time: '9:00 AM – 10:00 PM' },
  { day: 'Holidays', time: 'Open', accent: true },
]

const LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-dark)' }}>
      <div className="max-w-7xl mx-auto px-7 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Col 1: Brand + Address */}
        <div>
          <div className="font-display font-bold text-xl mb-1" style={{ color: 'var(--color-light)' }}>
            Rainbow <span style={{ color: 'var(--color-accent)' }}>Bakers</span>
          </div>
          <p className="font-cormorant italic text-sm mb-4" style={{ color: 'var(--color-light)', opacity: 0.75 }}>
            जहाँ हर CAKE कहे – Celebrate!
          </p>
          <address className="not-italic space-y-1 font-body text-sm" style={{ color: 'var(--color-light)', opacity: 0.8 }}>
            <p>452 G, Nyay Khand 1</p>
            <p>Indirapuram, Ghaziabad</p>
            <p className="mt-3">
              <a href="tel:+919911940700" style={{ color: 'var(--color-light)' }}>+91 9911940700</a>
            </p>
            <p>
              <a href="tel:+917011010310" style={{ color: 'var(--color-light)' }}>+91 7011010310</a>
            </p>
            <p className="mt-1">
              <a href="mailto:rainbow.bakers25@gmail.com" style={{ color: 'var(--color-accent)' }}>
                rainbow.bakers25@gmail.com
              </a>
            </p>
          </address>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h3
            className="font-body font-bold uppercase text-xs tracking-widest mb-5"
            style={{ color: 'var(--color-accent)', letterSpacing: '2px' }}
          >
            Quick Links
          </h3>
          <ul className="space-y-3">
            {LINKS.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="font-body text-sm transition-colors duration-200"
                  style={{ color: 'var(--color-light)', opacity: 0.8 }}
                  onMouseOver={e => { e.currentTarget.style.color = 'var(--color-accent)'; e.currentTarget.style.opacity = 1 }}
                  onMouseOut={e => { e.currentTarget.style.color = 'var(--color-light)'; e.currentTarget.style.opacity = 0.8 }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Business Hours */}
        <div>
          <h3
            className="font-body font-bold uppercase text-xs tracking-widest mb-5"
            style={{ color: 'var(--color-accent)', letterSpacing: '2px' }}
          >
            Business Hours
          </h3>
          <table className="w-full font-body text-sm">
            <tbody>
              {HOURS.map(({ day, time, accent }) => (
                <tr key={day}>
                  <td className="py-1 pr-4" style={{ color: 'var(--color-light)', opacity: 0.75 }}>{day}</td>
                  <td
                    className="py-1 text-right"
                    style={{ color: accent ? 'var(--color-accent)' : 'var(--color-light)', opacity: accent ? 1 : 0.9 }}
                  >
                    {time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t px-7 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 font-body text-xs"
        style={{ borderColor: 'rgba(253,232,192,0.15)', backgroundColor: 'rgba(0,0,0,0.2)' }}
      >
        <p style={{ color: 'var(--color-light)', opacity: 0.6 }}>
          © {new Date().getFullYear()} Rainbow Bakers. All rights reserved.
        </p>
        <a
          href="https://wa.me/919911940700"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-1.5 rounded-full font-body text-xs font-bold"
          style={{ backgroundColor: '#25D366', color: 'white' }}
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WhatsApp
        </a>
      </div>
    </footer>
  )
}
