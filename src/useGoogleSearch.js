import {useState,useEffect} from 'react'
import {APIKEY,SEID} from './keys'
function useGoogleSearch(term) {
    const [data,setData]=useState(null)
    useEffect(()=>{

        const fetchResults=async()=>{
            console.log(term)
            fetch(`https://www.googleapis.com/customsearch/v1?key=${APIKEY}&cx=${SEID}&q=${term}`)
            .then(res=>res.json())
            .then(result=>setData(result))
        }
        fetchResults()
    },[term])
    return {data}
}

export default useGoogleSearch
