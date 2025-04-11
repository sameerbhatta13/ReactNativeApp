import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const Welcome = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.main}>
            <Text>Welcome</Text>
            <Image style={styles.image} source={require('../images/horse.png')} />
            <Text style={styles.enjoy}>Enjoy  </Text>
            <Text style={styles.enjoy}>your food </Text>

            <TouchableOpacity style={{
                backgroundColor: 'white',
                paddingHorizontal: 40,
                paddingVertical: 10,
                marginTop: 30,
                borderRadius: 20
            }} onPress={() => navigation.navigate('Register')}>
                <Text >
                    Get Started
                </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',

    },
    image: {
        marginTop: 100,
        width: 200,
        height: 300
    },
    enjoy: {
        fontSize: 40,
        fontWeight: 'bold',
        color: "white"
    }


})

export default Welcome