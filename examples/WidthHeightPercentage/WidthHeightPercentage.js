import React, { useRef } from "react";
import { Text, StyleSheet, View, Animated, Pressable } from "react-native";

export const WidthHeightPercentage = () => {
  const animation = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      animation.setValue(0);
    });
  };

  const widthInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["90%", "50%"],
  });

  const heightInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["50%", "100%"],
  });

  const animatedStyles = {
    width: widthInterpolate,
    height: heightInterpolate,
  };

  const animationEx = useRef(new Animated.Value(15)).current;
  animationEx.setOffset(5);
  // animationEx.extractOffset();
  animationEx.flattenOffset();

  console.log("animationEx", animationEx);

  //value = 0;
  //offset = 20;
  //overall value = 20

  return (
    <Pressable onPress={startAnimation} style={styles.animatedContainer}>
      <Animated.View style={[styles.animatedView, animatedStyles]}>
        <Text>WidthHeightPercentage</Text>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  animatedContainer: {
    backgroundColor: "green",
    marginTop: 40,

    width: 100,
    height: 100,
  },
  animatedView: {
    backgroundColor: "yellow",
  },
  // container: {
  //   flex: 1,
  //   width: "100%",
  // },
});
