import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import ProductsNavigator from "./navigation/ProductsNavigator";
import {enableScreens} from "react-native-screens";

enableScreens();

// Load fonts
const fetchFonts = () => {
  return Font.loadAsync({
    'bangers-regular': require('./assets/fonts/Bangers-Regular.ttf'),
    'lato-black': require('./assets/fonts/Lato-Black.ttf'),
    'lato-black-italic': require('./assets/fonts/Lato-BlackItalic.ttf'),
    'lato-bold': require('./assets/fonts/Lato-Bold.ttf'),
    'lato-bold-italic': require('./assets/fonts/Lato-BoldItalic.ttf'),
    'lato-italic': require('./assets/fonts/Lato-Italic.ttf'),
    'lato-light': require('./assets/fonts/Lato-Light.ttf'),
    'lato-light-italic': require('./assets/fonts/Lato-LightItalic.ttf'),
    'lato-regular': require('./assets/fonts/Lato-Regular.ttf'),
    'lato-thin': require('./assets/fonts/Lato-Thin.ttf'),
    'lato-thin-italic': require('./assets/fonts/Lato-ThinItalic.ttf'),
    'montserrat-extralight': require('./assets/fonts/Montserrat-ExtraLight.ttf'),
    'montserrat-light': require('./assets/fonts/Montserrat-Light.ttf'),
    'montserrat-thin': require('./assets/fonts/Montserrat-Thin.ttf'),
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};


const App = () => {
  //  States
  const [dataLoaded, setDataLoaded] = useState(false);

  //  Check if async font loading is done
  if (!dataLoaded) {
    return (
        <AppLoading
            startAsync={fetchFonts}
            onFinish={() => setDataLoaded(true)}
            onError={err => console.log(err)}
        />
    );
  }

  return <ProductsNavigator />;

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
