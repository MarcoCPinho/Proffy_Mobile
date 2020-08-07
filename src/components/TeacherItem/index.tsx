import React from 'react';
import { View, Image, Text } from 'react-native';

import PageHeader from '../PageHeader';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import heartOutlineeIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

function TeacherItem() {
    return (
    <View style={styles.container}>
       <View style={styles.profile} >
            <Image 
            style={styles.avatar}
            source={{ uri: 'https://avatars0.githubusercontent.com/u/68476808?s=460&u=e46db5c112259f8f91aebb0a9732b6e492e9af59&v=4'}}
            />

            <View style={styles.profileInfo}>
                <Text style={styles.name}>Marco Carvalho de Pinho</Text>
                <Text style={styles.subject}>Química</Text>
            </View>
       </View>

       <Text style={styles.bio}>
            Aprendendo a desenvolver em React Native.
            {'\n'}{'\n'}
            Este APP já encontra-se disponível na web.
       </Text>

       <View style={styles.footer}>
           <Text style={styles.price}>
               Preço/hora {'   '}
               <Text style={styles.priceValue}>R$ 20,00</Text>
           </Text>

           <View style={styles.buttonsContainer}>
               <RectButton style={[styles.favoriteButton, styles.favorited]}>
                   {/*<Image source={heartOutlineeIcon}/>*/}
                   <Image source={unfavoriteIcon}/>
               </RectButton>

               <RectButton style={styles.contactButton}>
                   <Image source={whatsappIcon}/>
                   <Text style={styles.contactButtonText}>Entrar em contato</Text>
               </RectButton>
           </View>
       </View>
    </View>
    )
}

export default TeacherItem