import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import RootNavigator from './src/routes/RootNavigator'

const App = () => {
  return (
    <SafeAreaView>
      <RootNavigator />
    </SafeAreaView>
  )
}

export default App