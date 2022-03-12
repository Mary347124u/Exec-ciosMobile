import React from 'react';
import {View, Text, Image} from 'react-native';

export default function Home (){
  return(
    <View style={{flex:1, flexDirection: 'column'}}>
        
      <View style={{flex:1, backgroundColor:'pink'}}>
      </View>  
    
        <View style={{flex:3, backgroundColor:'pink', flexDirection: 'column'}}>
          
            <View style={{flex:1, backgroundColor:'', flexDirection: 'row'}}>


                  <View style={{flex:2, backgroundColor:'pink', flexDirection: 'column', height:200,width:10}}>
                      </View>

                  <View style={{flex:2, backgroundColor:'green', flexDirection: 'column', height:150,width:10}}>
                    </View>
                  
                  <View style={{flex:2, backgroundColor:'white', flexDirection: 'column', height:150,width:10}}>       
                    </View>
                  
                  <View style={{flex:2, backgroundColor:'red', flexDirection: 'column', height:150,width:10}}>       
                    </View> 

                  <View style={{flex:2, backgroundColor:'pink', flexDirection: 'column', height:150,width:10}}>
                    </View>

                  

            </View>
              <View style={{flex:1, backgroundColor:'', flexDirection: 'row', justifyContent:'center'}}> 
          <Image style={{height: 150,width:200, alignSelf: "center"}}
           source={{uri:'https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg'}}/>
             </View>
        </View>
       
       

    </View>  
  );
}