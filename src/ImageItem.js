import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, Linking, Dimensions, StyleSheet, Modal } from 'react-native';
import ImageView from 'react-native-image-zoom-viewer';

const { width: screenWidth } = Dimensions.get('window');
const itemWidth = (screenWidth - 20) / 3; // Adjust for margins

const ImageItem = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false); // Move isModalVisible inside the component

  const handlePressIn = () => {
    setIsHovered(true);
  };

  const handlePressOut = () => {
    setIsHovered(false);
  };

  const handleImagePress = () => {
    setIsModalVisible(true);
  };

  const shadowStyle = isHovered ? styles.shadow : {};

  return (
    <View style={{ width: itemWidth, margin: 2 }}>
      <TouchableOpacity onPress={handleImagePress} style={{ width: '100%', height: itemWidth }}>
        <Image
          source={{ uri: item.image }}
          style={[{ width: '100%', height: '100%', resizeMode: 'cover' }, shadowStyle]}
        />
      </TouchableOpacity>
      <Text style={{ textAlign: 'center' }}>{item.name}</Text>
      <TouchableOpacity onPress={() => Linking.openURL(item.link)} style={{ alignItems: 'center' }}>
        <Text>Link</Text>
      </TouchableOpacity>
      <Modal visible={isModalVisible} transparent={true} onRequestClose={() => setIsModalVisible(false)}>
        <ImageView imageUrls={[{ url: item.image }]} enableSwipeDown={true} onSwipeDown={() => setIsModalVisible(false)} />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#F70D1A',
    shadowOffset: { width: 5, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 15, // For Android shadow
  },
});

export default ImageItem;