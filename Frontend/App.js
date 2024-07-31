import { NavigationContainer } from '@react-navigation/native';
import Footer from './src/layout/Footer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="tab" component={Footer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
