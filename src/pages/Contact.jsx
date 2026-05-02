import { useState } from 'react'
import FestiveBar from '../components/FestiveBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const HOURS = [
  { day: 'Monday – Sunday', time: '9:00 AM – 10:00 PM' },
  { day: 'Holidays', time: 'Open', accent: true },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', need: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <FestiveBar />
      <Navbar />
      <main>
        {/* Page Header */}
        <div
          className="px-7 py-16 text-center relative overflow-hidden"
          style={{ backgroundColor: 'var(--color-dark)' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(232,133,10,0.18) 0%, transparent 70%)' }}
          />
          <p
            className="font-body uppercase text-xs tracking-widest mb-3 relative z-10"
            style={{ color: 'var(--color-accent)', letterSpacing: '2px' }}
          >
            Rainbow Bakers
          </p>
          <h1 className="font-display font-bold text-4xl mb-3 relative z-10" style={{ color: 'var(--color-light)' }}>
            Visit & <span className="italic" style={{ color: 'var(--color-accent)' }}>Connect</span>
          </h1>
          <p className="font-cormorant italic text-xl relative z-10" style={{ color: 'var(--color-light)', opacity: 0.8 }}>
            We'd love to hear from you — visit us or reach out anytime
          </p>
        </div>

        {/* Top 2-column: Address + Map */}
        <section className="px-7 py-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: Address + WhatsApp + Hours */}
          <div>
            <h2 className="font-display font-semibold text-2xl mb-5" style={{ color: 'var(--color-text)' }}>Find Us</h2>

            <div className="mb-6">
              <p className="font-body text-sm font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--color-primary)', fontSize: '10px' }}>
                Address
              </p>
              <p className="font-body" style={{ color: 'var(--color-text)' }}>452 G, Nyay Khand 1</p>
              <p className="font-body" style={{ color: 'var(--color-text)' }}>Indirapuram, Ghaziabad</p>
            </div>

            <div className="mb-6 space-y-3">
              <p className="font-body text-sm font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--color-primary)', fontSize: '10px' }}>
                WhatsApp
              </p>
              <a
                href="https://wa.me/919911940700"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-lg font-body font-bold transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#25D366', color: 'white' }}
              >
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                +91 9911940700 (Primary)
              </a>
              <a
                href="https://wa.me/917011010310"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-lg font-body font-bold border-2 transition-opacity hover:opacity-90"
                style={{ borderColor: '#25D366', color: '#25D366', backgroundColor: 'transparent' }}
              >
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                +91 7011010310 (Secondary)
              </a>
            </div>

            <div>
              <p className="font-body text-sm font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--color-primary)', fontSize: '10px' }}>
                Business Hours
              </p>
              <table className="w-full font-body text-sm" style={{ borderCollapse: 'collapse' }}>
                <tbody>
                  {HOURS.map(({ day, time, accent }) => (
                    <tr key={day} style={{ borderBottom: '1px solid var(--color-light)' }}>
                      <td className="py-2 pr-4" style={{ color: 'var(--color-muted)' }}>{day}</td>
                      <td
                        className="py-2 text-right font-bold"
                        style={{ color: accent ? 'var(--color-accent)' : 'var(--color-text)' }}
                      >
                        {time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right: Google Maps */}
          <div className="rounded-lg overflow-hidden" style={{ minHeight: '400px', border: '1px solid var(--color-light)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2512.327081103948!2d77.3502613!3d28.637093599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb2acee7c1cf%3A0x9a6226a355ba12f6!2sRainbow%20Bakers!5e1!3m2!1sen!2sin!4v1777713543323!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rainbow Bakers location"
            />
          </div>
        </section>

        {/* Bottom 2-column: Form + Social Cards */}
        <section
          className="px-7 py-12"
          style={{ backgroundColor: 'var(--color-surface)' }}
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
     

            {/* Social / Contact Cards */}
            <div>
              <h2 className="font-display font-semibold text-2xl mb-6" style={{ color: 'var(--color-text)' }}>
                Connect With Us
              </h2>
              <div className="space-y-4">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/919911940700"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-lg transition-opacity hover:opacity-90"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <svg className="w-8 h-8 text-white flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <div>
                    <p className="font-body font-bold text-white">WhatsApp</p>
                    <p className="font-body text-sm" style={{ color: 'rgba(255,255,255,0.85)' }}>+91 9911940700</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:rainbow.bakers25@gmail.com"
                  className="flex items-center gap-4 p-5 rounded-lg transition-opacity hover:opacity-90"
                  style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-light)' }}
                >
                  <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--color-primary)' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <div>
                    <p className="font-body font-bold" style={{ color: 'var(--color-text)' }}>Email</p>
                    <p className="font-body text-sm" style={{ color: 'var(--color-muted)' }}>rainbow.bakers25@gmail.com</p>
                  </div>
                </a>

                {/* Instagram */}
                <div
                  className="flex items-center gap-4 p-5 rounded-lg"
                  style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-light)' }}
                >
                  <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--color-primary)' }}>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                  <div>
                    <p className="font-body font-bold" style={{ color: 'var(--color-text)' }}>Instagram</p>
                    <p className="font-body text-sm" style={{ color: 'var(--color-muted)' }}>@rainbowbakers_indirapuram</p>
                  </div>
                </div>

                {/* Custom order note */}
                <div
                  className="rounded-lg p-5"
                  style={{ backgroundColor: 'var(--color-light)', border: '1px solid var(--color-accent)' }}
                >
                  <p className="font-display font-semibold text-base mb-1" style={{ color: 'var(--color-primary)' }}>
                    Custom Orders Welcome!
                  </p>
                  <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                    We craft personalized cakes for weddings, birthdays, corporate events, and every celebration in between. Reach out at least 3–5 days in advance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FestiveBar />
    </>
  )
}
