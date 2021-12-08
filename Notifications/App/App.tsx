import React from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import store from './store';

let isDarkMode;

const App = () => {
  isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <Provider store={store}>
        <View style={styles.backgroundStyle}>
          <Text>ReaNic</Text>
        </View>
      </Provider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: isDarkMode ? 'blue' : 'yellow',
  },
});

export default App;
