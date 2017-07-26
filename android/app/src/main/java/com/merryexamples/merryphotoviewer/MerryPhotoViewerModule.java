//  Created by react-native-create-bridge

package com.merryexamples.merryphotoviewer;

import android.content.Intent;
import android.support.annotation.Nullable;
import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.merryexamples.MainActivity;
import com.stfalcon.frescoimageviewer.ImageViewer;

import java.util.HashMap;
import java.util.Map;

public class MerryPhotoViewerModule extends ReactContextBaseJavaModule {
    public static final String REACT_CLASS = "MerryPhotoViewer";
    private static ReactApplicationContext reactContext = null;

    public MerryPhotoViewerModule(ReactApplicationContext context) {
        // Pass in the context to the constructor and save it so you can emit events
        // https://facebook.github.io/react-native/docs/native-modules-android.html#the-toast-module
        super(context);

        reactContext = context;
    }

    @Override
    public String getName() {
        // Tell React the name of the module
        // https://facebook.github.io/react-native/docs/native-modules-android.html#the-toast-module
        return REACT_CLASS;
    }

    @Override
    public Map<String, Object> getConstants() {
        // Export any constants to be used in your native module
        // https://facebook.github.io/react-native/docs/native-modules-android.html#the-toast-module
        final Map<String, Object> constants = new HashMap<>();
        constants.put("EXAMPLE_CONSTANT", "example");

        return constants;
    }

    @ReactMethod
    public void exampleMethod() {
        // An example native method that you will expose to React
        // https://facebook.github.io/react-native/docs/native-modules-android.html#the-toast-module

        String[] photos = new String[]{
                "https://c1.staticflickr.com/8/7625/16631849053_db25684173_k.jpg",
                "https://c1.staticflickr.com/6/5598/14934282524_577a904d2b_k.jpg",
                "https://c1.staticflickr.com/8/7596/17021131801_fbd8f2b71a_k.jpg",
                "https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
                "https://images.pexels.com/photos/142615/pexels-photo-142615.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
                "https://images.pexels.com/photos/82072/cat-82072.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
                "https://images.pexels.com/photos/248261/pexels-photo-248261.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"
        };
        Intent mIntent = new Intent(reactContext.getCurrentActivity(), MerryPhotoViewActivity.class);
        mIntent.putExtra("startPosition", 0);
        mIntent.putExtra("data", photos);

        reactContext.getCurrentActivity().startActivity(mIntent);

    }

    private static void emitDeviceEvent(String eventName, @Nullable WritableMap eventData) {
        // A method for emitting from the native side to JS
        // https://facebook.github.io/react-native/docs/native-modules-android.html#sending-events-to-javascript
        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(eventName, eventData);
    }
}
