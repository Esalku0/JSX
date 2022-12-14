/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { Surface } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { Switch } from 'react-native-paper';
import { Chip } from 'react-native-paper';
import { useState, useEffect } from 'react';
import { DateTimePickerModal } from 'react-native-paper-datetimepicker';
import { Provider as PaperProvider } from 'react-native-paper';

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
//manel?
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
//commit
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Section = ({ children, title }) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = (props) => {
  const isDarkMode = useColorScheme() === 'dark';;
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,

  };
  const saluda = nom => {
    return (
      <Text style={{ color: 'blue', fontSize: 25 }}> hola {nom}</Text>
    );
  };
  const saluda2 = () => {
    return (
      <View>
        {saluda('tani')}
        {saluda('rafeta')}
      </View>
    );
  };


  const esPersona = true;
  return (

    <PaperProvider>
      {(esPersona) ? saluda('santi programaor') : saluda('piuet grosset')}
      {saluda2()}
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  width: {
    width: 340,
    alignSelf: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  chip1: {
    width: 95,
    textAlign: 'center',
  },
  chip2: {
    width: 70,
    textAlign: 'center',
  },
  surface: {
    padding: 8,
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

