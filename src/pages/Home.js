import {
    View, Text, TextInput, Image,
    FlatList, ActivityIndicator,
    ScrollView
} from 'react-native'
import React, { useEffect, useState, useCallback, useMemo } from 'react'
import { StatusBar } from 'expo-status-bar'
import { UserCircleIcon, BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Categories from '../constants/Categories'
import { SafeAreaView } from 'react-native-safe-area-context'
import AllProudct from '../constants/AllProudct'

const Home = () => {
    const [activeCategory, setActiveCategory] = useState('')
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('')
    // console.log("search", search)
    // console.log("first", products)


    const fetchProducts = async () => {
        try {
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            setProducts(data)
            setLoading(false)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])




    // if (loading) {
    //     return (
    //         <SafeAreaView className='flex-1 items-center justify-center bg-white'>
    //             <ActivityIndicator size="large" color="#fbbf24" />
    //         </SafeAreaView>
    //     )
    // }

    return (
        <SafeAreaView className='flex-1 bg-white'>
            <StatusBar style='dark' />

            <ScrollView showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 50 }}
                className="space-y-6 pt-5"
            >
                <View>
                    {/* Avatar and bell */}
                    <View className='mx-4 flex-row justify-between items-center mt-4 mb-2'>
                        <UserCircleIcon size={34} color='grey' />
                        <BellIcon size={34} color='grey' />
                    </View>

                    {/* Greeting */}
                    <View className='mx-4 space-y-3 mb-2'>
                        <Text style={{ fontSize: hp(1.7) }} className='text-neutral-700'>Hello, sameer</Text>
                        <Text style={{ fontSize: hp(3.8) }} className='font-semibold text-neutral-600'>Order Your Favourite,</Text>
                        <Text style={{ fontSize: hp(3.8) }} className='font-semibold text-neutral-600'>
                            stay at <Text className='text-amber-400'>home</Text>
                        </Text>
                    </View>

                    {/* Search */}
                    <View className='mx-4 flex-row items-center rounded-full bg-black/5 p-[6px] mb-4'>
                        <TextInput
                            placeholder='search any products'
                            placeholderTextColor={'gray'}
                            style={{ fontSize: hp(1.7) }}
                            className='flex-1 text-base mb-1 pl-3 tracking-wider'
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <View className='bg-white rounded-full p-3'>
                            <MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color={'grey'} />
                        </View>
                    </View>

                    {/* Categories */}
                    <View className='mb-4'>
                        <Categories
                            activeCategory={activeCategory}
                            setActiveCategory={setActiveCategory}
                            search={search}
                            setSearch={setSearch}
                            products={products}
                        />
                    </View>
                </View>
                <View>
                    <AllProudct activeCategory={activeCategory} products={products} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home
