import React, { useState } from 'react';
import { FlatList, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import ImageItem from './ImageItem';


const { width: screenWidth } = Dimensions.get('window');
const itemWidth = screenWidth / 3; // Assuming 3 columns
const HomeScreen = () => {
  const [data] = useState([
    { image: 'https://simp6.jpg5.su/images3/2023-04-06_aliya__kiss---Cqsx2a-SGeA-1_of_15b9f4c4e7c5e9688.jpg', name: 'Aliya Kiss', link: 'https://simpcity.su/threads/aliya_kiss-aliya-kiss.64145/latest' },
    { image: 'https://simp6.jpg5.su/images3/2024-07-27_3024x4032_10b47e0bb5ebc5d384eb2fc4943ef2f5b1fba1bbe328e813.jpg', name: 'Hannah Palmer', link: 'https://simpcity.su/threads/hannah-palmer.12655/latest' },
    { image: 'https://img97.pixhost.to/images/442/502855054_9.png', name: 'Solomia maievska', link: 'https://simpcity.su/threads/solomia-maievska.9464/latest' },
    { image: 'https://simp6.jpg5.su/images3/3024x4032_38a23aeebb18644e6bf3e816aad7cee8a69fb5442aaf56e8.jpg', name: 'Jezzi Xo', link: 'https://simpcity.su/threads/babyjey-jezzi-xo.10291/latest' },
    { image: 'https://simp6.jpg5.su/images/IMG_2865ba888ac490fce5fb.jpg', name: 'jfhailey', link: 'https://simpcity.su/threads/jfhailey.71888/latest' },
    { image: 'https://simp6.jpg5.su/images3/3024x4032_dbecbd3557e8f77517fa0dc05bcb27495043552f6850dc86.jpg', name: 'Natalie Roush', link: 'https://simpcity.su/threads/natalie-roush.9949/latest' },
    { image: 'https://simp6.jpg5.su/images3/GZawTsGXEAAUG-Q495fd3dd47904710.jpg', name: 'JadeyAnh | vylerria', link: 'https://simpcity.su/threads/jadeyanh-vylerria.10065/latest' },
    { image: '', name: '', link: 'https://saint2.pk/embed/9f_3H58rIyG', type: 'video' },
    { image: '', name: '', link: '' },
    { image: '', name: '', link: '' },
    { image: '', name: '', link: '' },

  ]);

  return (
      <FlatList
        data={data}
        renderItem={({ item }) => <ImageItem item={item} />}
        numColumns={3}
        keyExtractor={(item) => item.image}
        contentContainerStyle={{ padding: 5 }} // Added content padding
      />
    );
  };

export default HomeScreen;