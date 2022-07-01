import React, { useEffect, useState } from "react";
import { Button, Text, Vibration, View, SafeAreaView, StyleSheet, Dimensions } from "react-native";
import SystemSetting from 'react-native-system-setting'

import AppNavigation from "./navigation/AppNavigation";

const Separator = () => {
  return <View style={styles.separator} />;
}

const App = () => {
  const [orientation, setOrientation] = useState("PORTRAIT");
  const [volume, setVolume] = useState(0.53);


  useEffect(() => {
    Dimensions.addEventListener('change', ({ window: { width, height } }) => {
      if (width < height) {
        setOrientation("PORTRAIT")
        console.log('PORTRAIT')
      } else {
        setOrientation("LANDSCAPE")
        console.log('LANDSCAPE')
      }
    })

  }, []);


  useEffect(() => {
    SystemSetting.setVolume(0.53);
    SystemSetting.addVolumeListener((data) => {
      const volume = data.value;
      setVolume(data.value)
      console.log('Volume lvl: ' + volume);
      if (volume >= 0.5 && orientation == "PORTRAIT") {
        Vibration.vibrate(PATTERN)

      } else {
        Vibration.vibrate(3000)
      }
    });

  }, []);

  const ONE_SECOND_IN_MS = 1000;
  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    3 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    5 * ONE_SECOND_IN_MS,
  ];


  return (
    <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Vibro simulator</Text>
      <Text style={styles.paragraph}>Orientation actuel en {orientation}</Text>
      <Text style={styles.paragraph}>Puissance volume actuelle {volume.toFixed(2)}</Text>


      <View>
        <Button title="Une vibration" onPress={() => Vibration.vibrate()} />
      </View>
      <Separator />

      <View>
        <Button
          title="Vibration 10 secondes"
          onPress={() => Vibration.vibrate(10* ONE_SECOND_IN_MS)}
        />
      </View>

      <Separator />
      <Button
        title="Stop vibration"
        onPress={() => Vibration.cancel()}
        color="#FF0000"
      />
      <View style={{height: 25}} />
      <AppNavigation />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 44,
    padding: 8,
    backgroundColor: "#2E2E2E"
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color:'white',
    fontWeight:'bold',
    marginTop: 15,
    marginBottom: 30,
    textAlign: "center"
  },
  paragraph: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color:'white',
    fontWeight:'bold',
    marginBottom: 10,
    textAlign: "center"
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});

export default App;