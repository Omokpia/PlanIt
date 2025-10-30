import { useEffect } from "react";
import { router } from "expo-router";
import Onboarding1 from "./onboarding1";
  

   const Index = ()=>{
       
   useEffect(()=>{

    setTimeout(()=>{

        // router.push('/sign-up')

    }, 3000)
   }, [])

    return <Onboarding1/>
   }


   export default Index;