import { View, Text, TouchableOpacity, TextInput, Image, ScrollView, Dimensions } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { UserCircleIcon, BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Categories from '../constants/Categories';




const Home = () => {

    const [activeCategory, setActiveCategory] = useState("men's clothing")
    const [product, setProduct] = useState([])

    const getProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products')
            const result = await response.json()
            // console.log('response data', result)

        } catch (error) {
            console.log('error', error.message)

        }
    }
    useEffect(() => {
        getProducts()
    }, [])

    return (
        <View className='flex-1 bg-white'>
            <StatusBar style='dark' />
            <ScrollView showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 50 }}
                className='space-y-6 pt-14'
            >
                {/* avatar and bell icon */}
                <View className='mx-4 flex-row justify-between items-center mb-2'>
                    <UserCircleIcon size={34} color='grey' />
                    <BellIcon size={34} color='grey' />
                </View>

                {/* greeting and punchline */}

                <View className='mx-4 space-y-3 mb-2 '>
                    <Text style={{ fontSize: hp(1.7) }} className='text-neutral-700'>Hello, sameer</Text>
                    <View>
                        <Text style={{ fontSize: hp(3.8) }} className='font-semibold text-neutral-600'>Order Your Favourite,</Text>
                    </View>
                    <Text style={{ fontSize: hp(3.8) }} className='font-semibold text-neutral-600 '>stay at <Text className='text-amber-400'> home</Text></Text>
                </View>

                {/* view for search bar */}
                <View className='mx-4 flex-row items-center rounded-full bg-black/5 p-[6px]'>
                    <TextInput
                        placeholder='search any recipe'
                        placeholderTextColor={'gray'}
                        style={{ fontSize: hp(1.7) }}
                        className='flex-1 text-base mb-1 pl-3 tracking-wider'
                    />
                    <View className='bg-white rounded-full p-3'>
                        <MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color={'grey'} />
                    </View>
                </View>

                {/* categories */}
                <View>
                    <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                </View>
            </ScrollView>
        </View>
    )
}

export default Home