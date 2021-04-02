import React, { useState } from "react";
import { useStateValue } from "./StateProvider";
import {Close} from '@material-ui/icons'
import useGoogleSearch from "./useGoogleSearch";
import useGoogleImageSearch from "./useGoogleImageSearch";
import { useHistory } from "react-router-dom";
import { actionTypes } from "./reducer";
import Response from "./response";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import "./Style.css";
import "./resultStyles.css";
import ResponseImage from "./ResponseImage";
function Result() {
  const [{ term }, dispatch] = useStateValue();
  const [searchTerm, setSearchTerm] = useState();
  const {data}=useGoogleSearch(term)
  const {Imagedata}=useGoogleImageSearch(term)
//   const data = Response;
//   const Imagedata = ResponseImage;
  console.log(Imagedata);
  console.log(data);
  const [{}, disp] = useStateValue();
  const history = useHistory();
  const [showResults, setshowResults] = useState({
      which: "Search",
    });
  const [Dialog, setDialog] = useState({
      display:"none",
      img:"",
      contextLink:"",
  });

  const handleSwitch = (event) => {
    setshowResults({ ...showResults, which: event.target.value });
    console.log(showResults)
  };
  const googleit = (e) => {
    e.preventDefault();
    console.log("you hit the bulls eye");
    history.push("/search");
    disp({
      type: actionTypes.SET_SEARCH_TERM,
      term: searchTerm,
    });
  };
  const ImageDialog=()=>{
      return(
          <div className="dialog" style={{display:Dialog.display}}>
             <Close className="close" onClick={(e)=>setDialog({display:"none",img:"",contextLink:""})}/> 
             <img src={Dialog.img.link} />
             <h2>{Dialog.img.title}</h2>
             <a href={Dialog.img.link}>{Dialog.contextLink}</a>
          </div>
      )
  }
  const ImageResults = () => {
    return (
      <div className="results-Images">
        {Imagedata?.items.map((image) => (
          <div className="image" onClick={(e)=>setDialog({display:"block",img:image,contextLink:image.image.contextLink})}>
            <img
              src={image.link}
              alt=""
              style={{ width: image.image.thumbnailWidth * 2 + "px" }} 
            />
            <h5 style={{width:image.image.thumbnailWidth*2}}>{image.snippet}</h5>
            <span>{image.displayLink}</span>
          </div>
        ))}
        <ImageDialog />
      </div>
    );
  };
  const SearchResult = () => {
    return (
      <div className="results">
        {data?.items.map((item) => (
          <div className="result-item">
            <a href={item.link} className="results-disp-link">
              {item.displayLink}
            </a>
            <h2 className="results-disp-title">
              <a href={item.link}>{item.title}</a>
            </h2>
            <p className="results-disp-para">{item.snippet}</p>
          </div>
        ))}
      </div>
    );
  };
  const handleUND=()=>{
      for (let index = 0; index < document.getElementsByClassName('underscore').length; index++) {
          const ele = document.getElementsByClassName('underscore')[index];      
          if(ele.style.display==="block"){
              ele.style.display="none"
          }
          else{
              ele.style.display="block"
          }
      }

  }
  return (
    <div>
      <div className="result-header" style={{ margin: "9px 30px" }}>
        <Logo />
        <form>
          <SearchBar search={searchTerm} setsearch={setSearchTerm} value={term} />
          <button
            type="submit"
            style={{ display: "none" }}
            onClick={googleit}
          ></button>
        </form>
    
        <label
          htmlFor="Search"
          style={{ margin: "5px",marginTop:"10px", color: "#9aa0a6", cursor: "pointer" }}
        >
            <svg focusable="false" viewBox="0 0 24 24"><path fill="#34a853" d="M10 2v2a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8"></path><path fill="#ea4335" d="M10 4V2a8 8 0 0 0-8 8h2c0-3.3 2.7-6 6-6"></path><path fill="#fbbc04" d="M4 10H2a8 8 0 0 0 8 8v-2c-3.3 0-6-2.69-6-6"></path><path fill="#4285f4" d="M22 20.59l-5.69-5.69A7.96 7.96 0 0 0 18 10h-2a6 6 0 0 1-6 6v2c1.85 0 3.52-.64 4.88-1.68l5.69 5.69L22 20.59"></path></svg>
          Search
          <div className="underscore" style={{display:"block"}}></div>
        </label>
        <input
          id="Search"
          value="Search"
          type="radio"
          style={{ opacity: 0 }}
          name="checked"
          onClick={(e)=>{
              handleSwitch(e)
              handleUND()
          }  
          }
        />
        
        <label
          htmlFor="Images"
          style={{ margin: "5px",marginTop:'10px', color: "#9aa0a6", cursor: "pointer" }}
        >
       <svg class="DCxYpf" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" fill="none" d="M0 0h24v24H0z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#4285F4" d="M19 22h-7v-2h7c.55 0 1-.46 1-1V5a1 1 0 0 0-1-.99L12 4V2h7c1.66 0 3 1.36 3 3v14c0 1.65-1.35 3-3 3"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#EA4335" d="M12 22H5c-1.64 0-3-1.36-3-3V5c0-1.64 1.36-3 3-3h7v2H5c-.55 0-.99.45-.99 1L4 19c0 .55.45 1 1 1h7v2z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#34A853" d="M14 13l-2.25 2.75L10 14l-4 4h12z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#FBBC04" d="M10 8c0 1.1-.9 2-2 2s-2-.9-2-2c0-1.09.9-2 2-2s2 .9 2 2"></path></svg>
          Images
          <div className="underscore"></div>
        </label>
        <input
          id="Images"
          value="Images"
          type="radio"
          style={{ opacity: 0 }}
          name="checked"
          onClick={(e)=>{
            handleSwitch(e)
            handleUND()
        }  
        }
        />
      </div>
      <hr style={{ background: "rgb(197 197 197)", opacity:0.3 }} />
      <div className="result-data">
        <div className="result-data-estimate">
          <span style={{ margin: "5px", color: "#9aa0a6" }}>
            About {data?.searchInformation.formattedTotalResults} results in (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </span>
        </div>
      </div>
      {showResults.which === "Search" ? <SearchResult /> : <ImageResults />}
    </div>
  );
}

export default Result;
