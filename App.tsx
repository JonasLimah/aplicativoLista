import { StatusBar } from 'expo-status-bar';
import { SafeAreaView} from 'react-native';
import {Pages} from './src/pages/MainStack/MainStack'
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (
    <NavigationContainer>
      <Pages/>
    </NavigationContainer>
  );
}


