import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import { useState } from "react";
// import { Fade } from "./examples/AnimatedProperties/Fade/Fade";
import { Fade } from "./examples/AnimatedProperties/Fade/Fade";
import { Translation } from "./examples/AnimatedProperties/Translation/Translation";
import { Scale } from "./examples/AnimatedProperties/Scale/Scale";
import { WidthHeight } from "./examples/AnimatedProperties/WidthHeight/WidthHeight";
import { Color } from "./examples/AnimatedProperties/Color/Color";
import { Rotate } from "./examples/AnimatedProperties/Rotate/Rotate";
import { WidthHeightPercentage } from "./examples/AnimatedProperties/WidthHeightPercentage/WidthHeightPercentage";

export default function App() {
  const [translationLayoutPosition, setTranslationLayoutPosition] = useState(
    {}
  );
  const [isBlockOneOpen, setIsBlockOneOpen] = useState(false);
  const toggleBlockOne = () => {
    isBlockOneOpen ? setIsBlockOneOpen(false) : setIsBlockOneOpen(true);
    console.log("isBlockOneOpen", isBlockOneOpen);
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        {/* AnimatedProperties */}
        <Pressable onPress={toggleBlockOne} style={styles.toggleButtonBlockOne}>
          <Text>Close</Text>
        </Pressable>
        <View
          style={
            styles.container && isBlockOneOpen
              ? { display: "flex" }
              : { display: "none" }
          }
        >
          <View style={styles.box}>
            <Fade
              onSetTranslationLayoutPosition={setTranslationLayoutPosition}
            />
            {translationLayoutPosition.y !== undefined && (
              <Translation
                translationLayoutPosition={translationLayoutPosition}
              />
            )}
          </View>
          <Scale />
          <WidthHeight />
          <Color />
          <Rotate />
          <WidthHeightPercentage />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: "100%",
  },
  toggleButtonBlockOne: {
    marginTop: 100,
    padding: 20,
    width: 100,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  container: {
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 10,
    position: "relative",
    marginBottom: 40,
    padding: 20,
    flex: 1,
  },
  box: {
    position: "relative",
    height: 280,
    // marginRight: 40,
  },
});
