import { StatusBar } from 'expo-status-bar';
import {
  Linking,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useState } from 'react';
import About from './about';

const GOOGLE_URL = 'https://www.google.com';

function openGoogle() {
  if (Platform.OS === 'web') {
    window.open(GOOGLE_URL, '_blank', 'noopener,noreferrer');
    return;
  }

  Linking.openURL(GOOGLE_URL);
}

export default function App() {
  const [page, setPage] = useState('home');

  if (page === 'about') {
    return <About onBack={() => setPage('home')} />;
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text>FIRST </Text>
        <Text>App.js</Text>
        <Pressable
          accessibilityRole="button"
          style={styles.button}
          onPress={() => setPage('about')}
        >
          <Text style={styles.buttonText}>Open About Page</Text>
        </Pressable>
        <View style={styles.linkContainer}>
          <Pressable accessibilityRole="link" onPress={openGoogle}>
            <Text style={styles.linkText}>Open Google</Text>
          </Pressable>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.formText}>what should I do now</Text>
        </View>

        <View style={styles.boxRow}>
          <View style={styles.redBox}>
            <Text>Box 1</Text>
          </View>
          <View style={styles.boxTwo}>
            <Text>Box 2</Text>
          </View>
        </View>

        <View style={styles.box}>
          <View style={styles.blackBox}>
            <Text style={styles.whiteText}>Black box</Text>
          </View>
        </View>
        <Text style={styles.title}>Student Table</Text>
        <View style={styles.table}>
          <View style={styles.row}>
            <Text style={styles.th}>ID</Text>
            <Text style={styles.th}>Name</Text>
            <Text style={styles.th}>Department</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.td}>1</Text>
            <Text style={styles.td}>Nabila</Text>
            <Text style={styles.td}>CSE</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.td}>2</Text>
            <Text style={styles.td}>Rahim</Text>
            <Text style={styles.td}>EEE</Text>
          </View>
        </View>
        <View style={styles.spacer} />
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9e9e9',
  },
  content: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  formContainer: {
    backgroundColor: '#781f1f',
    padding: 16,
  },
  formText: {
    color: '#ffffff',
  },
  linkText: {
    color: '#eeae00',
    fontSize: 30,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  linkContainer: {
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#781f1f',
    borderRadius: 6,
    marginVertical: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  boxRow: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 20,
  },
  redBox: {
    backgroundColor: 'red',
    padding: 20,
  },
  boxTwo: {
    backgroundColor: 'blue',
    padding: 20,
  },
  box: {
    marginVertical: 10,
  },
  blackBox: {
    width: 120,
    height: 50,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: 'white',
  },
  spacer: {
    height: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  table: {
    width: '90%',
    borderWidth: 1,
    borderColor: 'black',
  },
  row: {
    flexDirection: 'row',
  },
  th: {
    flex: 1,
    padding: 12,
    backgroundColor: '#333333',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'white',
  },
  td: {
    flex: 1,
    padding: 12,
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#cccccc',
  },
});
