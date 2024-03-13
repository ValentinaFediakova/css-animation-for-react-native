import React, { useEffect, useRef } from "react";
import { Text, StyleSheet, View, Animated, Pressable } from "react-native";

export const Scale = () => {
  const animationScale = useRef(new Animated.Value(1)).current;

  const animationScaleLayout = {
    transform: [
      {
        scaleX: animationScale,
      },
    ],
  };

  const startScaleAnimation = () => {
    Animated.timing(animationScale, {
      toValue: -2.5,
      duration: 1000,
    }).start(() => {
      Animated.timing(animationScale, {
        toValue: 1,
        duration: 1000,
      }).start();
    });
  };

  return (
    <View>
      <Pressable style={styles.container} onPress={startScaleAnimation}>
        <Animated.View style={[styles.animatedContainer, animationScaleLayout]}>
          <Text>SCALE</Text>
        </Animated.View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    // marginRight: 40,
  },
  animatedContainer: {
    backgroundColor: "red",
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
