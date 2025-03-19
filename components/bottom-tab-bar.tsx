import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import Color from "./../constants/color";

interface TabBarPropType extends BottomTabBarProps {
	isVisible: boolean;	
};

const TabBar: React.FC<TabBarPropType> = ({ state, descriptors, navigation, isVisible }) => {
	if(isVisible) return null;

	return (
		<View style={styles.tabBar}>
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key];
				const label = options.title || route.name;
				const isFocused = state.index === index;

				const onPress = () => {
					if (!isFocused) {
						navigation.navigate(route.name);
					}
				};

				const iconName = {
					Home: "home",
					Medicine: "medication",
					BloodDonation: "bloodtype",
				}[route.name];
				return (
					<TouchableOpacity 
						key={route.name} 
						onPress={onPress} 
						style={styles.tabButton}
					>
						<MaterialIcons 
							name={iconName} 
							size={isFocused ? 50 : 31.25} 
							color={isFocused ? Color.baseGreen80DTint : Color.baseGreen50DTint}
						/>
					</TouchableOpacity>
				);
			})}
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	tabBar: {
		height: 60,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		borderTopRightRadius: 30,
		borderTopLeftRadius: 30,
		position: "absolute",
		inset: 0,
		top: "auto",
		zIndex: 9,
		backgroundColor: Color.baseGreen,
		borderTopColor: "#ddd",
	},
	tabButton: {
		height: 50,
		width: 50,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default TabBar;
