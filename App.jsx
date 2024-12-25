import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import RootNavigator from './src/routes/RootNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { color } from './src/constants/color';

const App = () => {
  return (
    <SafeAreaView style={styles.flex}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: color.WHITE
  },
});