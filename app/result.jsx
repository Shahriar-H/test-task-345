// Score.JSX
import { View, Text, TouchableOpacity, FlatList, TextInput, Image, Share } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import React from 'react';
import { mainbgColor } from '@/constants/Colors';
import { router } from 'expo-router';



export default function ResultScreen() {
  const [selectedOption, setSelectedOption] = useState('');
  const [showsheet, setshowsheet] = useState(false);

  const shareLink = async () => {
    try {
      const result = await Share.share({
        message: 'Check out my IQtest Score: https://example.com',
      });
  
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('Shared with activity type:', result.activityType);
        } else {
          console.log('Shared successfully!');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Share dismissed');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };
  
  
  

  const handleNext = () => {
    shareLink()
    
  };

  return (<>
    <View className="flex-1 pt-6" style={{backgroundColor:mainbgColor}}>
      <View className="flex-row justify-between items-center py-9 px-4">
        <TouchableOpacity style={{opacity:0}} className='h-10 rounded-full justify-center items-center w-10 bg-pink-500'>
          <Ionicons name='footsteps-sharp' color={'#fff'} size={23} />
        </TouchableOpacity>
        <Text style={{opacity:0}} className="text-white text-sm"></Text>
        <View className='rounded-full w-[250px]'>
         <Text className="text-center text-white">IQ Test Score</Text>
        </View>
        <TouchableOpacity onPress={()=>router.push("/questions")} className='h-12 rounded-full justify-center items-center w-12 bg-gray-700 pl-[1px]'>
          <Ionicons name='close' color={'#fff'} size={23} />
        </TouchableOpacity>
      </View>
     
      

      <View className="bg-[#262A2F] flex-1 px-4 rounded-t-3xl mt-7">
        <View className='flex  justify-center items-center'>
          <View className="flex relative h-[280px] mt-7 justify-center  items-center rounded-full ">
            
            <Image className="absolute" source={require("../assets/images/scoresbg.png")}  />
            <Text className="text-5xl font-bold">96</Text>
            <Text className="text-green-500">Excellent</Text>
           
            
          </View>
        </View>
        <View className="mb-5">
          <Text className="font-bold text-center text-white text-3xl">Unlock Result</Text>
          <Text className="text-center text-gray-400 text-sm">Unlock your result for $9.99. Select a payment method from the options below to continue.</Text>
        </View>

        <TouchableOpacity onPress={()=>setSelectedOption('telegram')}  className="flex flex-row justify-between items-center bg-[#33383d] p-3 rounded-xl border border-gray-700">
          <View className="flex-row flex items-center">
            <View className="bg-green-500 h-14 w-14 rounded-md justify-center items-center">
              <FontAwesome name='check' color={'#ffffff'} size={23} />
            </View>
            <View className="ml-2">
              <Text className="text-white font-bold">Correct</Text>
              <Text className="text-gray-500 text-xs">Your answers are matched with our answers</Text>
            </View>
          </View>
          <Text className="text-gray-400">17/21</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>setSelectedOption('card')} className="flex mt-2 flex-row justify-between items-center bg-[#33383d] p-3 rounded-xl border border-gray-700">
          <View className="flex-row flex items-center">
            <View className="bg-red-500 h-14 w-14 rounded-md justify-center items-center">
              <FontAwesome name='times' color={'#ffffff'} size={23} />
            </View>
            <View className="ml-2">
              <Text className="text-white font-bold">Wrong</Text>
              <Text className="text-gray-500 text-xs">Your answers are not matched with our answers</Text>
            </View>
          </View>
          <Text className="text-gray-400">4/21</Text>
        </TouchableOpacity>

        

      <TouchableOpacity
        onPress={handleNext}
        
        className={` bg-yellow-500 py-4 rounded-full my-5 mt-28`}
      >
        <Text className="text-gray-900 text-center font-bold text-lg">
          {'Done'}
        </Text>
      </TouchableOpacity>
      
      </View>

      
    </View>
    


    </>
  );
}
