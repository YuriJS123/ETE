import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import FundoAnimado from '../components/FundoAnimado';

export default function HomeAluno({ navigation }: any) {
  return (
    <View style={styles.container}>

      {/* FUNDO ANIMADO NO TOPO */}
      <View style={styles.fundoTopo}>
        <FundoAnimado />
      </View>

      {/* CARDS */}
      <View style={styles.menuContainer}>

        <TouchableOpacity style={styles.cardGrande}>
          <View style={styles.row}>
            <FontAwesome name="bullhorn" size={40} color="#fff" />
            <View style={{ marginLeft: 12 }}>
              <Text style={styles.cardGrandeText}>Avisos da Escola</Text>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>3 Novos</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('PresencaAluno')}
        >
          <FontAwesome name="check-square-o" size={32} color="#2563ff" />
          <Text style={styles.cardText}>Presença</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.card}
          onPress={() => navigation.navigate('Calendario')}
        >
          <FontAwesome name="calendar" size={32} color="#2563ff" />
          <Text style={styles.cardText}>Calendário</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}
        onPress={() => navigation.navigate('Colegas')}>
          <FontAwesome name="users" size={32} color="#2563ff" />
          <Text style={styles.cardText}>Colegas da Turma</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <FontAwesome name="book" size={32} color="#2563ff" />
          <Text style={styles.cardText}>Aulas do Dia</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('BoletimAluno')}
        >
          <FontAwesome name="file-text-o" size={32} color="#2563ff" />
          <Text style={styles.cardText}>Baixar Boletim</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },

  /* FUNDO ANIMADO FIXO NO TOPO */
  fundoTopo: {
    position: 'absolute',
    width: '100%',
    height: 180, // altura igual à área verde do print
    top: 0,
    left: 0,
    zIndex: -1,
  },

  menuContainer: {
    marginTop: 60, // faz os cards ficarem abaixo da curva verde
    paddingHorizontal: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  cardGrande: {
    width: '100%',
    height: 130,
    backgroundColor: '#0f766e',
    borderRadius: 14,
    marginBottom: 18,
    padding: 20,
    elevation: 4,
    justifyContent: 'center',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  cardGrandeText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },

  badge: {
    marginTop: 6,
    backgroundColor: '#fff',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },

  badgeText: {
    color: '#0f766e',
    fontWeight: '700',
    fontSize: 12,
  },

  card: {
    width: '48%',
    height: 110,
    backgroundColor: '#fafafa',
    borderRadius: 12,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },

  cardText: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
  },
});