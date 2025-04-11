import { View, Text, TouchableOpacity, TextInput, Image, ScrollView, Dimensions } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React, { useEffect, useState } from 'react'

const Home = () => {
    const WIDTH = Dimensions.get('screen').width

    const [data, setData] = useState([])
    async function fetchApi() {
        const response = await fetch('https://fakestoreapi.com/products')
        const result = await response.json()
        setData(result)
    }
    useEffect(() => {
        fetchApi()
    }, [])


    return (
        <View style={{ marginTop: 30, paddingHorizontal: 15 }}>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <Text>Menu</Text>
                <FontAwesome name="user-md" size={24} color="black" />

            </View>
            {/* search */}
            <TextInput placeholder='search' style={{ backgroundColor: 'grey', borderRadius: 10, marginVertical: 10, paddingHorizontal: 10 }}></TextInput>


            <View style={{
                display: 'flex',
                flexDirection: "row",
                flexWrap: "wrap"
            }} >
                {
                    data.map((item, index) => {
                        return (
                            <View key={index} style={{ widtht: WIDTH }}>
                                <Image source={{ uri: item.image }} style={{
                                    width: 75,
                                    height: 100,
                                    marginRight: 10,
                                    borderRadius: 30,
                                    resizeMode: "cover",
                                    borderColor: "black",
                                    shadowOpacity: 0.2,
                                    shadowRadius: 3,
                                    marginTop: 10
                                }} />


                                <View>
                                    <Text>{item.title.substring(0, 20)}</Text>
                                </View>
                            </View>
                        )
                    })
                }
            </View>


        </View>
    )
}

export default Home