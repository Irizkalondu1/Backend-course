import supabase from "../config/supabaseClient"
import { useState, useEffect } from "react"

const Home = () => {
const [fetchError, setFetchError] = useState(null)
const [smoothies,setsmoothies] = useState(null)

useEffect(() => {
  const fetchSmoothies = async () => {
    const { data, error } = await supabase
      .from('smoothies')
      .select()

    if (error) {
      setFetchError('Could not fetch the smoothies')
      setsmoothies(null)
      console.log(error)
    }
    if (data) {
      setsmoothies(data)
      setFetchError(null)
    }
    }

fetchSmoothies()
}, [])

  return (
    <div className="page home">
    {fetchError && (<p>{fetchError}</p>)}
{smoothies && (
  <div className="smoothies">
    {smoothies.map(smoothie => (
      
        <p>{smoothie.method}</p>
    ))}
  </div>
)}
    </div>

  )
}
export default Home