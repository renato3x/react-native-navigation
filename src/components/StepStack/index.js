import { Button, StyleSheet, View } from 'react-native';

export default function StepStack({
  children,
  forward,
  navigation,
  backward,
}) {
  return (
    <View style={styles.container}>
      <View>
        {backward && (
          <Button
            title="Backward"
            onPress={() => {
              navigation.goBack();
            }}
          />
        )}
        {forward && (
          <Button
            title="Forward"
            onPress={() => {
              /**
                navigate: redireciona de uma tela para outra.
                caso o navigate redirecione para a mesma tela atual da
                stack, essa mesma tela não será adicionada novamente,
                impedindo múltiplas instâncias da mesma tela na stack

                push: também redireciona de uma tela para outra, porém,
                mesmo se o push estiver redirecionando para a mesma tela atual
                da stack, ele irá renderizar uma nova instância da mesma na tela atual,
                criando um fluxo onde o usuário vai navegando pela mesma tela
               */

              // navigation.navigate(forward, params);
              navigation.push(forward, { number: Math.round(Math.random() * 100) });
            }}
          />
        )}
      </View>
      <View style={{ flex: 1 }}>
        { children }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
