// Score.JSX
import { View, Text, TouchableOpacity, FlatList, TextInput, Image } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import React from 'react';
import { mainbgColor } from '@/constants/Colors';
import { router } from 'expo-router';
import * as Animatable from 'react-native-animatable';

export default function QuizScreen() {
  const [selectedOption, setSelectedOption] = useState('');
  const [showsheet, setshowsheet] = useState(false);
  const [countryCode, setcountryCode] = useState([]);
  const [searchtext, setsearchtext] = useState('');
  const [isShowingTelegramBlanace, setisShowingTelegramBlanace] = useState(false);
  const [isTelegramconnected, setisTelegramconnected] = useState(false);
  const [selectcountry, setselectcountry] = useState({name:'United States', dial_code:"+1",code:"US"});
  const [requestforTelegramCode, setrequestforTelegramCode] = useState(false);
  const [showDropdown, setshowDropdown] = useState(false);

  const fetchJsonCountryinfo = async ()=>{
    const response = await fetch("https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json")
    const result = await response.json()
    
    setcountryCode(result)
    
  }

  useEffect(() => {
    setshowDropdown(false)
    
    
  }, [selectcountry?.name]);



  useEffect(() => {
    fetchJsonCountryinfo()
  }, []);

  const handleNext = () => {
    if(selectedOption){
      if(selectedOption==='telegram'){
        setshowsheet(true)
      }else{
        router.push("/cardpayment")
      }
      
    }
    
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
          {'Next'}
        </Text>
      </TouchableOpacity>
      
      </View>

      
    </View>
    
    {showsheet&&<View className='absolute top-0 h-full w-full left-0 flex-1 bg-[#00000093] z-50'>


          {!isTelegramconnected&&<TouchableOpacity onPress={()=>{setshowsheet(false);setrequestforTelegramCode(false)}}  className='h-10 absolute bottom-[380px] right-4 rounded-full justify-center items-center w-10 bg-[#353434]'>
            <Ionicons name='close' color={'#fff'} size={23} />
          </TouchableOpacity>}

          {/* Show this when telegram connected sheet appears only */}
          {isTelegramconnected&&!isShowingTelegramBlanace&&<TouchableOpacity onPress={()=>setisTelegramconnected(false)}  className='h-10 absolute top-[50px] left-4 rounded-full justify-center items-center w-10 bg-[#353434]'>
            <Ionicons name='chevron-back' color={'#fff'} size={20} />
          </TouchableOpacity>}

          {/* Show this when telegram Balacce sheet appears only */}
          {isShowingTelegramBlanace&&<TouchableOpacity onPress={()=>setisShowingTelegramBlanace(false)}  className='h-10 absolute top-[50px] left-4 rounded-full justify-center items-center w-10 bg-[#353434]'>
            <Ionicons name='chevron-back' color={'#fff'} size={20} />
          </TouchableOpacity>}


          {/* When user select telegram for payment show this */}
          {<Animatable.View animation="fadeInUpBig" duration={200} className='bg-[#1c1c1c] rounded-t-3xl p-4 w-full absolute bottom-0 py-7'>
            <Text className='text-center text-3xl text-gray-50 font-bold '>Connect Telegram</Text>
            <Text className='text-center px-14 text-sm text-gray-400 '>Secure, fast, and smooth connection, Stay informed with Telegram.</Text>

            <TouchableOpacity onPress={()=>setshowDropdown(true)} className='bg-[#373737] flex-row justify-between items-center rounded-xl p-4 py-4 my-5 mb-0'>
              <Text className="text-gray-400">{selectcountry?.name?selectcountry?.name:"Select Country"}</Text>
              <Ionicons name='chevron-down' color={'#a7a7a7'} size={18} />
            </TouchableOpacity>

            <View className="relative">
              <TextInput className={`bg-[#373737] text-white rounded-xl p-4 py-4 my-3 mb-5 pl-20 ${selectcountry?.dial_code.length>3&&"pl-[90px]"}`} placeholder='Enter your mobile number' placeholderTextColor={'#a3a3a3'} />
              <Text className="absolute border-r pr-4 border-r-gray-500 text-xl text-gray-400 top-6 left-4">{selectcountry?.dial_code}</Text>
            </View>
            
            <TouchableOpacity onPress={()=>setrequestforTelegramCode(true)} className={` bg-yellow-500 py-3 rounded-full mb-3 mt-10`}>
              <Text className="text-gray-900 text-center font-bold text-lg">Continue</Text>
            </TouchableOpacity>
          </Animatable.View>}  

          {/* When user select telegram for payment and click for verification then show this */}
          {requestforTelegramCode&&<Animatable.View duration={200} animation="fadeInUpBig" className='bg-[#1c1c1c] rounded-t-3xl p-4 w-full absolute bottom-0 py-7'>
            <Text className='text-center text-3xl text-gray-50 font-bold '>Verification Code</Text>
            <Text className='text-center px-14 text-sm text-gray-400 '>Enter the code in the required field to complete your verification process.</Text>

            <View className="flex-row justify-evenly my-4">
              <TextInput keyboardType='number-pad' maxLength={1} className="h-16 w-16 bg-[#141414] text-3xl rounded p-3 border text-center text-white border-[#333333ee]" />
              <TextInput keyboardType='number-pad' maxLength={1} className="h-16 w-16 bg-[#141414] text-3xl rounded p-3 border text-center text-white border-[#333333ee]" />
              <TextInput keyboardType='number-pad' maxLength={1} className="h-16 w-16 bg-[#141414] text-3xl rounded p-3 border text-center text-white border-[#333333ee]" />
              <TextInput keyboardType='number-pad' maxLength={1} className="h-16 w-16 bg-[#141414] text-3xl rounded p-3 border text-center text-white border-[#333333ee]" />
              <TextInput keyboardType='number-pad' maxLength={1} className="h-16 w-16 bg-[#141414] text-3xl rounded p-3 border text-center text-white border-[#333333ee]" />
              <TextInput keyboardType='number-pad' maxLength={1} className="h-16 w-16 bg-[#141414] text-3xl rounded p-3 border text-center text-white border-[#333333ee]" />
            </View>
            <Text className="text-center text-sm text-gray-400">Didn’t received the code? <Text className="text-yellow-500 underline">Re-send Now</Text></Text>


            <TouchableOpacity onPress={()=>setisTelegramconnected(true)} className={` bg-yellow-500 py-3 rounded-full mb-3 mt-16`}>
              <Text className="text-gray-900 text-center font-bold text-lg">Verify</Text>
            </TouchableOpacity>
          </Animatable.View>}

          {/* When user select telegram for payment and click for verification and verification completed and telegram connected then show this */}
          {isTelegramconnected&&<Animatable.View duration={200} animation="fadeInUpBig" className='bg-[#1c1c1c] rounded-t-3xl p-4 w-full absolute bottom-0 py-7'>

            <View className="justify-center items-center mb-10">
              <Image resizeMode='contain' source={require("../assets/images/telegram-connection.png")} />
            </View>


            <Text className='text-center text-3xl text-gray-50 font-bold '>Connected with Telegram</Text>
            <Text className='text-center px-14 text-sm text-gray-400 '>Secure, fast, and smooth connection, Stay informed with Telegram.</Text>

            
            <TouchableOpacity onPress={()=>setSelectedOption('telegram')}  className="flex flex-row justify-between items-center bg-[#1E2226] p-3 mt-10 rounded-xl border border-gray-700">
              <View className="flex-row flex items-center">
                <View className="bg-gray-700 h-14 w-14 rounded-full justify-center items-center">
                  <FontAwesome name='star' color={'#ffde05'} size={23} />
                </View>
                <View className="ml-2">
                  <Text className="text-white font-bold">Telegram Account</Text>
                  <Text className="text-gray-500 text-xs">+1 2933 9823 422</Text>
                </View>
              </View>
              <Ionicons name='checkmark-circle-outline' color={'green'} size={24} />
            </TouchableOpacity>


            <TouchableOpacity onPress={()=>setisShowingTelegramBlanace(true)} className={` bg-yellow-500 py-3 rounded-full mb-3 mt-[300px]`}>
              <Text className="text-gray-900 text-center font-bold text-lg">Continue</Text>
            </TouchableOpacity>
          </Animatable.View>}

          {/* Show the telegram's star balance here */}
          {isShowingTelegramBlanace&&<Animatable.View duration={200} animation="fadeInUpBig" className='bg-[#1c1c1c] rounded-t-3xl p-4 w-full absolute bottom-0 py-7'>

            <View className="justify-center items-center mb-10">
              <Image resizeMode='contain' source={require("../assets/images/telegrambalance.png")} />
            </View>



            
            <View onPress={()=>setSelectedOption('telegram')}  className=" bg-[#1E2226] p-3 mt-10 rounded-xl border border-gray-700">
              <View className="flex flex-row justify-between items-center pb-4">
                <View className="flex-row flex items-center">
                  <View className="ml-2">
                    <Text className="text-white font-bold text-3xl">
                      <FontAwesome name='star' color={'#ffde05'} size={29} /> 3,454</Text>
                    <Text className="text-gray-500 text-xs">Available Balance $29.76</Text>
                  </View>
                </View>
                <Image resizeMode='contain' className="w-12" source={require("../assets/images/brains.png")} />
              </View>

              <View>
                <View className="ml-2 pt-4 border-t border-gray-800">
                    <Text className="text-white font-bold text-xl">
                      $9.99</Text>
                    <Text className="text-gray-500 text-xs">One-time charge</Text>
                  </View>
              </View>

            </View>


            <TouchableOpacity onPress={()=>setrequestforTelegramCode(true)} className={` bg-yellow-500 py-3 rounded-full mb-3 mt-[150px]`}>
              <Text className="text-gray-900 text-center font-bold text-lg">Continue</Text>
            </TouchableOpacity>
          </Animatable.View>}
    </View>}

    {showDropdown&&selectedOption==='telegram'&&
    <Animatable.View duration={400} animation="zoomIn" className='absolute top-0 h-full w-full left-0 flex-1 bg-[#00000093] z-[60] py-12 px-5'>
        
      <View className="bg-gray-900 p-4 h-full">
        <TextInput value={searchtext} onChangeText={(v)=>setsearchtext(v)} placeholder='Search Country' placeholderTextColor={'gray'} className="w-full p-2 text-white h-14 rounded border bg-gray-700"/>
        <FlatList 
          data={countryCode}
          renderItem={({item})=>{
            if(searchtext){
              if(item?.name.toLowerCase().includes(searchtext.toLowerCase())){
                return <TouchableOpacity onPress={()=>setselectcountry(item)} className="bg-gray-800 mt-1 rounded p-4">
                  <Text className="text-white">({item?.dial_code}) {item?.name}</Text>
                </TouchableOpacity>
              }
            }else{
              return <TouchableOpacity onPress={()=>setselectcountry(item)} className="bg-gray-800 mt-1 rounded p-4">
                <Text className="text-white">({item?.dial_code}) {item?.name}</Text>
              </TouchableOpacity>
            }
            
            
          }}
          keyExtractor={(item,index)=>index}
        />
      </View>
      <TouchableOpacity onPress={()=>setshowDropdown(false)}  className='h-10 absolute top-[64px] right-12 rounded-full justify-center items-center w-10 bg-[#353434]'>
          <Ionicons name='close' color={'#fff'} size={23} />
      </TouchableOpacity>
    </Animatable.View>}
    </>
  );
}
