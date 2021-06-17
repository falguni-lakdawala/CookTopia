
import {useEffect,useState} from 'react'

const useFetch = (url) => {

    const [data,setData]=useState(null);
 
useEffect(() => {
    
const fetchData=async()=>{
    
try{

    const response=await fetch(url)
    const resdata=await response.json()
    setData(resdata)

}catch(error){
    setData(error)
}

}

fetchData();


}, [url])

return [data]

}

export default useFetch;
