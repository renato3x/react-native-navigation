import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ScreenA from '../../../screens/ScreenA';
import ScreenB from '../../../screens/ScreenB';
import ScreenC from '../../../screens/ScreenC';
import StepStack from './components/StepStack';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="screenA"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="screenA"
        options={{
          title: 'Home'
        }}
      >
        {(props) => (
          <StepStack {...props} forward="screenB">
            <ScreenA/>
          </StepStack>
        )}
      </Stack.Screen>

      <Stack.Screen
        name="screenB"
      >
        {(props) => (
          <StepStack {...props} forward="screenC" backward>
            <ScreenB/>
          </StepStack>
        )}
      </Stack.Screen>

      <Stack.Screen
        name="screenC"
      >
        {(props) => (
          <StepStack {...props} forward="screenC" backward>
            <ScreenC/>
          </StepStack>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  )
}
