import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
// import { StackNavigation } from './navigation';
import { NavigationContainer } from '@react-navigation/native';
import TabsNavigation from './navigation/components/TabsNavigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto"/>
        <NavigationContainer>
          {/* <StackNavigation/> */}
          <TabsNavigation/>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
