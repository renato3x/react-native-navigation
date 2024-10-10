import CentralText from '../../components/CentralText';

export default function ScreenA({ navigation }) {
  navigation.navigate('screenB');

  return (
    <CentralText bgColor="#e53935" color="#fff">Screen A</CentralText>
  )
}
