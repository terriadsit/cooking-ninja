import { projectFirestore } from '../../firebase/config'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'

//styles
import './Recipe.css'

export default function RecipeDetail() {
    const [recipe, setRecipe] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)

    const { mode } = useTheme()
    const { id } = useParams()
    console.log(id)

    useEffect(() => {
        setIsPending(true)

        //create listener using onSnapshot, unsub is cleanup function
        const unsub = projectFirestore.collection('recipes').doc(id).onSnapshot((doc) => {
            if (doc.exists) {
                setIsPending(false)
                setRecipe(doc.data())
            } else {
                setIsPending(false)
                setError('Could not find that recipe')
            }
           
        })
        //cleanup function when leaving page
        return () => unsub()
     
    }, [id])
    
    const handleClick = () => {
        projectFirestore.collection('recipes').doc(id).update({
          title: 'Something completely different'  
        })
    }

    return (
        <div className={`recipe ${mode}`}>
            {isPending && <p className='loading'>Loading...</p>}
            {error && <p className='error'>{error}</p>}
            {recipe && (
                <>
                   <h2 className="page-title">{recipe.title}</h2> 
                   <p>Takes {recipe.cookingTime} to cook.</p>
                   <p>Ingredients:</p>
                   <ul>
                        {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
                   </ul>  
                   <p className="method">{recipe.method}</p>  
                   {/* <button onClick={handleClick}>Update me</button> */}
                        
                   
                </>
            )} 
        </div>  
    )
}
