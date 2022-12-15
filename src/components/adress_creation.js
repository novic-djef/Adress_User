import { StatusBar } from 'expo-status-bar';
import {  ActivityIndicator, ScrollView, Text, View, StyleSheet, TextInput, Image, FlatList, Button } from 'react-native';
import {  ArrowLeftIcon, EllipsisHorizontalIcon, MapPinIcon, MapIcon} from '@heroicons/react/24/outline';
import { NativeWindStyleSheet } from "nativewind";
//import * as Linking from 'expo-Linking'
// import * as WebBrowser from 'expo-browser'

import React, { useState } from "react";

import * as ImagePicker from "expo-image-picker";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function AdressCreation({navigation}) {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //const { width } = useWindowDimensions();

  const pickImages = async () => {
    // No permissions request is necessary for launching the image library
    setIsLoading(true);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
       //allowsEditing: true,
      allowsMultipleSelection: true,
      selectionLimit: 1,
      
      quality: 1,
    });
    setIsLoading(false);
    console.log(result);
    if (!result.cancelled) {
      setImages(result.uri ? [result.uri] : result.selected);
    }
  };
 
  const goBack = () => navigation.goBack();
  return (
    <>



     <ScrollView className="m-2 px-2 bg-white border-gray-200 dark:border-gray-700">
     <Button style={styles.container} onPress={goBack}  /> 
    <View  className="m-4 container flex-wrap justify-between ">
       < ArrowLeftIcon style={styles.icon}    />
       
      <Text style={{marginTop: -22,}} className=" m-2 flex justify-center items-center text-xl font-semibold whitespace-nowrap dark:text-black">Nouvelle Adresse</Text>
      
      </View>
      <View>



      {/* <CameraIcon style={{  marginTop: -25,  width: 28, height: 28, color: 'gray'}}/> */}
      <View className=" flex items-start space-x-1 ">
      <FlatList
      data={images}
      renderItem={({ item }) => (
        <Image
       
        className=" w-26 h-26 rounded-full flex-shrink-4 border-solid border-2 border-sky-500/100"
          source={{ uri: item.uri }}
          style={{ width: 80, height: 80 }}
        />
      )}
      
      keyExtractor={(item) => item.uri}
      contentContainerStyle={{ marginVertical: 16, paddingBottom: 16 }}
      ListHeaderComponent={
        isLoading ? (
          
          <View>
            
            <Text
              style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}
            >
              Loading...
            </Text>
            <ActivityIndicator size={"large"} />
          </View>
        ) : (
          <Button   title="Choisir"  onPress={pickImages}/>
          
        )
      }
     />
<Text style={{ position: 'relative', top: -16, marginTop:-90, right: -75, }} className=" hover:bg-slate-100 ...">
      <Text  className="flex p-4 px-1 py-0.5 text-black-700/100 text-sm font-bold">
     Choisir une photo
      </Text>
      <Text  className="flex p-4 px-1 py-0.5 text-gray-500 text-sm  ">
      Choisir un photo de Profile ou emoji
      </Text>
      </Text>
        
  
    
     
  </View>

  </View>
        <View className="w-14 h-14 p-3 flex relative inset-y-14 left-0 text-gray-600 items-center pl-3 pointer-events-none">
         <MapPinIcon style={{ }}/> 
         </View>
      <TextInput type="search" id="default-search" className="block p-4 pl-10 w-full text-md  bg-gray-100 rounded-xl   dark:placeholder-gray-900 dark:text-gray " placeholder="   Entrer le titre de votre Adresse....." required  />
    
      <StatusBar style="auto" />
      



      <View className="  m-1 max-w-xxl rounded-xl overflow-hidden shadow-xl ">
        <Text className="flex p-4 px-1 py-0.5 text-black-700/100 text-sm font-bold">Choisir une Localisation</Text>
        <EllipsisHorizontalIcon style={{ position: 'relative', right: -310, top: -22, height: 27, width: 27, color: 'black'}} />
              <Image
              className=" w-80 h-80  bg-gray-300 flex relative items-center justify-center border rounded-xl border-transparent "
              source={{
                uri: 'https://th.bing.com/th/id/R.ffc627077e90286c6b4696f66d11cdd7?rik=Nxpoc454j53ijQ&pid=ImgRaw&r=0',
              }} 
              
            />
       
      </View>


          <View className=" m-4 flex items-start space-x-1 ">
            
            <Image className=" w-16 h-16 rounded-full flex-shrink-4 border-solid border-2 border-sky-500/100"
            source={{
              uri: 'https://th.bing.com/th/id/OIP.cC02XI5bn9EzAKKOfzWySgHaHa?w=204&h=204&c=7&r=0&o=5&pid=1.7',
            }} 
            />
          
            <Text style={{ position: 'relative', top: -2, marginTop:-62, right: -75, }} className=" hover:bg-slate-100 ...">
            <Text  className="flex p-4 px-1 py-0.5 text-black-700/100 text-sm font-bold">
          Utliser Ma Position Actuel
            </Text>
            <Text  className="flex p-4 px-1 py-0.5 text-gray-500 text-sm  ">
            D1-5,Cotonou hopital General place
            </Text>
            </Text>
            
          </View>
      <View className=" w-14 h-14 p-2 flex relative inset-y-14 left-0 text-gray-600 items-center pl-3 pointer-events-none">
         <MapIcon style={{ }}/> 
         </View>
      <TextInput type="search" id="default-search" className="block p-4 pl-10 w-full text-md  bg-gray-100 rounded-xl   dark:placeholder-gray-900 dark:text-gray " placeholder="    Entrer votre Ville/Region....." required  />
    
<View className="m-2 p-2 rounded-xl">
<Button
      
        title="Enregistrer"
        onPress={() => console.log('Simple Button pressed')}
      />
</View>
      
 
    </ScrollView>
    </>
   
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
       
      },
  icon: {
    width: 22,
    height: 22,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: -4,
    
    
  },
});


