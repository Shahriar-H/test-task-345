// Score.JSX
import { View, Text, TouchableOpacity, FlatList, TextInput, Image } from 'react-native';
import * as Progress from 'react-native-progress';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import React from 'react';
import { mainbgColor } from '@/constants/Colors';
import { router } from 'expo-router';

// Define 5 sample questions with correct answers
const questions = [
  {
    id: 1,
    question: 'Which item does not belong in this list?',
    options: [
      { id: 'A', label: 'Apple' },
      { id: 'B', label: 'Mango' },
      { id: 'C', label: 'Pear' },
      { id: 'D', label: 'Watermelon' },
    ],
    correctAnswer: 'Pear',
  },
  {
    id: 2,
    question: 'What is the capital of France?',
    options: [
      { id: 'A', label: 'Berlin' },
      { id: 'B', label: 'Madrid' },
      { id: 'C', label: 'Paris' },
      { id: 'D', label: 'Rome' },
    ],
    correctAnswer: 'Paris',
  },
  {
    id: 3,
    question: 'Which gas do plants absorb from the atmosphere?',
    options: [
      { id: 'A', label: 'Oxygen' },
      { id: 'B', label: 'Nitrogen' },
      { id: 'C', label: 'Carbon Dioxide' },
      { id: 'D', label: 'Hydrogen' },
    ],
    correctAnswer: 'Carbon Dioxide',
  },
  {
    id: 4,
    question: 'What is 5 + 3?',
    options: [
      { id: 'A', label: '6' },
      { id: 'B', label: '8' },
      { id: 'C', label: '10' },
      { id: 'D', label: '12' },
    ],
    correctAnswer: '8',
  },
  {
    id: 5,
    question: 'Which planet is known as the Red Planet?',
    options: [
      { id: 'A', label: 'Earth' },
      { id: 'B', label: 'Venus' },
      { id: 'C', label: 'Mars' },
      { id: 'D', label: 'Jupiter' },
    ],
    correctAnswer: 'Mars',
  },
];

export default function QuizScreen() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showsheet, setshowsheet] = useState(false);

  const handleNext = () => {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedOption === currentQuestion.correctAnswer) {
      setCorrectCount(correctCount + 1);
    } else {
      setWrongCount(wrongCount + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption('');
      setProgress((currentQuestionIndex + 1) / questions.length);
    }else{
      setshowsheet(true)
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (<>
    <View className="flex-1 pt-6" style={{backgroundColor:mainbgColor}}>
      <View className="flex-row justify-between items-center py-9 px-4">
        <TouchableOpacity style={{opacity:0}} className='h-10 rounded-full justify-center items-center w-10 bg-pink-500'>
          <Ionicons name='footsteps-sharp' color={'#fff'} size={23} />
        </TouchableOpacity>
        <Text style={{opacity:0}} className="text-white text-sm">{currentQuestionIndex + 1}/{questions.length}</Text>
        <View className='rounded-full w-[250px]'>
         <Text className="text-center text-white">IQ Test Score</Text>
        </View>
        <TouchableOpacity onPress={()=>router.push("/questions")} className='h-12 rounded-full justify-center items-center w-12 bg-gray-700 pl-[1px]'>
          <Ionicons name='close' color={'#fff'} size={23} />
        </TouchableOpacity>
      </View>
     
      

      <View className="bg-[#262A2F] flex-1 px-4 rounded-t-3xl mt-7">
        <View className='flex  justify-center items-center'>
          <View className="flex relative h-[280px] mt-7  items-center rounded-full ">
            
            <Image className="absolute" source={require("../assets/images/scoresbg.png")}  />
            <Image className="absolute mt-[52px]" source={require("../assets/images/sores1.png")}  />
            <View className="bg-yellow-500 absolute top-[110px] h-16 w-16 rounded-full justify-center items-center">
              <FontAwesome name='lock' color={'#fff'} size={23} />
            </View>
            
          </View>
        </View>
        <View className="mb-5">
          <Text className="font-bold text-center text-white text-3xl">Unlock Result</Text>
          <Text className="text-center text-gray-400 text-sm">Unlock your result for $9.99. Select a payment method from the options below to continue.</Text>
        </View>

        <TouchableOpacity onPress={()=>setSelectedOption('telegram')}  className="flex flex-row justify-between items-center bg-[#1E2226] p-3 rounded-xl border border-gray-700">
          <View className="flex-row flex items-center">
            <View className="bg-gray-700 h-14 w-14 rounded-full justify-center items-center">
              <FontAwesome name='star' color={'#ffde05'} size={23} />
            </View>
            <View className="ml-2">
              <Text className="text-white font-bold">Telegram stars</Text>
              <Text className="text-gray-500 text-xs">You can pay via Telegram Stars</Text>
            </View>
          </View>
          <View
            className={`w-6 h-6 border-[3px] ${
              selectedOption === 'telegram' ? 'border-yellow-300' : 'border-gray-700'
            } rounded-full justify-center items-center`}
          >
            {selectedOption === 'telegram' && <View className="bg-yellow-400 h-2 rounded-full w-2"></View>}
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>setSelectedOption('card')} className="flex mt-2 flex-row justify-between items-center bg-[#1E2226] p-3 rounded-xl border border-gray-700">
          <View className="flex-row flex items-center">
            <View className="bg-gray-700 h-14 w-14 rounded-full justify-center items-center">
              <FontAwesome name='credit-card' color={'#ffffff'} size={23} />
            </View>
            <View className="ml-2">
              <Text className="text-white font-bold">Card</Text>
              <Text className="text-gray-500 text-xs">You can pay via Card</Text>
            </View>
          </View>
          <View
            className={`w-6 h-6 border-[3px] ${
              selectedOption === 'card' ? 'border-yellow-300' : 'border-gray-700'
            } rounded-full justify-center items-center`}
          >
            {selectedOption === 'card' && <View className="bg-yellow-400 h-2 rounded-full w-2"></View>}
          </View>
        </TouchableOpacity>

        

      <TouchableOpacity
        onPress={handleNext}
        disabled={selectedOption === ''}
        className={` ${
          selectedOption === '' ? 'bg-gray-700 opacity-50' : 'bg-yellow-500'
        } py-4 rounded-full my-5`}
      >
        <Text className="text-gray-900 text-center font-bold text-lg">
          {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
        </Text>
      </TouchableOpacity>
      
      </View>

      
    </View>
    
    {showsheet&&<View className='absolute top-0 h-full w-full left-0 flex-1 bg-[#00000093] z-50'>
          <TouchableOpacity onPress={()=>setshowsheet(false)}  className='h-10 absolute bottom-[270px] right-4 rounded-full justify-center items-center w-10 bg-[#353434]'>
            <Ionicons name='close' color={'#fff'} size={23} />
          </TouchableOpacity>
          <View className='bg-[#1c1c1c] rounded-t-3xl p-4 w-full absolute bottom-0 py-7'>
            <Text className='text-center text-3xl text-gray-50 font-bold '>Email Address</Text>
            <Text className='text-center text-sm text-gray-400 '>Quam, voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, atque.</Text>

            <TextInput className='bg-[#373737] rounded-xl p-4 py-4 my-5' placeholder='Enter your email to get result' placeholderTextColor={'#a3a3a3'} />
            <TouchableOpacity className={` bg-yellow-500 py-3 rounded-full mb-3`}>
              <Text className="text-gray-900 text-center font-bold text-lg">Continue</Text>
            </TouchableOpacity>
          </View>
    </View>}
    </>
  );
}
