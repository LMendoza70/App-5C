import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>**Hola 5C**</Text>
      <Text>**Hola 5C**</Text>
      <Text>**Hola 5C**</Text>
      <Text>**Hola 5C**</Text>
      <Text>**Hola 5C**</Text>
      <Text>**Hola 5C**</Text>
      <TextInput placeholder='Hola chicos***'></TextInput>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
