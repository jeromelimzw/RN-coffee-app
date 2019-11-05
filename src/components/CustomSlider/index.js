import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 15,
    minWidth: 75,
    fontWeight: 'bold',
  },
  green: {
    color: '#324a59',
  },
  white: {
    color: '#ffffff',
  },
  slider: {
    width: 200,
    height: 40,
  },
});

function CustomSlider({
  leftLabel,
  rightLabel,
  minValue,
  maxValue,
  currValue,
  disabled,
  color,
  handleChange,
}) {
  return (
    <View style={styles.root}>
      <Text
        style={[styles.label, color === 'white' ? styles.white : styles.green]}>
        {leftLabel}
      </Text>
      <Slider
        style={styles.slider}
        minimumValue={minValue}
        maximumValue={maxValue}
        value={currValue}
        minimumTrackTintColor={color}
        maximumTrackTintColor={color}
        disabled={disabled}
        thumbTintColor={color}
        onValueChange={handleChange}
      />
      <Text
        style={[styles.label, color === 'white' ? styles.white : styles.green]}>
        {rightLabel}
      </Text>
    </View>
  );
}

export default CustomSlider;
