import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
    const navigation = useNavigation();
  const [profileImage, setProfileImage] = useState(null);

  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    purchasedCourses: [
      {
        id: 'course1',
        title: 'Course 1',
        description: 'Description of Course 1',
        // Add other course details as needed
      },
      {
        id: 'course2',
        title: 'Course 2',
        description: 'Description of Course 2',
        // Add other course details as needed
      },
      // Add more purchased courses here...
    ],

  };

  const handleSelectImage = () => {
    const options = {
      title: 'Select Profile Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        // User cancelled the image picker
      } else if (response.error) {
        // Error occurred while selecting/capturing the image
      } else {
        // Set the selected/captured image as the profileImage state
        setProfileImage({ uri: response.uri });
      }
    });
  };
  const handleLogout = () => {
navigation.navigate('LoginScreen');
  };

  const handlePurchase = () => {
    navigation.navigate('PurchaseScreen');
      };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSelectImage}>
        {profileImage ? (
          <Image source={profileImage} style={styles.profileImage} />
        ) : (
          <View style={styles.profileImagePlaceholder}>
            <Text style={styles.profileImagePlaceholderText}>Select Image</Text>
          </View>
        )}
      </TouchableOpacity>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
      <TouchableOpacity style={styles.logoutButton} onPress={handlePurchase}>
        <Text style={styles.logoutButtonText}>purchased Course</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  profileImagePlaceholder: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImagePlaceholderText: {
    fontSize: 18,
    color: 'white',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 18,
    marginBottom: 20,
  },
  notificationButton: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  notificationButtonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#dc3545',
    padding: 12,
    borderRadius: 8,
  },
  logoutButtonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
