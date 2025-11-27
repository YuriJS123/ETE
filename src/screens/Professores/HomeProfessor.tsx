import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import FundoAnimado from '../../components/FundoAnimado';

export default function HomeProfessor({ navigation }: any) {
  return (
    <View style={styles.container}>

      <View style={styles.fundoTopo}>
        <FundoAnimado />
      </View>

    

      <View style={styles.menuContainer}>

        <TouchableOpacity
          style={styles.cardGrande}
          onPress={() => navigation.navigate('AvisosDaEscolaProfessor')}
        >
          <View style={styles.row}>
            <FontAwesome name="bullhorn" size={40} color="#fff" />
            <View style={{ marginLeft: 12 }}>
              <Text style={styles.cardGrandeText}>Mural de Avisos</Text>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>3 Novos</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('PresencaProfessor')}
        >
          <FontAwesome name="check-square-o" size={32} color="#2563ff" />
          <Text style={styles.cardText}>Presença</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('CalendarioProfessor')}
        >
          <FontAwesome name="calendar" size={32} color="#2563ff" />
          <Text style={styles.cardText}>Calendário</Text>
        </TouchableOpacity>

        <TouchableOpacity
  style={styles.card}
  onPress={() => navigation.navigate('TurmasProfessor')}
>
  <FontAwesome name="users" size={32} color="#2563ff" />
  <Text style={styles.cardText}>Alunos da Turma</Text>
</TouchableOpacity>


        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('AulasDoDiaProfessor')}
        >
          <FontAwesome name="book" size={32} color="#2563ff" />
          <Text style={styles.cardText}>Aulas do Dia</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 60,
  },

  fundoTopo: {
    position: 'absolute',
    width: '100%',
    height: 180,
    top: 0,
    left: 0,
    zIndex: -1,
  },


  menuContainer: {
    marginTop: 20,
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
