import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!</Text>

      <View style={styles.row}>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#9B111E' }]}>
          <Text style={styles.textButton}>Voltar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#43425D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    color: '#FFF'
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    marginVertical: 20,
    marginHorizontal: 10,
    backgroundColor: '#0A0',
    width: 160,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 20,
  },
  textButton: {
    color: '#FFF',
    fontSize: 20,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  }
});
