import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  View
} from 'react-native';
import {styles} from '../styles/TipsStyles'
import { TIPS } from '../data/TipsData';

const TipsScreen = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [tips] = useState(TIPS);

  // Rotación automaticamente y lo limpia
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tips.length); //Devuelve al inicio cuando llega al final, no se sale del tamaño del arreglo
    }, 3000);

    return () => clearInterval(intervalId); //Detiene el temporizador
  }, []);

  // Hace un efecto al cambiar el tip
  useEffect(() => {
  }, [currentIndex]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.counter}>
          {currentIndex + 1} de {tips.length}
        </Text>

        <Text style={styles.tip}>
          {tips[currentIndex]}
        </Text>

        <Button
          title="Siguiente"
          onPress={() =>
            setCurrentIndex((prev) => (prev + 1) % tips.length)
          }
        />
      </View>
    </SafeAreaView>
  );
}

export default TipsScreen