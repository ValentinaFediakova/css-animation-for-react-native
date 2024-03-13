import React, { useRef } from "react";
import { Text, StyleSheet, View, Animated, Pressable } from "react-native";

export const Rotate = () => {
  const animation = useRef(new Animated.Value(0)).current;

  const animationInterpolate = animation.interpolate({
    inputRange: [0, 40],
    outputRange: ["0deg", "40deg"],
  });

  const animationStale = {
    transform: [{ rotate: animationInterpolate }],
  };

  const startAnimation = () => {
    console.log("start rotate animation");
    Animated.timing(animation, {
      toValue: 40,
      duration: 1000,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 0,
        duration: 1000,
      }).start();
    });
  };

  return (
    <Pressable onPress={startAnimation}>
      <Animated.View style={[styles.animatedContainer, animationStale]}>
        <Text>Rotate</Text>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   width: "100%",
  //   width: 200,
  //   height: 200,
  // },
  animatedContainer: {
    backgroundColor: "green",
    width: 100,
    height: 100,
    marginTop: 40,
    // marginRight: 40,
  },
});
