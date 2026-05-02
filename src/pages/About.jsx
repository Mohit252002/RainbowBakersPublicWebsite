import { useEffect, useRef } from 'react'
import FestiveBar from '../components/FestiveBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useBakeryPhotos } from '../hooks/useBakeryPhotos'

const VALUES = [
  { icon: '🌿', title: 'Fresh Every Day', desc: 'All our products are baked fresh each morning, never a day old.' },
  { icon: '✨', title: 'Custom Crafted', desc: 'Every order is made to your specifications — no templates.' },
  { icon: '🤝', title: 'Community First', desc: 'Proudly serving Indirapuram and neighbouring areas since 2005.' },
  { icon: '🌾', title: 'Quality Ingredients', desc: 'We source the finest flour, dairy, and fruits for every recipe.' },
  { icon: '🎉', title: 'Celebration Experts', desc: 'From birthdays to weddings, we\'ve handled thousands of events.' },
  { icon: '💛', title: 'Two Decades of Trust', desc: 'Over 20 years of consistent quality, love, and smiles.' },
]

const TIMELINE = [
  { year: '2005', label: 'Rainbow Bakers Opens', desc: 'A small shop with a big dream opens its doors in Indirapuram.' },
  { year: '2010', label: 'Custom Cakes Launch', desc: 'We begin taking fully custom cake orders for weddings and events.' },
  { year: '2015', label: 'Party Decor Added', desc: 'Expanded offerings to include full-service party decoration.' },
  { year: '2020', label: 'Next Generation', desc: 'Second generation joins the business, bringing new ideas and energy.' },
  { year: '2025', label: 'Going Digital', desc: 'Launched our online presence to serve customers across the region.' },
]

function FadeSection({ children, className = '' }) {
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
  return <div ref={ref} className={`fade-up ${className}`}>{children}</div>
}

