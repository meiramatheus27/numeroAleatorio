import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  TouchableOpacityBase,
  StyleSheet,
} from 'react-native';

const App = () => {

    const[numero, setNumero] = useState(0)

    function handleNumero(){
        const novo_numero = Math.floor(Math.random() * 100)

        setNumero(novo_numero)
    }

  return(
    <SafeAreaView style={style.container}>
      <Text style={style.numero}>{numero}</Text>
      <TouchableOpacity onPress={handleNumero} style={style.botao}>
        <Text>Gerar número</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numero:{
      fontSize: 38,
      color: 'black',
      fontWeight:'bold',
      
  },
  botao: {
      backgroundColor: 'black',
      width: '80%',
      paddingHorizontal: 5,
      paddingVertical: 10,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
  },
});
export default App;
