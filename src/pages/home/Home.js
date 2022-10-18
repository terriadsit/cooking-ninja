import { projectFirestore } from '../../firebase/config'
import { useEffect, useState } from 'react'

//styles
import './Home.css'

//components
import RecipeList from '../../components/RecipeList'

export default function Home() {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)
 
    useEffect(() => {
        setIsPending(true)

        //onSnapshot sets up a listener for realtime changes, 
        //thus needs a cleanup function
        const unsub = projectFirestore.collection('recipes').onSnapshot((snapshot) => {
            if (snapshot.empty) {
                setError('No recipes to load')
                setIsPending(false)
            } else {
                let results = []
                snapshot.docs.forEach(doc => {
                    results.push({ id: doc.id, ...doc.data() })
                })
                setData(results)
                setIsPending(false)
            }
        }, (err) => {
            setError(err.message)
            setIsPending(false)
        })
        
        //unsubscribe from listener (cleanup),
        //fires automatically when component unmounts
        return () => unsub()

    }, [])
    
    return (
        <div className='home'>
            {isPending && <div className='loading'>Loading...</div>}
            {error && <div className='error'>{error}</div>}
            {data && <RecipeList recipes={data} />}
        </div>
    )
}
