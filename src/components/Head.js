import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useState,useEffect } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import store from "../utils/store";
import { cacheResults } from "../utils/searchSlice";
const Head=()=>{
    const dispatch=useDispatch();

    const toggleMenuHandler=() =>{
        dispatch(toggleMenu());

    };


    const [searchQuery,setSearchQuery]=useState("");
    const [suggestion, setSuggestion]=useState([]);
    const [showSuggestions,setShowSuggestions]=useState(false)

    const searchCache=useSelector((store)=>store.search);
    
    useEffect(()=>{
        const timer = setTimeout(()=>{
            if(searchCache[searchQuery])
               setSuggestion(searchCache[searchQuery]);
            else
               getSearchSuggestion();
        },200);

        return () => {
            clearTimeout(timer);
        };

    },[searchQuery]);

    const getSearchSuggestion= async () => {
        const data=await fetch(YOUTUBE_SEARCH_API+searchQuery);
        const json=await data.json();  
        setSuggestion(json[1]);
        dispatch(cacheResults({
            [searchQuery]:json[1],
        }));

    }


    return(
       <div className="grid grid-flow-col p-5 m-2 shadow-lg">
        
        <div className="flex col-span-1">
        <img onClick={()=>toggleMenuHandler()}
        className="h-8 cursor-pointer" alt="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT30Gcy3-zix_Lv2aSksnA2dJXgZb8OV6bfwg&usqp=CAU"/>
        <a href="/">
        <img className="h-8 mx-2" alt="img" src="https://lh3.googleusercontent.com/3g4wDOiAnxbyAflNz4MhGxrkWw4vJ_kEtHTKQyqTx3o9hMBLmTIJha9ZmY87yu9mc8uM-u2OYCz6gPLx4V1o-fuV0ZHGFGenWGKV8tnPR2OvOMqIe2c=v0-s1050"/>
        </a>
        </div>
        
        <div className="col-span-10 px-10">
            <div>
            <input className="rounded-l-full p-2 w-1/2 border border-gray-400" value={searchQuery}
             onChange={(e)=>setSearchQuery(e.target.value)}
             type="text"
             onFocus={()=>setShowSuggestions(true)}
             onBlur={()=>setShowSuggestions(false)}
             />
             
            <button className="rounded-r-full p-2 border border-gray-400 px-5 py-2 bg-gray-200">🔍</button>
            </div>
           {showSuggestions && ( <div className="absolute bg-white border border-gray-100 px-2 py-2 w-[37rem] rounded-lg shadow-lg">
            <ul>
                {suggestion.map((item,index)=><li key={index} className="py-2 px-3 shadow-sm hover:bg-gray-100">🔍 {item}</li>)}   
            </ul>
            </div>)}
            
        </div>

        <div className="col-span-1">
            <img className="h-8" alt="img"
                src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
            />
        </div>

        </div>

    )
}

export default Head;  