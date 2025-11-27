import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function AvisosDaEscolaAlunos({ navigation }: any) {

  const avisos = [
    {
      id: '1',
      titulo: 'Reunião de Pais',
      data: '25/11/2025',
      descricao: 'Reunião geral de pais e mestres às 18h no auditório.',
    },
    {
      id: '2',
      titulo: 'Entrega de Boletins',
      data: '28/11/2025',
      descricao: 'Os boletins estarão disponíveis no portal e presencialmente.',
    },
    {
      id: '3',
      titulo: 'Semana Cultural',
      data: '02/12/2025',
      descricao: 'Semana cultural com apresentações, oficinas e feira de artes.',
    },
  ];

  return (
    <View style={styles.container}>
      
     
  
      <FlatList
        data={avisos}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.titulo}>{item.titulo}</Text>
            <Text style={styles.data}>{item.data}</Text>
            <Text style={styles.descricao}>{item.descricao}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 60,
    paddingHorizontal: 20,
  },

 

  card: {
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 12,
    elevation:3,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#2563ff',
  },

  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },

  data: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
  },

  descricao: {
    fontSize: 16,
    color: 'black',
    lineHeight: 22,
  },
});
