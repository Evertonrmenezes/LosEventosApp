import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function MinhaConta() {
  const navigation = useNavigation();

  return (
    <View>
      <View style={{ backgroundColor: "#FBAD16" }}>
        <TouchableOpacity
          style={{
            padding: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("listarProdutos")}
        >
          <Icon
            name="arrow-left"
            size={30}
            color="#000"
            style={{ padding: 10 }}
          />
          <Text style={{ fontWeight: "400", padding: 10 }}>Voltar</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <Image
            source={require("../../images/icone.png")}
            style={{ width: 320, height: 200, borderRadius: 40 }}
            resizeMode="contain"
          />
          <Text
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            MINHA CONTA
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#D9D9D9",
              paddingHorizontal: 40,
              paddingVertical: 20,
              display: "flex",
              justifyContent: "start",
              borderRadius: 20,
              width: 300,
              margin: 20,
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Image
              source={require("../../images/Group.png")}
              resizeMode="contain"
            />
            <Text>MEU CADASTRO</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#D9D9D9",
              paddingHorizontal: 40,
              paddingVertical: 20,
              display: "flex",
              justifyContent: "start",
              borderRadius: 20,
              width: 300,
              margin: 20,
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Image
              source={require("../../images/Https.png")}
              resizeMode="contain"
            />
            <Text>PRIVACIDADE E SEGURANÇA</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#D9D9D9",
              paddingHorizontal: 40,
              paddingVertical: 20,
              display: "flex",
              justifyContent: "start",
              alignItems: "start",
              borderRadius: 20,
              width: 300,
              margin: 25,
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Image
              source={require("../../images/contact.png")}
              resizeMode="contain"
            />
            <Text>AJUDA</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#FBAD16",
          padding: 16,
          height: 100,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#FBAD16",
            padding: 16,
            height: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("listarProdutos")}
        >
          <FontAwesome5 name="search" size={24} color="black" />
          <Text>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#FBAD16",
            padding: 16,
            height: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("eventos")}
        >
          {/* Substitua IoSearchSharp por um ícone adequado do react-native-vector-icons */}
          <FontAwesome5 name="calendar" size={24} color="black" />
          <Text>Meus Eventos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#FBAD16",
            padding: 16,
            height: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Substitua IoSearchSharp por um ícone adequado do react-native-vector-icons */}
          <FontAwesome5 name="user" size={24} color="black" />
          <Text>Minha Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default MinhaConta;
