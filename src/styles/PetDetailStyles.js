import { View, Text } from 'react-native';
import { globalStyles } from '../theme/globalStyles';
import { colors } from '../theme/colors';

const PetDetailScreen = ({ route }) => {
  const { pet } = route.params;

  return (
    <View style={globalStyles.screen}>
      <View style={[globalStyles.card, { alignItems: 'center' }]}>
        
        <Text style={{ fontSize: 60 }}>
          {pet.species === 'Perro' ? '' : ''}
        </Text>

        <Text style={{ fontSize: 22, fontWeight: 'bold', color: colors.textPrimary }}>
          {pet.name}
        </Text>

        <Text style={{ color: colors.textSecondary }}>
          {pet.species}
        </Text>

        <Text style={{ color: '#94a3b8' }}>
          {pet.breed}
        </Text>
      </View>
    </View>
  );
};

export default PetDetailScreen;