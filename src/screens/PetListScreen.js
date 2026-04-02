import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../PetListStyle';

const MOCK_PETS = [
  { id: '1', name: 'Luna', species: 'Gato', age: 2 },
  { id: '2', name: 'Max', species: 'Perro', age: 4 },
  { id: '3', name: 'Coco', species: 'Perico', age: 1 },
];

export default function PetListScreen({ navigation }) {
  const [pets, setPets] = useState(MOCK_PETS);

  const renderCard = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('PetDetail', { pet: item })}
    >
      <Text style={styles.name}>{item.name}</Text>
      <Text style={{ color: '#666', marginTop: 4 }}>{item.species} • {item.age} años</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <Text style={styles.title}>Mis Mascotas</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('RegisterPet')}
          style={{ backgroundColor: '#4CAF50', padding: 10, borderRadius: 20 }}
        >
          <Ionicons name="add" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={pets}
        keyExtractor={(item) => item.id}
        renderItem={renderCard}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListEmptyComponent={<Text style={{ textAlign: 'center', color: '#999', marginTop: 40 }}>No hay mascotas registradas</Text>}
      />
    </SafeAreaView>
  );
}