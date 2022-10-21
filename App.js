import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from './artree_logo_transparent_longer_stem.png'
import font from './artree_title.png'

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: 400, height: 400 }} />
      <Image source={font} style={{ width: 400, height: 100 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1e49',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
