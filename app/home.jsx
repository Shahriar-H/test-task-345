import { View, Text, TouchableOpacity, ScrollView, Image, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome,FontAwesome5, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import {mainbgColor} from "../constants/Colors"

export default function Home() {
  return (
    <SafeAreaView className="flex-1 pt-16" style={{backgroundColor:mainbgColor}}>
      <StatusBar style="light" />

      <View className='flex flex-row justify-between items-center p-4'>
        <Image resizeMode='contain' className='h-20 w-40 ' source={require("../assets/images/splashlogo1.png")} />
        <TouchableOpacity className='h-12 rounded-full justify-center items-center w-12 bg-[#3c4249]'>
          <Ionicons name='close' color={'#d6d6d6'} size={23} />
        </TouchableOpacity>
      </View>

      <View className='bg-[#25292E] flex-1 p-4 rounded-t-3xl mt-3'>
        <Text className="text-white text-center text-4xl font-bold mt-4">
          Think You’re a True Genius?
        </Text>
        <Text className="text-gray-400 text-center mt-2 text-lg px-6">
          It’s time to put your brilliance to the test!
          This is your chance to prove yourself.
          Test Your IQ for <Text className="text-blue-400">Free.</Text>
        </Text>

        <View className="flex-row justify-center mt-4 space-x-4">
          <View className="bg-gray-800 mr-2 px-4 border border-gray-600 py-3 rounded-full">
            <Text className="text-gray-300">Duration- 15:00 Mins</Text>
          </View>
          <View className="bg-gray-800 px-4 border border-gray-600 py-3 rounded-full">
            <Text className="text-gray-300">20 Questions</Text>
          </View>
        </View>

        <ScrollView className="mt-6 space-y-4">
          {/* Paet1 */}
          <View className="relative overflow-visible pt-5">
            <View className="bg-[#3c4249] p-4 flex-1 rounded-xl overflow-visible mx-2">
              <View>
                <View className="bg-green-500 w-[120px] px-2 py-2 rounded-full flex-row items-center justify-center space-x-1">
                  <FontAwesome5 color="#fff" name="share-alt-square" />
                  <Text className="text-white ml-1 text-sm">Math Solution</Text>
                </View>
                <Text className="text-white mt-4">If 4x + 2 = 14, what is x?</Text>
                <View className="absolute right-5 top-2">
                  <View className="bg-gray-600 w-[90px] px-2 py-2 rounded-full"></View>
                  <View className="bg-gray-600 w-[70px] px-2 py-1 mt-[2px] rounded-full"></View>
                </View>
              </View>
              <View className="absolute left-[160px] -top-3 z-50 overflow-visible">
                <View className="bg-gray-50 w-10 h-10 rounded-full justify-center items-center">
                  <Text className="text-2xl font-bold">1</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Part2 */}
          <View className="relative overflow-visible pt-5">
            <View className="bg-[#3c4249] p-4 flex-1 rounded-xl overflow-visible mr-5">
              <View>
                <View className="bg-blue-500 w-[140px] px-2 py-2 rounded-full flex-row items-center justify-center space-x-1">
                  <FontAwesome5 color="#fff" name="share-alt-square" />
                  <Text className="text-white ml-1 text-sm">Spatial Reasoning</Text>
                </View>
                <Text className="text-white mt-4">If 4x + 2 = 14, what is x?</Text>
                <View className="absolute right-5 top-2">
                  <View className="bg-gray-600 w-[90px] px-2 py-2 rounded-full"></View>
                  <View className="bg-gray-600 w-[70px] px-2 py-1 mt-[2px] rounded-full"></View>
                </View>
              </View>
              <View className="absolute -right-[18px] -top-3 z-50 overflow-visible">
                <View className="bg-gray-50 w-10 h-10 rounded-full justify-center items-center">
                  <Text className="text-2xl font-bold">2</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Part 3 */}
          <View className="relative overflow-visible pt-5">
            <View className="bg-[#3c4249] p-4 flex-1 rounded-xl overflow-visible ml-5">
              <View>
                <View className="bg-red-500 w-[150px] px-2 py-2 rounded-full flex-row items-center justify-center">
                  <FontAwesome5 color="#fff" name="share-alt-square" />
                  <Text className="text-white ml-1 text-sm">Symbol Substitution</Text>
                </View>
                <Text className="text-white mt-4">If Δ + 5 = 10, then Δ = ?</Text>
                <View className="absolute right-5 top-2">
                  <View className="bg-gray-600 w-[90px] px-2 py-2 rounded-full"></View>
                  <View className="bg-gray-600 w-[70px] px-2 py-1 mt-[2px] rounded-full"></View>
                </View>
              </View>
              <View className="absolute -left-[18px] -top-3 z-50 overflow-visible">
                <View className="bg-gray-50 w-10 h-10 rounded-full justify-center items-center">
                  <Text className="text-2xl font-bold">3</Text>
                </View>
              </View>
            </View>
          </View>


         
        </ScrollView>
        <TouchableOpacity onPress={()=>router.push("/questions")} className="bg-yellow-500 py-4 mb-1 rounded-full">
          <Text className="text-black text-center font-bold text-lg">Start Testing</Text>
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  );
}
