import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import MasonryList from '@react-native-seoul/masonry-list';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Animated, { FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native';

export default function AllProudct({ activeCategory, products }) {
    const navigation = useNavigation()
    // console.log(products)
    const filterProducts = activeCategory ? products.filter(p => p.category === activeCategory) : products
    return (
        <View className="mx-4 space-y-3">
            <Text className='ml-2 font-semibold text-xl text-neutral-600'>{activeCategory || "All Products"}</Text>

            <View>
                <MasonryList
                    data={filterProducts}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, i }) => <RecipeCard item={item} index={i} navigation={navigation} />}
                    // refreshing={isLoadingNext}
                    // onRefresh={() => refetch({ first: ITEM_CNT })}
                    onEndReachedThreshold={0.1}
                // onEndReached={() => loadNext(ITEM_CNT)}
                />
            </View>
        </View>
    )
}

const RecipeCard = ({ item, index, navigation }) => {
    let isEven = index % 2 === 0
    return (
        <Animated.View entering={FadeInDown.delay(index * 100).duration(600).springify().damping(12)} className="p-4 bg-white rounded-xl shadow-sm">
            <Pressable
                style={{ width: '100%', paddingLeft: isEven ? 0 : 8, paddingRight: isEven ? 8 : 0 }}
                className='flex justify-center mb-4 space-y-2'
                onPress={() => navigation.navigate('productDetail', { ...item })}
            >
                <Image source={{ uri: item.image }} style={{ width: '90%', height: index % 3 == 0 ? hp(15) : hp(25), borderRadius: 35 }} className='bg-black/30 shadow-2xl shadow-cyan-500/50' />
                <Text style={{ fontSize: hp(1.5) }} className='font-semibold ml-2 text-neutral-600'>{item.title.length > 20 ? item.title.slice(0, 30) + '...' : item.title}</Text>
            </Pressable>
        </Animated.View>
    )
}