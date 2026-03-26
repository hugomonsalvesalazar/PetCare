import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import PetListScreen from '../screens/PetListScreen';
import PetDetailScreen from '../screens/PetDetailScreen';
import RegisterPetScreen from '../screens/RegisterPetScreen';
import TipsScreen from '../screens/TipsScreen';

//Crea un alias de la navegacion 

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Stack dentro de Mascotas
const  PetsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PetList" component={PetListScreen} 
      />
      <Stack.Screen name="PetDetail" component={PetDetailScreen} 
      />
    </Stack.Navigator>
  );
}

// Tabs principales
const HomeScreens = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Mascotas" component={PetsStack} 
        />
        <Tab.Screen name="Registrar" component={RegisterPetScreen} 
        />
        <Tab.Screen name="Consejos" component={TipsScreen} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default HomeScreens