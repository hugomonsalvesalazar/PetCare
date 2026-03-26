import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  TouchableOpacity,
  View
} from 'react-native';
import {styles} from '../styles/PetListStyle'
import {petsData} from '../data/Pets'

const PetListScreen =({ navigation }) => {
  
  // lista de mascotas
  const [pets, setPets] = useState([]);

  // cargar datos iniciales
  useEffect(() => {
   setPets(petsData);
  }, []);

  
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('PetDetail', { pet: item })
      }
    >
      <Text style={styles.name}>
        {item.name} 
      </Text>
      <Text>{item.species}</Text>
      <Text>{item.breed}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Lista de Mascotas</Text>

      <FlatList
        data={pets}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

export default PetListScreen

