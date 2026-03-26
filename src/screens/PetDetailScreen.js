import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button
} from 'react-native';
import styles from '../styles/PetDetailStyles';

const PetDetailScreen =({ route, navigation }) => {

  const { pet } = route.params;

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      title: pet.name
    });
  }, [pet]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>Nombre: {pet.name}</Text>
        <Text style={styles.text}>Especie: {pet.species}</Text>
        <Text style={styles.text}>Raza: {pet.breed}</Text>
        <Text style={styles.text}>Edad: {pet.age} años</Text>
        <Text style={styles.text}>Peso: {pet.weight} kg</Text>

        <Text style={styles.text}>
          Favorito: {isFavorite ? 'Sí ⭐' : 'No 😢'}
        </Text>

        <Button
          title="Favorito"
          onPress={() => setIsFavorite(!isFavorite)}
        />

        <Button
          title="Volver"
          onPress={() => navigation.goBack()}
        />
      </View>
    </SafeAreaView>
  );
}

export default PetDetailScreen