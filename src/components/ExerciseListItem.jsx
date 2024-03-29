import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function ExerciseListItem({ exercise }) {
  return (
    <Link href={`/${exercise.name}`} asChild>
      <Pressable style={styles.exerciseContainer}>
        <Text style={styles.exerciseName}>{exercise.name}</Text>
        <Text style={styles.exerciseSubtitle}>
          <Text style={styles.subValue}>{exercise.muscle}</Text> |{" "}
          <Text style={styles.subValue}>{exercise.equipment}</Text>
        </Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  exerciseContainer: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 10,
    gap: 5,
    marginHorizontal: 2,

    //shadow

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: "500",
  },
  exerciseSubtitle: {
    color: "dimgray",
  },
  subValue: {
    textTransform: "capitalize",
  },
});
