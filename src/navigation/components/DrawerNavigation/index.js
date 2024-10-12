import { createDrawerNavigator } from '@react-navigation/drawer';
import ScreenA from '../../../screens/ScreenA';
import ScreenC from '../../../screens/ScreenC';
import ScreenB from '../../../screens/ScreenB';
import ScreenD from '../../../screens/ScreenD';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="screenA"
      screenOptions={{
        // headerShown: false,
      }}
    >
      <Drawer.Screen name="screenA" component={ScreenA}/>
      <Drawer.Screen name="screenB" component={ScreenB}/>
      <Drawer.Screen name="screenC" component={ScreenC}/>
      {/* <Drawer.Screen name="screenD" component={ScreenD}/> */}
    </Drawer.Navigator>
  );
}
