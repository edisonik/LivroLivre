import { Button, Linking, View , Text, StyleSheet} from "react-native";

export default function BookInfoScreen({ route, navigation }) {
  const { itemUrl } = route.params;
  return (
    <View style={styles.container}>
      <Text>Foi encontrado um registro em {itemUrl}</Text>
      <Button
        title="voltar para o início"
        onPress={() => {
          navigation.goBack()
        }}
      />
      <Button
        title="Acessar página da web"
        onPress={() => {
          Linking.openURL(itemUrl);
        }}
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
