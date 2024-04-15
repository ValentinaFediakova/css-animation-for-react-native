import React, { useRef } from "react";
import { Text, StyleSheet, View, Animated, Pressable } from "react-native";

export const Color = () => {
  const animateBackground = useRef(new Animated.Value(0.0)).current;

  const startBoxAnimation = () => {
    Animated.timing(animateBackground, {
      toValue: 1.0,
      duration: 3000,
      useNativeDriver: true,
    }).start(() => {
      animateBackground.setValue(0);
    });
  };

  const boxInterpolate = animateBackground.interpolate({
    inputRange: [0.0, 0.25, 0.5, 0.75, 1.0],
    outputRange: ["rgb(245, 40, 145)", "blue", "orange", "green", "gray"],
  });

  const boxAnimatedStyles = {
    backgroundColor: boxInterpolate,
  };

  return (
    <Animated.View style={[styles.animatedContainer, boxAnimatedStyles]}>
      <Pressable style={styles.container} onPress={startBoxAnimation}>
        <Text>bg color</Text>
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
    // marginRight: 40,
  },
});
