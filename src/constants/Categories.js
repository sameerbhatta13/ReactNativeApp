import { View, Text, ActivityIndicator, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native'

import React, { useEffect, useState } from 'react'
import Animated, { FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated'

export default function Categories({ activeCategory, setActiveCategory, search, setSearch }) {

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


    const renderItem = ({ item }) => {
        const isActive = item.category === activeCategory

        return (<TouchableOpacity
            onPress={() => setActiveCategory(item.category)}
        >
            <Animated.View
                entering={FadeInDown.duration(500).springify()}
                exiting={FadeOut}
                className={`my-5 mr-7 rounded-lg ${isActive ? 'bg-black/20' : ''} p-2`}>

                <Image
                    source={{ uri: item.image }}
                    style={{ width: 70, height: 70 }}
                    resizeMode="cover"
                />
                <Text className={`text-neutral-500 ${isActive ? 'underline underline-offset-4 text-black' : ''}`}>
                    {item.category}
                </Text>

            </Animated.View>
        </TouchableOpacity>
        )
    }

    if (loading) {
        return (
            <View>
                <ActivityIndicator size={'large'} />
            </View>
        )
    }

    const categoryCount = []
    const filterData = data.filter((item) => {
        const cat = item.category
        categoryCount[cat] = (categoryCount[cat] || 0) + 1
        if ((cat === 'electronics' && categoryCount[cat] === 2) || (cat !== 'electronics' && categoryCount[cat] === 1)) {
            return true
        }
        return false
    })

    // const categoryMap = new Map()

    // data.forEach(item => {
    //     if (!categoryMap.has(item.category)) {
    //         categoryMap.set(item.category, item)
    //     }
    // })
    // const filterData = Array.from(categoryMap.values())


    return (
        <View>

            <FlatList
                data={filterData}
                renderItem={renderItem}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ paddingHorizontal: 15 }}
            />

        </View>
    )
}


