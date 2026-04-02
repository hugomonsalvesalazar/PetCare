import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { styles } from '../TipsStyles';

const TIPS = [
  '🐶 Pasea a tu perro al menos 30 min al día.',
  '🐱 Cambia el agua del bebedero diariamente.',
  '🦴 No alimentes a tus mascotas con chocolate o uvas.',
  '🛁 Cepilla su pelaje semanalmente para evitar nudos.',
  '🏥 Visita al veterinario cada 6 meses para chequeos.'
];

export default function TipsScreen() {
  const [index, setIndex] = useState(0);

  const nextTip = () => setIndex((prev) => (prev + 1) % TIPS.length);
  const prevTip = () => setIndex((prev) => (prev - 1 + TIPS.length) % TIPS.length);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 30 }}>💡 Consejos del Día</Text>
      <View style={styles.tip}>
        <Text style={{ fontSize: 18, textAlign: 'center', lineHeight: 26 }}>
          {TIPS[index]}
        </Text>
      </View>
      <Text style={styles.counter}>Consejo {index + 1} de {TIPS.length}</Text>
      <View style={{ flexDirection: 'row', gap: 20 }}>
        <TouchableOpacity onPress={prevTip} style={{ backgroundColor: '#E0E0E0', padding: 12, borderRadius: 10 }}>
          <Text>⬅️ Anterior</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={nextTip} style={{ backgroundColor: '#4CAF50', padding: 12, borderRadius: 10 }}>
          <Text style={{ color: '#FFF', fontWeight: 'bold' }}>Siguiente ➡️</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}