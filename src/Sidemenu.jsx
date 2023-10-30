import { createElement, useState, useEffect } from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import MenuDrawer from "react-native-side-drawer";
import { useSwipe } from "./components/useSwipe";
const { height: windowHeight, width: windowWidth } = Dimensions.get("window");

export function Sidemenu({
    isOpen,
    content,
    closeDrawer,
    menuPosition,
    drawerPercentage,
    animationTime,
    DrawerColor,
    overlayColor
}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // useSwipe hook to determine if the drawer swipe to close.
    const { onTouchStart, onTouchEnd } = useSwipe(onSwipeLeft, onSwipeRight, 6);

    function onSwipeLeft() {
        if (menuPosition === "left") onClickOverlayOrSwipe();
    }

    function onSwipeRight() {
        if (menuPosition === "right") onClickOverlayOrSwipe();
    }

    /**
     * Action will be triggered when clicking the overlay or swipe the drawer
     */
    const onClickOverlayOrSwipe = () => {
        closeDrawer?.canExecute && closeDrawer.execute();
    };

    /**
     *
     * @returns {React native component} the drawer and its content
     */
    const drawerContent = () => (
        <View
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            style={{ ...styles.animatedBox, backgroundColor: DrawerColor ? DrawerColor : "#edf3f6" }}
        >
            <ScrollView>{content}</ScrollView>
        </View>
    );

    /**
     * Validate the numerics values before setting in the drawer properties
     *
     * @param {number} value - the actual value
     * @param {number} min - the maximum allowed value
     * @param {number} max - the minimum allowed value
     * @returns {number} - the final value after validation
     */
    const validateValue = (value, min, max) => (value < min ? min : value > max ? max : value);

    useEffect(() => {
        if (isOpen.status === "available") {
            setIsMenuOpen(isOpen.value);
        }
    }, [isOpen]);

    return (
        <View
            style={{
                ...styles.container,
                height: isMenuOpen ? windowHeight : "auto",
                width: isMenuOpen ? windowWidth : "auto",
                right: menuPosition === "right" ? 0 : "auto",
                left: menuPosition === "left" ? 0 : "auto",
                backgroundColor: isMenuOpen ? (overlayColor ? overlayColor : "#00000080") : "transparent"
            }}
        >
            <MenuDrawer
                open={isMenuOpen}
                position={menuPosition}
                drawerContent={drawerContent()}
                drawerPercentage={validateValue(drawerPercentage, 10, 100)}
                animationTime={animationTime < 0 ? 0 : animationTime}
                overlay={true}
            >
                <TouchableOpacity
                    onPress={onClickOverlayOrSwipe}
                    style={{
                        height: isMenuOpen ? windowHeight : "auto",
                        width: isMenuOpen ? windowWidth : "auto"
                    }}
                ></TouchableOpacity>
            </MenuDrawer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "baseline",
        position: "absolute",
        top: 0,
        zIndex: 10000
    },
    animatedBox: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 0,
        margin: 0,
        height: windowHeight
    }
});
