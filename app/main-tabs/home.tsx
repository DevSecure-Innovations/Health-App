import React, { useEffect } from "react";
import { 
	View, 
	Text, 
	StyleSheet,
    BackHandler,
    Keyboard,
	Image,
	ScrollView,
} from "react-native";

import HomeSlider from "@/components/home-slider";
import Color from "@/constants/color";
import { HomeCardData } from "@/data/home-card-data";
import ButtonCardInside from "@/components/button-card-inside";
import BottomIcon from "@/components/bottom-icon";

const HomeScreen = () => {
	return(
		<ScrollView style={styles.mainContainer} showsVerticalScrollIndicator={false}>
			<HomeSlider itemData={HomeCardData} />
			<ButtonCardInside
				title="Be A Part!"
				description="Help us make a difference in lives!"
				buttonText="join us"
				image={require("@/assets/images/shopkeeper.jpg")}
			/>
			<BottomIcon/>
		</ScrollView>
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
