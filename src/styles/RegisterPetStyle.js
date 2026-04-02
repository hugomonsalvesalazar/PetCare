import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { styles } from '../RegisterPetStyle';

export default function RegisterPetScreen({ route, navigation }) {
  const editPet = route.params?.editPet;
  const [name, setName] = useState(editPet?.name || '');
  const [species, setSpecies] = useState(editPet?.species || '');
  const [age, setAge] = useState(editPet?.age?.toString() || '');

  const handleSubmit = () => {
    if (!name || !species || !age) {
      Alert.alert('Error', 'Por favor completa todos los campos');
      return;
    }
    // Aquí conectarías con tu estado global o backend
    Alert.alert('Éxito', `${name} ha sido ${editPet ? 'actualizado' : 'registrado'} correctamente`);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 20 }}>{editPet ? 'Editar' : 'Registrar'} Mascota</Text>
        <TextInput style={styles.input} placeholder="Nombre" value={name} onChangeText={setName} />
        <TextInput style={styles.input} placeholder="Especie (ej. Perro, Gato)" value={species} onChangeText={setSpecies} />
        <TextInput style={styles.input} placeholder="Edad (años)" value={age} onChangeText={setAge} keyboardType="numeric" />
        
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 16 }}>
              {editPet ? 'Guardar Cambios' : 'Registrar'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: '#757575' }}
            onPress={() => navigation.goBack()}
          >
            <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 16 }}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}