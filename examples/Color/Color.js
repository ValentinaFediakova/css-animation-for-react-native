import React, { useRef } from "react";
import { Text, StyleSheet, View, Animated, Pressable } from "react-native";

export const Color = () => {
  const animateBackground = useRef(new Animated.Value(0.0)).current;

  const startBoxAnimation = () => {
    Animated.timing(animateBackground, {
      toValue: 1.0,
      duration: 3000,
    }).start(() => {
      animateBackground.setValue(0);
    });
  };

  const boxInterpolate = animateBackground.interpolate({
    inputRange: [0.0, 0.2, 0.8, 0.9, 1.0],
    outputRange: [
      "rgb(245, 40, 145)",
      "rgb(39, 245, 183)",
      "rgba(54, 245, 39, 1)",
      "rgba(187, 245, 39, 1)",
      "rgba(245, 187, 39, 1)",
    ],
  });

  const boxAnimatedStyles = {
    backgroundColor: boxInterpolate,
  };

  return (
    <Animated.View style={[styles.animatedContainer, boxAnimatedStyles]}>
      <Pressable style={styles.container} onPress={startBoxAnimation}>
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
    backgroundColor: "blue",
    width: 100,
    height: 100,
    marginTop: 40,
  },
});
