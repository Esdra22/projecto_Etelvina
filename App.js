import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

import { Feather, MaterialIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <>
      <View style={styles.header}>
        <View style={styles.firstView}>
          <Text>
            <Feather name="map-pin" color="#fff" size={20} />
          </Text>

          <View style={styles.TextStyles}>
            <Text style={{ color: "#fff", fontWeight: "bold"}}>
              Multicaixa
            </Text>
            <Text style={{ color: "#fff" }}>Mais próximo de ti...</Text>
          </View>

          <Text>
            <Feather name="info" color="#fff" size={20} />
          </Text>
        </View>

        <View style={styles.secondView}>
          <Feather name="send" color="#fff" size={18} />
          <TextInput
            placeholder="Insira o endereço"
            style={styles.Input}
            placeholderTextColor="#fff"
          />

          <Feather name="search" color="#fff" size={18} />
        </View>
      </View>

      <View style={styles.MainContainer}>
        <View style={styles.Card}>
          <Text
            style={{
              marginTop: 15,
              marginBottom: 10,
              fontWeight: "bold",
              fontSize: 16,
              marginLeft: 15,
            }}
          >
            ATM - Banco BPC
          </Text>

          <View style={styles.CarContent}>
            <View style={styles.FirsColumm}>
              <View style={styles.FirstContent}>
                <Feather name="wifi" color="#555" />
                <Text style={styles.FirstText}>Sistemas</Text>
              </View>

              <View style={styles.FirstContent}>
                <Feather name="users" color="#555" />
                <Text style={styles.FirstText}>Enchetes</Text>
              </View>

              <View style={styles.FirstContent}>
                <Feather name="send" color="#555" />
                <Text style={styles.FirstText}>Avenida 21 de Janeiro</Text>
              </View>
            </View>

            <View style={styles.SecondColumn}>
              <View style={styles.FirsColumm}>
                <View style={styles.SecondContent}>
                  <MaterialIcons name="money" color="#555" />
                  <Text style={styles.FirstText}>Dinheiro</Text>
                </View>

                <View style={styles.SecondContent}>
                  <Feather name="file" color="#555" />
                  <Text style={styles.FirstText}>Papel</Text>
                </View>

                <View style={styles.SecondContent}>
                  <Text style={styles.FirstText}>
                    ~826 m | <Feather name="map-pin" color="#555" />
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.footer}>
            <MaterialIcons name="directions" />
            <Text> Direção</Text>
          </View>
        </View>

        <View style={styles.Card}>
          <Text
            style={{
              marginTop: 15,
              marginBottom: 10,
              fontWeight: "bold",
              fontSize: 16,
              marginLeft: 15,
            }}
          >
            ATM - Banco BFA
          </Text>

          <View style={styles.CarContent}>
            <View style={styles.FirsColumm}>
              <View style={styles.FirstContent}>
                <Feather name="wifi" color="#555" />
                <Text style={styles.FirstText}>Sistemas</Text>
              </View>

              <View style={styles.FirstContent}>
                <Feather name="users" color="#555" />
                <Text style={styles.FirstText}>Enchetes</Text>
              </View>

              <View style={styles.FirstContent}>
                <Feather name="send" color="#555" />
                <Text style={styles.FirstText}>Avenida 21 de Janeiro</Text>
              </View>
            </View>

            <View style={styles.SecondColumn}>
              <View style={styles.FirsColumm}>
                <View style={styles.SecondContent}>
                  <MaterialIcons name="money" color="#555" />
                  <Text style={styles.FirstText}>Dinheiro</Text>
                </View>

                <View style={styles.SecondContent}>
                  <Feather name="file" color="#555" />
                  <Text style={styles.FirstText}>Papel</Text>
                </View>

                <View style={styles.SecondContent}>
                  <Text style={styles.FirstText}>
                    ~826 m | <Feather name="map-pin" color="#555" />
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.footer}>
            <MaterialIcons name="directions" />
            <Text> Direção</Text>
          </View>
        </View>

        <View style={styles.Card}>
          <Text
            style={{
              marginTop: 15,
              marginBottom: 10,
              fontWeight: "bold",
              fontSize: 16,
              marginLeft: 15,
            }}
          >
            ATM - Banco Prestigio
          </Text>

          <View style={styles.CarContent}>
            <View style={styles.FirsColumm}>
              <View style={styles.FirstContent}>
                <Feather name="wifi" color="#555" />
                <Text style={styles.FirstText}>Sistemas</Text>
              </View>

              <View style={styles.FirstContent}>
                <Feather name="users" color="#555" />
                <Text style={styles.FirstText}>Enchetes</Text>
              </View>

              <View style={styles.FirstContent}>
                <Feather name="send" color="#555" />
                <Text style={styles.FirstText}>Avenida 21 de Janeiro</Text>
              </View>
            </View>

            <View style={styles.SecondColumn}>
              <View style={styles.FirsColumm}>
                <View style={styles.SecondContent}>
                  <MaterialIcons name="money" color="#555" />
                  <Text style={styles.FirstText}>Dinheiro</Text>
                </View>

                <View style={styles.SecondContent}>
                  <Feather name="file" color="#555" />
                  <Text style={styles.FirstText}>Papel</Text>
                </View>

                <View style={styles.SecondContent}>
                  <Text style={styles.FirstText}>
                    ~826 m | <Feather name="map-pin" color="#555" />
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.footer}>
            <MaterialIcons name="directions" />
            <Text> Direção</Text>
          </View>
        </View>
      </View>

      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 170,
    backgroundColor: "orange",
  },

  TextStyles: {
    color: "#fff",
    flexDirection: "column",
    textAlign: "center",
  },

  firstView: {
    width: "100%",
    backgroundColor: "orange",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    height: 120,
    alignItems: "center",
  },

  secondView: {
    width: "90%",
    backgroundColor: "darkorange",
    marginTop: -18,
    marginLeft: 20,
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    borderRadius: 6,
    paddingHorizontal: 10,
  },

  Input: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: "transparent",
  },

  MainContainer: {
    backgroundColor: "#ddd",
    height: "100%",
  },

  Card: {
    backgroundColor: "#fff",
    width: "90%",
    height: 170,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 10,
  },

  FirsColumm: {
    width: "50%",
  },

  SecondColumn: {
    width: "50%",
  },

  CarContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  FirstContent: {
    flexDirection: "row",
    marginTop: 6,
    paddingLeft: 40,
  },

  SecondContent: {
    flexDirection: "row",
    marginTop: 6,
    paddingLeft: 10,
  },

  FirstText: {
    fontSize: 12,
    marginLeft: 6,
    color: "#555",
  },

  footer: {
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 6,
  },
});
