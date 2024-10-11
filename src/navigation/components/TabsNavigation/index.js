import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScreenA from '../../../screens/ScreenA';
import ScreenB from '../../../screens/ScreenB';
import ScreenC from '../../../screens/ScreenC';

const Tab = createBottomTabNavigator();

export default function TabsNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 20,
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'black',
      }}
    >
      <Tab.Screen
        name="screenA"
        component={ScreenA}
        options={{
          title: 'Screen A',
        }}
      />
      <Tab.Screen
        name="screenB"
        component={ScreenB}
        options={{
          title: 'Screen B',
        }}
      />
      <Tab.Screen
        name="ScreenC"
        component={ScreenC}
        options={{
          title: 'Screen C',
        }}
      />
    </Tab.Navigator>
  )
}
