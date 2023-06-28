import { Text, View, Button } from "react-native";
import { StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>Bem-vindo ao app do Livro Livre</Text>
        <Button
          title="Ler código"
          onPress={() => navigation.navigate("Barcode")}
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });