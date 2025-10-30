import { SafeAreaView } from "react-native-safe-area-context"
import styles from "./styles"
import {Image, View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
import { router } from "expo-router"
import { useEffect } from "react"
import CSafeAreaView from "../components/CSafeAreaView"


const Onboarding1 = ()=>{

    return(
        <SafeAreaView style={styles.container}>

            <View>
                <Image style={{height:310, 
                    width:360,right:15, resizeMode:'contain'}}
                     source={require('../assets/images/onboard1.png')} />

            </View>

            <View style={{justifyContent:'center', alignItems:'center',}}>
                <Text style={{color:'#1B2CC1', fontFamily:"semibold", 
                    fontSize:32,textAlign:"center"}}>Your Unified Event{'\n'}
                    <Text>Workspace</Text>
                    </Text>
            </View>

            <View style={{marginTop:30}}>
                <Text  style={{fontFamily:"regular", color:"#88898B",
                    fontSize:16,textAlign:"center"}}>Planit simplifies
                     vendor surcing, connect with verified
                     experts and manage every booking {'\n'}
                     <Text>effortlessly</Text>
                     </Text>
            </View>

            <View style={{marginTop:50, alignItems:"center",marginBottom:50}}>
                <Image style={{height:16, width:70, resizeMode:'contain'}}
                     source={require('../assets/images/page1.png')} />
            </View>

            <View>
                <TouchableOpacity style={{borderRadius:36, borderColor:'#1B2CC1', 
                borderWidth:1,height:50,width:100, padding:10, justifyContent:'center',
                marginVertical:10}} onPress={()=>{
                    router.push('/sign-up')}}>

                    <Text style={{color:'#1B2CC1', textAlign:'center', 
                fontWeight:'bold', fontSize:16}}>Skip</Text>

                </TouchableOpacity>

              <TouchableOpacity style={{borderRadius:36, borderColor:'#1B2CC1', 
                borderWidth:1,height:50,width:100, padding:10, justifyContent:'center',
                marginVertical:10, backgroundColor:'#1B2CC1',position:"absolute",
                top:1,left:240}} onPress={()=>{
                    router.push('/onboarding2')}}>

                    <Text style={{color:'white', textAlign:'center',fontWeight:'bold',
                         fontSize:16}}>Next</Text>
                
                </TouchableOpacity>
            </View>



        </SafeAreaView>
    )
}


export default Onboarding1;


const onboardStyles = StyleSheet.create({
    text:{

        fontFamily:'medium',
        color:'#001E63',
        fontSize:36,
        lineHeight:50

    }

})