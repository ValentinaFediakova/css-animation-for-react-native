import React, { useRef } from "react";
import { Text, StyleSheet, View, Animated, Pressable } from "react-native";

export const WidthHeight = () => {
  const animationHeight = useRef(new Animated.Value(100)).current;
  const animationWidth = useRef(new Animated.Value(100)).current;

  const animatedHeightStyle = {
    // width: animation,
    height: animationHeight,
  };

  const animatedWidthStyle = {
    width: animationWidth,
  };

  const startWidthAnimation = () => {
    Animated.timing(animationWidth, {
      toValue: 200,
      duration: 1000,
    }).start(() => {
      Animated.timing(animationWidth, {
        toValue: 100,
        duration: 1000,
      }).start();
    });
  };

  const startHeightAnimation = () => {
    Animated.timing(animationHeight, {
      toValue: 200,
      duration: 1000,
    }).start(() => {
      Animated.timing(animationHeight, {
        toValue: 100,
        duration: 1000,
      }).start(() => {
        startWidthAnimation();
      });
    });
  };

  return (
    <Animated.View
      style={[
        styles.animatedContainer,
        animatedHeightStyle,
        animatedWidthStyle,
      ]}
    >
      <Pressable style={styles.container} onPress={startHeightAnimation}>
        <Text>WidthHeight</Text>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  animatedContainer: {
    backgroundColor: "green",
    marginTop: 40,
    width: 100,
    // height: 100,
  },
  container: {
    flex: 1,
    width: "100%",
  },
});
