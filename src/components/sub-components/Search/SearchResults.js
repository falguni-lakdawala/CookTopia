import React, { useEffect } from 'react'
import {useLocation} from 'react-router-dom'
import useFetch from '../../../custom_hooks/useFetch'
import RecipeCard from '../RecipeCard'
import Images from '../../composable-components/Images'
import nosearchresults from '../../../assets/illustrations/nosearchresult.svg'

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
        {(!(res.loading)&&(results.length>0))?
        <div className="searchresults">
            {results.map((res,i)=><RecipeCard key={(res.title).toString()+i} recipeData={res}/>)}
            
        </div>: <div className="nosearchresults"><Images src={nosearchresults} alt="No search results found illustration"/></div>
}
        </>
    )
}

export default SearchResults
