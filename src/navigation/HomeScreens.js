import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Mascotas') {
              iconName = focused ? 'paw' : 'paw-outline';
            } else if (route.name === 'Registrar') {
              iconName = focused ? 'create' : 'create-outline';
            } else if (route.name === 'Consejos') {
              iconName = focused ? 'information-circle' : 'information-circle-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },

          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'gray',
        })}
      >
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