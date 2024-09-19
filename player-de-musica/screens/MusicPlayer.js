import React from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView, 
  StyleSheet,
  Text,
  TouchableOpacity,
  View 
} from 'react-native'
import Slider from '@react-native-community/slider'
import { Ionicons } from '@expo/vector-icons'
import songs from '.../model/data'

const { width, height } = Dimensions.get('window')

const MusicPlayer = () => {

    const renderSongs = ({ item, index }) => {
      return (
        <view style={styles.mainImageWrapper}>
          <View style={[styles.ImageWrapper, styles.elevation]}>
            <Image
            source={item.artwork}
            style={styles.musicImage}
            />
          </View>
        </view>
      )
    }
      
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.main}>
        
        <FlatList
          renderItem={renderSongs}
          data={songs}
          keyExtractor={item => item.id}
          horizontal
          pagingEnabled
          showHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={() => { }}
        />

        <View>
          <Text style={[styles.songContent, styles.songTitle]}>
            Titulo da Musica
          </Text>
          <Text style={[styles.songContent, songArtist]}>
            Autor da Musica
          </Text>
        </View>

        <View>
          <Slider
            style={styles.progressBar}
            value={10}
            minimunValue={0}
            maximunValue={100}
            thumbTintColor='#FFd369'
            minimunTrackTintColor='#FFD369'
            maximunTrackTintColor={() => {}}
        </View>  
      </SafeAreaView>   
    

        
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      </View>
      <View style={styles.footer}>
        <View style={styles.iconWrapper}>
          <TouchableOpacity>
            <Ionicons name='heart-outline' size={30} color='#888888'/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name='repeat' size={30} color='#888888'/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name='share-outline' size={30} color='#888888'/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name='ellipsis-horizontal' size={30} color='#888888'/>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style='light' />
    </SafeAreaView>
  )
}

export default MusicPlayer

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#222831',

  },

  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  footer: {
    width: width,
    alignItems: 'center',
    paddingVertical: 15,
    borderTopColor: '#393E45',
    borderWidth: 1
  },

  iconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%'
  },
})