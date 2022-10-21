import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet, Button, View } from 'react-native';

export default function CommerceScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>commerce screen bitches!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});