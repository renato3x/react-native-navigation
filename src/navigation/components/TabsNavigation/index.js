import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScreenA from '../../../screens/ScreenA';
import ScreenB from '../../../screens/ScreenB';
import ScreenC from '../../../screens/ScreenC';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

export default function TabsNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'black',
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="screenA"
        component={ScreenA}
        options={{
          title: 'Screen A',
          tabBarIcon: ({ size, color }) => {
            return <Icon name="home" size={size} color={color}/>
          },
        }}
      />
      <Tab.Screen
        name="screenB"
        component={ScreenB}
        options={{
          title: 'Screen B',
          tabBarIcon: ({ size, color }) => {
            return <Icon name="bolt" size={size} color={color}/>
          },
        }}
      />
      <Tab.Screen
        name="ScreenC"
        component={ScreenC}
        options={{
          title: 'Screen C',
          tabBarIcon: ({ size, color }) => {
            return <Icon name="add-circle-outline" size={size} color={color}/>
          },
        }}
      />
    </Tab.Navigator>
  )
}
