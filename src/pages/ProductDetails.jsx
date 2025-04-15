import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
export default function ProductDetails(props) {
    let item = props.route.params
    const [isFav, setIsFav] = useState(false)
    const navigation = useNavigation()

    return (
        <SafeAreaView className='flex-1 bg-white'>

            <ScrollView
                className='bg-white flex-1'
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 30 }}
            >
                <StatusBar style='dark' />
                <View className='flex-col items-center justify-center'>
                    <Text className='mt-7  mb-5 font-semibold text-neutral-600 text-xl'>Product Details</Text>
                    <Image
                        source={{ uri: item.image }}
                        style={{ width: wp(70), height: hp(50), borderRadius: 53, borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }}
                    />
                </View>

                {/* back and heart botton*/}
                <View className="w-full absolute flex-row pt-14 justify-between">
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <ChevronLeftIcon size={hp(3.5)} strokeWidth={4.5} color='#fbbf24' style={{ marginLeft: 16 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setIsFav(!isFav)}>
                        <HeartIcon size={hp(3.5)} strokeWidth={4.5} color={isFav ? 'red' : 'grey'} style={{ marginRight: 18 }} />
                    </TouchableOpacity>
                </View>

                {/* for description and other things */}

                <View className='flex justify-center flex-col items-center my-5' >
                    <Text className='text-xl font-thin text-center' style={{ width: wp(70) }}>{item.description}</Text>
                    <Text className='mt-4 font-bold text-xl' style={{ width: wp(70) }}>Price: {item.price}</Text>

                    <Text className='mt-2 font-bold text-xl' style={{ width: wp(70) }}>Rating: {item.rating.rate}</Text>

                    <Text className='mt-2 my-2 font-bold text-xl' style={{ width: wp(70) }}>Rated By: {item.rating.count} <Text className='font-light'>people</Text> </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}