import React, { useEffect, useRef } from 'react';
import { StyleSheet, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const FundoAnimado = () => {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1,
          duration: 6000,
          useNativeDriver: false,
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 6000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, []);

  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['-30%', '0%'], // movimento suave
  });

  return (
    <Animated.View style={[styles.container]}>
      <Animated.View style={{ transform: [{ translateX }] }}>
        <LinearGradient
          colors={['#14B454', '#14308C']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        />
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
  },
  gradient: {
    width: '200%',
    height: '100%',
  },
});

export default FundoAnimado;
