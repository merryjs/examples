import Navigation from "react-native-navigation";

import registerScreens from "./screens";

export default () => {
  registerScreens();
  // start the app
  Navigation.events().onAppLaunched(() => {
    Navigation.setRoot({
      container: {
        name: `com.merryjs.photoviewer`
      }
    });
  });
};
