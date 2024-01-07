import React, { useRef } from "react";
import { Text, StyleSheet, View, Animated, Pressable } from "react-native";

export const Translation = ({ translationLayoutPosition }) => {
  const positionY =
    translationLayoutPosition.y + translationLayoutPosition.height;

  const translationAnimationValue = useRef(new Animated.Value(200)).current;

  const translationAnimatedStyle = {
    transform: [
      {
        translateY: translationAnimationValue,
      },
    ],
  };

  const startTranslationAnimation = () => {
    Animated.timing(translationAnimationValue, {
      toValue: positionY,
      duration: 800,
    }).start(() => {
      Animated.timing(translationAnimationValue, {
        toValue: 200,
        duration: 800,
      }).start();
    });
  };

  return (
    <Animated.View style={[styles.animatedContainer, translationAnimatedStyle]}>
      <Pressable style={styles.container} onPress={startTranslationAnimation}>
        <Text>translation</Text>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  animatedContainer: {
    backgroundColor: "green",
    width: 100,
    height: 100,
    position: "absolute",
  },
  // layout: {
  //   marginTop: 100,
  //   backgroundColor: "green",
  //   width: 100,
  //   height: 100,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});
