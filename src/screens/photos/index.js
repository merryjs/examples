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
  Dimensions
} from "react-native";

// import PhotoViewer from '@merryjs/photo-viewer'
// console.log(PhotoViewer)
import { NativeModules } from "react-native";

const { MerryPhotoViewer } = NativeModules;
const photos = [
  "https://c1.staticflickr.com/8/7625/16631849053_db25684173_k.jpg",
  "https://c1.staticflickr.com/6/5598/14934282524_577a904d2b_k.jpg",
  "https://c1.staticflickr.com/8/7596/17021131801_fbd8f2b71a_k.jpg",
  "https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/142615/pexels-photo-142615.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/82072/cat-82072.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/248261/pexels-photo-248261.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"
];
export default class Photos extends Component {
  static navigationOptions = {
    title: "Photo Viewer"
  };

  async componentDidMount() {
    await MerryPhotoViewer.config({ data: photos });
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
                key={cat}
                style={[
                  imageStyle,
                  {

                  }
                ]}
                ref={r => (this.r = r)}
                onPress={() => MerryPhotoViewer.show(index)}
              >
                <Image style={imageStyle} source={{ uri: cat }} />
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