export default function About() {
  const { photos, loading: photosLoading } = useBakeryPhotos()

  return (
    <>
      <FestiveBar />
      <Navbar />
      <main>
        {/* Page Header */}
        <div
          className="px-7 py-16 text-center relative overflow-hidden"
          style={{ backgroundColor: 'var(--color-hero)' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(232,133,10,0.18) 0%, transparent 70%)' }}
          />
          <p
            className="font-body uppercase text-xs tracking-widest mb-3 relative z-10"
            style={{ color: 'var(--color-accent)', letterSpacing: '2px' }}
          >
            Since 2005
          </p>
          <h1 className="font-display font-bold text-4xl mb-3 relative z-10" style={{ color: 'var(--color-light)' }}>
            Our <span className="italic" style={{ color: 'var(--color-accent)' }}>Story</span>
          </h1>
          <p className="font-cormorant italic text-xl relative z-10" style={{ color: 'var(--color-light)', opacity: 0.8 }}>
            Two decades of love, craft, and celebration
          </p>
        </div>

        {/* Story Section */}
        <section className="px-7 py-14 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeSection>
              <p
                className="font-body uppercase text-xs tracking-widest mb-3"
                style={{ color: 'var(--color-primary)', letterSpacing: '2px' }}
              >
                How it began
              </p>
              <h2 className="font-display font-bold text-3xl mb-5" style={{ color: 'var(--color-text)' }}>
                A Sweet Dream, Baked with Love
              </h2>
              <p className="font-cormorant italic text-lg leading-relaxed mb-4" style={{ color: 'var(--color-muted)' }}>
                In 2005, Rainbow Bakers opened its doors in Indirapuram with a simple vision — to bring joy to every celebration through exceptional baked goods.
              </p>
              <p className="font-body text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text)', opacity: 0.8 }}>
                What started as a modest neighbourhood bakery has grown into one of Ghaziabad's most trusted names for custom cakes, fresh pastries, and party decoration. Over 10,000 families have trusted us to make their special moments even more memorable.
              </p>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-text)', opacity: 0.8 }}>
                We believe every celebration deserves something special — handcrafted with the finest ingredients, designed with care, and delivered with a smile.
              </p>
            </FadeSection>
            <FadeSection>
              <div className="grid grid-cols-2 gap-3">
                {/* Main large photo */}
                <div
                  className="col-span-2 rounded-lg overflow-hidden"
                  style={{ height: '240px', border: '1px solid var(--color-light)' }}
                >
                  {photos[0] ? (
                    <img
                      src={photos[0]}
                      alt="Rainbow Bakers shop"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, var(--color-dark) 0%, var(--color-hero) 100%)' }}
                    >
                      <p className="font-cormorant italic text-xl text-center px-6" style={{ color: 'var(--color-light)', opacity: 0.75 }}>
                        Fresh from the oven,<br />straight to your heart
                      </p>
                    </div>
                  )}
                </div>

                {/* Two smaller photos */}
                {[1, 2].map(i => (
                  <div
                    key={i}
                    className="rounded-lg overflow-hidden"
                    style={{ height: '140px', border: '1px solid var(--color-light)' }}
                  >
                    {photos[i] ? (
                      <img
                        src={photos[i]}
                        alt={`Rainbow Bakers shop ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div
                        className="w-full h-full flex items-center justify-center"
                        style={{ background: 'var(--color-surface)' }}
                      >
                        <svg className="w-8 h-8 opacity-25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--color-primary)' }}>
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <path d="M21 15l-5-5L5 21" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </FadeSection>
          </div>
        </section>

        {/* Stats Strip */}
        <section style={{ backgroundColor: 'var(--color-dark)' }}>
          <div className="max-w-7xl mx-auto px-7 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[['20+', 'Years'], ['10K+', 'Families'], ['500+', 'Designs'], ['2', 'Generations']].map(([num, label]) => (
              <FadeSection key={label}>
                <div className="font-display font-bold text-4xl mb-1" style={{ color: 'var(--color-accent)' }}>{num}</div>
                <div className="font-body text-xs uppercase tracking-widest" style={{ color: 'var(--color-light)', opacity: 0.7 }}>{label}</div>
              </FadeSection>
            ))}
          </div>
        </section>

        {/* Shop Photo Gallery */}
        {(photosLoading || photos.length > 0) && (
          <section className="px-7 py-14 max-w-7xl mx-auto">
            <FadeSection>
              <div className="text-center mb-10">
                <p
                  className="font-body uppercase text-xs tracking-widest mb-2"
                  style={{ color: 'var(--color-primary)', letterSpacing: '2px' }}
                >
                  A Peek Inside
                </p>
                <h2 className="font-display font-bold text-3xl" style={{ color: 'var(--color-text)' }}>
                  Our Shop
                </h2>
              </div>
            </FadeSection>

            {photosLoading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="skeleton rounded-lg" style={{ height: '200px' }} />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {photos.map((url, i) => (
                  <FadeSection key={url}>
                    <div
                      className="rounded-lg overflow-hidden group"
                      style={{
                        height: i === 0 ? '280px' : '200px',
                        border: '1px solid var(--color-light)',
                      }}
                    >
                      <img
                        src={url}
                        alt={`Rainbow Bakers shop photo ${i + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </FadeSection>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Values Grid */}
        <section className="px-7 py-14 max-w-7xl mx-auto">
          <FadeSection>
            <div className="text-center mb-12">
              <p
                className="font-body uppercase text-xs tracking-widest mb-2"
                style={{ color: 'var(--color-primary)', letterSpacing: '2px' }}
              >
                What We Stand For
              </p>
              <h2 className="font-display font-bold text-3xl" style={{ color: 'var(--color-text)' }}>
                Our Values
              </h2>
            </div>
          </FadeSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map(({ icon, title, desc }) => (
              <FadeSection key={title}>
                <div
                  className="rounded-lg p-6"
                  style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-light)' }}
                >
                  <div className="text-3xl mb-3">{icon}</div>
                  <h3 className="font-display font-semibold text-lg mb-2" style={{ color: 'var(--color-text)' }}>{title}</h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>{desc}</p>
                </div>
              </FadeSection>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="px-7 py-14" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-3xl mx-auto">
            <FadeSection>
              <div className="text-center mb-12">
                <p
                  className="font-body uppercase text-xs tracking-widest mb-2"
                  style={{ color: 'var(--color-primary)', letterSpacing: '2px' }}
                >
                  Our Journey
                </p>
                <h2 className="font-display font-bold text-3xl" style={{ color: 'var(--color-text)' }}>
                  Milestones
                </h2>
              </div>
            </FadeSection>
            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute left-8 top-0 bottom-0 w-px"
                style={{ backgroundColor: 'var(--color-light)' }}
              />
              <div className="space-y-8">
                {TIMELINE.map(({ year, label, desc }) => (
                  <FadeSection key={year}>
                    <div className="flex gap-6 relative pl-16">
                      {/* Year dot */}
                      <div
                        className="absolute left-5 top-1 w-6 h-6 rounded-full flex items-center justify-center -translate-x-1/2"
                        style={{ backgroundColor: 'var(--color-accent)' }}
                      />
                      <div>
                        <span
                          className="font-body font-bold text-xs uppercase tracking-widest"
                          style={{ color: 'var(--color-accent)' }}
                        >
                          {year}
                        </span>
                        <h3 className="font-display font-semibold text-lg mt-0.5 mb-1" style={{ color: 'var(--color-text)' }}>
                          {label}
                        </h3>
                        <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>{desc}</p>
                      </div>
                    </div>
                  </FadeSection>
                ))}
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
