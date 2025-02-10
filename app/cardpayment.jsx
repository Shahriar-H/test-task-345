// Score.JSX
import { View, Text, TouchableOpacity, FlatList, TextInput, Image } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import React from 'react';
import { mainbgColor } from '@/constants/Colors';
import { router } from 'expo-router';
import * as Animatable from 'react-native-animatable';

export default function Cardpayment() {
  const [selectedOption, setSelectedOption] = useState('');
  const [showsheet, setshowsheet] = useState(false);
  const [ispaymentsuccess, setispaymentsuccess] = useState(false);
  const [savecard, setsavecard] = useState(true);





  const handleNext = () => {
    setshowsheet(true)
    setispaymentsuccess(true)
    
  };

  return (<>
    <View className="flex-1 pt-6" style={{backgroundColor:mainbgColor}}>
      <View className="flex-row justify-between items-center py-9 px-4 pb-5">
        
        <TouchableOpacity onPress={()=>router.push("/questions")} className='h-12 rounded-full justify-center items-center w-12 bg-gray-700 pl-[1px]'>
          <Ionicons name='chevron-back' color={'#fff'} size={20} />
        </TouchableOpacity>
      </View>
     
      

      <View className=" flex-1 px-4 rounded-t-3xl">
        <View className='flex  justify-center items-center'>
          <View className="flex relative  my-7  items-center rounded-full ">
            <Image className="" source={require("../assets/images/paymentcard.png")}  />
          </View>
        </View>
        <View className="mb-5">
          <Text className="font-bold text-left text-white text-3xl">Enter card details</Text>
          <Text className=" text-gray-400 pr-16">You will not be charged until you review this
          order on the next page.</Text>
        </View>

        <View>
          <TextInput className="bg-[#262A2F] text-white pl-5 mb-3 h-14 rounded-lg" placeholder='Card Holder Name' placeholderTextColor={'gray'}/>
          <TextInput className="bg-[#262A2F] text-white pl-5 mb-3 h-14 rounded-lg" placeholder='Credit/debit card number' placeholderTextColor={'gray'}/>
          <TextInput className="bg-[#262A2F] text-white pl-5 mb-3 h-14 rounded-lg" placeholder='Expiration month & year' placeholderTextColor={'gray'}/>
          <TextInput className="bg-[#262A2F] text-white pl-5 mb-3 h-14 rounded-lg" placeholder='CVC' placeholderTextColor={'gray'}/>
          <TouchableOpacity onPress={()=>setsavecard((pre)=>!pre)} className="flex-row items-center">
            <View className="h-7 w-7 border-2 rounded border-[#262A2F]">
              {savecard&&<Ionicons name='checkbox' color={'green'} size={20} />}
            </View>
            <Text className="text-gray-500 pl-3">Save this card for future</Text>
          </TouchableOpacity>
        </View>

        

      <TouchableOpacity
        onPress={handleNext}
        className={`py-4 rounded-full my-5 mt-52 bg-yellow-500`}
      >
        <Text className="text-gray-900 text-center font-bold text-lg">
          {'Pay Now'}
        </Text>
      </TouchableOpacity>
      
      </View>

      
    </View>
    
    {showsheet&&<View className='absolute top-0 h-full w-full left-0 flex-1 bg-[#00000093] z-50'>


          {<TouchableOpacity onPress={()=>{setshowsheet(false)}}  className='h-10 absolute bottom-[480px] right-4 rounded-full justify-center items-center w-10 bg-[#353434]'>
            <Ionicons name='close' color={'#fff'} size={23} />
          </TouchableOpacity>}


          {/* I payment success show */}
          {ispaymentsuccess&&<Animatable.View duration={200} animation="fadeInUpBig" className='bg-[#1c1c1c] rounded-t-3xl p-4 w-full absolute bottom-0 py-7'>

            <View className="justify-center items-center mb-10">
              <Image resizeMode='contain' source={require("../assets/images/success.png")} />
            </View>


            <Text className='text-center text-3xl text-gray-50 font-bold '>Payment Successful!</Text>
            <Text className='text-center px-12 text-sm text-gray-400 '>Your payment was processed successfully. A receipt has been sent to your email.</Text>

        


            <TouchableOpacity onPress={()=>router.dismissTo('/result')} className={` bg-yellow-500 py-3 rounded-full mb-3 mt-8`}>
              <Text className="text-gray-900 text-center font-bold text-lg">See Result</Text>
            </TouchableOpacity>
          </Animatable.View>}

          {/* Show if payment failed */}
          {!ispaymentsuccess&&<Animatable.View duration={200} animation="fadeInUpBig" className='bg-[#1c1c1c] rounded-t-3xl p-4 w-full absolute bottom-0 py-7'>

            <View className="justify-center items-center mb-10">
              <Image resizeMode='contain' source={require("../assets/images/declined.png")} />
            </View>


            <Text className='text-center text-3xl text-gray-50 font-bold '>Payment Declined</Text>
            <Text className='text-center px-12 text-sm text-gray-400 '>Your bank declined this payment due to insufficient funds. Want to try with another card?</Text>

        


            <TouchableOpacity onPress={()=>setisShowingTelegramBlanace(true)} className={` bg-yellow-500 py-3 rounded-full mb-3 mt-8`}>
              <Text className="text-gray-900 text-center font-bold text-lg">See Result</Text>
            </TouchableOpacity>
          </Animatable.View>}

         
    </View>}

  
    </>
  );
}
