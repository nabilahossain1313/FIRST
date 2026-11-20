import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function About({ onBack }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Page</Text>
      <Text>This is my second page!</Text>
      <Pressable
        accessibilityRole="button"
        style={styles.button}
        onPress={onBack}
      >
        <Text style={styles.buttonText}>Back to Home</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e9e9e9',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#781f1f',
    borderRadius: 6,
    marginTop: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});