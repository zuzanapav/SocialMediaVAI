import React from "react";
import { SafeAreaView,View, Text, Touchable, TouchableOpacity,Image } from "react-native";
import globalStyle from "../../assets/styles/globalStyle";
import styles from './style';

const Profile = ({ navigation }) => {
    return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Text style={styles.backButtonText}>←</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.profileContainer}>
                <Image
                    source={require("../../assets/images/default_profile.png")} // Placeholder image
                    style={styles.profileImage}
                />

                <Text style={styles.userName}>Emmanuel Robertsen</Text>
                <View style={styles.statsContainer}>
                    <View style={styles.stat}>
                        <Text style={styles.statValue}>45</Text>
                        <Text style={styles.statLabel}>Following</Text>
                    </View>
                    <View style={styles.stat}>
                        <Text style={styles.statValue}>30M</Text>
                        <Text style={styles.statLabel}>Followers</Text>
                    </View>
                    <View style={styles.stat}>
                        <Text style={styles.statValue}>100</Text>
                        <Text style={styles.statLabel}>Posts</Text>
                    </View>
                </View>
            </View>

            <View style={styles.tabsContainer}>
                <Text style={styles.activeTab}>Photos</Text>
                <Text style={styles.inactiveTab}>Videos</Text>
                <Text style={styles.inactiveTab}>Saved</Text>
            </View>

            <View style={styles.photosContainer}>
                <View style={styles.photoPlaceholder} />
                <View style={styles.photoPlaceholder} />
                <View style={styles.photoPlaceholder} />
                <View style={styles.photoPlaceholder} />
            </View>
        </SafeAreaView>
    );
};

export default Profile;