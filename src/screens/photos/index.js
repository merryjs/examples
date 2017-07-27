import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View,
  Button,
  Image,
  TouchableOpacity,
  Dimensions,
  processColor
} from "react-native";

// import PhotoViewer from '@merryjs/photo-viewer'
// console.log(PhotoViewer)
import { NativeModules } from "react-native";
const { MerryPhotoViewer } = NativeModules;
const photos = [
  {
    url: "https://c1.staticflickr.com/8/7625/16631849053_db25684173_k.jpg",
    title: "Flash插件最终被放弃，缘何在移动端时代遭“嫌弃”？",
    summary:
      "看到Flash这个词，莫名会产生一种年代感，脑中会浮现出诸般动画模式。尽管Flash如今依然存在，但也不剩多少时间了。据BBC消息，Adobe Systems公司表示，会在2020年底逐步淘汰Flash播放器插件。",
    titleColor: processColor("#f90"),
    summaryColor: processColor("green")
  },
  {
    url: "https://c1.staticflickr.com/6/5598/14934282524_577a904d2b_k.jpg"
  },
  {
    url: "https://c1.staticflickr.com/8/7596/17021131801_fbd8f2b71a_k.jpg"
  },
  {
    url:
      "https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"
  },
  {
    url:
      "https://images.pexels.com/photos/142615/pexels-photo-142615.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"
  },
  {
    url:
      "https://images.pexels.com/photos/82072/cat-82072.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"
  },
  {
    url:
      "https://images.pexels.com/photos/248261/pexels-photo-248261.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"
  }
];
export default class Photos extends Component {
  static navigationOptions = {
    title: "Photo Viewer"
  };

  async componentDidMount() {
    // await MerryPhotoViewer.config({ data: photos });
  }
  render() {
    const imageSize = Dimensions.get("window").width / 3;

    const imageStyle = {
      width: imageSize,
      height: imageSize
    };

    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.photoContainer}>
            {photos.map((cat, index) =>
              <TouchableOpacity
                key={index}
                style={[imageStyle, {}]}
                ref={r => (this.r = r)}
                onPress={() =>
                  MerryPhotoViewer.show({ data: photos, initial: index })}
              >
                <Image style={imageStyle} source={{ uri: cat.url }} />
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f5fcff"
  },
  photoContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  button: {}
});
