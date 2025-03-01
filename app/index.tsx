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