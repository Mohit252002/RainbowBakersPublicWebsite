import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export function useProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data, error } = await supabase
          .from('products')
          .select(`
            id,
            name,
            description,
            pricing,
            created_at,
            product_types!inner (
              id,
              name,
              type
            ),
            product_images (
              image_url,
              order_index
            )
          `)
          .eq('product_types.type', 'selling')
          .order('created_at', { ascending: false })

        if (error) throw error

        const sorted = data.map(product => ({
          ...product,
          product_images: [...(product.product_images || [])]
            .sort((a, b) => a.order_index - b.order_index)
        }))

        setProducts(sorted)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return { products, loading, error }
}
