import React from "react";
import { useNavigate } from "react-router-dom";


const SearchBar = () => {
  
  const navigate = useNavigate()

  const SubmitHandler = (e) => {
    e.preventDefault();
    const keyword = e.target.keyword.value.trim();
    console.log(keyword);
    
    if (keyword.length === 0) {
      alert(<h5> You must search a keyword</h5>);
    } else if(keyword.length < 3) {
      alert(<h5> your search must have at least 4 words</h5>)
    } else{
      e.target.keyword.value = "" ;
      navigate(`/results?keyword=${keyword}`)
    }
  };

  return (
    <>
      <div className="relative text-gray-600">
        <form  onSubmit={SubmitHandler} >
          <input
            type="text"
            name="keyword"
            
            placeholder="Search.."
            className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
            
          />
          <button type="button" onSubmit={SubmitHandler} className="absolute right-0 top-0 mt-3 mr-4">
            <svg
              className="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              xmlSpace="preserve"
              width="512px"
              height="512px"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>

        </form>
      </div>
    </>
  );
};

export default SearchBar;
