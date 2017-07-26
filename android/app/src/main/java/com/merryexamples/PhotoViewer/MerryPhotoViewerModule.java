//  Created by react-native-create-bridge

package com.merryexamples.PhotoViewer;

import android.content.Intent;
import android.support.annotation.Nullable;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.google.gson.Gson;

import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;

public class MerryPhotoViewerModule extends ReactContextBaseJavaModule {
    public static final String REACT_CLASS = "MerryPhotoViewer";
    private static ReactApplicationContext reactContext = null;

    private Intent mIntent;
    private int PHOTO_VIEWER_CODE = 1;
    private MerryPhotoViewOptions merryPhotoViewOptions;

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
    public void show(ReadableMap options) {
        // An example native method that you will expose to React
        // https://facebook.github.io/react-native/docs/native-modules-android.html#the-toast-module


        mIntent = new Intent(reactContext.getCurrentActivity(), MerryPhotoViewActivity.class);

        JSONObject jsonObject = Utils.readableMapToJson(options);
        if (jsonObject != null) {

//            merryPhotoViewOptions = new Gson().fromJson(jsonObject.toString(), MerryPhotoViewOptions.class);


            if (reactContext.getCurrentActivity() != null) {

                mIntent.putExtra("options", jsonObject.toString());

                reactContext.getCurrentActivity().startActivityForResult(mIntent, PHOTO_VIEWER_CODE);
            }

        }
    }

    @ReactMethod
    public void hide() {
        if (mIntent != null && reactContext.getCurrentActivity() != null) {
            reactContext.getCurrentActivity().finishActivity(PHOTO_VIEWER_CODE);
        }
    }

    private static void emitDeviceEvent(String eventName, @Nullable WritableMap eventData) {
        // A method for emitting from the native side to JS
        // https://facebook.github.io/react-native/docs/native-modules-android.html#sending-events-to-javascript
        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(eventName, eventData);
    }
}
