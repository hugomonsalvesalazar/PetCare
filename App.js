import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import PetListScreen from './screens/PetListScreen';
import PetDetailScreen from './screens/PetDetailScreen';
import RegisterPetScreen from './screens/RegisterPetScreen';
import TipsScreen from './screens/TipsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PetList" component={PetListScreen} />
      <Stack.Screen name="PetDetail" component={PetDetailScreen} />
      <Stack.Screen name="RegisterPet" component={RegisterPetScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Mascotas') iconName = focused ? 'paw' : 'paw-outline';
            else if (route.name === 'Consejos') iconName = focused ? 'bulb' : 'bulb-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#4CAF50',
          tabBarInactiveTintColor: '#888',
        })}
      >
        <Tab.Screen name="Mascotas" component={HomeStack} />
        <Tab.Screen name="Consejos" component={TipsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}