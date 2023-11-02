import { Text, StyleSheet, Pressable } from 'react-native';
import PropTypes from 'prop-types';

export const ButtonTypes = {
  NUMBER: 'NUMBER',
  OPERATOR: 'OPERATOR',
};

const ButtonColors = {
  NUMBER: ['#71717a', '#3f3f46'],
  OPERATOR: ['#e1be33', '#c69b51'],
};

const Button = ({ title, onPress, buttonStyle, buttonType }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        buttonStyle,
        {
          backgroundColor: ButtonColors[buttonType][0],
        },
        pressed && {
          backgroundColor: ButtonColors[buttonType][1],
        },
      ]}
      onPressOut={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  buttonStyle: PropTypes.object,
  buttonType: PropTypes.oneOf(Object.values(ButtonTypes)),
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  text: {
    color: 'white',
    fontSize: 50,
  },
});

export default Button;
