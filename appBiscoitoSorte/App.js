
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [img, setImg] = useState(require('./assets/biscoito.png'))
  const [frase, setFrase] = useState('')
  const opcoes = [
    "“Apressa-te a viver bem e pensa que cada dia é, por si só, uma vida.“",
    "“A riqueza não consiste em ter grandes posses, mas em ter poucas necessidades.”",
    "“Você tem poder sobre sua mente – não sobre eventos externos. Perceba isso e você encontrará a sua força.”",
    "“Sorte é o que acontece quando a preparação encontra a oportunidade“",
    "“Todos nós podemos errar, mas a perseverança no erro é a verdadeira loucura“",
    "“A felicidade de sua vida depende da qualidade de seus pensamentos.”",
    "“Quem não se contenta com pouco, não se contenta com nada.”","“O amigo é um segundo eu“",
    "“As dificuldades fortalecem a mente, assim como o trabalho o faz com o corpo“",
    "“Pense na beleza da vida. Observe as estrelas e veja-se correndo com elas.”"
  ]

  function quebrar()
  {
    setImg(require('./assets/biscoitoAberto.png'))
    var escolhida = opcoes[Math.ceil(Math.random() * (opcoes.length - 1))]
    setFrase(escolhida)
  }
  function reiniciar(){
    setFrase('')
    setImg(require('./assets/biscoito.png'))
  }
  return (
    <View style={{flex: 1,justifyContent: 'center', alignItems: 'center', backgroundColor: '#222', }}>
      <View style={styles.container}>
        <Image style={styles.img} source={img}/>


        <Text style={styles.frase}>{frase}</Text>

        <TouchableOpacity>
          <View style={styles.botoes}>
            <Text style={[styles.botao, styles.quebrar]} onPress={quebrar}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.botoes}>
            <Text style={[styles.botao, styles.reiniciar]} onPress={reiniciar}>Reiniciar Biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 400,
    height: 500,
    flex: 0.7,
    backgroundColor: '#222',
    justifyContent: 'center', 
    alignItems: 'center'
  },
  botao:{
    paddingTop: 10,
    marginTop: 20,
    marginBottom: 10,
    width: 230,
    height: 50,
    textAlign: 'center',
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 25,
  },
  quebrar:{
    color: '#dd7b22',
    borderColor: '#dd7b22',
  },
  botoes:{
    
    textAlign: 'center'
  },
  reiniciar:{
    color: 'white',
    borderColor: 'white',
  },
  frase:{
    color: '#dd7b22',
    fontSize: 20,
    fontStyle: 'italic'
  },
  img:{
    width: 230,
    height: 230,
    marginBottom: 50,

  }
});
