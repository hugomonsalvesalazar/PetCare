import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  TextInput,
  Button,
  View,
  Alert,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import {styles} from '../styles/RegisterPetStyle'

const  RegisterPetScreen = () => {

  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    // El metodo trim, elimina los espacios del String reciibo al principio y al final
    if (
      name.trim() !== '' &&
      species.trim() !== '' &&
      breed.trim() !== '' &&
      age !== '' &&
      weight !== ''
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [name, species, breed, age, weight]);

  const handleRegister = () => {
    Alert.alert(
      'Mascota registrada',
      `Nombre: ${name}
      Especie: ${species}
      Raza: ${breed}
      Edad: ${age}
      Peso: ${weight}`
    );
  };

  const handleClear = () => {
    setName('');
    setSpecies('');
    setBreed('');
    setAge('');
    setWeight('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <View>
          <TextInput
            style={styles.input}
            placeholder="Nombre"
            placeholderTextColor="#8e8b8b"
            value={name}
            onChangeText={setName}
          />

          <TextInput
            style={styles.input}
            placeholder="Especie"
            placeholderTextColor="#8e8b8b"
            value={species}
            onChangeText={setSpecies}
          />

          <TextInput
            style={styles.input}
            placeholder="Raza"
            placeholderTextColor="#8e8b8b"
            value={breed}
            onChangeText={setBreed}
          />

          <TextInput
            style={styles.input}
            placeholder="Edad"
            placeholderTextColor="#8e8b8b"
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
          />

          <TextInput
            style={styles.input}
            placeholder="Peso"
            placeholderTextColor="#8e8b8b"
            value={weight}
            onChangeText={setWeight}
            keyboardType="numeric"
          />

          <Button
            title="Registrar"
            onPress={handleRegister}
            disabled={!isValid}
          />

          <Button
            title="Limpiar"
            onPress={handleClear}
            color={styles.colorButton}
          />
          
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default RegisterPetScreen