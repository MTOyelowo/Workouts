import { StyleSheet, Text, View } from "react-native";

export default function ExerciseListItem({ exercise }) {
  return (
    <View style={styles.exerciseContainer}>
      <Text style={styles.exerciseName}>{exercise.name}</Text>
      <Text style={styles.exerciseSubtitle}>
        <Text style={styles.subValue}>{exercise.equipment}</Text> |{" "}
        <Text style={styles.subValue}>{exercise.equipment}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  exerciseContainer: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 10,
    gap: 5,
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
