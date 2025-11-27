import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function PresencaAluno({ navigation }: any) {

  const disciplinas = [
    {
      id: '1',
      instituicao: 'Escola Técnica Estadual Professor Lucilo Ávila Pessoa',
      nome: 'História',
      faltas: 0
    },
    {
      id: '2',
      instituicao: 'Escola Técnica Estadual Professor Lucilo Ávila Pessoa',
      nome: 'Matemática',
      faltas: 2
    },
    {
      id: '3',
      instituicao: 'Escola Técnica Estadual Professor Lucilo Ávila Pessoa',
      nome: 'Geografia',
      faltas: 1
    }
  ];

  return (
    <View style={styles.container}>

      <Text style={styles.subtitle}>Consulte seu histórico de presença</Text>

      <FlatList
        data={disciplinas}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>

            <View style={styles.barra} />

            <View style={styles.cardConteudo}>
              <Text style={styles.instituicao}>{item.instituicao}</Text>

              <Text style={styles.nomeDisciplina}>{item.nome}</Text>

              <View style={styles.infoLinha}>
                <Text style={styles.faltas}>Faltas: {item.faltas}</Text>

                <TouchableOpacity
                  style={styles.botao}
                  onPress={() =>
                    navigation.navigate('HistoricoFaltas', { disciplina: item })
                  }
                >
                  <Text style={styles.textoBotao}>Ver faltas</Text>
                  <FontAwesome name="chevron-right" size={14} color="#2563ff" />
                </TouchableOpacity>
              </View>
            </View>

          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 20
  },

  subtitle: {
    fontSize: 23,
    fontWeight: '700',
    color: '#1f1f1f',
    marginTop: -12,
    marginBottom: 20
  },


  card: {
    width: '100%',
    backgroundColor: '#f2f2f2',
    borderRadius: 14,
    marginBottom: 16,
    elevation: 3,
    flexDirection: 'row',
    overflow: 'hidden',
  },


  barra: {
    width: 8,
    backgroundColor: '#1E90FF',
    height: '100%',
  },

  cardConteudo: {
    flex: 1,
    padding: 16,
  },

  instituicao: {
    fontSize: 13,
    fontWeight: '600',
    color: '#444'
  },

  nomeDisciplina: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
    marginTop: 6
  },

  infoLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12
  },

  faltas: {
    fontSize: 15,
    fontWeight: '700',
    color: '#222'
  },

  botao: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto'
  },

  textoBotao: {
    fontSize: 15,
    fontWeight: '700',
    color: '#2563ff',
    marginRight: 4
  }
});
