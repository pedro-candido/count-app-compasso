import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Platform } from 'react-native';
import { ButtonWrapper, Count } from './src/components'
import { Provider } from 'react-redux'
import { store } from './src/store/configureStore.store';

export default function App() {

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require('./assets/bg.png')}
          resizeMode="cover"
        >
          <Text style={styles.title}>
            Bem vindo ao{'\n'}
            <Text style={styles.titleBold}>CountApp</Text> 
          </Text>
          <StatusBar style="auto" />
          <Count />
          <ButtonWrapper />
        </ImageBackground>
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
    backgroundColor: '#090909',
  },
  image: {
    flex: 1,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 40,
    position: 'absolute',
    top: Platform.OS === 'ios' ? 250 : 200
  },
  titleBold: {
    fontWeight: 'bold',
    color: '#f7b718'
  },
  continue: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
});
