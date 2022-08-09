import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Alert ,ImageBackground } from "react-native";
import At_theratepopup from "../components/At_theratepop";
import Hastagprop from "../components/Hastagprop";
import { generetecomment } from "./Data";
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
  ScrollView,
} from "native-base";
import { Header, Icon } from "react-native-elements";
import {
  Feather,
  Entypo,
  FontAwesome,
  Foundation,
  FontAwesome5,
  AntDesign,
  Ionicons
  
} from "@expo/vector-icons";

const Generatecomment = ({ navigation }) => {
  const [check1, setCheck1] = useState(false);
  const Generate=()=>{
 setCheck1(!check1)



  }

  return (
    <View style={styles.conatainer}>
      <StatusBar style="dark" />
      <NativeBaseProvider>
        <Header
          containerStyle={{
            elevation: 10, // remove shadow on Android
            shadowOpacity: 3, // remove shadow on iOS
            borderBottomWidth: 0,
            shadow: 9,

            opacity: 0.9,
          }}
          backgroundColor={"#e6e6fa"}
          centerContainerStyle={{flex:5,}}
          leftComponent={
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ArrowBackIcon
  style={{color:"grey"}}
/>
            </TouchableOpacity>
          }
          centerComponent={<Heading color="blue.600">Generate Comments</Heading>}
        />

<View style={{flex:1 , }}>

    <VStack width="95%"  mx="auto" >
 
 <FlatList
 data={generetecomment}
 renderItem={({item})=>(

<TouchableOpacity activeOpacity={1} onPress={()=>Generate()}>
<VStack bgColor="gray.200"  borderTopRadius="lg" borderBottomRadius="lg" mt="10" py="3" >  

 <Text>
     
 <Text  textAlign="justify" fontSize="lg" >
     {item.tittle}
 </Text> 
 <Text top="3">
 <Ionicons name="documents" size={24} color={check1 ? "#4169e1":'gray'}  />
 </Text>
 </Text>


    </VStack>
</TouchableOpacity>


 )}
 
 keyExtractor={(item) => item.id}
 
 
 />


    </VStack>


</View>




      
      </NativeBaseProvider>
    </View>
  );
};
export default Generatecomment;
const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    justifyContent: "center",
  },

  Image: {
    width: "100%",
    height: 156,
    // justifyContent:"space-around"
  },

});
