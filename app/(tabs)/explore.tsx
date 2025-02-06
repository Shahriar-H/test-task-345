import { View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';
import * as Progress from 'react-native-progress';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import React from 'react';

const options = [
  { id: 'A', label: 'Apple' },
  { id: 'B', label: 'Mango' },
  { id: 'C', label: 'Pear' },
  { id: 'D', label: 'Watermelon' },
];

export default function QuizScreen() {
  const [progressbar, setprogressbar] = useState(40);
  const [selectedoption, setselectedoption] = useState('');
  const [showsheet, setshowsheet] = useState(false);
  return (<>
    <View className="flex-1 bg-black pt-6">
      <View className="flex-row justify-between items-center py-9 px-4">
        <TouchableOpacity className='h-10 rounded-full justify-center items-center w-10 bg-pink-500'>
          <Ionicons name='footsteps-sharp' color={'#fff'} size={23} />
        </TouchableOpacity>
        <Text className="text-white text-sm">1/20</Text>
        <View className='h-3 bg-gray-500 rounded-full w-[250px]'>
          <View className={` bg-pink-500 h-full rounded-full`} style={{width:progressbar}}></View>
        </View>
        <TouchableOpacity className='h-10 rounded-full justify-center items-center w-10 bg-gray-700'>
          <Ionicons name='close' color={'#fff'} size={23} />
        </TouchableOpacity>
      </View>
      
      <View className='bg-gray-900 flex-1 px-4 rounded-t-3xl mt-7'>
      
        <View className="flex items-center -mt-7">
          <Progress.Circle borderColor={'#000'} unfilledColor={'#ffffff25'} color={'#00ce41'} formatText={()=><View className=" bg-gray-800 rounded-full justify-center items-center">
            <Ionicons name="timer" size={28} color="white" />
          </View>} showsText={true} progress={0.6} size={50} indeterminate={false} />
          
        </View>
        
        <Text className="text-white text-3xl text-center mt-6 font-semibold">
          Which item does not belong in this list?
        </Text>
        
        <Text className="text-gray-400 text-center mt-2">Choose Correct Answer</Text>
        
        <FlatList
          data={options}
          keyExtractor={(item) => item.id}
          className="mt-6"
          renderItem={({ item }) => (
            <TouchableOpacity onPress={()=>setselectedoption(item.label)} className={`flex-row border ${selectedoption===item?.label?"border-pink-300":'border-gray-700'} items-center justify-between px-4 py-3 bg-gray-900 rounded-xl mb-3`}>
              <View className='flex-row items-center'>
                <View className="w-8 h-8 bg-pink-500 rounded-full justify-center items-center">
                  <Text className="text-white font-bold">{item.id}</Text>
                </View>
                <Text className="text-white ml-4 text-lg">{item.label}</Text>
              </View>
              <View className={`w-6 h-6 border-[3px] ${selectedoption===item?.label?"border-yellow-300":'border-gray-700'} rounded-full justify-center items-center`}>
                {selectedoption===item?.label&&<View className='bg-yellow-400 h-2 rounded-full w-2'></View>}
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <TouchableOpacity onPress={()=>selectedoption===''?null:setshowsheet(true)} className={` ${selectedoption===''?"bg-gray-700 mb-3 opacity-50":'bg-yellow-500'} py-3 rounded-xl mt-6 `}>
        <Text className="text-gray-100 text-center font-bold text-lg">Continue</Text>
      </TouchableOpacity>
    </View>
    {showsheet&&<View className='absolute top-0 h-full w-full left-0 flex-1 bg-[#00000093] z-50'>
          <TouchableOpacity onPress={()=>setshowsheet(false)}  className='h-10 absolute bottom-[270px] right-4 rounded-full justify-center items-center w-10 bg-[#353434]'>
            <Ionicons name='close' color={'#fff'} size={23} />
          </TouchableOpacity>
          <View className='bg-[#1c1c1c] rounded-t-3xl p-4 w-full absolute bottom-0 py-7'>
            <Text className='text-center text-3xl text-gray-50 font-bold '>Email Address</Text>
            <Text className='text-center text-sm text-gray-400 '>Quam, voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, atque.</Text>

            <TextInput className='bg-[#373737] rounded p-4 py-4 my-5' placeholder='Enter your email to get result' placeholderTextColor={'#a3a3a3'} />
            <TouchableOpacity className={` bg-yellow-500 py-3 rounded-full mb-3`}>
              <Text className="text-gray-900 text-center font-bold text-lg">Continue</Text>
            </TouchableOpacity>
          </View>
    </View>}
    </>
  );
}
