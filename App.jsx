import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  useWindowDimensions,
} from 'react-native';
import Calculator from './src/Calculator';
import { useState } from 'react';
import Button, { ButtonTypes } from './src/components/Button';

export default function App() {
  // console.log("Platform os :" + Platform.OS); // Platform 정보 가져오기
  const [result, setResult] = useState(0);

  const windowWidth = useWindowDimensions().width; // 화면의 가로널이를 가져오는 hook
  // console.log("windowWidth :" + windowWidth);
  const buttonWidth = (windowWidth - 5) / 4; // 5(borderWidth : 1씩 여백 공간이 5개가 필요해서)

  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor={'#000'} />
      <Calculator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  text: {
    fontSize: 60,
    fontWeight: '700',
    color: '#fff',
  },
  error: {
    color: 'red',
  },
});
