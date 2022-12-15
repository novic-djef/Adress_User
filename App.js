import React from "react"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AdressCreation from "./src/components/adress_creation";
import Adress from "./src/components/adress";

const Stack = createStackNavigator();

export default function App() {
  return(

    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Adress" component={Adress} />
          <Stack.Screen name="AdressCreation" component={AdressCreation} />
        
    </Stack.Navigator>
    </NavigationContainer>
  )
}