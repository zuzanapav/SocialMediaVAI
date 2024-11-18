import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import UserProfileImage from './UserProfileImage';
import styles from './styles'; // Importing styles from styles.js

const UserProfile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Placeholder for back button or options */}
        <TouchableOpacity style={styles.optionsButton}>
          {/* Icon can be inserted here */}
        </TouchableOpacity>
      </View>
      <View style={styles.profileContainer}>
        {/* Using the UserProfileImage component */}
        <UserProfileImage
          imageDimensions={80} // Size of the profile picture
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
    </View>
  );
};

export default UserProfile;
