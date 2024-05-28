import React from "react";
import { View } from "react-native";
import { useKeepAwake } from "expo-keep-awake";
import styles from "./styles";
import { WebView } from "react-native-webview";

export default Home = () => {

  useKeepAwake();

    return (
      <View style={styles.background}>
        {
          <WebView
            source={{ uri: "https://isog-r-webapp.vercel.app/" }}
            style={{ flex: 1 }}
          />
        }
      </View>
    );
  }

