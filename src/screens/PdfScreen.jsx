import React, { useState } from "react";
import Pdf from 'react-native-pdf'
import { StyleSheet, Dimensions } from "react-native";
import { API_BASEURL } from "../data/baseurl";
import { Box, Heading, HStack, Icon, IconButton, Text, useToast } from "native-base";
import { Colors } from "../constants/colors";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Share from 'react-native-share'

const ShareButton = ({ onPress }) => (
  <IconButton borderRadius='full' icon={<Icon as={<MaterialIcons name='share' />} />} mr={3} _icon={{color: Colors.white}} _pressed={{
    bgColor: Colors.secondary
  }} onPress={onPress} />
)

const BackButton = ({ onPress }) => (
  <IconButton borderRadius='full' icon={<Icon as={<MaterialIcons name='arrow-back' />} />} mr={3} _icon={{color: Colors.white}} _pressed={{
    bgColor: Colors.secondary
  }} onPress={onPress} />
)

const PdfScreen = ({route, navigation}) => {
  const { uuid } = route.params
  
  const [downloadedFile, setDownloadedFile] = useState(null)
  
  const toast = useToast()
  
  const handleShare = async () => {
    toast.show({
      title: 'share initiated'
    })
    try {
      const result = await Share.open({
        url: 'file:///' + downloadedFile,
        title: 'Share PDF',
        type: 'application/pdf',
        message: 'Attached is the PAP profile from PIPS',
        subject: '[PIPS] PAP Profile'
      })
      
      console.log(result)
    } catch (error) {
      console.log(error)
      toast.show({
        title: error.message
      });
    }
  }
  
  const handleBack = () => navigation.goBack()
  
  return (
    <Box style={styles.container}>
      <HStack alignItems='center' justifyContent='space-between' w='full' bgColor={Colors.secondary}>
        <BackButton onPress={handleBack} />
        
        <Text fontSize='lg' fontWeight='bold' color={Colors.white}>Project Details</Text>
        
        <ShareButton onPress={handleShare} />
      </HStack>
      
      <Pdf
        trustAllCerts={false}
        source={{ uri: API_BASEURL + '/api/generate-pdf/' + uuid, cache: true }}
        onLoadComplete={(numberOfPages,filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
          console.log(`filePath: `, filePath);
          setDownloadedFile(filePath)
        }}
        onPageChanged={(page,numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={(error) => {
          console.log(error);
        }}
        onPressLink={(uri) => {
          console.log(`Link pressed: ${uri}`);
        }}
        fitWidth={true}
        style={styles.pdf} />
    </Box>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.lightGray
    // marginTop: 10
  },
  pdf: {
    flex: 1,
    paddingTop: 10,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: Colors.lightGray
  }
})

export default PdfScreen
