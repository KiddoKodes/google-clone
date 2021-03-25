import React ,{useState}from 'react'
import {useStateValue} from './StateProvider'
import useGoogleSearch from './useGoogleSearch'
import { useHistory } from "react-router-dom";
import {actionTypes} from './reducer';
// import Response from './response'
import Logo from './Logo';
import SearchBar from './SearchBar'
import './Style.css'
import './resultStyles.css'
function Result() {
    const [{term},dispatch] = useStateValue()
    const [searchTerm,setSearchTerm]=useState(term)
    const {data}=useGoogleSearch(term)
    // const data=Response;
    console.log(data)
    const [{},disp]=useStateValue()
    const history = useHistory();

    const googleit=(e)=>{
        e.preventDefault()
        console.log("you hit the bulls eye");
        history.push('/search')
        disp({
            type:actionTypes.SET_SEARCH_TERM,
            term:searchTerm
        })
    }
    return (
        <div>
            <div className="result-header" style={{margin:"30px"}}>
                <Logo/>
                <form>
                    <SearchBar search={searchTerm} setsearch={setSearchTerm}/>
                    <button type="submit" style={{display:"none"}} onClick={googleit}></button>
                </form>
            </div>
            <hr style={{background:'#000',height:"1px"}}/>
            <div className="result-data">
                <div className="result-data-estimate">
                    <span style={{margin:"5px" ,color:"#9aa0a6"}}>About {data?.searchInformation.formattedTotalResults} results in ({data?.searchInformation.formattedSearchTime} seconds) for {term}</span>
                </div>
                <div className="results">
                    {data?.items.map(item=>(
                        <div className="result-item">
                            <a href={item.link} className="results-disp-link">
                                {item.displayLink}
                            </a>
                            <h2 className="results-disp-title">      
                                <a href={item.link} >
                                    {item.title}
                                </a>
                            </h2>
                            <p className="results-disp-para">      
                                    {item.snippet}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Result
