import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";

const Failed = () => {
  return (
    <View className="flex-1 bg-[#000] justify-end pt-16 px-4">
      {/* <TouchableOpacity
        onPress={() => {
          router.push("/result");
        }}
        className="h-10 absolute top-[380px] right-4 rounded-full justify-center items-center w-10 bg-[#353434]"
      >
        <Ionicons name="close" color={"#fff"} size={23} />
      </TouchableOpacity> */}
      <Animatable.View
        duration={200}
        animation="fadeInUpBig"
        className="bg-[#1c1c1c] rounded-t-3xl p-4 w-full bottom-0 py-7"
      >
        <View className="justify-center items-center mb-10">
          <Image
            resizeMode="contain"
            source={require("../assets/images/declined.png")}
          />
        </View>

        <Text className="text-center text-3xl text-gray-50 font-bold ">
          Payment Declined
        </Text>
        <Text className="text-center px-12 text-sm text-gray-400 ">
          Your bank declined this payment due to insufficient funds. Want to try
          with another card?
        </Text>

        <TouchableOpacity
          onPress={() => router.dismissTo("/scores")}
          className={` bg-yellow-500 py-3 rounded-full mb-3 mt-8`}
        >
          <Text className="text-gray-900 text-center font-bold text-lg">
            Try Again
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Failed;
