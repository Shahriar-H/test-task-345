import { View, Text, TouchableOpacity, ScrollView, Image, SafeAreaView, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome,FontAwesome5, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';


export default function Index() {

  return (
    <SafeAreaView className="flex-1 bg-[#1a1e22] pt-16 px-4">
      <StatusBar style="light" />
      <View className='flex-1 items-center justify-center'>
        <View className='justify-center items-center mt-20'>
          <Image resizeMode='contain' source={require("../assets/images/vector1.png")}/>
        </View>
        <View className='justify-center items-center px-16 mt-36'>
          <Text className='text-white text-3xl font-bold'>Welcome to IQtester</Text>
          <Text className='text-gray-500 text-center text-sm'>Your go-to platform for sharpening your mind and challenging your intellect! <Text className='font-bold text-gray-400 underline'>IQ Tester Terms of use</Text></Text>
        </View>
        <View className='justify-center items-center mt-10'>
          <Image resizeMode='contain' source={require("../assets/images/social.png")}/>
        </View>
      </View>


      <TouchableOpacity onPress={()=>router.push("/home")} className="bg-yellow-500 py-4 mb-5 rounded-full">
        <Text className="text-black text-center font-bold text-lg">Start Testing</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
