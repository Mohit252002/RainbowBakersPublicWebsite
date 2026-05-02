import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import FestiveBar from '../components/FestiveBar'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import ProductGrid from '../components/ProductGrid'
import TestimonialCard from '../components/TestimonialCard'
import { useProducts } from '../hooks/useProducts'
import { useProductTypes } from '../hooks/useProductTypes'

const testimonials = [
  {
    quote: "The best cake I've ever had! My daughter's birthday was made magical by Rainbow Bakers. We've been coming here for 10 years.",
    author: 'Priya Sharma',
    location: 'Indirapuram',
  },
  {
    quote: "Their custom wedding cake was absolutely stunning. The taste was divine, exactly what we envisioned. Highly recommended!",
    author: 'Rahul & Neha Gupta',
    location: 'Vaishali',
  },
  {
    quote: "Fresh pastries every morning, party decoration at great prices, and staff that truly understands what you need. Amazing!",
    author: 'Sunita Agarwal',
    location: 'Indirapuram',
  },
]

function FadeSection({ children, className = '', style = {} }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return <div ref={ref} className={`fade-up ${className}`} style={style}>{children}</div>
}

export default function Home() {
  const { products, loading } = useProducts()
  const { types } = useProductTypes()
  const featured = products.slice(0, 4)

  return (
    <>
      <FestiveBar />
      <Navbar />
      <main>
        {/* Hero */}
        <Hero />

        {/* Value Strip */}
        <div
          className="py-3 px-7 overflow-hidden"
          style={{ backgroundColor: 'var(--color-primary)' }}
        >
          <p
            className="font-body font-bold text-center text-xs uppercase tracking-widest whitespace-nowrap"
            style={{ color: 'var(--color-light)', letterSpacing: '2px' }}
          >
            ✦ Fresh Daily &nbsp;&nbsp; ✦ Custom Orders &nbsp;&nbsp; ✦ Party Decoration &nbsp;&nbsp; ✦ 20+ Years of Love
          </p>
        </div>

        {/* Featured Products */}
        <section className="px-7 py-12 max-w-7xl mx-auto">
          <FadeSection>
            <div className="text-center mb-10">
              <p
                className="font-body uppercase text-xs tracking-widest mb-2"
                style={{ color: 'var(--color-primary)', letterSpacing: '2px' }}
              >
                Our Specialities
              </p>
              <h2 className="font-display font-bold text-3xl" style={{ color: 'var(--color-text)' }}>
                Featured Creations
              </h2>
            </div>
          </FadeSection>
          <ProductGrid products={featured} types={types} loading={loading} />
          <div className="text-center mt-10">
            <Link
              to="/menu"
              className="inline-block font-body font-bold uppercase tracking-widest px-8 py-3 rounded-sm transition-all duration-200 hover:opacity-90"
              style={{
                backgroundColor: 'var(--color-dark)',
                color: 'var(--color-light)',
                fontSize: '12px',
                letterSpacing: '1.5px',
              }}
            >
              View Full Menu
            </Link>
          </div>
        </section>

        {/* About Teaser */}
        <FadeSection>
          <section
            className="px-7 py-14"
            style={{ backgroundColor: 'var(--color-dark)' }}
          >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <p
                  className="font-body uppercase text-xs tracking-widest mb-3"
                  style={{ color: 'var(--color-accent)', letterSpacing: '2px' }}
                >
                  Our Story
                </p>
                <h2 className="font-display font-bold text-3xl mb-5" style={{ color: 'var(--color-light)' }}>
                  Two Decades of Sweetness
                </h2>
                <p className="font-cormorant italic text-lg leading-relaxed mb-4" style={{ color: 'var(--color-light)', opacity: 0.85 }}>
                  Since 2005, Rainbow Bakers has been the heart of celebrations in Indirapuram. What started as a small dream has blossomed into a beloved institution — trusted by over 10,000 families.
                </p>
                <p className="font-body text-sm leading-relaxed mb-8" style={{ color: 'var(--color-light)', opacity: 0.7 }}>
                  Every cake we bake, every pastry we craft is made with fresh ingredients and years of love. We don't just make cakes — we make memories.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  {[['20+', 'Years'], ['10K+', 'Families'], ['500+', 'Designs']].map(([num, label]) => (
                    <div key={label} className="text-center">
                      <div className="font-display font-bold text-3xl" style={{ color: 'var(--color-accent)' }}>{num}</div>
                      <div className="font-body text-xs uppercase tracking-wider mt-1" style={{ color: 'var(--color-light)', opacity: 0.7 }}>{label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="rounded-lg h-64 md:h-80 flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, var(--color-hero) 0%, var(--color-primary) 100%)',
                  border: '1px solid rgba(232,133,10,0.3)',
                }}
              >
                <p className="font-cormorant italic text-2xl text-center px-8" style={{ color: 'var(--color-light)', opacity: 0.7 }}>
                  Freshly baked with love,<br />every single day
                </p>
              </div>
            </div>
          </section>
        </FadeSection>

        {/* Testimonials */}
        <section
          className="px-7 py-14"
          style={{ backgroundColor: 'var(--color-surface)' }}
        >
          <div className="max-w-7xl mx-auto">
            <FadeSection>
              <div className="text-center mb-10">
                <p
                  className="font-body uppercase text-xs tracking-widest mb-2"
                  style={{ color: 'var(--color-primary)', letterSpacing: '2px' }}
                >
                  What Our Customers Say
                </p>
                <h2 className="font-display font-bold text-3xl" style={{ color: 'var(--color-text)' }}>
                  Stories of Joy
                </h2>
              </div>
            </FadeSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <FadeSection key={i}>
                  <TestimonialCard {...t} />
                </FadeSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <FadeSection>
          <section
            className="px-7 py-14 text-center"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            <h2 className="font-display font-bold text-3xl mb-3" style={{ color: 'white' }}>
              Ready to Celebrate?
            </h2>
            <p className="font-cormorant italic text-xl mb-8" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Call us to place your order or discuss a custom cake
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:+919911940700"
                className="font-body font-bold uppercase tracking-widest px-8 py-3 rounded-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: 'white', color: 'var(--color-primary)', fontSize: '12px', letterSpacing: '1.5px' }}
              >
                +91 9911940700
              </a>
              <a
                href="tel:+917011010310"
                className="font-body font-bold uppercase tracking-widest px-8 py-3 rounded-sm border-2 transition-opacity hover:opacity-90"
                style={{ borderColor: 'white', color: 'white', fontSize: '12px', letterSpacing: '1.5px' }}
              >
                +91 7011010310
              </a>
            </div>
          </section>
        </FadeSection>
      </main>
      <Footer />
      <FestiveBar />
    </>
  )
}
