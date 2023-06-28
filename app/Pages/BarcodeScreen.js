import { useEffect, useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { StyleSheet, View, Button, Text } from "react-native";

export default function BarcodeScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getCameraPermission = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermission();
  }, []);

  const handleBarcodeScanned = ({ type, data }) => {
    const parts = data.split(
      /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/g
    );
    if (parts[4] === "biblioteca.fac.unb.br") {
      setScanned(true);
      console.log(parts);
      navigation.replace("Result", { itemUrl: data });
      // navigation.replace("Result", { itemUrl: parts[7] });  passa só o biblionumber=?? para a prox tela
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {!scanned && (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarcodeScanned}
          style={StyleSheet.absoluteFill}
        />
      )}
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
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
