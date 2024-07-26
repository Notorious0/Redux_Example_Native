import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { Counter } from './Counter';
import { Store } from './Store';
import { Foo } from './Foo';
import { Bar } from './Bar';

export default function App() {
  return (
    <Provider store={Store}>
    <View style={styles.container}>
      <Bar />
      <Foo />
      <Counter />
      <StatusBar style="auto" />
    </View>
    </Provider>

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
