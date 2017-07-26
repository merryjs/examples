import Navigation from "react-native-navigation";

import Photos from "./photos";

export default () => {
  Navigation.registerContainer(`com.merryjs.photoviewer`, () => Photos);
};
