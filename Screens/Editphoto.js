import  React,{useState,useRef} from 'react';
import {View,StyleSheet,TouchableOpacity, Alert,Dimensions,ImageBackground,Text,SafeAreaView} from "react-native"
import { stockData,imageslider} from './Data';
import { StatusBar } from "expo-status-bar";
import  {CheckBox } from "react-native-elements"

import Carousel from 'react-native-snap-carousel'; 
const SliderWidth = Dimensions.get('screen').width;


import {
    Box,
    FlatList,
    Heading,
Input,
    HStack,
    VStack,
    Center,
    NativeBaseProvider,
  
    ArrowBackIcon,
    Button,
    Radio,
    Select,
    CheckIcon,
    Link,
    Checkbox,
    Slider,
    
    Avatar,
    Modal,
    } from "native-base"
  import {Header,Icon,} from "react-native-elements"
  import { Feather,Entypo,FontAwesome,Foundation,FontAwesome5,Ionicons,MaterialCommunityIcons,AntDesign  } from '@expo/vector-icons'
import { marginRight, marginTop } from 'styled-system';

  


const Editphoto=({navigation})=>{
  const sliderref=useRef()
  const [activeIndex, setActivateIndex] = useState(0); 
  const [check2, setCheck2] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [check3, setCheck3] = useState(false);
  const icon=()=>{


    setCheck3(!check3)

}
  
 const _renderItem = ({item, index}) => {
    return (
    
       <View >
         
         <Text style={{marginBottom:"5%" ,marginLeft:"35%" , fontSize:15,  fontWeight:"bold"}}> {item.tittle} </Text>
         
       <ImageBackground
      source={{uri:item.uri}}
      style = {{height: 250, resizeMode : 'stretch', width:250 , overflow:"visible" , }} 
      
      
      > 
      <View style={{marginLeft:"auto", marginRight:"5%" , marginTop:"5%"}}>
        <TouchableOpacity onPress={()=>icon()}>
     
      <AntDesign name="checkcircle" size={24} color={check3 ? "#4169e1":'#dcdcdc'} />
      <Heading>
        View Clients {'\n'}profile
      </Heading>
      </TouchableOpacity>
      </View>
     
      </ImageBackground>
      
      
      <Text style={{marginTop:"5%", marginRight:"10%",color:'gray',fontWeight:"bold",  }} > {item.description}  </Text>

        
      
      

       </View>
       
    )
}
 return(


<SafeAreaView style={styles.conatainer}>
<StatusBar style="dark" />
<Header containerStyle={{elevation: 10, // remove shadow on Android
            shadowOpacity: 3, // remove shadow on iOS
            borderBottomWidth: 0,
            shadow:9,
          
            opacity:0.9
      
          
           }}
    
         backgroundColor={'#e6e6fa'}
         

         leftContainerStyle={{flex:5}}
         leftComponent={ 
           <NativeBaseProvider>
           
           <Heading  ml="2"  color="blue.600">
    Edit Photo
    
    </Heading>
    </NativeBaseProvider>
    
    }
         
          rightComponent={
<TouchableOpacity  onPress={() => navigation.goBack()}  >
<Entypo name="cross" size={30} color="gray" />

</TouchableOpacity   >

}         
          
/>
<View style={{flex:1.5,flexDirection:"row" ,justifyContent:"center" ,alignItems:"center", marginTop:"5%" }}>
  
  <TouchableOpacity onPress={()=>sliderref.current.snapToItem(activeIndex-1)}> 

  <Ionicons name="chevron-back" size={28} color="black"    />



  </TouchableOpacity>
  
  <Carousel
              ref={sliderref}
              data={imageslider}
              renderItem={_renderItem}
              useScrollView
              sliderWidth={SliderWidth}
              itemWidth={300}
              onSnapToItem={(index) => setActivateIndex(index)}
              activeSlideAlignment="center"

            />

  
<TouchableOpacity onPress={()=>sliderref.current.snapToItem(activeIndex+1)}> 

<Ionicons name="chevron-forward" size={28} color="black" />



</TouchableOpacity>


</View>

<NativeBaseProvider>
<VStack width="90%" mx="auto" space={4}>
  <HStack mx="auto">
<HStack >
<CheckBox 
    
   center
   checkedIcon={
    <MaterialCommunityIcons name="checkbox-intermediate" size={30} color="#b0c4de" />
    
   }
   uncheckedIcon={
    <MaterialCommunityIcons name="checkbox-blank-outline" size={30} color="#b0c4de" />

   }
    
   checked={check1}
   onPress={() => setCheck1(!check1)}

/>
<Center>
<Text style={{color:'gray',fontWeight:"bold", fontSize:19, marginLeft:-15 }} > Give Credits </Text>
</Center>

</HStack>

<HStack >
<CheckBox 
    
   center
   checkedIcon={
    <MaterialCommunityIcons name="checkbox-intermediate" size={30} color="#b0c4de" />
    
   }
   uncheckedIcon={
    <MaterialCommunityIcons name="checkbox-blank-outline" size={30} color="#b0c4de" />

   }
    
   checked={check2}
   onPress={() => setCheck2(!check2)}

/>
<Center>
<Text style={{color:'gray',fontWeight:"bold", fontSize:19, marginLeft:-15 }} > Add Logo </Text>
</Center>

</HStack>


</HStack>
<HStack  space={4}>
<Text style={{color:'gray',fontWeight:"bold", fontSize:15, }} > Similarity </Text>
<Slider
        defaultValue={70}
        minValue={0}
        maxValue={100}
        accessibilityLabel="hello world"
        step={10}
        width="56"
        
        
      >
        <Slider.Track pb="5"  borderRadius="xs" bgColor="blue.100" >
          <Slider.FilledTrack  pb="5"  borderRadius="xs" bgColor="blue.600" />
        </Slider.Track>
        <Slider.Thumb   pb="5" borderRadius="xs" width="6"  bgColor="blue.100"   />
      </Slider>
      </HStack>
      <HStack  space={4}>
<Text style={{color:'gray',fontWeight:"bold", fontSize:15, }} > Relevance </Text>
<Slider
        defaultValue={70}
        minValue={0}
        maxValue={100}
        accessibilityLabel="hello world"
        step={10}
        width="48"
        
        
      >
        <Slider.Track pb="5"  borderRadius="xs" bgColor="blue.100" >
          <Slider.FilledTrack  pb="5"  borderRadius="xs" bgColor="blue.600" />
        </Slider.Track>
        <Slider.Thumb   pb="5" borderRadius="xs" width="6"  bgColor="blue.100"   />
      </Slider>
      </HStack>
   
      <Button   colorScheme="blue"   shadow="6"  borderRadius="lg"   mt="5"
      _text={{ color: 'white',fontWeight:'bold',fontSize:'lg' }} 
       onPress={()=>navigation.navigate("updateeditarticle")}
      >
    Update to Post
</Button>

</VStack>

</NativeBaseProvider>
   

</SafeAreaView>
 )


}
export default Editphoto;
const styles = StyleSheet.create({
   
    conatainer:{
        flex:1,
        
      
      
    
        
    },
    Checkbox:{
      borderRadius:30,
      backgroundColor:"blue"
    }
    
    
        
    
      
      
      
      });