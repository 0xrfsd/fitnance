// In App.js in a new project

import * as React from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Animated,
  ImageBackground,
  Dimensions,
  Pressable,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import styled from "styled-components/native";

import {
  Feather,
  AntDesign,
  Fontisto,
  Entypo,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";

import StickyParallaxHeader from "react-native-sticky-parallax-header";

const windowHeight = Dimensions.get("window").height;
const { event, ValueXY } = Animated;
const scrollY = new ValueXY();

const text = {
  biography: `The bounty hunter known as "the Mandalorian" was dispatched by "the Client" and Imperial Dr. Pershing to capture the Child alive, however the Client would allow the Mandalorian to return the Child dead for a lower price.
  The assassin droid IG-11 was also dispatched to terminate him. After working together to storm the encampment the infant was being held in, the Mandalorian and IG-11 found the Child. IG-11 then attempted to terminate the Child. The Mandalorian shot the droid before the he was able to assassinate the Child.
  Shortly after, the Mandalorian took the Child back to his ship. On the way they were attacked by a trio of Trandoshan bounty hunters, who attempted to kill the Child. After the Mandalorian defeated them, he and the Child camped out in the desert for the night. While the Mandalorian sat by the fire, the Child ate one of the creatures moving around nearby. He then approached the bounty hunter and attempted to use the Force to heal one of the Mandalorian's wounds. The Mandalorian stopped him and placed him back into his pod. The next day, the pair made it to the Razor Crest only to find it being scavenged by Jawas. The Mandalorian attacked their sandcrawler for the scavenged parts and attempted to climb it while the Child followed in his pod. However, the Mandalorian was knocked down to the ground`,
  powers: "Powers and Abilities",
  appearances: "Appearances",
};

const Carousel = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    padding: 0,
  },
}))``;

const styles = StyleSheet.create({
  headerCotainer: {
    width: "100%",
    paddingHorizontal: 24,
    paddingTop: 35,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ccc",
  },
  headerWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerImage: {
    width: 20,
    height: 20,
  },
  headerText: {
    color: "white",
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  titleStyle: {
    color: "white",
    fontWeight: "bold",
    padding: 10,
    fontSize: 40,
    borderRadius: 5,
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  tabTextContainerStyle: {
    backgroundColor: "transparent",
    borderRadius: 18,
    marginTop: 5,
  },
  tabTextContainerActiveStyle: {
    backgroundColor: "#ddd",
  },
  tabTextStyle: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: "#fff",
  },
  tabTextActiveStyle: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: "#fff",
  },
  tabWrapperStyle: {
    paddingVertical: 10,
  },
  tabsContainerStyle: {
    paddingHorizontal: 10,
  },
  contentContiner: {
    height: windowHeight,
    padding: 10,
  },
  contentText: {
    fontSize: 16,
  },
});

