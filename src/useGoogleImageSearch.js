import {useState,useEffect} from 'react'
import {APIKEY,SEID} from './keys'
function useGoogleImageSearch(term) {
    const [Imagedata,setImageData]=useState(null)
    useEffect(()=>{

        const fetchResults=async()=>{
            fetch(`https://www.googleapis.com/customsearch/v1?key=${APIKEY}&cx=${SEID}&q=${term}&searchType=image`)
            .then(res=>res.json())
            .then(result=>setImageData(result))
        }
        fetchResults()
    },[term])
    return {Imagedata}
}

export default useGoogleImageSearch
