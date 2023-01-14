// React
import React, { useEffect } from 'react';
import { useState } from 'react';

// @ React Native
import {
  StyleSheet,
  Image,
  View,
  StatusBar,
  Platform,
  TouchableOpacity,
  Text
} from 'react-native';

// @ Constants
import Constants from 'expo-constants';
import { ANDROID, SQUARES_COUNT } from '../utils/constants';
import images from '../../ImgBundler';

// @ Utils
import { winCheck } from '../utils/helpers';

// @ Custom Components
import GameBrick from './GameBrick';

const statusBarHeightIOS = Constants.statusBarHeight;
const statusBarHeightAndroid = StatusBar.currentHeight;

const MainGame = () => {

  const [squares, setSquares] = useState<string[]>(Array(SQUARES_COUNT).fill(null))

  const [isX, setIsX] = useState<boolean>(true);

  const [gameTie, setGameTie] = useState<boolean>(false);

  const handleRestart = () => {
    setIsX(true)
    setSquares(Array(SQUARES_COUNT).fill(null));
    setGameTie(false);
  }

  const handleClick = (i: number) => {
    if (winCheck(squares) || squares[i]) return;

    const newSquares = [...squares]
    newSquares[i] = isX ? 'X' : 'O';

    setSquares(newSquares)
    setIsX(prevState => !prevState)
  }

  const getCorrectImage = (): any => {
    const winner = winCheck(squares)
    let status = winner ? `Winner is: ${winner}` : `Next Player: ${isX ? 'X' : 'O'}`;

    if (gameTie) return images.nowin

    if (winner) {
      return status === "Winner is: X" ? images.xwin : images.owin
    } else {
      return isX ? images.xplay : images.oplay
    }

  }

  useEffect(() => {
    if (squares.filter(value => value === null).length === 0) setGameTie(true);

  }, [squares])

  return (
    <View style={styles.container}>

      <View style={styles.row}>
        <GameBrick onClick={() => handleClick(0)} value={squares[0]} />
        <GameBrick onClick={() => handleClick(1)} value={squares[1]} />
        <GameBrick onClick={() => handleClick(2)} value={squares[2]} />
      </View>

      <View style={styles.row}>
        <GameBrick onClick={() => handleClick(3)} value={squares[3]} />
        <GameBrick onClick={() => handleClick(4)} value={squares[4]} />
        <GameBrick onClick={() => handleClick(5)} value={squares[5]} />
      </View>

      <View style={styles.row}>
        <GameBrick onClick={() => handleClick(6)} value={squares[6]} />
        <GameBrick onClick={() => handleClick(7)} value={squares[7]} />
        <GameBrick onClick={() => handleClick(8)} value={squares[8]} />
      </View>

      <View style={styles.container}>
        <Image source={getCorrectImage()} />

      </View>

      <View style={styles.centerContainer}>
        <TouchableOpacity style={styles.button} onPress={handleRestart}>
          <Text>Restart Game</Text>
          <Image source={images.reset} style={styles.image} />
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
  },
  container: {
    marginTop: Platform.OS == ANDROID ? statusBarHeightAndroid : statusBarHeightIOS,
    flex: 1,
    backgroundColor: 'grey'
  },
  centerContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  image: {
    height: 100,
    width: 100,
  },

  row: {
    flexDirection: 'row',
    backgroundColor: 'blue',
  },
});

export default MainGame
