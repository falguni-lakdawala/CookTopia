import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../../../custom_hooks/useFetch";
import RecipeCard from "../RecipeCard";
import noSearchResults from "../../../assets/illustrations/nosearchresult.svg";

const SearchResults = () => {
  const location = useLocation();
  const url = `http://44.238.74.165:5000/recipes/${location.state}`;
  let results;
  const res = useFetch(url, {});
  if (!res.loading) {
    results = res.response.results;
  }
  return (
    <div className="search-results-page">
			<div className="max-width-cont">
				<div className="heading">
					<h1>
						Recipes related to
						<div className="search-keyword">{location.state}</div>
					</h1>
				</div>
				{!res.loading && results.length > 0 ? (
					<div className="search-results-cont">
						{results.map((res, i) => (
							<RecipeCard key={res.title.toString() + i} recipeData={res} />
						))}
					</div>
				) : (
					<div className="no-search-results-cont">
						<img
							src={noSearchResults}
							alt="No search results found illustration"
						/>
					</div>
				)}
			</div>
    </div>
  );
};

export default SearchResults;
