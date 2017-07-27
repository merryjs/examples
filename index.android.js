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
              // hideStatusBar: true,
              // android only
              swipeToDismiss: true,
              zooming: true,
              // not support #ddd
              backgroundColor: "#000000",
              data: [
                {
                  url:
                    "https://c1.staticflickr.com/8/7625/16631849053_db25684173_k.jpg",
                  title: "Flash插件最终被放弃，缘何在移动端时代遭“嫌弃”？",
                  summary:
                    "看到Flash这个词，莫名会产生一种年代感，脑中会浮现出诸般动画模式。尽管Flash如今依然存在，但也不剩多少时间了。据BBC消息，Adobe Systems公司表示，会在2020年底逐步淘汰Flash播放器插件。",
                  titleColor: "#f90000",
									summaryColor:'green'
                },
                {
                  url:
                    "https://c1.staticflickr.com/6/5598/14934282524_577a904d2b_k.jpg",
                  title: "Yo Yo Cat.",
                  // titleColor: "blue"
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
