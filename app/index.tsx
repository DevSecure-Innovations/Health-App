<<<<<<< HEAD
import { Text, View } from "react-native";
import CardHome from "./../components/card-home";
import Card from "./../components/card";

const Index = () => {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Card/>
			<CardHome
				title="urgent care"
				description="Need to Consult a Doctor but it’s night? Contact with a doctor anytime, anywhere."
				buttonText="chat now"
				imageLink={require("./../assets/images/ambulance-at-night.jpg")}
			/>
		</View>
	);
}

export default Index;
=======
import React from "react";
import { Text, View } from "react-native";
import cards from "./../data/med-info.json";
import CardHome from "./../components/card-home";
import Card from "./../components/card";
import CardMedFull from "./../components/card-med-full";

const Index = () => {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<CardMedFull/>
		</View>
	);
}

export default Index;
>>>>>>> 30fec46d1a12ad1737ae0055e3d83a660409288e
