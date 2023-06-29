import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

const BookDetails = ({ route }) => {
  const { name, author, icon, description } = route.params;
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.image} source={icon} />
        <View style={styles.details}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.author}>{author}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 500,
    resizeMode: "stretch",
  },
  title: {
    fontSize: 20,
    margin: 10,
  },
  author: {
    fontSize: 16,
    margin: 10,
  },
  description: {
    fontSize: 15,
    margin: 10,
  },
  details: {
    alignItems: "center",
  },
});

export default BookDetails;
