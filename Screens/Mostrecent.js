import  React from 'react';
import {View,StyleSheet,TouchableOpacity,Linking} from "react-native"
import { mostrecent } from './Data'
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
  import { Feather,AntDesign,MaterialIcons,Ionicons,Foundation,Entypo ,FontAwesome5 ,FontAwesome,MaterialCommunityIcons } from '@expo/vector-icons'

const Mostrecent = () => {
  return (
    <View style={styles.conatainer}>
<NativeBaseProvider>
<VStack width="93%" mx="auto">
<FlatList
         
        data={mostrecent}
        
    
        renderItem={({ item }) => (
         <VStack  borderBottomWidth="2"  borderColor="gray.200"
         py="5%" 
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
        <HStack>
            <VStack width='75%'  >
            <Heading color="blue.600" fontSize="lg" mt="1">
       {item.heading}

        </Heading>

        <Text fontSize="sm" fontWeight="semibold">
          {item.paragraph}
        </Text>

            </VStack>
            <VStack width='25%' bgColor='blue.100'  height="24" my='auto' >
           <Image
              source={{uri:item.Proifle}}
              size='full'
           />

            </VStack>
        </HStack>
        <HStack space='1%' ml='auto'>
        <AntDesign name="clockcircle" size={20} color="gray" />
        <Heading fontSize='sm' color='gray.400'>
{item.Time}
        </Heading>
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

export default Mostrecent
const styles= StyleSheet.create({
 
    conatainer:{
        flex:1,
        justifyContent:"center",
        backgroundColor:"#fff"
        
        
    
        
    },






});