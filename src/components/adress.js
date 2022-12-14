

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, Text, View, StyleSheet, TextInput, Image, FlatList } from 'react-native';

import {  ArrowLeftIcon, EllipsisVerticalIcon, MagnifyingGlassIcon, CheckIcon} from '@heroicons/react/24/outline';


export default function Adress() {
    const adresses = [
        {
          id: 1,
        image: 'https://reactnative.dev/docs/assets/p_cat2.png',
        name: 'nana',
        ville: '',
        lieu: '',
        telephone: '',
        siteUrl: 'https://reactnative.dev/docs/assets/p_cat2.png',
      },
      {
        id: 2,
        image: 'https://reactnative.dev/docs/assets/p_cat2.png',
        name: 'nana',
        ville: '',
        lieu: '',
        telephone: '',
        siteUrl: 'https://reactnative.dev/docs/assets/p_cat2.png',
      },
      {
        id: 3,
        image: 'https://reactnative.dev/docs/assets/p_cat2.png',
        name: 'nana',
        ville: '',
        lieu: '',
        telephone: '',
        siteUrl: 'https://reactnative.dev/docs/assets/p_cat2.png',
      
      },
      ]
    return (
        <ScrollView className="m-2 px-2 bg-white border-gray-200 dark:border-gray-700">
        <View  className="m-4 container flex-wrap justify-between ">
        < ArrowLeftIcon style={styles.icon} />
          <Text style={{marginTop: -22,}} className=" m-2 flex justify-center items-center text-xl font-semibold whitespace-nowrap dark:text-black">Adresses</Text>
          <View className="inline-flex justify-center items-end ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500" aria-controls="mobile-menu-2">
            <Text className="sr-only">Open main menu</Text>
            <EllipsisVerticalIcon style={{ display: 'flex', marginTop: -46, justifyContent: 'flex-end', alignItems: 'flex-end',  width: 28, height: 28, color: 'black'}} />
          </View> 
          </View>
          <View>
          <Text  className="mb-2 text-sm font-medium text-white sr-only dark:text-gray-300">Search</Text>
          
            <View className=" flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
             <MagnifyingGlassIcon style={{  marginTop:15,  width: 28, height: 28, color: 'gray'}}/> 
             </View>
          <TextInput type="search" id="default-search" className="block p-4 pl-10 w-full text-md  bg-gray-100 rounded-xl   dark:placeholder-gray-900 dark:text-gray " placeholder="effectuez votre recherche....." required  />
        
          <StatusBar style="auto" />
          </View>
    
    
    
          <View className=" p-4 m-2 max-w-xxl rounded-xl overflow-hidden shadow-xl ">
    
            <View className="flex-1 truncate">
              <View className=" flex items-start space-x-0 ">
                <Image className=" w-8 h-8 rounded-full flex-shrink-4 border-solid border-2 border-green-500/100"
                 source={{
                  uri: 'https://th.bing.com/th?id=OIF.rCCJISlf%2fdnNPB8aDahRYQ&w=185&h=180&c=7&r=0&o=5&pid=1.7',
                }} 
                 />
                {/* <PhoneIcon  className={`h-5 w-5 text-primary transition-all `} /> */}
                <View style={{marginTop: -32, left: 24,}} className="icone w-3 h-3 rounded-full flex-shrink-4 border-solid border-2 bg-green-600 border-green-600">
                <CheckIcon style={{ color: 'white',}} className={`h-2 w-2 text-primary transition-all bg-white `} />
                </View>
    
                <Text style={{  margin: 35, marginTop:-12, }} className=" hover:bg-slate-100 ...">
                <Text  className="flex p-4 px-1 py-0.5 text-sm font-medium ">
                Samuel Eto'o
                </Text>
                </Text>
                
              </View>
              <Text className=" text-gray-900 text-sm font-medium truncate  ">
              Ancien Boulevard
                </Text>
              <Text className="mt-1 text-gray-500 text-sm truncate">
              face marie
              </Text>
              <Text className="mt-1 text-gray-500 text-sm truncate">
              00237690089951
              </Text>
            </View>
              <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: -42,}}>
                  <Image
                  className=" image w-14 h-14 bg-gray-300 rounded-full inline-flex items-center justify-center  border border-transparent  px-3 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
                  source={{
                    uri: 'https://th.bing.com/th/id/OIP.hEuCM6G7zZzLSQlC2rB7rQAAAA?w=162&h=180&c=7&r=0&o=5&pid=1.7',
                  }} 
                />
              </View>
          
    
          </View>
        
          <View className="border-solid border-2 border-sky-500/100 border-bg-sky-500/100 p-4 m-2 max-w-xxl rounded-xl overflow-hidden shadow-xl ">
    
    <View className="flex-1 truncate">
      <View className=" flex items-start space-x-0 ">
        <Image className=" w-8 h-8 rounded-full flex-shrink-4 border-solid border-2 border-sky-500/100"
         source={{
          uri: 'https://th.bing.com/th/id/OIP.5Avt_LtbwiQ65ZmVa_YycgHaFY?w=239&h=180&c=7&r=0&o=5&pid=1.7',
        }} 
         />
        {/* <PhoneIcon  className={`h-5 w-5 text-primary transition-all `} /> */}
        <View style={{marginTop: -32, left: 24,}} className="icone w-3 h-3 rounded-full flex-shrink-4 border-solid bg-sky-600 border-2 border-sky-600">
        <CheckIcon style={{ color: 'white',}} className={`h-2 w-2 text-primary transition-all border-sky-600 `} />
        </View>
    
        <Text style={{  margin: 35, marginTop:-12, }} className=" hover:bg-slate-100 ...">
        <Text  className="flex p-4 px-1 py-0.5 text-sky-500/100 text-sm font-medium ">
        Francis Nganou
        </Text>
        </Text>
        
      </View>
      <Text className=" text-gray-900 text-sm font-medium truncate  ">
      cotonou rue de la police
        </Text>
      <Text className="mt-1 text-gray-500 text-sm truncate">
      face hotel de select
      </Text>
      <Text className="mt-1 text-gray-500 text-sm truncate">
      00237690089951
      </Text>
    </View>
      <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: -42,}}>
          <Image
          className=" image w-14 h-14 bg-gray-300 rounded-full inline-flex items-center justify-center  border border-transparent  px-3 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
          source={{
            uri: 'https://th.bing.com/th/id/OIP.KEBDyVPzvjt9O2bkrEY-PAHaHa?w=187&h=187&c=7&r=0&o=5&pid=1.7',
          }} 
        />
      </View>
    
    
           </View>
    
    <View className=" p-4 m-2 max-w-xxl rounded-xl overflow-hidden shadow-xl ">
    
    <View className="flex-1 truncate">
      <View className=" flex items-start space-x-0 ">
        <Image className=" w-8 h-8 rounded-full flex-shrink-4 border-solid border-2 border-green-600"
         source={{
          uri: 'https://th.bing.com/th/id/OIP.yK2IgrFVpwer6jFX_oQjygHaKL?w=130&h=180&c=7&r=0&o=5&pid=1.7',
        }} 
         />
        {/* <PhoneIcon  className={`h-5 w-5 text-primary transition-all `} /> */}
        <View style={{marginTop: -32, left: 24,}} className="icone w-3 h-3 rounded-full flex-shrink-4 border-solid border-2 bg-green-600 border-green-600">
        <CheckIcon style={{color: 'white'}} className={`h-2 w-2 text-primary transition-all border-green-600 `} />
        </View>
    
        <Text style={{  margin: 35, marginTop:-12, }} className=" hover:bg-slate-100 ...">
        <Text  className="flex p-4 px-1 py-0.5  text-sm font-medium ">
        Naruto Kakashi
        </Text>
        </Text>
        
      </View>
      <Text className=" text-gray-900 text-sm font-medium truncate  ">
      Cotonou Presidence
        </Text>
      <Text className="mt-1 text-gray-500 text-sm truncate">
      Entrer Presidence
      </Text>
      <Text className="mt-1 text-gray-500 text-sm truncate">
      00237690089951
      </Text>
    </View>
      <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: -42,}}>
          <Image
          className=" image w-14 h-14 bg-gray-300 rounded-full inline-flex items-center justify-center  border border-transparent  px-3 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
          source={{
            uri: 'https://th.bing.com/th/id/OIP.CzXc_t1_P-BfJC4-WXkdUgHaFJ?w=256&h=180&c=7&r=0&o=5&pid=1.7',
          }} 
        />
      </View>
    
    
    </View>
    
    <View className=" p-4 m-2 max-w-xxl rounded-xl overflow-hidden shadow-xl ">
    
    <View className="flex-1 truncate">
      <View className=" flex items-start space-x-0 ">
        <Image className=" w-8 h-8 rounded-full flex-shrink-4 border-solid "
         source={{
          uri: 'https://th.bing.com/th/id/OIP.PblBOUYuOu1n62NampbbnAHaMh?w=114&h=180&c=7&r=0&o=5&pid=1.7',
        }} 
         />
        {/* <PhoneIcon  className={`h-5 w-5 text-primary transition-all `} /> */}
        <View style={{marginTop: -32, left: 24,}} className="icone w-3 h-3 rounded-full flex-shrink-4 border-solid border-2 bg-yellow-400 border-yellow-400">
        <CheckIcon style={{color: 'white'}} className={`h-2 w-2 text-primary transition-all border-sky-500/100 `} />
        </View>
    
        <Text style={{  margin: 35, marginTop:-12, }} className=" hover:bg-slate-100 ...">
        <Text  className="flex p-4 px-1 py-0.5  text-sm font-medium ">
        Pristile Jessica
        </Text>
        </Text>
        
      </View>
      <Text className=" text-gray-900 text-sm font-medium truncate  ">
      Cotonou Pharmacie
        </Text>
      <Text className="mt-1 text-gray-500 text-sm truncate">
     Immeuble LOTO
      </Text>
      <Text className="mt-1 text-gray-500 text-sm truncate">
      00237690089951
      </Text>
    </View>
      <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: -42,}}>
          <Image
          className=" image w-14 h-14 bg-gray-300 rounded-full inline-flex items-center justify-center  border border-transparent  px-3 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
          source={{
            uri: 'https://th.bing.com/th/id/OIP.CzXc_t1_P-BfJC4-WXkdUgHaFJ?w=256&h=180&c=7&r=0&o=5&pid=1.7',
          }} 
        />
      </View>
    
    
    </View>
         
     
    
        </ScrollView>
      );
    }
    
    const styles = StyleSheet.create({
      icon: {
        width: 22,
        height: 22,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: -4,
        
        
      },
    });
    
