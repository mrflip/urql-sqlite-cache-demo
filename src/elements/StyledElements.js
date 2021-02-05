import React                       /**/ from "react"
import * as Linking                     from "expo-linking"
import * as WebBrowser                  from "expo-web-browser"
import { StyleSheet }                   from "react-native"
import { KeyboardAwareScrollView }      from "react-native-keyboard-aware-scroll-view"
import { Button as PaperButton, Text }  from "react-native-paper"
//
import { Theme }                        from "../utils/Theme"

export const Button = ({ title, style, ...rest }) => (
  <PaperButton
    labelStyle={styles.fullWidthOutlineButtonText}
    mode="outlined"
    style={[styles.fullWidthOutlineButton, style]}
    {...rest}
  >
    {title}
  </PaperButton>
)

export const ScreenContainer = ({ children }) => (
  <KeyboardAwareScrollView style={styles.mainScroller}>
    {children}
  </KeyboardAwareScrollView>
)

export const openBrowser = (url) => WebBrowser.openBrowserAsync(url)

export const openSimpleLink = (url) => {
  Linking.openURL(url)
}

export const WebLink = ({ url, style, ...props }) => (
  <Text
    onPress             = {() => openBrowser(url)}
    accessibilityRole   = "link"
    style               = {[{ color: Theme.colors.link }, style]}
    {...props}
  />
)

export const Anchor = ({ url, style, ...props }) => (
  <Text
    onPress             = {() => openSimpleLink(url)}
    accessibilityRole   = "link"
    style               = {[{ color: Theme.colors.link }, style]}
    {...props}
  />
)

export const BrowserLinkButton = ({ url, ...props }) => (
  <Button onPress={() => openBrowser(url)}   {...props} />
)

export const SimpleLinkButton = ({ url, ...props }) => (
  <Button onPress={() => openSimpleLink(url)} {...props} />
)

const styles = StyleSheet.create({
  fullWidthOutlineButton: {
    marginHorizontal: 16,
    marginVertical: 24,
    padding: 4,
    borderWidth: 2,
    borderColor: "#66C395",
  },
  fullWidthOutlineButtonText: {
    fontSize: 16,
  },
  mainScroller: {
    backgroundColor: "#ccddee",
    padding: 20,
  },
})
