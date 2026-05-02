import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export function useProductTypes() {
  const [types, setTypes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchTypes() {
      const { data } = await supabase
        .from('product_types')
        .select('id, name')
        .eq('type', 'selling')
        .order('name')
      setTypes(data || [])
      setLoading(false)
    }
    fetchTypes()
  }, [])

  return { types, loading }
}
