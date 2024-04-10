import React, { useEffect, useRef } from "react";
import { Text, StyleSheet, View, Animated, Pressable } from "react-native";

export const Fade = ({ onSetTranslationLayoutPosition }) => {
  const fadeAnimationValue = useRef(new Animated.Value(1)).current;

  const fadeAnimatedStyle = {
    opacity: fadeAnimationValue,
  };

  const startFadeAnimation = () => {
    Animated.timing(fadeAnimationValue, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(fadeAnimationValue, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }).start();
    });
  };

  const getLayoutPosition = (layout) => {
    onSetTranslationLayoutPosition(layout);
  };

  return (
    <View onLayout={(event) => getLayoutPosition(event.nativeEvent.layout)}>
      <Pressable style={styles.container} onPress={startFadeAnimation}>
        <Animated.View style={[styles.animatedContainer, fadeAnimatedStyle]}>
          <Text>FADE</Text>
        </Animated.View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "column",
    alignItems: "center",
  },
  container: {
    marginTop: 40,
  },
  animatedContainer: {
    backgroundColor: "red",
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
