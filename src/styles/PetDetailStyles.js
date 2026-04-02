import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import detailStyles from '../PetDetailStyles';

export default function PetDetailScreen({ route, navigation }) {
  const { pet } = route.params;

  return (
    <SafeAreaView style={detailStyles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginBottom: 16 }}>
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>
      <View style={detailStyles.card}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 8 }}>{pet.name}</Text>
        <Text style={detailStyles.text}>🐾 Especie: {pet.species}</Text>
        <Text style={detailStyles.text}>🎂 Edad: {pet.age} años</Text>
        <Text style={detailStyles.text}>📅 Registrado: {new Date().toLocaleDateString()}</Text>
      </View>
      <TouchableOpacity
        style={{ backgroundColor: '#E53935', padding: 16, borderRadius: 12, marginTop: 20, alignItems: 'center' }}
        onPress={() => navigation.navigate('RegisterPet', { editPet: pet })}
      >
        <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 16 }}>Editar / Actualizar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}