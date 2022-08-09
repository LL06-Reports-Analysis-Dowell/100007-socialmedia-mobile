import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Alert ,ImageBackground } from "react-native";
import At_theratepopup from "../components/At_theratepop";
import Hastagprop from "../components/Hastagprop";
import { stockData } from "./Data";
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
const Editpostscreen = ({ navigation }) => {
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
          rightComponent={
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Entypo name="cross" size={30} color="gray" />
            </TouchableOpacity>
          }
          centerComponent={<Heading color="blue.600">Cyber Crime</Heading>}
        />
       <View style={{flex:1, }}>
    
       <VStack width="90%" mx="auto" mt="3" >
          <FlatList
            data={stockData}
            renderItem={({ item }) => (
              <VStack space={1}>
                <VStack borderColor="gray.200" space={1}>
                  <HStack space={2}>
                    <Avatar
                      source={{
                        uri: item.Image[2],
                      }}
                      width="12"
                      height="12"
                    />
                    <Center>
                      <TouchableOpacity
                        onPress={() => {
                          setShowModal2(true);
                        }}
                      >
                        <Heading color="blue.600" size="md">
                          {item.Username[0]}
                        </Heading>
                      </TouchableOpacity>
                    </Center>
                    {showModal2 && <Hastagprop />}
                  </HStack>
                  <TouchableOpacity
                    onPress={() => {
                      setShowModal1(true);
                    }}
                  >
                    <Text>{item.Topics[0]}</Text>
                  </TouchableOpacity>
                  {showModal1 && <At_theratepopup />}
                  <HStack>
                    <Link
                      href={item.link}
                      _text={{
                        fontSize: "sm",
                        fontWeight: "semibold",
                        color: "blue.600",
                      }}
                    >
                      {item.link}
                    </Link>
                  
                  </HStack>
                </VStack>
                <VStack
                  borderBottomWidth="4"
                  borderColor="gray.300"
                  pb="2"
                  mt="1"
                >
                  <Center>
                    <ImageBackground
                      style={styles.Image}
                      source={{
                        uri: item.Image[2],
                      }}
                      alt="Alternate Text"
                      resizeMode="stretch"
                    > 
                    <VStack width="35%" ml="auto" mt="4" mr="2" >
                      <Button bgColor="gray.300" opacity="0.8"  _text={{ color: "white", fontWeight: "bold", fontSize: "lg" }}
                      
                      onPress={() => navigation.navigate("Editphoto")}
                      >
                        Edit Photo
                      </Button>
                      </VStack>
                      </ImageBackground>
                  </Center>
                </VStack>

                <HStack mt="2" space={8} justifyContent="flex-end">
                  <FontAwesome name="map-marker" size={20} color="gray" />
                  <Feather name="smile" size={20} color="gray" />
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => navigation.navigate("Selectlink")}
                  >
                    <Foundation name="link" size={20} color="gray" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => navigation.navigate("Tagpeople")}
                  >
                    <FontAwesome5 name="user-edit" size={20} color="gray" />
                  </TouchableOpacity>
                </HStack>
                <VStack
                  mt="2"
                  space={2}
                  borderBottomWidth="2"
                  borderColor="gray.300"
                  pb="2"
                >
                  <HStack justifyContent="space-between">
                    <Center>
                      <Text fontSize="sm">Qualitative Categorisation:</Text>
                    </Center>
                    <Select
                      width="50%"
                      height="9"
                      accessibilityLabel="Catogrization"
                      placeholder="Catogrization"
                      style={{ backgroundColor: "#afeeee" }}
                      fontSize="sm"
                      color="gray.500"
                      fontWeight="bold"
                      placeholderTextColor="black"
                      placeholderTextColor="gray.500"
                      bgColor="transparent"
                      _selectedItem={{
                        endIcon: <CheckIcon size="5" />,
                      }}
                    >
                      <Select.Item
                        label={item.Posts[0]}
                        value={item.Posts[0]}
                      />
                      <Select.Item
                        label={item.Posts[1]}
                        value={item.Posts[1]}
                      />
                      <Select.Item
                        label={item.Posts[2]}
                        value={item.Posts[2]}
                      />
                    </Select>
                  </HStack>
                  <HStack justifyContent="space-between">
                    <Center>
                      <Text fontSize="sm">Targeted To :</Text>
                    </Center>
                    <Select
                      width="50%"
                      height="9"
                      accessibilityLabel="Brand List"
                      placeholder="Brand List"
                      style={{ backgroundColor: "#afeeee" }}
                      fontSize="sm"
                      color="gray.400"
                      fontWeight="bold"
                      placeholderTextColor="black"
                      bgColor="transparent"
                      placeholderTextColor="gray.500"
                      _selectedItem={{
                        endIcon: <CheckIcon size="5" />,
                      }}
                    >
                      <Select.Item
                        label={item.Posts[0]}
                        value={item.Posts[0]}
                      />
                      <Select.Item
                        label={item.Posts[1]}
                        value={item.Posts[1]}
                      />
                      <Select.Item
                        label={item.Posts[2]}
                        value={item.Posts[2]}
                      />
                    </Select>
                  </HStack>
                  <HStack justifyContent="space-between">
                    <Center>
                      <Text fontSize="sm">Designed For :</Text>
                    </Center>
                    <Select
                      width="50%"
                      height="9"
                      accessibilityLabel="Channel List"
                      placeholder="Channel List"
                      style={{ backgroundColor: "#afeeee" }}
                      fontSize="sm"
                      color="gray.400"
                      fontWeight="bold"
                      placeholderTextColor="black"
                      bgColor="transparent"
                      placeholderTextColor="gray.500"
                      _selectedItem={{
                        endIcon: <CheckIcon size="5" />,
                      }}
                    >
                      <Select.Item
                        label={item.Posts[0]}
                        value={item.Posts[0]}
                      />
                      <Select.Item
                        label={item.Posts[1]}
                        value={item.Posts[1]}
                      />
                      <Select.Item
                        label={item.Posts[2]}
                        value={item.Posts[2]}
                      />
                    </Select>
                  </HStack>
                  <HStack justifyContent="space-between">
                    <Center>
                      <Text fontSize="sm">Targeted Geography :</Text>
                    </Center>
                    <Select
                      width="50%"
                      height="9"
                      accessibilityLabel="City List"
                      placeholder="City List"
                      style={{ backgroundColor: "#afeeee" }}
                      fontSize="sm"
                      color="gray.400"
                      fontWeight="bold"
                      placeholderTextColor="black"
                      bgColor="transparent"
                      placeholderTextColor="gray.500"
                      _selectedItem={{
                        endIcon: <CheckIcon size="5" />,
                      }}
                    >
                      <Select.Item
                        label={item.Posts[0]}
                        value={item.Posts[0]}
                      />
                      <Select.Item
                        label={item.Posts[1]}
                        value={item.Posts[1]}
                      />
                      <Select.Item
                        label={item.Posts[2]}
                        value={item.Posts[2]}
                      />
                    </Select>
                  </HStack>
                </VStack>

                <HStack justifyContent="space-between" mt="1">
                  <Text color="gray.400" fontSize="sm" fontWeight="bold">
                    {item.words}
                  </Text>
                  <Text color="gray.400" fontSize="sm" fontWeight="bold">
                    {item.charectors}
                  </Text>

                  <Text color="gray.400" fontSize="sm" fontWeight="bold">
                    {item.hastags}
                  </Text>
                </HStack>
                
              </VStack>
            )}
            keyExtractor={(item) => item.id}
          />
</VStack>


       </View>
       <View style={{flex:0.13,}}>

<Button
                  onPress={() => navigation.navigate("Dashboard")}
                  mt="5"
                  colorScheme="blue"
                  borderTopRadius="lg"
                  borderBottomRadius="lg"
                  _text={{ color: "white", fontWeight: "bold", fontSize: "lg" }}
                >
                  Save Post
                </Button>

</View>
      
      </NativeBaseProvider>
    </View>
  );
};
export default Editpostscreen;
const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    justifyContent: "center",
  },

  Image: {
    width: "100%",
    height: 156,
  },
});
