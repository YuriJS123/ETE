import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView,
  SafeAreaView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import FundoAnimado from '../components/FundoAnimado';

export default function Calendario() {
  const [anoSelecionado, setAnoSelecionado] = useState(2025);
  const [mesSelecionado, setMesSelecionado] = useState(0); // 0 = Janeiro

  const meses = [
    'JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN',
    'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'
  ];

  // Eventos do calendário escolar
  const eventos = [
    { dia: 4, mes: 2, diaSemana: 'SEG', titulo: 'Feriado Carnaval', subtitulo: 'Recesso Escolar' },
    { dia: 5, mes: 2, diaSemana: 'TER', titulo: 'Feriado Carnaval', subtitulo: 'Recesso Escolar' },
    { dia: 6, mes: 2, diaSemana: 'QUA', titulo: 'Feriado Cinzas', subtitulo: 'Recesso Escolar' },
    { dia: 19, mes: 2, diaSemana: 'TER', titulo: 'Feriado São José', subtitulo: 'Recesso Escolar' },
    { dia: 25, mes: 2, diaSemana: 'SEG', titulo: 'Feriado Carta Magma Ceará', subtitulo: 'Recesso Escolar' },
    { dia: 18, mes: 3, diaSemana: 'SEX', titulo: 'Paixão de Cristo', subtitulo: 'Feriado Nacional' },
    { dia: 21, mes: 3, diaSemana: 'DOM', titulo: 'Tiradentes', subtitulo: 'Feriado Nacional' },
    { dia: 1, mes: 4, diaSemana: 'QUI', titulo: 'Dia do Trabalho', subtitulo: 'Feriado Nacional' },
    { dia: 19, mes: 5, diaSemana: 'QUI', titulo: 'Corpus Christi', subtitulo: 'Feriado Nacional' },
    { dia: 7, mes: 8, diaSemana: 'DOM', titulo: 'Independência do Brasil', subtitulo: 'Feriado Nacional' },
    { dia: 12, mes: 9, diaSemana: 'DOM', titulo: 'Nossa Senhora Aparecida', subtitulo: 'Feriado Nacional' },
    { dia: 2, mes: 10, diaSemana: 'DOM', titulo: 'Finados', subtitulo: 'Feriado Nacional' },
    { dia: 15, mes: 10, diaSemana: 'SAB', titulo: 'Proclamação da República', subtitulo: 'Feriado Nacional' },
    { dia: 25, mes: 11, diaSemana: 'QUA', titulo: 'Natal', subtitulo: 'Feriado Nacional' },
  ];

  const eventosFiltrados = eventos.filter(e => e.mes === mesSelecionado);

  const mudarMes = (direcao: 'prev' | 'next') => {
    if (direcao === 'prev') {
      if (mesSelecionado === 0) {
        setMesSelecionado(11);
        setAnoSelecionado(anoSelecionado - 1);
      } else {
        setMesSelecionado(mesSelecionado - 1);
      }
    } else {
      if (mesSelecionado === 11) {
        setMesSelecionado(0);
        setAnoSelecionado(anoSelecionado + 1);
      } else {
        setMesSelecionado(mesSelecionado + 1);
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* FUNDO ANIMADO NO TOPO */}
      <View style={styles.fundoTopo}>
        <FundoAnimado />
      </View>

      {/* Header com ano */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerYear}>{anoSelecionado}</Text>
      </View>

      {/* Navegação de Meses */}
      <View style={styles.navegacaoContainer}>
        <View style={styles.navegacaoMeses}>
          <TouchableOpacity 
            onPress={() => mudarMes('prev')}
            style={styles.setaButton}
          >
            <Ionicons name="chevron-back" size={24} color="#fff" />
          </TouchableOpacity>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.mesesScroll}
            contentContainerStyle={styles.mesesContent}
          >
            {meses.map((mes, index) => (
              <TouchableOpacity
                key={mes}
                onPress={() => setMesSelecionado(index)}
                style={[
                  styles.mesButton,
                  mesSelecionado === index && styles.mesButtonAtivo
                ]}
              >
                <Text style={[
                  styles.mesText,
                  mesSelecionado === index && styles.mesTextAtivo
                ]}>
                  {mes}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <TouchableOpacity 
            onPress={() => mudarMes('next')}
            style={styles.setaButton}
          >
            <Ionicons name="chevron-forward" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Lista de Eventos */}
      <ScrollView style={styles.eventosContainer}>
        {eventosFiltrados.length > 0 ? (
          eventosFiltrados.map((evento, index) => (
            <View key={index} style={styles.eventoCard}>
              <View style={styles.eventoData}>
                <Text style={styles.eventoDia}>{evento.dia}</Text>
                <Text style={styles.eventoDiaSemana}>{evento.diaSemana}</Text>
              </View>
              
              <View style={styles.eventoInfo}>
                <Text style={styles.eventoTitulo}>{evento.titulo}</Text>
                <Text style={styles.eventoSubtitulo}>{evento.subtitulo}</Text>
              </View>
            </View>
          ))
        ) : (
          <View style={styles.semEventos}>
            <Ionicons name="calendar-outline" size={48} color="#ccc" />
            <Text style={styles.semEventosText}>
              Nenhum evento para {meses[mesSelecionado]} de {anoSelecionado}
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  
  /* FUNDO ANIMADO FIXO NO TOPO */
  fundoTopo: {
    position: 'absolute',
    width: '100%',
    height: 220,
    top: 0,
    left: 0,
    zIndex: -1,
  },

  headerContainer: {
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 10,
    alignItems: 'flex-end',
  },

  headerYear: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },

  navegacaoContainer: {
    paddingHorizontal: 0,
    paddingBottom: 16,
  },

  navegacaoMeses: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  setaButton: {
    padding: 0,
  },

  mesesScroll: {
    flex: 1,
  },

  mesesContent: {
    paddingHorizontal: 8,
  },

  mesButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: 'rgba(168, 168, 168, 0.9)',
    marginRight: 8,
  },

  mesButtonAtivo: {
    backgroundColor: '#2563ff',
  },

  mesText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
  },

  mesTextAtivo: {
    color: 'white',
  },

  eventosContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
  },

  eventoCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 12,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },

  eventoData: {
    backgroundColor: '#2563ff',
    width: 80,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 4,
    borderRightColor: '#2563ff',
  },

  eventoDia: {
    fontSize: 32,
    fontWeight: '700',
    color: 'white',
  },

  eventoDiaSemana: {
    fontSize: 12,
    fontWeight: '600',
    color: 'white',
    marginTop: 4,
  },

  eventoInfo: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },

  eventoTitulo: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },

  eventoSubtitulo: {
    fontSize: 14,
    color: '#999',
  },

  semEventos: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 20,
  },

  semEventosText: {
    fontSize: 16,
    color: '#999',
    marginTop: 16,
    textAlign: 'center',
  },
});