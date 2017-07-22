/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View,
  Button,
  Image,
  TouchableOpacity
} from "react-native";
import Toast from "@merryjs/toast";
console.log(Toast);
// import PhotoViewer from '@merryjs/photo-viewer'
// console.log(PhotoViewer)
import { NativeModules } from "react-native";

const { MerryPhotoViewer } = NativeModules;
const cats = [
  "https://c1.staticflickr.com/8/7625/16631849053_db25684173_k.jpg",
  "https://c1.staticflickr.com/6/5598/14934282524_577a904d2b_k.jpg",
  "https://c1.staticflickr.com/8/7596/17021131801_fbd8f2b71a_k.jpg",
  "https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/142615/pexels-photo-142615.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/82072/cat-82072.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
  // "https://images.pexels.com/photos/248261/pexels-photo-248261.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"
];
export default class MerryExamples extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Merry Native !</Text>

        <Button
          title="Show Toast"
          onPress={() => Toast.show("A merry toast", Toast.SHORT)}
        />
        <Button
          title="Show Toast With Gravity"
          onPress={() =>
            Toast.showWithGravity("A merry toast", Toast.SHORT, Toast.CENTER)}
        />
        <ScrollView
          style={{}}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: "center",
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap"
          }}
        >
          {cats.map((cat, index) =>
            <TouchableOpacity
              key={cat}
              style={{
                width: 200,
                height: 200
              }}
              onPress={() =>
                MerryPhotoViewer.show({ photos: cats, initial: index })}
            >
              <Image
                style={{ width: 200, height: 200 }}
                source={{ uri: cat }}
              />
            </TouchableOpacity>
          )}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
