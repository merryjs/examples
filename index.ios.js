/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Button } from "react-native";
import Toast from "@merryjs/toast";
console.log(Toast);
// import PhotoViewer from '@merryjs/photo-viewer'
// console.log(PhotoViewer)
import { NativeModules } from "react-native";

const { MerryPhotoViewer } = NativeModules;
const cats = [
  "https://c1.staticflickr.com/8/7625/16631849053_db25684173_k.jpg",
  "https://c1.staticflickr.com/6/5598/14934282524_577a904d2b_k.jpg",
  'https://c1.staticflickr.com/8/7596/17021131801_fbd8f2b71a_k.jpg'
];
export default class MerryExamples extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{"\n"}
          Cmd+D or shake for dev menu
        </Text>
        <Button
          title="Show Toast"
          onPress={() => Toast.show("A merry toast", Toast.SHORT)}
        />
        <Button
          title="Show Toast With Gravity"
          onPress={() =>
            Toast.showWithGravity("A merry toast", Toast.SHORT, Toast.CENTER)}
        />
        <Button
          title="show images"
          onPress={() =>
            MerryPhotoViewer.show(cats)}
        />
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
