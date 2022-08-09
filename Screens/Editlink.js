import  React from 'react';
import {View,StyleSheet,TouchableOpacity, Alert} from "react-native"
import {
    Box,
    FlatList,
    Heading,

    HStack,
    VStack,
    Center,
    NativeBaseProvider,
    Text,
    ArrowBackIcon,
    Button,
    Radio,
    Select,
    CheckIcon,
    Link,
    Image

  } from "native-base"

  import { stockData } from './Data';
import { StatusBar } from "expo-status-bar";




const Editlink=({navigation})=>{
return(
 
 <View style={styles.conatainer}>
     <StatusBar style="dark"/>
<NativeBaseProvider>

<HStack  mt="9"   >
<TouchableOpacity  onPress={() => navigation.goBack()}  >
<ArrowBackIcon
  size="9"
  ml="2"
  
  

/>
</TouchableOpacity   >
  
</HStack>

<VStack  width="80%" mx="auto" >
<Heading mt="5">
Select Pulished Article/
Vidoes to select link 

</Heading>
<Button  mt="full" ml="auto" colorScheme="green" style={{ width:"50%" }} 
        _text={{ color: 'white',fontWeight:'bold',fontSize:"xl" }} 
        onPress={()=> Alert.alert("LINK BUTTON IS SELECTED")}  >
    SELECT LINK 
</Button>


</VStack>


</NativeBaseProvider>

 </View>

)






}
export default Editlink;
const styles = StyleSheet.create({
   
    conatainer:{
        flex:1,
        justifyContent:"center",
        backgroundColor:"#fff"
    
        
    },
    
    
    
        
    
      
      
      
      });