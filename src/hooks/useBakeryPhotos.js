import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export function useBakeryPhotos() {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPhotos() {
      const { data, error } = await supabase.storage
        .from('bakery-assets')
        .list('bakery_photo', { sortBy: { column: 'name', order: 'asc' } })

      if (!error && data) {
        const urls = data
          .filter(f => f.name && !f.name.startsWith('.'))
          .map(f => {
            const { data: urlData } = supabase.storage
              .from('bakery-assets')
              .getPublicUrl(`bakery_photo/${f.name}`)
            return urlData.publicUrl
          })
        setPhotos(urls)
      }
      setLoading(false)
    }
    fetchPhotos()
  }, [])

  return { photos, loading }
}
