import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Input = ({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvaild,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={isInvaild && styles.labelInvaild}>{label}</Text>
      <TextInput
        style={[styles.input, isInvaild && styles.inputInValid]} // 스타일 적용이 두개 이상이면 배열로 묶어서 전달.
        autoCapitalize='none'
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  labelInvaild: {
    color: Colors.error500,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    fontSize: 16,
  },
  inputInValid: {
    backgroundColor: Colors.error100,
  },
});
