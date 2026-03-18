import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [pontos, setPontos] = useState(0);

  function adicionarPontos(valorDoPonto, sinal) {
    if (sinal === '-') {
      setPontos(pontos - valorDoPonto);
    } else {
      setPontos(pontos + valorDoPonto);
    }
  }

  function zerarPontos() {
    setPontos(0);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.titulo}>Controle de Pontos</Text>

      <View style={styles.scorebox}>
        <Text style={styles.scoreLabel}>pontuação</Text>
        <Text style={styles.ponto}>{pontos}</Text>
      </View>

      <View style={styles.botoes}>
        <TouchableOpacity style={[styles.botao, styles.botaoBlue]} onPress={() => adicionarPontos(10, '+')}>
          <Text style={styles.botaoTexto}>+10</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, styles.botaoGreen]} onPress={() => adicionarPontos(50, '+')}>
          <Text style={styles.botaoTexto}>+50</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, styles.botaoRed]} onPress={() => adicionarPontos(10, '-')}>
          <Text style={styles.botaoTexto}>-10</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.botaoZerar} onPress={zerarPontos}>
        <Text style={styles.botaoZerarTexto}>Zerar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F8',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#3A0CA3',
    letterSpacing: 0.5,
  },
  scorebox: {
    backgroundColor: '#fff',
    paddingVertical: 24,
    paddingHorizontal: 48,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  scoreLabel: {
    fontSize: 13,
    color: '#999',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  ponto: {
    fontSize: 52,
    fontWeight: 'bold',
    color: '#3A0CA3',
  },
  botoes: {
    flexDirection: 'row',
    gap: 12,
  },
  botao: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 14,
    minWidth: 80,
    alignItems: 'center',
  },
  botaoBlue: {
    backgroundColor: '#4361EE',
  },
  botaoGreen: {
    backgroundColor: '#06D6A0',
  },
  botaoRed: {
    backgroundColor: '#EF476F',
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  botaoZerar: {
    borderWidth: 2,
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 14,
  },
  botaoZerarTexto: {
    color: '#888',
    fontWeight: '600',
    fontSize: 15,
  },
});