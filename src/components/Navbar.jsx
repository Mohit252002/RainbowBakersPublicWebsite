import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { supabase } from '../lib/supabase'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [logoUrl, setLogoUrl] = useState(null)

  useEffect(() => {
    const { data } = supabase.storage.from('bakery-assets').getPublicUrl('logo/logo.png')
    setLogoUrl(data.publicUrl)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <nav
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'var(--color-dark)' : 'rgba(107, 64, 32, 0.95)',
      }}
    >
      <div className="max-w-7xl mx-auto px-7 py-3 flex items-center justify-between">
        {/* Logo + Brand */}
        <Link to="/" className="flex items-center gap-3">
          {logoUrl && (
            <img
              src={logoUrl}
              alt="Rainbow Bakers logo"
              className="w-11 h-11 object-cover rounded-full flex-shrink-0"
              style={{ border: '2px solid rgba(232,133,10,0.4)' }}
            />
          )}
          <div>
            <div className="font-display font-bold text-base leading-tight" style={{ color: 'var(--color-light)' }}>
              Rainbow <span style={{ color: 'var(--color-accent)' }}>Bakers</span>
            </div>
            <div
              className="font-body text-xs tracking-wide"
              style={{ color: 'var(--color-light)', opacity: 0.65, fontSize: '10px' }}
            >
              Since 2005 · Indirapuram
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, to }) => {
            const active = location.pathname === to
            return (
              <li key={to}>
                <Link
                  to={to}
                  className="font-body font-bold uppercase tracking-widest transition-colors duration-200 pb-1"
                  style={{
                    fontSize: '10px',
                    letterSpacing: '1.5px',
                    color: active ? 'var(--color-accent)' : 'var(--color-light)',
                    borderBottom: active ? '2px solid var(--color-accent)' : '2px solid transparent',
                  }}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: 'var(--color-light)',
              transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: 'var(--color-light)',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: 'var(--color-light)',
              transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: menuOpen ? '300px' : '0' }}
      >
        <ul className="px-7 pb-4 space-y-4">
          {NAV_LINKS.map(({ label, to }) => {
            const active = location.pathname === to
            return (
              <li key={to}>
                <Link
                  to={to}
                  className="font-body font-bold uppercase tracking-widest block"
                  style={{
                    fontSize: '11px',
                    letterSpacing: '1.5px',
                    color: active ? 'var(--color-accent)' : 'var(--color-light)',
                  }}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
