/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Button } from "react-native";
import pv from "./MerryPhotoViewerNativeModule";

export default class MerryExamples extends Component {
  componentDidMount() {}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Button
          title="Open Photo Viewer"
          onPress={() => {
            pv.show({
              initial: 0,
              data: [
                {
                  url:
                    "https://c1.staticflickr.com/8/7625/16631849053_db25684173_k.jpg"
                },
                {
                  url:
                    "https://c1.staticflickr.com/6/5598/14934282524_577a904d2b_k.jpg"
                }
              ]
            });
          }}
        />
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{"\n"}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

AppRegistry.registerComponent("MerryExamples", () => MerryExamples);
