import React, {useEffect} from 'react';
import { View, Text} from 'react-native';

import SystemSetting from 'react-native-system-setting'


const ScreenTwo = ({navigation}) => {
    useEffect(() => {
        SystemSetting.setVolume(0.40);
        SystemSetting.addVolumeListener((data) => {
          const volume = data.value;
          console.log('Volume lvl: ' + volume);
          if (volume < 0.5 ) {
              navigation.navigate('Ecran 1')
          } 
        });
    
      }, []);
    

    return (
        <View style={{backgroundColor: 'crimson', flex: 1, justifyContent:'center'}}>
            <Text style={{textAlign:'center', fontSize:24, color:'white'}}>Ecran 2</Text>
        </View>
    )

}

export default ScreenTwo;
