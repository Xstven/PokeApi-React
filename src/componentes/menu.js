import { useState } from 'react';
import { Modal, Pressable, Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const OPCIONES = ['Lista', 'Informativa', 'Capturados', 'Favoritos', 'Usuario'];

export default function Menu() {
  const [abierto, setAbierto] = useState(false);
  const navigation = useNavigation();

  const ir = (destino) => {
    setAbierto(false);
    navigation.navigate(destino);
  };

  return (
    <>
      <Pressable onPress={() => setAbierto(true)} style={{ marginRight: 14 }}>
        <Ionicons name="menu" size={28} color="#000" />
      </Pressable>

      <Modal transparent animationType="fade" visible={abierto} onRequestClose={() => setAbierto(false)}>
        <Pressable style={styles.fondo} onPress={() => setAbierto(false)}>
          <View style={styles.caja}>
            <Text style={styles.titulo}>Menú</Text>
            {OPCIONES.map((o) => (
              <Pressable key={o} style={styles.opcion} onPress={() => ir(o)}>
                <Text style={styles.texto}>{o}</Text>
              </Pressable>
            ))}
          </View>
        </Pressable>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  fondo: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', alignItems: 'flex-end', paddingTop: 60, paddingRight: 12 },
  caja: { backgroundColor: '#16213e', borderRadius: 12, padding: 12, minWidth: 190 },
  titulo: { color: '#ffcb05', fontWeight: 'bold', fontSize: 18, marginBottom: 6 },
  opcion: { paddingVertical: 10 },
  texto: { color: '#fff', fontSize: 16 },
});