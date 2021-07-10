import React, { useEffect } from 'react'
import {useLocation} from 'react-router-dom'
import useFetch from '../../../custom_hooks/useFetch'
import RecipeCard from '../RecipeCard'

const SearchResults = () => {
    const location = useLocation();
    const url=`http://44.238.74.165:5000/recipes/${location.state}`
    let results;
    const res=useFetch(url,{})
    if(!res.loading){
        results=res.response.results
    }
    return (
        <>
        {(!(res.loading))?
        <div className="searchresults">
            {results.map((res,i)=><RecipeCard key={(res.title).toString()+i} recipeData={res}/>)}
            
        </div>: "No search Results found"
}
        </>
    )
}

export default SearchResults
