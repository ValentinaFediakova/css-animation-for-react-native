import React, { useRef } from "react";
import { Text, StyleSheet, View, Animated, Pressable } from "react-native";

export const WidthHeight = () => {
  const animationHeight = useRef(new Animated.Value(100)).current;
  const animationWidth = useRef(new Animated.Value(100)).current;

  const animatedHeightStyle = {
    height: animationHeight,
  };

  const animatedWidthStyle = {
    width: animationWidth,
  };

  const startWidthAnimation = () => {
    Animated.timing(animationWidth, {
      toValue: 200,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(animationWidth, {
        toValue: 100,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  };

  const startHeightAnimation = () => {
    Animated.timing(animationHeight, {
      toValue: 200,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(animationHeight, {
        toValue: 100,
        duration: 300,
        useNativeDriver: true,
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
    // marginRight: 40,
    alignItems: "center",
  },
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
