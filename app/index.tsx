import { Text, View, StyleSheet, Button } from "react-native";
import Quote from "@/components/Quote";
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
			<Text style={styles.h1}>Random Chuck Norris Quote:</Text>
			<Quote next={next} />
			<Button
				title="Next Quote"
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
