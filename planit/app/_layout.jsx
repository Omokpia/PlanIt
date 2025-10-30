import { Stack } from "expo-router";
import Splash from "./splash";
import { useEffect, useState } from "react";
import { useFonts } from "expo-font";

export default function RootLayout() {

  const [showSplash , setShowSplash] = useState(true)


  const [loaded , error] = useFonts({

    regular : require("../assets/fonts/Inter_24pt-Regular.ttf"),
    bold : require("../assets/fonts/Inter_24pt-Bold.ttf"),
    semibold : require("../assets/fonts/Inter_24pt-SemiBold.ttf"),
    medium : require("../assets/fonts/Inter_24pt-Medium.ttf"),
  })


  useEffect(()=>{

    setTimeout(()=>{

      setShowSplash(false)

    }, 5000)

  })


  if(showSplash || !loaded){
    return <Splash/>
  }


  return (

    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="index"/>
      <Stack.Screen options={{headerShown:false}} name="(auth)"/>
      <Stack.Screen name="(tabs)"/>
      <Stack.Screen name="(home)"/>
    </Stack>

  )
}