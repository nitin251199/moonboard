import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import PasswordEyeIcon from '../assets/svg/passwordEye.svg';
import {Fonts} from '../theme';

export default function CustomInput({
  placeholder,
  value,
  onChangeText,
  containerStyle,
  type,
  inputStyle,
  ...props
}) {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  return (
    <View style={{...styles.inputContainer, ...containerStyle}}>
      <TextInput
        {...props}
        style={{...styles.input,...inputStyle}}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={type === 'password' && !isPasswordVisible}
        placeholderTextColor="#A7A6A9"
      />
      {type === 'password' && (
        <TouchableOpacity
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
          <PasswordEyeIcon />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: 10,
    borderRadius: 17,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  input: {
    fontFamily: Fonts.primaryBold,
    fontSize: 17,
    paddingVertical: 15,
    color: '#000',
    flex: 1,
  },
});
