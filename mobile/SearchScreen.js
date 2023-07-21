import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View,TextInput,TouchableOpacity,ScrollView,FlatList} from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import { Feather } from '@expo/vector-icons';

const courses = [
    {
      id: 1,
      courseName: 'Introduction to React Native',
      description: 'Learn the basics of React Native development',
      rating: 4.5,
      price: '$49.99',
    },
    {
      id: 2,
      courseName: 'JavaScript Fundamentals',
      description: 'Master JavaScript fundamentals for web development',
      rating: 4.8,
      price: '$29.99',
    },
    {
        id: 3,
        courseName: 'Introduction to React Native',
        description: 'Learn the basics of React Native development',
        rating: 4.5,
        price: '$49.99',
      },
      {
        id: 4,
        courseName: 'JavaScript Fundamentals',
        description: 'Master JavaScript fundamentals for web development',
        rating: 4.8,
        price: '$29.99',
      },
      {
        id: 5,
        courseName: 'Introduction to React Native',
        description: 'Learn the basics of React Native development',
        rating: 4.5,
        price: '$49.99',
      },
]
const items = [
  
  {id: 1, name: 'angellist'},
  {id: 2, name: 'codepen'},
  {id: 3, name: 'envelope'},
  {id: 4, name: 'etsy'},
  {id: 5, name: 'facebook'},
  {id: 6, name: 'foursquare'},
  {id: 7, name: 'github-alt'},
  {id: 8, name: 'github'},
  {id: 9, name: 'gitlab'},
  {id: 10, name: 'instagram'},
];

const SearchScreen = () => {
  
  const [selectedItems, setSelectedItems] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('option1');
  const onSelectedItemsChange = (selectedItems) => {
  
    setSelectedItems(selectedItems);
  };

  useEffect(() => {
    
  }, []);

  const handleSearch = () => {
    onSearch(searchText, selectedFilter);
  };

  const handleFilterChange = (itemValue) => {
    setSelectedFilter(itemValue);
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.courseItem}
      onPress={() => navigation.navigate('CourseDetails', { course: item })}
    >
      <Text style={styles.courseName}>{item.courseName}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.rating}>Rating: {item.rating}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
          <Feather name="search" size={24} color="black" />
        </TouchableOpacity>
      
      </View>
        <View style={{flexDirection:'column',marginBottom:10,marginLeft:5,marginRight:5}}>
        <MultiSelect
          hideTags
          items={items}
          uniqueKey="id"
          onSelectedItemsChange={onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText="Select environment"
          searchInputPlaceholderText="Search Items..."
          onChangeInput={(text) => console.log(text)}
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{color: '#CCC'}}
          submitButtonColor="#48d22b"
          submitButtonText="Submit"
        />
        <MultiSelect
          hideTags
          items={items}
          uniqueKey="id"
          onSelectedItemsChange={onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText="Select Level"
          searchInputPlaceholderText="Search Items..."
          onChangeInput={(text) => console.log(text)}
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{color: '#CCC'}}
          submitButtonColor="#48d22b"
          submitButtonText="Submit"
        />
        <MultiSelect
          hideTags
          items={items}
          uniqueKey="id"
          onSelectedItemsChange={onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText="Select language"
          searchInputPlaceholderText="Search Items..."
          onChangeInput={(text) => console.log(text)}
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{color: '#CCC'}}
          submitButtonColor="#48d22b"
          submitButtonText="Submit"
          borderColor='black'
        />
        </View>
      </View>
      <ScrollView>
      <View style={styles.container}>
        <FlatList
          data={courses}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 20,
  },
  titleText: {
    padding: 8,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  headingText: {
    padding: 8,
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginBottom: 10,
    marginLeft:5,
    marginRight:5,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    fontSize: 16,
  },
  searchButton: {
    padding: 8,
  },
  dropdownContainer: {
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  dropdownPicker: {
    height: 50,
  },
  courseItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  courseName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#444',
  },
  rating: {
    fontSize: 14,
    color: '#888',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  }
});