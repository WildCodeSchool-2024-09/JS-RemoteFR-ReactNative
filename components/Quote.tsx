import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import api from "../helpers/api";
function Quote({ next }: { next: boolean }) {
	const [quote, setQuote] = useState<string | null>(null);

	const getQuote = async () => {
		const data = await api.get("/random");

		setQuote(data.data.value);
	};

	useEffect(() => {
		getQuote();
	}, [next]);

	return (
		<View>
			<Text>{quote}</Text>
		</View>
	);
}

export default Quote;
