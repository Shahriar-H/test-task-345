import { View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';
import * as Progress from 'react-native-progress';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import React from 'react';
import { mainbgColor } from '@/constants/Colors';
import { router } from 'expo-router';
import { useQuery } from '@apollo/client';
import { GET_ALL_QUIZZES } from '@/queries/queries';

// Define 5 sample questions with correct answers
// const questions = [
//   {
//     id: 1,
//     question: 'Which item does not belong in this list?',
//     options: [
//       { id: 'A', label: 'Apple' },
//       { id: 'B', label: 'Mango' },
//       { id: 'C', label: 'Pear' },
//       { id: 'D', label: 'Watermelon' },
//     ],
//     correctAnswer: 'Pear',
//   },
//   {
//     id: 2,
//     question: 'What is the capital of France?',
//     options: [
//       { id: 'A', label: 'Berlin' },
//       { id: 'B', label: 'Madrid' },
//       { id: 'C', label: 'Paris' },
//       { id: 'D', label: 'Rome' },
//     ],
//     correctAnswer: 'Paris',
//   },
//   {
//     id: 3,
//     question: 'Which gas do plants absorb from the atmosphere?',
//     options: [
//       { id: 'A', label: 'Oxygen' },
//       { id: 'B', label: 'Nitrogen' },
//       { id: 'C', label: 'Carbon Dioxide' },
//       { id: 'D', label: 'Hydrogen' },
//     ],
//     correctAnswer: 'Carbon Dioxide',
//   },
//   {
//     id: 4,
//     question: 'What is 5 + 3?',
//     options: [
//       { id: 'A', label: '6' },
//       { id: 'B', label: '8' },
//       { id: 'C', label: '10' },
//       { id: 'D', label: '12' },
//     ],
//     correctAnswer: '8',
//   },
//   {
//     id: 5,
//     question: 'Which planet is known as the Red Planet?',
//     options: [
//       { id: 'A', label: 'Earth' },
//       { id: 'B', label: 'Venus' },
//       { id: 'C', label: 'Mars' },
//       { id: 'D', label: 'Jupiter' },
//     ],
//     correctAnswer: 'Mars',
//   },
// ];

export default function QuizScreen() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showsheet, setshowsheet] = useState(false);
  const [questions, setquestions] = useState([]);
  const alphabets = ['A', 'B', 'C', 'D'];
  const [timeUp, settimeUp] = useState(false);
  const [timerunning, settimerunning] = useState(0);

  const quizzes = useQuery(GET_ALL_QUIZZES);
  useEffect(() => {
    if(quizzes?.data?.Quizs){
      setquestions(quizzes?.data?.Quizs);
    }
    console.log(quizzes?.data,1);
    // setquestions(quizzes?.data?.Quizs);
  }, [quizzes?.data?.Quizs]);

  const handleNext = () => {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedOption === currentQuestion.correctAnswer) {
      setCorrectCount(correctCount + 1);
    } else {
      setWrongCount(wrongCount + 1);
    }

    if (timerunning<121 && currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption('');
      setProgress((currentQuestionIndex + 1) / questions.length);
    }else{
      setProgress((currentQuestionIndex + 1) / questions.length);
      setshowsheet(true)
    }
  };

  useEffect(() => {
    if (timerunning >= 120) {
      settimeUp(true);
      return; // ✅ Prevents starting a new interval if already at 120
    }

    const timeInterval = setInterval(() => {
      settimerunning((prev) => prev + 1);
    }, 50);

    return () => clearInterval(timeInterval); // ✅ Proper cleanup on unmount
  }, [timerunning]); // ✅ Depend on timeRunning

  

  if(questions[0]===undefined){
    return <Text className='text-white text-center mt-20'>Loading...</Text>
  }

  

  const currentQuestion = questions[currentQuestionIndex];

  return (<>
    <View className="flex-1 pt-6" style={{backgroundColor:mainbgColor}}>
      <View className="flex-row justify-between items-center py-9 px-4">
        <TouchableOpacity className='h-10 rounded-full justify-center items-center w-10 bg-pink-500'>
          <Ionicons name='footsteps-sharp' color={'#fff'} size={23} />
        </TouchableOpacity>
        <Text className="text-white text-sm">{currentQuestionIndex + 1}/{questions?.length}</Text>
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
        <Text className="text-white text-sm">Correct: {correctCount} {Math.round((timerunning/120)*100)}</Text>
        <Text className="text-white text-sm">Wrong: {wrongCount}</Text>
      </View>

      <View className="bg-[#262A2F] flex-1 px-4 rounded-t-3xl mt-7">
        <View className='flex justify-center items-center'>
          <View className="flex items-center -mt-7 bg-[#262A2F] rounded-full w-[50px]">
            <Progress.Circle borderColor={'#262A2F'} unfilledColor={'#262A2F'} color={'#00ce41'} formatText={()=><View className=" bg-gray-800 rounded-full justify-center items-center">
              <Ionicons name="timer" size={28} color="white" />
            </View>} showsText={true} progress={(Math.round((timerunning/120)*100)/100)} size={50} indeterminate={false} />
            
          </View>
        </View>
        {timerunning>=120&&<Text className='text-center text-red-600 text-xl font-bold'>Time Up!</Text>}
        <Text className="text-white text-3xl text-center mt-6 font-semibold">
          {currentQuestion?.question}
        </Text>

        <FlatList
          data={currentQuestion?.options}
          keyExtractor={(item) => item}
          className="mt-6"
          renderItem={({ item,index }) => (
            <TouchableOpacity
              onPress={() => !(timerunning>=120)&&setSelectedOption(item)}
              className={`flex-row border ${
                selectedOption === item ? 'border-pink-300' : 'border-gray-700'
              } items-center justify-between px-4 py-3 bg-gray-90[#101214] rounded-xl mb-3`}
            >
              <View className="flex-row items-center">
                <View className="w-8 h-8 bg-pink-500 rounded-full justify-center items-center">
                  <Text className="text-white font-bold">{alphabets[index]}</Text>
                </View>
                <Text className="text-white ml-4 text-lg">{item}</Text>
              </View>
              <View
                className={`w-6 h-6 border-[3px] ${
                  selectedOption === item ? 'border-yellow-300' : 'border-gray-700'
                } rounded-full justify-center items-center`}
              >
                {selectedOption === item && <View className="bg-yellow-400 h-2 rounded-full w-2"></View>}
              </View>
            </TouchableOpacity>
          )}
        />

      {!(timerunning>=120)&&<TouchableOpacity
        onPress={handleNext}
        disabled={selectedOption === ''}
        className={` ${
          selectedOption === '' ? 'bg-gray-700 opacity-50' : 'bg-yellow-500'
        } py-4 rounded-full mb-5`}
      >
        <Text className="text-gray-900 text-center font-bold text-lg">
          {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
        </Text>
      </TouchableOpacity>}
      {timerunning>=120&&<TouchableOpacity
        onPress={()=>setshowsheet(true)}
        disabled={selectedOption === ''}
        className={` bg-yellow-500 py-4 rounded-full mb-5`}
      >
        <Text className="text-gray-900 text-center font-bold text-lg">
          {'Finish' }
        </Text>
      </TouchableOpacity>}
      
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
