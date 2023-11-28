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
        if(response.status){
            setActivate(true)
        }
        
    } catch (error) {
        console.log(error);
    }
   
}
fetchdata();

},[activated])



  return (
   <>
   <div>
    {activated?(<h1>activated</h1>):(<h1>
please wait while verifying 
    </h1>)}

   </div>



   </>
  )
}

export default ActivationPage