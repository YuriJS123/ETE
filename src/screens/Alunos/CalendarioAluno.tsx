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
import FundoAnimado from '../../components/FundoAnimado';

export default function CalendarioAluno() {
  const [anoSelecionado, setAnoSelecionado] = useState(2025);
  const [mesSelecionado, setMesSelecionado] = useState(0); // 0 = Janeiro

  const meses = [
    'JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN',
    'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'
  ];

  const eventos = [
    // ====== JANEIRO ======
    { dia: 30, mes: 0, diaSemana: 'QUI', titulo: 'Planejamento Escolar', subtitulo: 'Formação Continuada' },
    { dia: 31, mes: 0, diaSemana: 'SEX', titulo: 'Planejamento Escolar', subtitulo: 'Organização Pedagógica' },
  
    // ====== FEVEREIRO ======
    { dia: 3, mes: 1, diaSemana: 'SEG', titulo: 'Início do Ano Letivo', subtitulo: 'Acolhimento dos estudantes' },
    { dia: 24, mes: 1, diaSemana: 'SEG', titulo: 'Carnaval', subtitulo: 'Recesso Escolar' },
    { dia: 25, mes: 1, diaSemana: 'TER', titulo: 'Carnaval', subtitulo: 'Recesso Escolar' },
    { dia: 26, mes: 1, diaSemana: 'QUA', titulo: 'Quarta-feira de Cinzas', subtitulo: 'Recesso Escolar' },
  
    // ====== MARÇO ======
    { dia: 6, mes: 2, diaSemana: 'QUI', titulo: 'Data Magna de Pernambuco', subtitulo: 'Feriado Estadual' },
    { dia: 7, mes: 2, diaSemana: 'SEX', titulo: 'Planejamento Escolar', subtitulo: 'Reorganização Pedagógica' },
    { dia: 8, mes: 2, diaSemana: 'SAB', titulo: 'Dia Internacional da Mulher', subtitulo: 'Atividade Comemorativa' },
    
    // Semana das Mulheres (10 a 14)
    { dia: 10, mes: 2, diaSemana: 'SEG', titulo: 'Semana da Mulher', subtitulo: 'Valorização das Mulheres' },
    { dia: 11, mes: 2, diaSemana: 'TER', titulo: 'Semana da Mulher', subtitulo: 'Ações Temáticas' },
    { dia: 12, mes: 2, diaSemana: 'QUA', titulo: 'Semana da Mulher', subtitulo: 'Ações Temáticas' },
    { dia: 13, mes: 2, diaSemana: 'QUI', titulo: 'Semana da Mulher', subtitulo: 'Ações Temáticas' },
    { dia: 14, mes: 2, diaSemana: 'SEX', titulo: 'Semana da Mulher', subtitulo: 'Encerramento das Atividades' },
  
    { dia: 28, mes: 2, diaSemana: 'SEX', titulo: 'Dia da Escola', subtitulo: 'Atividade Especial' },
  
    // ====== ABRIL ======
    { dia: 18, mes: 3, diaSemana: 'SEX', titulo: 'Paixão de Cristo', subtitulo: 'Feriado Nacional' },
    { dia: 21, mes: 3, diaSemana: 'SEG', titulo: 'Tiradentes', subtitulo: 'Feriado Nacional' },
    { dia: 22, mes: 3, diaSemana: 'TER', titulo: 'Planejamento Docente', subtitulo: 'Reorganização Pedagógica' },
  
    // ====== MAIO ======
    { dia: 1, mes: 4, diaSemana: 'QUI', titulo: 'Dia do Trabalho', subtitulo: 'Feriado Nacional' },
    { dia: 15, mes: 4, diaSemana: 'QUI', titulo: 'Dia da Família na Escola', subtitulo: 'Evento Escolar' },
  
    // ====== JUNHO ======
    { dia: 19, mes: 5, diaSemana: 'QUI', titulo: 'Corpus Christi', subtitulo: 'Feriado Nacional' },
    { dia: 24, mes: 5, diaSemana: 'TER', titulo: 'Dia de São João', subtitulo: 'Feriado Municipal' },
  
    // ====== JULHO ======
    // Recesso (14 a 25)
    { dia: 14, mes: 6, diaSemana: 'SEG', titulo: 'Recesso Escolar', subtitulo: 'Pausa do Meio do Ano' },
    { dia: 25, mes: 6, diaSemana: 'SEX', titulo: 'Final do Recesso', subtitulo: 'Retorno das Atividades' },
  
    // ====== AGOSTO ======
    { dia: 30, mes: 7, diaSemana: 'SAB', titulo: 'Feira de Ciências', subtitulo: 'Apresentações e Projetos' },
  
    // ====== SETEMBRO ======
    { dia: 7, mes: 8, diaSemana: 'DOM', titulo: 'Independência do Brasil', subtitulo: 'Feriado Nacional' },
    
    // Simulado ETE (16 a 19)
    { dia: 16, mes: 8, diaSemana: 'TER', titulo: 'Simulado ETE', subtitulo: 'Avaliação Institucional' },
    { dia: 17, mes: 8, diaSemana: 'QUA', titulo: 'Simulado ETE', subtitulo: 'Avaliação Institucional' },
    { dia: 18, mes: 8, diaSemana: 'QUI', titulo: 'Simulado ETE', subtitulo: 'Avaliação Institucional' },
    { dia: 19, mes: 8, diaSemana: 'SEX', titulo: 'Simulado ETE', subtitulo: 'Encerramento' },
  
    // ====== OUTUBRO ======
    { dia: 12, mes: 9, diaSemana: 'DOM', titulo: 'Nossa Senhora Aparecida', subtitulo: 'Feriado Nacional' },
    { dia: 15, mes: 9, diaSemana: 'QUA', titulo: 'Dia do Professor', subtitulo: 'Data Comemorativa' },
  
    // ====== NOVEMBRO ======
    { dia: 2, mes: 10, diaSemana: 'SAB', titulo: 'Finados', subtitulo: 'Feriado Nacional' },
    { dia: 20, mes: 10, diaSemana: 'QUI', titulo: 'Dia da Consciência Negra', subtitulo: 'Feriado Nacional' },
    { dia: 25, mes: 10, diaSemana: 'TER', titulo: 'Jogos Internos', subtitulo: 'Início do Torneio' },
    { dia: 26, mes: 10, diaSemana: 'QUA', titulo: 'Jogos Internos', subtitulo: 'Competições' },
    { dia: 27, mes: 10, diaSemana: 'QUI', titulo: 'Jogos Internos', subtitulo: 'Competições' },
    { dia: 28, mes: 10, diaSemana: 'SEX', titulo: 'Jogos Internos', subtitulo: 'Encerramento' },
  
    // ====== DEZEMBRO ======
    { dia: 25, mes: 11, diaSemana: 'QUI', titulo: 'Natal', subtitulo: 'Feriado Nacional' },
    { dia: 31, mes: 11, diaSemana: 'QUI', titulo: 'Encerramento do Ano Letivo', subtitulo: 'Finalização das Atividades' },
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
      
      <View style={styles.fundoTopo}>
        <FundoAnimado />
      </View>
    
      <View style={styles.headerContainer}>
        <Text style={styles.headerYear}>{anoSelecionado}</Text>
      </View>

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