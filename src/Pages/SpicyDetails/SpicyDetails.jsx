import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function SpicyDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [spicy, setSpicy] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/spices')
      .then(res => res.json())
      .then(data => {
        const found = data.find(item => item.id === parseInt(id))
        setSpicy(found)
        setLoading(false)
      })
  }, [id])

  if (loading) return <p className="text-xl text-blue-500">Loading...</p>
  if (!spicy) return <p className="text-xl text-red-500">Spice not found 🌶️</p>

  return (
    <div >
      
    
      <div className="card bg-base-100 w-96 shadow-sm p-6 rounded-md max-w-xl mx-auto mt-8">
  <figure>
    <img
      src={spicy.image}
        alt={spicy.name}
        className="w-48 h-auto mb-4 rounded" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
    {spicy.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <div>
      Price: {spicy.price} ৳
    </div>
    <p>{spicy.description}</p>
    <div className="card-actions justify-end">
      <button
        onClick={() => navigate('/buy')}
        className="btn btn-outline btn-success"
      >
        ⬅️ Back to Shop
      </button>
    </div>
  </div>
</div>
    </div>
  )
}

