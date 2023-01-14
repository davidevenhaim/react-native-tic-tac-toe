// React
import React from 'react';

// @ React Native
import {
    StyleSheet,
    Image,
    View,
    TouchableOpacity,
} from 'react-native';

// @ Helpers
import images from '../../ImgBundler';


interface BrickProps {
    onClick: () => void;
    value: string
}

const GameBrick = ({ value, onClick }: BrickProps) => (
    <View style={styles.brick}>
        <TouchableOpacity style={styles.button} onPress={onClick}>
            <Image source={value == 'X' ? images.x : value === 'O' ? images.o : images.empty} />
        </TouchableOpacity>
    </View>

);

const styles = StyleSheet.create({
    brick: {
        flex: 1,
        backgroundColor: 'white',
        margin: 5,
        aspectRatio: 1
    },
    button: {
        flex: 1,
    },
});

export default GameBrick;