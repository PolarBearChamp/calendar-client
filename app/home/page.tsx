'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { format } from 'date-fns'

const Redirect = () => {
  const router = useRouter()

  useEffect(() => {
    const now = new Date()
    router.push(`/home/${format(now, 'yyyy')}-${format(now, 'MM')}`)
  }, [])

  return null
}

export default Redirect
