import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import { booksList } from "./StaticData";

const Card = ({ name, author, icon, description, navigation }) => {
  const onCardClick = () => {
    console.log("card clicked!");
    navigation.navigate("Details", {
      name: name,
      author: author,
      icon: icon,
      description: description,
    });
  };

  return (
    <Pressable
      onPress={onCardClick}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
        },
        styles.wrapperCustom,
      ]}
    >
      <View style={styles.card}>
        <View>
          <Image style={styles.icon} source={require(`./assets/${icon}`)} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.bookName} numberOfLines={1}>
            {name}
          </Text>
          <Text>{author}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default function BooksList({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={booksList}
        renderItem={({ item }) => <Card navigation={navigation} {...item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  card: {
    padding: 10,
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    marginRight: 10,
  },
  bookName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
});
