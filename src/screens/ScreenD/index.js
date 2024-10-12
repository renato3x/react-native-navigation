import { Button, View } from 'react-native';
import CentralText from '../../components/CentralText';
import { useNavigation } from '@react-navigation/native';

export default function ScreenD() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
        <Button
          title="Open"
          onPress={() => {
            navigation.openDrawer();
            // setTimeout(navigation.closeDrawer, 3000);
            // setInterval(navigation.toggleDrawer, 1000);
          }}
        />
      </View>
      <View style={{ flex: 1 }}>
        <CentralText bgColor="#33fa72" color="#000">
          Screen D
        </CentralText>
      </View>
    </View>
  )
}
