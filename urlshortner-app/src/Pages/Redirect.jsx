import React, { useEffect } from 'react'
import { getRedirect } from '../Services/apiService';
import { useParams } from 'react-router-dom';

function Redirect() {
const {shortUrl}=useParams();
useEffect(()=>{
const fetchdata=async()=>{
    try {
        console.log(shortUrl)
        const response = await getRedirect(shortUrl);
        console.log(response);
        if(response.status){

          window.location.href = response.data.longUrl;


        }
       
      
        
       } catch (error) {
        console.log(error)
        
       }}
fetchdata();

},[])


  return (
    <div>Redirect</div>
  )
}

export default Redirect