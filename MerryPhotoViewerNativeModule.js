//  Created by react-native-create-bridge

import { NativeModules } from 'react-native'

const { MerryPhotoViewer } = NativeModules

export default {
  show () {
    return MerryPhotoViewer.exampleMethod()
  },

  EXAMPLE_CONSTANT: MerryPhotoViewer.EXAMPLE_CONSTANT
}
