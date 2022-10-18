import { useLocation } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { useTheme } from '../../hooks/useTheme'

//styles
import './Search.css'

//components
import RecipeList from '../../components/RecipeList'

export default function Search() {

    const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString)
    const query = queryParams.get('q')
    const foundIt = (queryParams.has('q'))
    const { mode } = useTheme()

    console.log('found q:', foundIt,'queryString: ', queryString, 'queryParams: ', queryParams, 'query: ', query)

    const url = 'http://localhost:3000/recipes?q=' + query

    const { error, isPending, data } = useFetch(url)

    return (
        <div className={`search-page ${mode}`}>
          <h2 className="page-title">Recipes including "{query}"</h2>
          {error && <p className='error'>{error}</p>}
          {isPending && <p className='loading'>Loading...</p>}
          {data && <RecipeList recipes={data} /> }
          {!data && <p>Sorry, try again</p>}
        </div>
    )
}
