import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/Title/';
import Form from './src/components/Form/';

export default function App() {
  return (
    <View style={styles.container}>
      <Title></Title>
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1616',
    paddingTop: 40,
  },
});
