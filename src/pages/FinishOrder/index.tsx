import React from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../routes/app.routes";

import { api } from "../../services/api";

type RouteDetailParams = {
  FinishOrder: {
    number: string | number;
    order_id: string;
  };
};

type FinishOrderRouteProp = RouteProp<RouteDetailParams, "FinishOrder">;

export default function FinishOrder() {
  const route = useRoute<FinishOrderRouteProp>();
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  async function handleFinish() {
    try {
      await api.put("/order/send", {
        order_id: route.params.order_id,
      });

      navigation.popToTop();
    } catch (error) {
      console.log("erro ao finalizar pedido", error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.alert}>Você deseja finalizar o pedido?</Text>
      <Text style={styles.title}>{route.params.number}</Text>

      <TouchableOpacity style={styles.button} onPress={handleFinish}>
        <Text style={styles.textButton}>Finalizar pedido</Text>
        <Feather name="shopping-cart" color="#1d1d2e" size={20} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d1d2e",
    paddingVertical: "5%",
    paddingHorizontal: "4%",
    alignItems: "center",
    justifyContent: "center",
  },
  alert: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 12,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#3fffa3",
    flexDirection: "row",
    width: "65%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  textButton: {
    fontSize: 18,
    marginRight: 8,
    fontWeight: "bold",
    color: "#1d1d2e",
  },
});
