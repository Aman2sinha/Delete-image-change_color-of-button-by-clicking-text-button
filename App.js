import React, { Component } from 'react';
import { View, Text, Image,TouchableOpacity, SafeAreaView,StyleSheet,Button  } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Card } from 'react-native-elements';
const styles = StyleSheet.create({
   
  stretch: {
    width: 500,
    margin:10,
    padding:15,
    height: 150,
    resizeMode: 'stretch',
    
  },

  RectangleShapeView: {

   marginTop: 20,
   justifyContent: 'center',
   width: 150 * 2,
   height: 60,
   margin:10,
    padding:15,
   borderWidth: 2,
   borderColor: 'white',
   borderRadius: 10 ,
   alignItems: 'center',
   backgroundColor: 'blue', 
   color:'white',
  }
});
 
export default class Sample extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = {
            show: true,
            backgroundColor: 'red',
        }
        
    }
    onClick() {
      console.log("clicked ");
      this.setState({ backgroundColor: 'green' }); 
  }
    // Press Control Display/Hide Menu
    _onPressListItem() {
        this.setState((previousState) => {
            return ({
                show: !previousState.show,
            })
        });
    }

    render() {
        let v = this. state. show? <Image  
        style={{width: 370, height: 90,margin:20,}}
        source={require('./assets/Banner.png')}
      />: null; //menu
        return (
          <View style={{ flex: 1, backgroundColor:'grey' }}>
                <TouchableOpacity onPress={() => this._onPressListItem()}>
                    <View>
                    < Text >  </Text >
                    <Icon name="closecircle" size={40} style={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }} />
                       < Text >  </Text >
                    </View>
                </TouchableOpacity>
                
                {v}
                
              {/* <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' color:'blue'}} onPress={onPress}>
                 <Text style={styles.RectangleShapeView}>1. Welcome Back </Text> 
              </TouchableOpacity> */}
              <TouchableOpacity   onPress={this.onClick} style={{ alignItems: 'center', justifyContent: 'center',Color: 'green',}}>
                 <Text style={styles.RectangleShapeView}>1. Welcome Back </Text> 
              </TouchableOpacity>
              <TouchableOpacity onPress={this.onClick}  style={{ alignItems: 'center', justifyContent: 'center',Color: 'green',}}>
                 <Text style={styles.RectangleShapeView}>2. Reset Things is Happem. </Text> 
              </TouchableOpacity>

              <TouchableOpacity onPress={this.onClick}  style={{ alignItems: 'center', justifyContent: 'center',}}>
                 <Text style={styles.RectangleShapeView}>3. Something is Happem. </Text> 
              </TouchableOpacity>
             <Text> </Text>
              <TouchableOpacity style={[
                    styles.container,
                    { backgroundColor: this.state.backgroundColor, justifyContent: 'center',alignItems: 'center',width: 410,height:50,},
                ]}>
                 <Text style={{color:'white'}}>SUBMIT Button </Text> 
              </TouchableOpacity>
              
            </View>
        
        
        )
    }
  };