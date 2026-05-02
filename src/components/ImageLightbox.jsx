import { useEffect, useState, useCallback } from 'react'

export default function ImageLightbox({ images, productName, pricing, isOpen, onClose }) {
  const [current, setCurrent] = useState(0)

  const prev = useCallback(() => setCurrent(c => (c - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setCurrent(c => (c + 1) % images.length), [images.length])

  useEffect(() => {
    if (!isOpen) return
    setCurrent(0)
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose, prev, next])

  if (!isOpen || !images.length) return null

  const pricingVariants = Object.entries(pricing ?? {}).map(([size, price]) => ({
    size,
    price: Math.round(price),
  }))

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(20, 8, 0, 0.92)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-lg overflow-hidden"
        style={{ backgroundColor: '#1a0c04' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center font-bold text-lg transition-opacity hover:opacity-80"
          style={{ backgroundColor: 'var(--color-accent)', color: 'white' }}
          aria-label="Close"
        >
          ✕
        </button>

        {/* Image */}
        <div className="relative bg-black" style={{ minHeight: '320px' }}>
          <img
            key={current}
            src={images[current]?.image_url}
            alt={`${productName} photo ${current + 1}`}
            className="w-full object-contain"
            style={{ maxHeight: '60vh', opacity: 1, transition: 'opacity 0.25s ease' }}
          />

          {/* Left arrow */}
          {images.length > 1 && (
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl transition-all hover:opacity-90"
              style={{ backgroundColor: 'rgba(0,0,0,0.55)', color: 'var(--color-light)' }}
            >
              ‹
            </button>
          )}

          {/* Right arrow */}
          {images.length > 1 && (
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl transition-all hover:opacity-90"
              style={{ backgroundColor: 'rgba(0,0,0,0.55)', color: 'var(--color-light)' }}
            >
              ›
            </button>
          )}

          {/* Photo counter */}
          <div
            className="absolute bottom-3 left-1/2 -translate-x-1/2 font-body text-xs px-3 py-1 rounded-full"
            style={{ backgroundColor: 'rgba(0,0,0,0.6)', color: 'var(--color-light)' }}
          >
            Photo {current + 1} of {images.length}
          </div>
        </div>

        {/* Dot indicators */}
        {images.length > 1 && (
          <div className="flex justify-center gap-2 py-3" style={{ backgroundColor: '#1a0c04' }}>
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === current ? '20px' : '8px',
                  height: '8px',
                  backgroundColor: i === current ? 'var(--color-accent)' : 'rgba(253,232,192,0.35)',
                  border: 'none',
                  cursor: 'pointer',
                }}
                aria-label={`Go to photo ${i + 1}`}
              />
            ))}
          </div>
        )}

        {/* Product info */}
        <div className="px-6 pb-5 pt-2" style={{ borderTop: '1px solid rgba(253,232,192,0.1)' }}>
          <h3 className="font-display font-semibold text-lg mb-3" style={{ color: 'var(--color-light)' }}>
            {productName}
          </h3>
          {pricingVariants.length > 0 && (
            <div className="space-y-1.5">
              {pricingVariants.map(({ size, price }) => (
                <div key={size} className="flex justify-between font-body text-sm">
                  <span style={{ color: 'rgba(253,232,192,0.7)' }}>{size}</span>
                  <span className="font-bold" style={{ color: 'var(--color-accent)' }}>₹{price}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
