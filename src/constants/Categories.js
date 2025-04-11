import { View, Text, ActivityIndicator, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native'

import React, { useEffect, useState } from 'react'


export default function Categories() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    async function fetchApi() {
        const response = await fetch('https://fakestoreapi.com/products')
        const result = await response.json()
        setData(result)
        setLoading(false);
    }
    useEffect(() => {
        fetchApi()

    }, [])

    const renderItem = ({ item }) => (
        <TouchableOpacity >
            <View className='my-8 mr-7 rounded-full'>
                <Image
                    source={{ uri: item.image }}
                    style={{ width: 70, height: 70 }}
                    resizeMode="cover"
                />
                <Text className='text-neutral-500'>
                    {item.category}
                </Text>

            </View>
        </TouchableOpacity>

    )

    if (loading) {
        return (
            <View>
                <ActivityIndicator size={'large'} />
            </View>
        )
    }
    const uniqueCategory = []
    const filterData = data.filter((item) => {
        if (!uniqueCategory.includes(item.category)) {
            uniqueCategory.push(item.category)
            return true
        }
        return false
    })

    return (


        <FlatList
            data={filterData}
            renderItem={renderItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ paddingHorizontal: 15 }}
        />
    )
}


