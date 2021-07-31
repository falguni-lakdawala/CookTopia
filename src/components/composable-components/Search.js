import React, { useRef } from "react";
import searchIcon from "../../assets/icons/search-icon.svg";
import { useHistory } from "react-router-dom";

const Search = ({ screenType }) => {
  const ref = useRef();
  const history = useHistory();

  const toggleView = () => {
    document.querySelector(".desktop-nav ul").classList.toggle("active");
    if (screenType === 1) {
      document.querySelectorAll(".search")[0].classList.toggle("active");
    } else if (screenType === 2) {
      document.querySelectorAll(".search")[1].classList.toggle("active");
      document
        .querySelector(".mobile-nav-toggle-btn")
        .classList.toggle("display-none");
    }
  };

  const searchRecipe = (e) => {
    ref.current.value.length > 0
      ? history.push({ pathname: "/searchresults", state: ref.current.value })
      : "";
  };

  return (
    <div className="search">
      <button
        role="button"
        aria-label="search"
        title="search"
        type="button"
        className="search-btn"
        onClick={(e) => {
          toggleView();
          searchRecipe(e);
        }}
      >
        <svg
          className="svg-1"
          width="587"
          height="653"
          viewBox="0 0 587 653"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M580.18 607.52L397.45 385.78C399.82 383.75 402.17 381.69 404.47 379.56C449.86 337.58 474.85 281.57 474.85 221.87C474.85 162.17 449.85 106.16 404.47 64.18C359.73 22.79 300.41 0 237.43 0C174.45 0 115.13 22.79 70.39 64.17C25 106.16 0 162.16 0 221.87C0 281.58 25 337.58 70.38 379.56C115.12 420.94 174.44 443.73 237.42 443.73C276.26 443.73 313.69 435.05 347.19 418.71L537.58 643.14C547.38 654.68 564.69 656.27 576.41 646.61C588.24 636.85 589.93 619.35 580.18 607.52ZM60 221.87C60 132.61 139.59 60 237.43 60C335.26 60 414.86 132.61 414.86 221.87C414.86 311.12 335.27 383.74 237.43 383.74C139.59 383.73 60 311.12 60 221.87Z"
            fill="#000"
          />
        </svg>
        <svg
          className="svg-2"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.25 30.25C23.982 30.25 30.25 23.982 30.25 16.25C30.25 8.51801 23.982 2.25 16.25 2.25C8.51801 2.25 2.25 8.51801 2.25 16.25C2.25 23.982 8.51801 30.25 16.25 30.25Z"
            stroke="#111111"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M33.7492 33.7492L26.1367 26.1367"
            stroke="#111111"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <input
        aria-label="input search text"
        ref={ref}
        onKeyPress={(e) => {
          if (e.code === "Enter" || e.keyCode === 13) {
            toggleView();
            searchRecipe(e);
          }
        }}
        type="search"
      />
    </div>
  );
};

export default Search;
