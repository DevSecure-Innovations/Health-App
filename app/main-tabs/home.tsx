import React from "react";
import { 
	View, 
	Text, 
	StyleSheet,
} from "react-native";
import HomeSlider from "@/components/home-slider";
import HomeCard from "@/components/home-card";
import Color from "@/constants/color";
import { HomeCardData } from "@/data/home-card-data";

const HomeScreen = () => {
	return(
		<View style={styles.mainContainer}>
			<HomeSlider itemData={HomeCardData} />
		</View>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		paddingVertical: 60,
		backgroundColor: Color.baseWhite,
	},
});

export default HomeScreen;
