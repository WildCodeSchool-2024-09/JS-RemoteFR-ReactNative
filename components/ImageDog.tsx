import { View, Image } from "react-native";
import { useEffect, useState } from "react";
import api from "../helpers/api";
function ImageDog({ next }: { next: boolean }) {
	const [link, setLink] = useState<string>("");

	const getDog = async () => {
		try {
			const data = await api.get("/random");

			setLink(data.data.message);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getDog();
	}, [next]);

	return (
		<View>
			<Image source={{ uri: link }} style={{ width: 150, height: 150 }} />
		</View>
	);
}

export default ImageDog;
