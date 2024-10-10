import { StyleSheet, Text, View } from 'react-native';

export default function CentralText({
  children,
  bgColor,
  color
}) {
  return (
    <View
      style={[styles.textContainer, { backgroundColor: bgColor || '#fff' }]}
    >
      <Text style={[styles.text, { color: color || '#000' }]}>{ children }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
  },
});
