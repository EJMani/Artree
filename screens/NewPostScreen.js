import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet, Button, View } from 'react-native';

export default function NewPostScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>new post screen bitches!</Text>
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