const CutomHeaderScreen = () => {
  const renderContent = (x) => (
    <View style={styles.contentContiner}>
      <Text style={styles.contentText}>{x}</Text>
    </View>
  );

  const renderHeader = () => {
    const opacity = scrollY.y.interpolate({
      inputRange: [0, 60, 90],
      outputRange: [0, 0, 1],
      extrapolate: "clamp",
    });

    return (
      <View style={styles.headerCotainer}>
        <View style={styles.headerWrapper}>
          <TouchableOpacity
            onPress={() => console.warn("CLICKED")}
          ></TouchableOpacity>
          <Animated.View
            style={{
              opacity,
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 26 }}>Fitnance®</Text>
            <Ionicons name="notifications-outline" size={26} color="#fff" />
          </Animated.View>
        </View>
      </View>
    );
  };

  const Stocks = (props) => {
    return (
      <>
        <Text style={{ marginVertical: 10, fontSize: 16, fontWeight: "400" }}>
          {props.v}
        </Text>

        <Carousel>
          <TouchableOpacity
            style={{
              height: 40,
              width: "auto",
              paddingHorizontal: 10,
              paddingVertical: 5,
              backgroundColor: "#333",
              marginRight: 5,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff" }}>
              INDU:IND
              <Text style={{ color: "#00ff00" }}> +30.55</Text>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 40,
              width: "auto",
              paddingHorizontal: 10,
              paddingVertical: 5,
              backgroundColor: "#333",
              marginRight: 5,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff" }}>
              SPX:IND
              <Text style={{ color: "#00ff00" }}> +5.90</Text>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 40,
              width: "auto",
              paddingHorizontal: 10,
              paddingVertical: 5,
              backgroundColor: "#333",
              marginRight: 5,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff" }}>
              CCMP:IND
              <Text style={{ color: "#00ff00" }}> +6.70</Text>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 40,
              width: "auto",
              paddingHorizontal: 10,
              paddingVertical: 5,
              backgroundColor: "#333",
              marginRight: 5,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff" }}>
              NYA:IND
              <Text style={{ color: "#00ff00" }}> +77.15</Text>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 40,
              width: "auto",
              paddingHorizontal: 10,
              paddingVertical: 5,
              backgroundColor: "#333",
              marginRight: 5,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff" }}>
              SPTSX:IND
              <Text style={{ color: "#00ff00" }}> +92.61</Text>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 40,
              width: "auto",
              paddingHorizontal: 10,
              paddingVertical: 5,
              backgroundColor: "#333",
              marginRight: 5,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff" }}>
              SX5E:IND
              <Text style={{ color: "#00ff00" }}> +70.50</Text>
            </Text>
          </TouchableOpacity>
        </Carousel>
      </>
    );
  };

  const Commodities = (props) => {
    return (
      <>
        <Text style={{ marginVertical: 10, fontSize: 16, fontWeight: "400" }}>
          {props.v}
        </Text>

        <Carousel>
          <TouchableOpacity
            style={{
              height: 40,
              width: "auto",
              paddingHorizontal: 10,
              paddingVertical: 5,
              backgroundColor: "#333",
              marginRight: 5,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff" }}>
              ZCZ1
              <Text style={{ color: "#ff6000" }}> -4'0</Text>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 40,
              width: "auto",
              paddingHorizontal: 10,
              paddingVertical: 5,
              backgroundColor: "#333",
              marginRight: 5,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff" }}>
              WCZ1
              <Text style={{ color: "#ff6000" }}> -3'6</Text>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 40,
              width: "auto",
              paddingHorizontal: 10,
              paddingVertical: 5,
              backgroundColor: "#333",
              marginRight: 5,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff" }}>
              ZSX1
              <Text style={{ color: "#ff6000" }}> -8'6</Text>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 40,
              width: "auto",
              paddingHorizontal: 10,
              paddingVertical: 5,
              backgroundColor: "#333",
              marginRight: 5,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff" }}>
              ZKX1
              <Text style={{ color: "#ff6000" }}> -8'2</Text>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 40,
              width: "auto",
              paddingHorizontal: 10,
              paddingVertical: 5,
              backgroundColor: "#333",
              marginRight: 5,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff" }}>
              ZOZ1
              <Text style={{ color: "#ff6000" }}> -0'48</Text>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 40,
              width: "auto",
              paddingHorizontal: 10,
              paddingVertical: 5,
              backgroundColor: "#333",
              marginRight: 5,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff" }}>
              ZRX1
              <Text style={{ color: "#ff6000" }}> -0'2</Text>
            </Text>
          </TouchableOpacity>
        </Carousel>
      </>
    );
  };

  return (
    <StickyParallaxHeader
      headerType="TabbedHeader"
      parallaxHeight={220}
      header={renderHeader}
      headerHeight={60}
      backgroundColor={"#ccc"}
      title={"Fitnance® \nA sua carteira de gerenciamento."}
      foregroundImage={{
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0UJH5eEM_8WBehHjju7YXERmS_XdU_i0m5w&usqp=CAU",
      }}
      titleStyle={{ color: "#fff", fontSize: 26 }}
      tabs={[
        {
          title: "Resumo dia",
          content: renderContent(
            <>
              <View style={{ height: 190 }}>
                <Stocks v="Americas" />
                <Commodities v="Commodities" />
              </View>
              <Text
                style={{ marginBottom: 10, fontSize: 16, fontWeight: "bold" }}
              >
                Suas carteiras nas ultimas 24h
              </Text>
              <View
                style={{
                  marginBottom: 10,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "#dd3",
                  marginTop: 10,
                  borderRadius: 10,
                    height: 130,
                    padding: 10,
                    paddingTop: 80,
                    width: "48.5%",
                  }}
                >
                  <Text
                    style={{ color: "#333", fontSize: 18, fontWeight: "bold" }}
                  >
                    Carteira Brasil
                  </Text>
                  <Text
                    style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}
                  >
                    +2,20%
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#3333f3",
                    borderRadius: 10,
                    height: 130,
                  marginTop: 10,
                  padding: 10,
                    paddingTop: 80,
                    width: "48.5%",
                  }}
                >
                  <Text
                    style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}
                  >
                    Carteira USA
                  </Text>
                  <Text
                    style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}
                  >
                    +3,20%
                  </Text>
                </TouchableOpacity>
              </View>
              <Text
                style={{ marginBottom: 10, fontSize: 16, fontWeight: "bold" }}
              >
                Seus investimentos nas ultimas 24h
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "#3dd",
                  marginTop: 10,
                  borderRadius: 10,
                    height: 130,
                    padding: 10,
                    paddingTop: 60,
                    width: "48.5%",
                  }}
                >
                  <Text
                    style={{ color: "#333", fontSize: 18, fontWeight: "bold" }}
                  >
                    Multimercado Vernace
                  </Text>
                  <Text
                    style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}
                  >
                    +1,06%
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#003",
                    borderRadius: 10,
                    height: 130,
                  marginTop: 10,
                  padding: 10,
                    paddingTop: 80,
                    width: "48.5%",
                  }}
                >
                  <Text
                    style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}
                  >
                    FIDC Sparta
                  </Text>
                  <Text
                    style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}
                  >
                    -3,20%
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          ),
        },
        {
          title: "Carteiras",
          content: renderContent(<Text>Dados e Gráficos.</Text>),
        },
        {
          title: "Investimentos",
          content: renderContent(
            <Text>Seus Investimentos aparecerão aqui.</Text>
          ),
        },
      ]}
      tabTextContainerStyle={styles.tabTextContainerStyle}
      tabTextContainerActiveStyle={styles.tabTextContainerActiveStyle}
      tabTextStyle={styles.tabTextStyle}
      tabTextActiveStyle={styles.tabTextActiveStyle}
      tabWrapperStyle={styles.tabWrapperStyle}
      tabsContainerStyle={styles.tabsContainerStyle}
      scrollEvent={event(
        [{ nativeEvent: { contentOffset: { y: scrollY.y } } }],
        { useNativeDriver: false }
      )}
    />
  );
};

const Favoritos = () => {
  return (
    <>
      <Text>Perfil do Investidor</Text>
    </>
  );
};

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#f15454",
        safeAreaInsets: {
          bottom: 0,
          top: 0,
        },

        style: {
          height: 60,
          backgroundColor: "#fff",
          paddingTop: 10,
          paddingBottom: 10,
        },
      }}
    >
      <Tab.Screen
        name="Fitnance"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-flash" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil do Investidor"
        component={Favoritos}
        options={{
          tabBarIcon: ({ color }) => (
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Entypo name="user" size={24} color={color} />
              {/* {orderActive ? (
                <View
                  style={{
                    marginLeft: 20,
                    width: 15,
                    height: 15,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 10,
                    backgroundColor: "#f15454",
                    position: "absolute",
                  }}
                >
                  <View
                    style={{
                      width: 5,
                      height: 5,
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 10,
                      backgroundColor: "#fff",
                      position: "absolute",
                    }}
                  />
                </View>
              ) : null} */}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

function HomeScreen() {
  const [pesquisa, setPesquisa] = React.useState(false);
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  return (
    <>
      <CutomHeaderScreen />
    </>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeTabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
