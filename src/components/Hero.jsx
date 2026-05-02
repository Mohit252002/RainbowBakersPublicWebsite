import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      className="relative overflow-hidden flex items-center justify-center"
      style={{ minHeight: '420px', backgroundColor: 'var(--color-hero)' }}
    >
      {/* Decorative layers */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(232,133,10,0.22) 0%, transparent 70%)' }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(45deg, rgba(232,133,10,0.05) 0px, rgba(232,133,10,0.05) 1px, transparent 1px, transparent 20px)'
        }}
      />
      {/* Left vertical line */}
      <div className="absolute top-0 left-8 bottom-0 w-px opacity-20" style={{ backgroundColor: 'var(--color-accent)' }} />
      {/* Right vertical line */}
      <div className="absolute top-0 right-8 bottom-0 w-px opacity-20" style={{ backgroundColor: 'var(--color-accent)' }} />
      {/* Top accent line */}
      <div className="absolute top-4 left-16 right-16 h-px opacity-30" style={{ backgroundColor: 'var(--color-light)' }} />
      {/* Bottom accent line */}
      <div className="absolute bottom-4 left-16 right-16 h-px opacity-30" style={{ backgroundColor: 'var(--color-light)' }} />

      {/* Est. 2005 badge */}
      <div
        className="absolute top-6 right-6 px-3 py-1.5 rounded font-body text-xs font-bold uppercase tracking-widest"
        style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-light)', fontSize: '10px' }}
      >
        Est. 2005
      </div>

      {/* Center Content */}
      <div ref={ref} className="fade-up relative z-10 text-center px-7 py-12 max-w-2xl mx-auto">
        <p
          className="font-body uppercase tracking-widest mb-4"
          style={{ fontSize: '11px', color: 'var(--color-light)', opacity: 0.75, letterSpacing: '2.5px' }}
        >
          Indirapuram · Ghaziabad · Since 2005
        </p>

        <h1 className="font-display font-bold mb-4 leading-tight" style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', color: 'var(--color-light)' }}>
          Rainbow{' '}
          <span className="italic" style={{ color: 'var(--color-accent)' }}>Bakers</span>
        </h1>

        <p
          className="font-cormorant italic mb-3"
          style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', color: 'var(--color-light)', opacity: 0.9 }}
        >
          जहाँ हर CAKE कहे – Celebrate!
        </p>

        <p
          className="font-body mb-8 tracking-wide"
          style={{ color: 'var(--color-light)', opacity: 0.7, letterSpacing: '1px', fontSize: '13px' }}
        >
          Cakes · Pastries · Celebrations · Party Decor
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/menu"
            className="font-body font-bold uppercase tracking-widest px-7 py-3 rounded-sm transition-all duration-200 hover:opacity-90"
            style={{
              backgroundColor: 'var(--color-accent)',
              color: 'var(--color-dark)',
              fontSize: '12px',
              letterSpacing: '1.5px',
            }}
          >
            View Menu
          </Link>
          <Link
            to="/contact"
            className="font-body font-bold uppercase tracking-widest px-7 py-3 rounded-sm transition-all duration-200 hover:opacity-90"
            style={{
              border: '2px solid var(--color-light)',
              color: 'var(--color-light)',
              fontSize: '12px',
              letterSpacing: '1.5px',
            }}
          >
            Contact Us
          </Link>
        </div>

        {/* Slide indicator dots */}
        <div className="flex justify-center gap-2 mt-10">
          {[0, 1, 2].map(i => (
            <span
              key={i}
              className="block rounded-full transition-all duration-300"
              style={{
                width: i === 0 ? '24px' : '8px',
                height: '8px',
                backgroundColor: i === 0 ? 'var(--color-accent)' : 'rgba(253,232,192,0.4)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
