import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ScreenA from '../../../screens/ScreenA';
import ScreenB from '../../../screens/ScreenB';
import ScreenC from '../../../screens/ScreenC';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="screenA"
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="screenA"
        component={ScreenA}
        options={{
          title: 'Home'
        }}
      />
      <Stack.Screen
        name="screenB"
        component={ScreenB}
      />
      <Stack.Screen
        name="screenC"
        component={ScreenC}
      />
    </Stack.Navigator>
  )
}
