import React from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'

const Register = () => {
    return (
        <>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

                <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
                    <View className=' flex-1 bg-[#009688]' >
                        <View className='mt-20 flex justify-center items-center'>
                            <Text className='font-bold text-3xl' >Register here </Text>
                        </View>
                        <View className='flex flex-col justify-center mx-10 mt-8 bg-slate-300 shadow-orange-600 rounded-lg'>
                            <Text className='mx-2 mt-5 mb-2 text-2xl'>Full Name</Text>
                            <TextInput className='bg-white w-[75%]  mx-2 border rounded-lg' placeholder='enter full name' />

                            <Text className='mx-2 mt-5 mb-2 text-2xl'>Email</Text>
                            <TextInput className='bg-white w-[75%]  mx-2 border rounded-lg' placeholder='enter your Email' />

                            <Text className='mx-2 mt-5 mb-2 text-2xl'>Phone Number</Text>
                            <TextInput className='bg-white w-[75%]  mx-2 border rounded-lg' placeholder='enter your Phone Number' />

                            <Text className='mx-2 mt-5 mb-2 text-2xl'>Password</Text>
                            <TextInput className='bg-white w-[75%]  mx-2 mb-4 border rounded-lg' secureTextEntry={true} placeholder='enter your password ' />

                            <TouchableOpacity className='bg-blue-500 rounded-lg p-3 mx-4 mb-3'>
                                <Text className='text-white text-xl text-center'>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </>
    )
}

export default Register