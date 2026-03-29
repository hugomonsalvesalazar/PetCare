import { View, Text, FlatList } from 'react-native';
import { globalStyles } from '../theme/globalStyles';
import { colors } from '../theme/colors';

const PetListScreen = ({ pets }) => {
  return (
    <View style={globalStyles.screen}>
      <Text style={globalStyles.title}>🐾 Mis Mascotas</Text>

      <FlatList
        data={pets}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={globalStyles.card}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              
              <View>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.textPrimary }}>
                  {item.name}
                </Text>
                <Text style={{ color: colors.textSecondary }}>
                  {item.species}
                </Text>
                <Text style={{ color: '#94a3b8' }}>
                  {item.breed}
                </Text>
              </View>

              <Text style={{ fontSize: 28 }}>
                {item.species === 'Perro' ? '' : ''}
              </Text>
              <TouchableOpacity style={styles.fab}>
  <Text style={{ color: '#fff', fontSize: 24 }}>＋</Text>
</TouchableOpacity>

            </View>
          </View>
        )}
      />
    </View>
  );
};

export default PetListScreen;