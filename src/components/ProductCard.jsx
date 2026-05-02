import { useState } from 'react'
import ImageLightbox from './ImageLightbox'

export default function ProductCard({ product }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [hovered, setHovered] = useState(false)

  const { name, description, pricing, product_types, product_images = [] } = product
  const primaryImage = product_images[0]
  const pricingVariants = Object.entries(pricing ?? {}).map(([size, price]) => ({
    size,
    price: Math.round(price),
  }))

  return (
    <>
      <div
        className="rounded-lg border overflow-hidden flex flex-col transition-all duration-300"
        style={{
          borderColor: 'var(--color-light)',
          backgroundColor: 'var(--color-surface)',
          boxShadow: hovered ? '0 8px 30px rgba(107,64,32,0.18)' : '0 2px 8px rgba(107,64,32,0.06)',
          transform: hovered ? 'translateY(-2px)' : 'none',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Badges */}
        <div className="relative">
          <div className="absolute top-3 left-3 z-10 flex gap-2 flex-wrap">
            {product_types?.name && (
              <span
                className="font-body text-xs font-bold uppercase px-2 py-0.5 rounded"
                style={{
                  backgroundColor: 'var(--color-primary)',
                  color: 'white',
                  fontSize: '10px',
                  letterSpacing: '0.5px',
                }}
              >
                {product_types.name}
              </span>
            )}
          </div>

          {/* Image area */}
          <button
            className="relative w-full block overflow-hidden"
            style={{ height: '208px', cursor: 'pointer', border: 'none', padding: 0 }}
            onClick={() => product_images.length > 0 && setLightboxOpen(true)}
            aria-label={`View photos of ${name}`}
          >
            {primaryImage ? (
              <img
                src={primaryImage.image_url}
                alt={name}
                className="w-full h-full object-cover transition-transform duration-300"
                style={{ transform: hovered ? 'scale(1.04)' : 'scale(1)' }}
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, var(--color-light) 0%, var(--color-surface) 100%)',
                }}
              >
                <svg className="w-12 h-12 opacity-30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--color-primary)' }}>
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
              </div>
            )}

            {/* Hover overlay */}
            {primaryImage && (
              <div
                className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
                style={{
                  backgroundColor: 'rgba(20,8,0,0.5)',
                  opacity: hovered ? 1 : 0,
                }}
              >
                <span
                  className="font-body font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-sm"
                  style={{ backgroundColor: 'var(--color-accent)', color: 'white', fontSize: '10px' }}
                >
                  View All Photos
                </span>
              </div>
            )}

            {/* Photo count badge */}
            {product_images.length > 0 && (
              <div
                className="absolute bottom-2 right-2 font-body text-xs px-2 py-0.5 rounded"
                style={{ backgroundColor: 'rgba(0,0,0,0.6)', color: 'white', fontSize: '10px' }}
              >
                {product_images.length} photo{product_images.length !== 1 ? 's' : ''}
              </div>
            )}
          </button>
        </div>

        {/* Card body */}
        <div className="p-4 flex flex-col flex-1">
          <h3 className="font-display font-semibold text-base leading-snug mb-1.5" style={{ color: 'var(--color-text)' }}>
            {name}
          </h3>
          {description && (
            <p className="font-cormorant italic text-sm leading-relaxed mb-3 flex-1" style={{ color: 'var(--color-muted)' }}>
              {description}
            </p>
          )}

          {/* Pricing */}
          {pricingVariants.length > 0 && (
            <div className="mt-auto">
              <p
                className="font-body font-bold uppercase text-xs tracking-widest mb-2"
                style={{ color: 'var(--color-primary)', letterSpacing: '1px', fontSize: '10px' }}
              >
                Choose Your Size
              </p>
              <div
                className="rounded overflow-hidden"
                style={{ border: '1px solid var(--color-light)' }}
              >
                {pricingVariants.map(({ size, price }, i) => (
                  <div
                    key={size}
                    className="flex justify-between items-center px-3 py-2 font-body text-sm"
                    style={{
                      backgroundColor: i % 2 === 0 ? 'var(--color-bg)' : 'var(--color-surface)',
                      borderTop: i > 0 ? '1px solid var(--color-light)' : 'none',
                    }}
                  >
                    <span style={{ color: 'var(--color-muted)' }}>{size}</span>
                    <span className="font-bold" style={{ color: 'var(--color-accent)' }}>₹{price}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <ImageLightbox
        images={product_images}
        productName={name}
        pricing={pricing}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  )
}
