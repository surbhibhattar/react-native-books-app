import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { booksList } from "./StaticData";

const Card = ({ name, author, icon }) => {
  return (
    <View style={styles.card}>
      <View>
        <Image style={styles.icon} source={require(`./assets/${icon}`)} />
      </View>
      <View style={{flex:1}}>
        <Text style={styles.bookName} numberOfLines={1}>
          {name}
        </Text>
        <Text>{author}</Text>
      </View>
    </View>
  );
};

export default function BooksList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={booksList}
        renderItem={({ item }) => <Card {...item} />}
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
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  card: {
    backgroundColor: "#DDDDDD",
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
    fontWeight:'bold'
  },
});
