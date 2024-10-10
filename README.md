# `react-native-navigation`

## `NavigationContainer`

Todo e qualquer tipo de navegação, seja Stack, Drawer, Tabs, etc., precisa utilizar um componente chamado **`<NavigationContainer/>`**. Esse componente gerencia a árvore de navegação do projeto e contém o **estado de navegação**. Esse componente deve sempre envolver toda a estrutura de navegação. Geralmente é utilizado no App.

Exemplo:

```Javascript
export default function App() {
  return (
    <NavigationContainer>
      {/* some code about navigation here... */}
    </NavigationContainer>
  )
}
```

## `(Native) Stack Navigation`

Stack Navigation utiliza uma navegação que faz a transição entre uma tela e outra, onde, sempre que você troca de uma tela para outra, ela muda de posição na *pilha (stack)*. Ou seja, a tela que você está atualmente está na primeira posição da pilha, fazendo com que ela apareça para você. Essa é, basicamente, a navegação padrão de aplicativos mobile.

A opção que está sendo mostrada é a navegação em stack nativa, onde essa navegação utiliza componentes nativos do Android ou iOS para renderizar as coisas na tela, o que deixa mais fluído e rápido. A opção que não é native funciona, basicamente, da mesma forma. Porém, ela gerencia tudo com JavaScript, o que pode levar a problemas de performances, já que ele não utiliza tudo 100% nativo do dispositivo.

Exemplo:

```Javascript
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            title: 'Home'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
```

Resultado:

<img
  src=".github/images/native_stack_navigation_example_header_shown_default.png"
  height="500"
/>

Para iniciar a navegação em Stack, você executa a função `createNativeStackNavigator()`, e essa função retornará dois componentes: `Navigator` e o `Screen`. 

O componente `Navigator` é o gerenciador principal da navegação em pilha, fazendo a organização e a renderização das telas que estão na pilha.

O componente `Screen` é componente que representa uma tela da pilha que o `Navigator` gerencia. Para funcionar, a `Screen` precisa de dois parâmetros obrigatórios:

- `name`: que é o identificador dessa tela na stack, muito similar ao definir uma rota em um projeto web.

- `component`: define o componente que será renderizado ao acessar essa tela na stack.

Também é possível definir algumas opções a mais para as Screens do projeto, como, por exemplo, um título para sua Screen, como foi já colocado no exemplo anterior. Se você não definir um título, por padrão, o título será o valor da propriedade `name`

Além do componente `Screen` receber parâmetros, o `Navigator` também recebe alguns parâmetros obrigatórios

- `initialRouteName`: esse parâmetro define que, ao iniciar determinada navegação em pilha, a primeira tela que deve ser renderizada em tela é a que possui o nome definido nesse parâmetro. No exemplo acima, a tela inicial que será renderizada será a rota com o `name` igual a **"home"**.

Como também visto no exemplo acima, essa navegação coloca uma espécie de cabeçalho que mostra o título da tela que está renderizada atualmente. Esse cabeçalho pode ser removido colocando o parâmetro `screenOptions` no componente `Navigator` da seguinte forma.


```Javascript
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            title: 'Home'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
```

Por padrão, a propriedade `headerShown` de `screenOptions` vem como `true`, mas passando o valor `false` a tela final ficará assim:

<img
  src=".github/images/native_stack_navigation_example_header_shown_false.png"
  height="500"
/>
