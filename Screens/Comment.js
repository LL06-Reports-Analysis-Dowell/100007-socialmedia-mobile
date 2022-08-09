import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Alert ,ImageBackground } from "react-native";
import At_theratepopup from "../components/At_theratepop";
import Hastagprop from "../components/Hastagprop";
import { comment } from "./Data";
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
} from "@expo/vector-icons";
import { justifyContent } from "styled-system";
const Comment = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

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
          leftContainerStyle={{ flex: 1 }}
          leftComponent={
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ArrowBackIcon
  style={{color:"grey"}}
/>
            </TouchableOpacity>
          }
          centerComponent={<Heading color="blue.600">Comments</Heading>}
        />

<View style={{flex:1 , }}>

    <VStack width="90%"  mx="auto" my="auto">
 
 <FlatList
 data={comment}
 renderItem={({item})=>(

<VStack space="16"> 
    <VStack space={2}>
 <Heading color="blue.600"  size="lg">
 
 Your Product


 </Heading>
   
 <Select
    
    width="100%"
    accessibilityLabel="Select Your Product"
    placeholder="Select Your Product"
    variant="filled"
    fontSize="md"
    placeholderTextColor="black"
    bgColor="transparent"
    
    
    _selectedItem={{
      
      endIcon: <CheckIcon size="5" />,
    }}
    
   
  >
    <Select.Item label= {item.tittle[0]} value={item.tittle[0]} />
    <Select.Item label={item.tittle[1]} value={item.tittle[1]} />
    <Select.Item label={item.tittle[2]} value={item.tittle[2]} />
    
    
  </Select>
  </VStack>


  <VStack space={2}>
 <Heading color="blue.600"  size="lg">
 
 Social Media Channels


 </Heading>
   
 <Select
    
    width="100%"
    accessibilityLabel="Select Social Media Channels"
    placeholder="Select Social Media Channels"
    variant="filled"
    fontSize="md"
    placeholderTextColor="black"
    bgColor="transparent"
    
    
    _selectedItem={{
      
      endIcon: <CheckIcon size="5" />,
    }}
    
   
  >
    <Select.Item label= {item.channels[0]} value={item.channels[0]} />
    <Select.Item label={item.channels[1]} value={item.channels[1]} />
    <Select.Item label={item.channels[2]} value={item.channels[2]} />
    <Select.Item label={item.channels[3]} value={item.channels[3]} />
    <Select.Item label={item.channels[4]} value={item.channels[4]} />
    
    
  </Select>
  </VStack>
 <VStack width="80%" mx="auto">
  <Button
                  onPress={() => navigation.navigate("Generatecomment")}
                  py="5"
                  
                  mt="5"
                  colorScheme="blue"
                  borderTopRadius="2xl"
                  borderBottomRadius="2xl"
                  _text={{ color: "white", fontWeight: "bold", fontSize: "lg" }}
                >
                  Generate Comments
    
                </Button>
</VStack>


    </VStack>


 )}
 
 keyExtractor={(item) => item.id}

 
 
 />


    </VStack>


</View>




      
      </NativeBaseProvider>
    </View>
  );
};
export default Comment;
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
