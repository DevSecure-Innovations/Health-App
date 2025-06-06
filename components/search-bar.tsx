import React, { useEffect } from "react";
import {
	View,
	TextInput,
	StyleSheet,
	TouchableOpacity,
	TouchableWithoutFeedback,
	KeyboardAvoidingView,
	Keyboard,
	BackHandler,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParam } from "@/data/navigation-type";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import Color from "./../constants/color";
import { LinearGradient } from "expo-linear-gradient";

type NavigationProp = StackNavigationProp<RootStackParam>;

type SearchBarProps = {
	profileButton?: keyof RootStackParam;
};

const SearchBar = ({ profileButton }: SearchBarProps) => {
	const navigation = useNavigation<NavigationProp>();
	const onPressHandler = () => {
		if (profileButton !== undefined) {
			navigation.navigate(profileButton);
		}
	}

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<LinearGradient 
			style={styles.mainContainer}
				colors={["rgba(216, 224, 226, 1)", "transparent"]}
				locations={[0.7, 1]}
			>
				<View style={styles.mainContainer}>
					<View style={styles.srcBar}>
						<FontAwesome5 name="search" style={styles.srcBarIcon} />
						<TextInput
							style={styles.srcBarInput}
							placeholder="Search..."
							placeholderTextColor="rgba(0, 0, 0, 0.45)"
						/>
						<FontAwesome5 name="microphone" style={styles.srcBarIcon} />
					</View>
					<TouchableOpacity onPress={onPressHandler} style={styles.profile}>
						<FontAwesome5 name="user-circle" style={styles.profileImg} />
					</TouchableOpacity>
				</View>
			</LinearGradient>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		width: "100%",
		height: 70,
		padding: 10,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 10,
		position: "absolute",
		zIndex: 9,
	},
	srcBar: {
		flex: 1,
		height: "100%",
		backgroundColor: Color.baseWhite10Tint,
		borderColor: Color.searchbarBorder,
		borderWidth: 2,
		borderRadius: 30,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	srcBarIcon: {
		height: "100%",
		width: "15%",
		borderRadius: 30,
		textAlign: "center",
		textAlignVertical: "center",
		color: Color.baseBlack,
		fontSize: 24,
	},
	srcBarInput: {
		flex: 1,
		fontSize: 18,
		color: Color.baseBlack,
	},
	profile: {
		width: 50,
		height: 50,
		backgroundColor: Color.searchbarBase,
		borderRadius: 30,
		overflow: "hidden",
	},
	profileImg: {
		width: "100%",
		height: "100%",
		color: Color.baseBlack,
		fontSize: 50,
		textAlign: "center",
		textAlignVertical: "center"
	},
});

export default SearchBar;
