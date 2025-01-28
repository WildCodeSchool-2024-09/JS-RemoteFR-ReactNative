import { Text, View, StyleSheet, Button } from "react-native";
import Quote from "@/components/ImageDog";
import { useState } from "react";
export default function Index() {
	const [next, setNext] = useState<boolean>(false);

	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Text style={styles.h1}>Get random image:</Text>
			<Quote next={next} />
			<Button
				title="Next Dog"
				onPress={() => {
					setNext(!next);
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	h1: {
		fontSize: 24,
		fontWeight: "bold",
	},
});
