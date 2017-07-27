//  Created by react-native-create-bridge

import { NativeModules } from "react-native";

const { MerryPhotoViewer } = NativeModules;

export default {
  show(options) {
    return MerryPhotoViewer.show(options);
  },
  hide() {
    return MerryPhotoViewer.hide();
  },
};
