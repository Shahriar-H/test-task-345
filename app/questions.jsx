import { View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';
import * as Progress from 'react-native-progress';
import { Ionicons } from '@expo/vector-icons';
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
        <TouchableOpacity className='h-10 rounded-full justify-center items-center w-10 bg-pink-500'>
          <Ionicons name='footsteps-sharp' color={'#fff'} size={23} />
        </TouchableOpacity>
        <Text className="text-white text-sm">{currentQuestionIndex + 1}/{questions.length}</Text>
        <View className='h-3 bg-gray-500 rounded-full w-[250px]'>
          <View
            className="bg-pink-500 h-full rounded-full"
            style={{ width: `${progress * 100}%` }}
          ></View>
        </View>
        <TouchableOpacity className='h-12 rounded-full justify-center items-center w-12 bg-gray-700 pl-[1px]'>
          <Ionicons name='close' color={'#fff'} size={23} />
        </TouchableOpacity>
      </View>
     
      <View className='flex flex-row'>
        <Text className="text-white text-sm">Correct: {correctCount}</Text>
        <Text className="text-white text-sm">Wrong: {wrongCount}</Text>
      </View>

      <View className="bg-[#262A2F] flex-1 px-4 rounded-t-3xl mt-7">
        <View className='flex justify-center items-center'>
          <View className="flex items-center -mt-7 bg-[#262A2F] rounded-full w-[50px]">
            <Progress.Circle borderColor={'#262A2F'} unfilledColor={'#262A2F'} color={'#00ce41'} formatText={()=><View className=" bg-gray-800 rounded-full justify-center items-center">
              <Ionicons name="timer" size={28} color="white" />
            </View>} showsText={true} progress={progress} size={50} indeterminate={false} />
            
          </View>
        </View>
        <Text className="text-white text-3xl text-center mt-6 font-semibold">
          {currentQuestion.question}
        </Text>

        <FlatList
          data={currentQuestion.options}
          keyExtractor={(item) => item.id}
          className="mt-6"
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setSelectedOption(item.label)}
              className={`flex-row border ${
                selectedOption === item.label ? 'border-pink-300' : 'border-gray-700'
              } items-center justify-between px-4 py-3 bg-gray-90[#101214] rounded-xl mb-3`}
            >
              <View className="flex-row items-center">
                <View className="w-8 h-8 bg-pink-500 rounded-full justify-center items-center">
                  <Text className="text-white font-bold">{item.id}</Text>
                </View>
                <Text className="text-white ml-4 text-lg">{item.label}</Text>
              </View>
              <View
                className={`w-6 h-6 border-[3px] ${
                  selectedOption === item.label ? 'border-yellow-300' : 'border-gray-700'
                } rounded-full justify-center items-center`}
              >
                {selectedOption === item.label && <View className="bg-yellow-400 h-2 rounded-full w-2"></View>}
              </View>
            </TouchableOpacity>
          )}
        />

      <TouchableOpacity
        onPress={handleNext}
        disabled={selectedOption === ''}
        className={` ${
          selectedOption === '' ? 'bg-gray-700 opacity-50' : 'bg-yellow-500'
        } py-4 rounded-full mb-5`}
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
            <TouchableOpacity onPress={()=>router.push("/scores")} className={` bg-yellow-500 py-3 rounded-full mb-3`}>
              <Text className="text-gray-900 text-center font-bold text-lg">Continue</Text>
            </TouchableOpacity>
          </View>
    </View>}
    </>
  );
}
