import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Color from "./../constants/color";

type MenuItemPropType = {
    icon: string;
    text: string;
    underline?: boolean;
    onPress?: () => {};
}
const defaultProps: MenuItemPropType = {
    icon: "home",
    text: "Home",
    underline: true,
}
const MenuItem = (props: MenuItemPropType) => {
    const MenuItemProps = { ...defaultProps, ...props };
    const { icon, text, underline, onPress } = MenuItemProps;

    return (
        <>
            <TouchableOpacity style={menuItemStyles.mainCont} onPress={onPress}>
                <FontAwesome5 name={icon} style={menuItemStyles.icon} />
                <Text style={menuItemStyles.text}>{text}</Text>
            </TouchableOpacity>
            <View style={[
                menuItemStyles.line,
                { height: underline ? 2 : 0 }
            ]} />
        </>
    );
};

const menuItemStyles = StyleSheet.create({
    mainCont: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        height: 30,
        width: 30,
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 20,
    },
    text: {
        fontSize: 16,
        fontWeight: 500,
        marginLeft: 10,
    },
    line: {
        width: "85%",
        marginHorizontal: "auto",
        backgroundColor: Color.baseWhite10Tint,
    }
});

export default MenuItem;