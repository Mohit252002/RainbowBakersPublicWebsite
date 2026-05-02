import { useState } from 'react'
import ProductCard from './ProductCard'
import SkeletonCard from './SkeletonCard'

export default function ProductGrid({ products, types, loading }) {
  const [activeType, setActiveType] = useState('all')

  const filtered = activeType === 'all'
    ? products
    : products.filter(p => p.product_types?.id === activeType)

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveType('all')}
          className="font-body font-bold uppercase text-xs px-4 py-2 rounded-sm transition-all duration-200"
          style={{
            letterSpacing: '1px',
            backgroundColor: activeType === 'all' ? 'var(--color-dark)' : 'transparent',
            color: activeType === 'all' ? 'var(--color-light)' : 'var(--color-muted)',
            border: activeType === 'all' ? '1px solid var(--color-dark)' : '1px solid var(--color-light)',
          }}
        >
          All Products
        </button>
        {types.map(type => (
          <button
            key={type.id}
            onClick={() => setActiveType(type.id)}
            className="font-body font-bold uppercase text-xs px-4 py-2 rounded-sm transition-all duration-200"
            style={{
              letterSpacing: '1px',
              backgroundColor: activeType === type.id ? 'var(--color-dark)' : 'transparent',
              color: activeType === type.id ? 'var(--color-light)' : 'var(--color-muted)',
              border: activeType === type.id ? '1px solid var(--color-dark)' : '1px solid var(--color-light)',
            }}
          >
            {type.name}
          </button>
        ))}
      </div>

      {/* Grid */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => <SkeletonCard key={i} />)}
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-16 font-cormorant italic text-xl" style={{ color: 'var(--color-muted)' }}>
          No products found in this category.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
