import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Dimensions,
  ScrollView,
} from "react-native";

import { stockData, Topics } from "./Data";
import { CheckBox } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import {
  Box,
  FlatList,
  Heading,
  Input,
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
  FormControl,
} from "native-base";
import { Header } from "react-native-elements";
import { Entypo, Ionicons, Feather } from "@expo/vector-icons";
import { backgroundColor } from "styled-system";

const Tagpeople = ({ navigation }) => {
  const [people, setPeople] = useState();
  const [shouldShow, setShouldShow] = useState(false);
  return (
    <View style={styles.conatainer}>
      <KeyboardAvoidingView
        enabled
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flexGrow: 1 }}
      >
        <StatusBar style="dark" />
        <NativeBaseProvider>
          <View style={{ height: 100 }}>
            <Header
              containerStyle={{
                elevation: 10, // remove shadow on Android
                shadowOpacity: 3, // remove shadow on iOS
                borderBottomWidth: 0,
                shadow: 9,

                opacity: 0.9,
              }}
              backgroundColor={"#e6e6fa"}
              centerContainerStyle={{ flex: 4 }}
              leftComponent={
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons name="arrow-back" size={28} color="gray" />
                </TouchableOpacity>
              }
              centerComponent={<Heading color="blue.600">Tag People</Heading>}
            />
          </View>

          <View
            style={{
              flex: 1,
              // backgroundColor: "pink",
            }}
          >
            <VStack width="100%" mx="auto">
              <VStack
                borderBottomWidth="1"
                pb="3"
                borderColor="coolGray.400"
                bgColor="transparent"
              >
                <HStack width="90%" mx="auto" bgColor="transparent"  mt="2%">
                  <Feather
                    name="search"
                    size={25}
                    color="gray"
                    style={{ marginTop: "2%", marginRight: "2%" }}
                  />
                  <Input
                    variant="filled"
                    placeholder="Search for people"
                    fontSize="lg"
                    width="60%"
                    pt="1"
                    value={people}
                    onChange={(people) => setPeople(people)}
                  />
                  <Button
                    onPress={() => setShouldShow(true)}
                    colorScheme="blue"
                    _text={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "md",
                    }}
                    width="30%"
                    borderTopRadius="1"
                    borderBottomRadius="1"
                  >
                    Done
                  </Button>
                </HStack>
              </VStack>
              {shouldShow ? (
                <VStack py="4" borderBottomWidth="1" borderColor="coolGray.400">
                  <HStack width="90%" mx="auto">
                    <Center>
                      <Heading>
                        <Heading color="blue.600">Tagged</Heading>
                      </Heading>
                    </Center>
                    <Input
                      variant="filled"
                      defaultValue="BASIT"
                      bgColor="transparent"
                      fontSize="lg"
                      pt="1"
                      ml="2"
                      width="30%"
                      InputRightElement={
                        <TouchableOpacity onPress={() => setShouldShow(false)}>
                          <VStack mb="4">
                            <Entypo name="cross" size={20} color="gray" />
                          </VStack>
                        </TouchableOpacity>
                      }
                    />
                  </HStack>
                </VStack>
              ) : null}

              <VStack
                py="4"
                borderBottomWidth="1"
                borderColor="coolGray.400"
                bgColor="transparent"
              >
                <HStack width="90%" mx="auto" bgColor="transparent">
                  <Center>
                    <Heading>
                      <Heading color="blue.600">Suggestions</Heading>
                    </Heading>
                  </Center>
                </HStack>
              </VStack>
            </VStack>
          </View>
        </NativeBaseProvider>
      </KeyboardAvoidingView>
    </View>
  );
};
export default Tagpeople;
const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    // justifyContent: "center",
  },
});
