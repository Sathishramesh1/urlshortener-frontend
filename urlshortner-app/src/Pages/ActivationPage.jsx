import React, { useEffect, useState } from 'react'
import { ActivateUser } from '../Services/apiService';
import { useParams } from 'react-router-dom';

function ActivationPage() {
    const {activationKey}=useParams();
const [activated,setActivate]=useState(false);

useEffect(()=>{


const fetchdata=async()=>{
    try {
        const response = await ActivateUser(activationKey);
        console.log(response)
    } catch (error) {
        console.log(error);
    }
   
}
fetchdata();

},[activated])



  return (
   <>
   <div>
    {activated?(<h1>loading</h1>):(<h1>
   activated
    </h1>)}

   </div>



   </>
  )
}

export default ActivationPage