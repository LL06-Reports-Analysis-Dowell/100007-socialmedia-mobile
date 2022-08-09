import  React from 'react';
import {View,StyleSheet,TouchableOpacity,Linking} from "react-native"
import { stockData,Topics } from './Data'
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
    Checkbox,
    Slider

  } from "native-base"





const All=({navigation})=>{
return(
 
 <View style={styles.conatainer}>
<NativeBaseProvider>
<VStack width="93%" mx="auto">
<FlatList
         
        data={Topics}
        
    
        renderItem={({ item }) => (
         <VStack mt="4" borderBottomWidth="2"  borderColor="gray.200"
         py="2"
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
         <HStack space={3} justifyContent="flex-end">
             <TouchableOpacity  
             onPress={()=>Linking.openURL(item.link)}
             >
          <Image 
          source={{
            uri:"http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png"
          }}
          alt="Alternate Text"
          size="xs"
          borderRadius="md"
          
        />
        </TouchableOpacity>
         
        <TouchableOpacity  
             onPress={()=>Linking.openURL(item.link)}
             >
          <Image 
          source={{
            uri:"https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"
          }}
          alt="Alternate Text"
          size="xs"
          borderRadius="md"
          
        />
        </TouchableOpacity>
        <TouchableOpacity  
             onPress={()=>Linking.openURL(item.link)}
             >
          <Image 
          source={{
            uri:"https://www.freeiconspng.com/thumbs/youtube-logo-png/hd-youtube-logo-png-transparent-background-20.png"
          }}
          alt="Alternate Text"
          size="xs"
          borderRadius="md"
          
        />
        </TouchableOpacity>
        <TouchableOpacity  
             onPress={()=>Linking.openURL(item.link)}
             >
          <Image 
          source={{
            uri:"https://www.freepnglogos.com/uploads/linkedin-blue-style-logo-png-0.png"
          }}
          alt="Alternate Text"
          size="xs"
          borderRadius="md"
          
        />
        </TouchableOpacity>
        <TouchableOpacity  
             onPress={()=>Linking.openURL(item.link)}
             >
          <Image 
          source={{
            uri:"https://www.pinclipart.com/picdir/middle/2-21918_download-transparent-background-facebook-logo-clipart-facebook-logo.png"
          }}
          alt="Alternate Text"
          size="xs"
          borderRadius="md"
          
        />
        </TouchableOpacity>
        

         </HStack>
        </VStack>     
        )}
        keyExtractor={(item) => item.id}
      />



</VStack>
</NativeBaseProvider>


 </View>

)






}
export default All;
const styles= StyleSheet.create({
 
    conatainer:{
        flex:1,
        justifyContent:"center",
        backgroundColor:"#fff"
        
        
    
        
    },






});