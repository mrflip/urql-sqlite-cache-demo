// import mockRNCNetInfo from "@react-native-community/netinfo/jest/netinfo-mock.js"
// jest.mock("@react-native-community/netinfo", () => mockRNCNetInfo)
// import { NativeModules as RNNativeModules } from "react-native"
// RNNativeModules.UIManager = RNNativeModules.UIManager || {}
// RNNativeModules.UIManager.RCTView = RNNativeModules.UIManager.RCTView || {}
// RNNativeModules.RNGestureHandlerModule = RNNativeModules.RNGestureHandlerModule || {
//   State: { BEGAN: "BEGAN", FAILED: "FAILED", ACTIVE: "ACTIVE", END: "END" },
//   attachGestureHandler: jest.fn(),
//   createGestureHandler: jest.fn(),
//   dropGestureHandler: jest.fn(),
//   updateGestureHandler: jest.fn(),
//   forceTouchAvailable: jest.fn(),
//   Directions: {},
// }
// RNNativeModules.PlatformConstants = RNNativeModules.PlatformConstants || {
//   forceTouchAvailable: false,
// }
import { NativeModules as RNNativeModules } from "react-native"
RNNativeModules.UIManager = RNNativeModules.UIManager || {}
RNNativeModules.UIManager.RCTView = RNNativeModules.UIManager.RCTView || {}
RNNativeModules.RNGestureHandlerModule = RNNativeModules.RNGestureHandlerModule || {
  State: { BEGAN: "BEGAN", FAILED: "FAILED", ACTIVE: "ACTIVE", END: "END" },
}
