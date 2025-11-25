import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Alert, 
  Image, 
  ActivityIndicator 
} from 'react-native';
import * as FileSystem from 'expo-file-system/legacy';
import * as Sharing from 'expo-sharing';
import { Asset } from 'expo-asset';
import BoletimIMG from '../../assets/boletim/Boletim.png';

export default function BoletimAluno() {
  const [loading, setLoading] = useState(false);

  async function handleDownload() {
    try {
      setLoading(true);

      // Carrega o PNG local como asset
      const imageAsset = Asset.fromModule(require('../../assets/boletim/Boletim.png'));
      await imageAsset.downloadAsync();

      if (!imageAsset.localUri) {
        Alert.alert("Erro", "Imagem não encontrada.");
        setLoading(false);
        return;
      }

      // Define o caminho de destino para compartilhar
      const dest = FileSystem.documentDirectory + "Boletim.png";

      // Copia o arquivo para um local compartilhável
      await FileSystem.copyAsync({
        from: imageAsset.localUri,
        to: dest,
      });

      // Abre a opção de compartilhamento
      await Sharing.shareAsync(dest);

      setLoading(false);

    } catch (error) {
      console.log(error);
      setLoading(false);
      Alert.alert("Erro", "Não foi possível baixar o boletim.");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Boletim</Text>
      <Text style={styles.subtitle}>Aqui você pode visualizar e baixar seu boletim.</Text>

      <View style={styles.card}>
        <Image
          source={BoletimIMG}
          style={styles.boletimImagem}
          resizeMode="contain"
        />
      </View>

      <TouchableOpacity style={styles.btn} onPress={handleDownload} disabled={loading}>
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.btnText}>Baixar Boletim</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 6,
  },
  subtitle: {
    color: '#666',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
  },
  boletimImagem: {
    width: '100%',
    height: 400,
    borderRadius: 10,
  },
  btn: {
    backgroundColor: '#2563ff',
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});