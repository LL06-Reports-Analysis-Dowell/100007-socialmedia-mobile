import  React,{useState} from 'react';
import {View,StyleSheet,TouchableOpacity, Alert} from "react-native"

import { stockData,Topics } from './Data'
import  {CheckBox } from "react-native-elements"
import { StatusBar } from "expo-status-bar";
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
    Image,
    Avatar,
    Modal,
    } from "native-base"
  import {Header} from "react-native-elements"
  import { Entypo,Ionicons  } from '@expo/vector-icons'

const Selectlink=({navigation})=>{
  const [showModal, setShowModal] = useState(false);
  const [check1, setCheck1] = useState(false);
 return(
<View style={styles.conatainer}>
<StatusBar style="dark" />
<NativeBaseProvider>
<View style={{flex:0.45,}} >
<Header containerStyle={{elevation: 10, // remove shadow on Android
            shadowOpacity: 3, // remove shadow on iOS
            borderBottomWidth: 0,
            shadow:9,
          
            opacity:0.9
      
          
           }}
    
         backgroundColor={'#e6e6fa'}
         

         leftContainerStyle={{flex:6,}}
         
          rightComponent={
<TouchableOpacity  onPress={() => navigation.goBack()}  >
<Entypo name="cross" size={30} color="gray" />

</TouchableOpacity   >


            
  }
  leftComponent={<Heading color="blue.600">
    Select Link 
    
    </Heading>}
        

          
          
/>
</View>
  <View style={{flex:3,}}>
      <VStack  width="95%" mx="auto">
      <FlatList
         
         data={Topics}
         
     
         renderItem={({ item }) => (
          <VStack mt="1" borderBottomWidth="2"  borderColor="gray.200"
          
          >
              <HStack>
           <Link  href={item.link}
           _text={{
             fontSize:"md",
             fontWeight:"semibold"   }}
            >
           {item.link}
           </Link>
 
            <Text fontSize="xs"  color="muted.400" fontWeight="bold" mt="1">
              {item.sub}
 
            </Text>
 
 
         </HStack>
         <Heading color="blue.600" fontSize="lg" mt="1">
        {item.heading}
 
         </Heading>
 
         <Text fontSize="sm" fontWeight="semibold">
           {item.paragraph}
         </Text>
          <VStack mt="-5%" >
          <CheckBox 
     
     right
    
    checkedIcon={
        <Ionicons name="checkbox" size={30} color="#4169e1" />
     
    }
    uncheckedIcon={
        <Ionicons name="checkbox" size={30} color="gray" />
 
    }
     
    checked={check1}
    onPress={() => setCheck1(!check1)}
 
 /> 
         
 
          </VStack>
         </VStack>     
         )}
         keyExtractor={(item) => item.id}
       />
      </VStack>
      
      </View > 
   <View style={{flex:0.25,  }}>

   <Button  shadow="6"  onPress={() => navigation.navigate("Post")}  borderTopRadius="1" borderBottomRadius="1" colorScheme="blue"  _text={{ color: 'white',fontWeight:'bold',fontSize:'lg' }}  
    height="full"
   >
       <HStack space={4}>
           <Text color="white" fontWeight="bold" fontSize="lg">
 See More 


           </Text>
           <Center>
           <Entypo name="chevron-thin-down" size={20} color="white" />
           </Center>
           </HStack>
</Button>

   </View>


 


</NativeBaseProvider>
</View>
   


 )



}
export default Selectlink;
const styles = StyleSheet.create({
   
    conatainer:{
        flex:1,
        justifyContent:"center"
        
    
        
    },
    
    Image:{
width:"100%",
height:130  



    }
    
        
    
      
      
      
      });