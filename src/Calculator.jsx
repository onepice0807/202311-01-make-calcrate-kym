import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Button, { ButtonTypes } from './components/Button';
import { useState } from 'react';
import Margin from './components/Margin';

const Calculator = () => {
  const [result, setResult] = useState(0);
  const windowWidth = useWindowDimensions().width; // 화면의 가로널이를 가져오는 hook
  // console.log("windowWidth :" + windowWidth);
  const buttonWidth = (windowWidth - 5) / 4 - 6; // 5(borderWidth : 1씩 여백 공간이 5개가 필요해서)
  return (
    <>
      <View style={styles.resultContainer}>
        <Text style={styles.text}>{result}</Text>
      </View>
      <Margin height={20}></Margin>
      <View style={styles.buttonContainer}>
        <View style={styles.leftPad}>
          <View style={styles.number}>
            {/* 숫자 버튼 */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num, index) => (
              <Button
                key={index}
                title={num.toString()}
                onPress={() => {}}
                buttonStyle={{
                  width: buttonWidth,
                  height: buttonWidth,
                  marginTop: 1,
                }}
                buttonType={ButtonTypes.NUMBER}
              />
            ))}
          </View>
          <View style={styles.bottom}>
            {/* 0, = */}
            <Button
              title='0'
              onPress={() => {}}
              buttonStyle={{
                width: buttonWidth * 2,
                height: buttonWidth,
                marginBottom: 1,
              }}
              buttonType={ButtonTypes.NUMBER}
            />
            <Button
              title='='
              onPress={() => {}}
              buttonStyle={{
                width: buttonWidth,
                height: buttonWidth,
                marginTop: 1,
              }}
              buttonType={ButtonTypes.OPERATOR}
            />
          </View>
        </View>

        <View>
          {/* 연산자 버튼 */}
          <Button
            title='C'
            onPress={() => {}}
            buttonStyle={{
              width: buttonWidth,
              height: buttonWidth,
              marginTop: 1,
            }}
            buttonType={ButtonTypes.OPERATOR}
          />
          <Button
            title='-'
            onPress={() => {}}
            buttonStyle={{
              width: buttonWidth,
              height: buttonWidth,
              marginTop: 1,
            }}
            buttonType={ButtonTypes.OPERATOR}
          />
          <Button
            title='+'
            onPress={() => {}}
            buttonStyle={{
              width: buttonWidth,
              height: buttonWidth * 2 + 1,
              marginTop: 1,
            }}
            buttonType={ButtonTypes.OPERATOR}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  resultContainer: {
    flex: 0.9,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingRight: 12,
    backgroundColor: '#000000',
    borderRadius: 20,
    margin: 10,
  },
  buttonContainer: {
    // flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
  },
  leftPad: {
    width: '75%',
  },
  number: {
    flexWrap: 'wrap-reverse',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  text: {
    fontSize: 60,
    fontWeight: '700',
    color: '#fff',
  },
});

export default Calculator;
