import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { globalStyles } from '../theme/globalStyles';
import { colors } from '../theme/colors';

const AddPetScreen = () => {
  return (
    <View style={globalStyles.screen}>
      <Text style={globalStyles.title}>➕ Nueva Mascota</Text>

      <TextInput placeholder="Nombre" style={styles.input} />
      <TextInput placeholder="Especie" style={styles.input} />
      <TextInput placeholder="Raza" style={styles.input} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddPetScreen;

const styles = {
  input: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0'
  },

  button: {
    backgroundColor: colors.primary,
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },
  fab: {
  position: 'absolute',
  bottom: 20,
  right: 20,
  backgroundColor: '#4c6ef5',
  width: 60,
  height: 60,
  borderRadius: 30,
  justifyContent: 'center',
  alignItems: 'center',
  elevation: 6
}
  
};