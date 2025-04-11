import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Welcome = () => {
    const navigation = useNavigation()
    return (

        <ImageBackground
            source={require('../images/waterfall.jpg')} style={styles.background}
        >


            <View style={styles.contentContainer}>
                <Text style={styles.title}>Welcome</Text>
                <Text style={styles.title}>Back</Text>
                <Text style={styles.enjoy}>Ladies And GentleMen</Text>

                <TouchableOpacity style={{
                    backgroundColor: 'white',
                    paddingHorizontal: 40,
                    paddingVertical: 10,
                    marginTop: 30,
                    borderRadius: 20
                }} onPress={() => navigation.navigate('Home')}>
                    <Text style={{ color: '#e50909' }} >
                        Get Started
                    </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    contentContainer: {
        position: 'absolute',
        bottom: 50,
        width: '100%',
        alignItems: 'center',

    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#e50909',
        marginBottom: 10,
    },
    background: {
        flex: 1,
        resizeMode: 'contain', // or 'stretch'
        width: wp(100),
        height: hp(105)
    },

    enjoy: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },

})

export default Welcome