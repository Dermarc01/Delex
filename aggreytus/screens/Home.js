import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';

export default function Home(params) {
  const navigation = params.navigation;
  return (
    <ScrollView
      style={{
        backgroundColor: 'white',
        flex: 1,
        paddingTop: 25,
        paddingHorizontal: 20,
        marginTop: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Ionicons name="ios-menu-outline" size={30} color="#000" />
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#69db7c' }}>
          DELEX
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Ionicons
            style={{ marginLeft: 15 }}
            name="cart-outline"
            size={30}
            color="#000"
          />
        </View>
      </View>

      <Text style={{ marginTop: 18, color: 'grey' }}>
        Discover the world's{' '}
        <Text style={{ color: '#69db7c', fontSize: 20, fontWeight: 'bold' }}>
          Great Artistery
        </Text>{' '}
      </Text>

      <Text
        style={{
          fontWeight: 'boldest',
          marginBottom: 10,
          marginTop: 20,
          fontSize: 20,
        }}>
        Categories
      </Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View
          style={{
            backgroundColor: '#f4f2f2',
            padding: 10,
            paddingHorizontal: 15,
            borderRadius: 12,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('StartScreen');
            }}>
            <Text style={{ color: '#69db7c', fontWeight: 'bold' }}>All</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{ backgroundColor: '#f4f2f2', padding: 10, borderRadius: 12 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Recommend');
            }}>
            <Text style={{ color: '#828080' }}>Tools</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{ backgroundColor: '#f4f2f2', padding: 10, borderRadius: 12 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Analogue');
            }}>
            <Text style={{ color: '#828080' }}>Materials</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{ backgroundColor: '#f4f2f2', padding: 10, borderRadius: 12 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Digital');
            }}>
            <Text style={{ color: '#828080' }}>ArtWorks</Text>
          </TouchableOpacity>
        </View>
      </View>


      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: 10,
          padding: 5,
          marginTop: 3,
        }}>
        <View
          style={{
            borderRadius: 10,
            width: 150,
            height: 'auto',
            backgroundColor: 'rgb(240, 241, 242)',
            marginTop: 3,
            padding: 5,
          }}>
          <View>
            <TouchableOpacity>
              <Image
                style={{
                  width: 130,
                  marginTop: 7,
                  alignSelf: 'center',
                  height: 100,
                  resizeMode: 'stretch',
                }}
                source={require('./pictures/easel1.png')}
              />

              <View
                style={{
                  backgroundColor: 'white',
                  height: 60,
                  margingTop: 10,
                  borderRadius: 15,
                }}>
                <View
                  style={{
                    backgroundColor: 'white',
                    height: 60,
                    margingTop: 10,
                    borderRadius: 15,
                  }}>
                  <Text
                    style={{
                      color: 'rgb(174, 175, 176)',
                      fontWeight: 'bolder',
                      textAlign: 'center',
                    }}>
                    
                    Easel
                  </Text>

                  <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Text style={{ marginLeft: 27 }}>
                      <Text style={{ color: '#69db7c' }}>$ {''}</Text>
                      <Text style={{ color: 'black', fontWeight: 'bolder' }}>
                        7000.00
                      </Text>
                    </Text>
                    <FontAwesome
                      name="chevron-right"
                      size={15}
                      style={{ marginLeft: 20, marginTop: 3 }}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 7,
              backgroundColor: '#69db7c',
              alignSelf: 'center',
              borderRadius: 10,
              paddingVertical: 5,
              paddingHorizontal: 20,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#fff',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                Add to Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            borderRadius: 10,
            width: 150,
            height: 'auto',
            backgroundColor: 'rgb(240, 241, 242)',
            marginTop: 3,
            padding: 5,
          }}>
          <View>
            <TouchableOpacity>
              <Image
                style={{
                  width: 130,
                  marginTop: 7,
                  alignSelf: 'center',
                  height: 100,
                  resizeMode: 'stretch',
                }}
                source={require('./pictures/acrylic4.png')}
              />
              <View
                style={{
                  backgroundColor: 'white',
                  height: 60,
                  margingTop: 10,
                  borderRadius: 15,
                }}>
                <Text
                  style={{
                    color: 'rgb(174, 175, 176)',
                    textAlign: 'center',
                    fontWeight: 'bolder',
                  }}>
                  Acrylic paint
                </Text>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                  <Text style={{ textAlign: 'center', marginLeft: 27 }}>
                    <Text style={{ color: '#69db7c' }}>$ {''}</Text>
                    <Text style={{ color: 'black', fontWeight: 'bolder' }}>
                      1700.00
                    </Text>
                  </Text>
                  <FontAwesome
                    name="chevron-right"
                    size={15}
                    style={{ marginLeft: 20, marginTop: 3 }}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 7,
              backgroundColor: '#69db7c',
              alignSelf: 'center',
              borderRadius: 10,
              paddingVertical: 5,
              paddingHorizontal: 20,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#fff',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                Add to Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>



      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: 10,
          padding: 5,
          marginTop: 3,
        }}>
        <View
          style={{
            borderRadius: 10,
            width: 150,
            height: 'auto',
            backgroundColor: 'rgb(240, 241, 242)',
            marginTop: 3,
            padding: 5,
          }}>
          <View>
            <TouchableOpacity>
              <Image
                style={{
                  width: 130,
                  marginTop: 7,
                  alignSelf: 'center',
                  height: 100,
                  resizeMode: 'stretch',
                }}
                source={require('./pictures/water-colour1.png')}
              />

              <View
                style={{
                  backgroundColor: 'white',
                  height: 60,
                  margingTop: 10,
                  borderRadius: 15,
                }}>
                <View
                  style={{
                    backgroundColor: 'white',
                    height: 60,
                    margingTop: 10,
                    borderRadius: 15,
                  }}>
                  <Text
                    style={{
                      color: 'rgb(174, 175, 176)',
                      fontWeight: 'bolder',
                      textAlign: 'center',
                    }}>
                   Water colour
                  </Text>

                  <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Text style={{ marginLeft: 27 }}>
                      <Text style={{ color: '#69db7c' }}>$ {''}</Text>
                      <Text style={{ color: 'black', fontWeight: 'bolder' }}>
                        7000.00
                      </Text>
                    </Text>
                    <FontAwesome
                      name="chevron-right"
                      size={15}
                      style={{ marginLeft: 20, marginTop: 3 }}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 7,
              backgroundColor: '#69db7c',
              alignSelf: 'center',
              borderRadius: 10,
              paddingVertical: 5,
              paddingHorizontal: 20,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#fff',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                Add to Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            borderRadius: 10,
            width: 150,
            height: 'auto',
            backgroundColor: 'rgb(240, 241, 242)',
            marginTop: 3,
            padding: 5,
          }}>
          <View>
            <TouchableOpacity>
              <Image
                style={{
                  width: 130,
                  marginTop: 7,
                  alignSelf: 'center',
                  height: 100,
                  resizeMode: 'stretch',
                }}
                source={require('./pictures/brushes4.jpg')}
              />
              <View
                style={{
                  backgroundColor: 'white',
                  height: 60,
                  margingTop: 10,
                  borderRadius: 15,
                }}>
                <Text
                  style={{
                    color: 'rgb(174, 175, 176)',
                    textAlign: 'center',
                    fontWeight: 'bolder',
                  }}>
                 Brushes
                </Text>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                  <Text style={{ textAlign: 'center', marginLeft: 27 }}>
                    <Text style={{ color: '#69db7c' }}>$ {''}</Text>
                    <Text style={{ color: 'black', fontWeight: 'bolder' }}>
                      1700.00
                    </Text>
                  </Text>
                  <FontAwesome
                    name="chevron-right"
                    size={15}
                    style={{ marginLeft: 20, marginTop: 3 }}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 7,
              backgroundColor: '#69db7c',
              alignSelf: 'center',
              borderRadius: 10,
              paddingVertical: 5,
              paddingHorizontal: 20,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#fff',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                Add to Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>



    <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: 10,
          padding: 5,
          marginTop: 3,
        }}>
        <View
          style={{
            borderRadius: 10,
            width: 150,
            height: 'auto',
            backgroundColor: 'rgb(240, 241, 242)',
            marginTop: 3,
            padding: 5,
          }}>
          <View>
            <TouchableOpacity>
              <Image
                style={{
                  width: 130,
                  marginTop: 7,
                  alignSelf: 'center',
                  height: 100,
                  resizeMode: 'stretch',
                }}
                source={require('./pictures/crayons2.png')}
              />

              <View
                style={{
                  backgroundColor: 'white',
                  height: 60,
                  margingTop: 10,
                  borderRadius: 15,
                }}>
                <View
                  style={{
                    backgroundColor: 'white',
                    height: 60,
                    margingTop: 10,
                    borderRadius: 15,
                  }}>
                  <Text
                    style={{
                      color: 'rgb(174, 175, 176)',
                      fontWeight: 'bolder',
                      textAlign: 'center',
                    }}>
                    Crayons
                  </Text>

                  <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Text style={{ marginLeft: 27 }}>
                      <Text style={{ color: '#69db7c' }}>$ {''}</Text>
                      <Text style={{ color: 'black', fontWeight: 'bolder' }}>
                        7000.00
                      </Text>
                    </Text>
                    <FontAwesome
                      name="chevron-right"
                      size={15}
                      style={{ marginLeft: 20, marginTop: 3 }}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 7,
              backgroundColor: '#69db7c',
              alignSelf: 'center',
              borderRadius: 10,
              paddingVertical: 5,
              paddingHorizontal: 20,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#fff',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                Add to Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            borderRadius: 10,
            width: 150,
            height: 'auto',
            backgroundColor: 'rgb(240, 241, 242)',
            marginTop: 3,
            padding: 5,
          }}>
          <View>
            <TouchableOpacity>
              <Image
                style={{
                  width: 130,
                  marginTop: 7,
                  alignSelf: 'center',
                  height: 100,
                  resizeMode: 'stretch',
                }}
                source={require('./pictures/painting4.jpg')}
              />

                <View
                style={{
                  backgroundColor: 'white',
                  height: 60,
                  margingTop: 10,
                  borderRadius: 15,
                }}>
                <Text
                  style={{
                    color: 'rgb(174, 175, 176)',
                    textAlign: 'center',
                    fontWeight: 'bolder',
                  }}>
                 Acrylic painting
                </Text>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                  <Text style={{ textAlign: 'center', marginLeft: 27 }}>
                    <Text style={{ color: '#69db7c' }}>$ {''}</Text>
                    <Text style={{ color: 'black', fontWeight: 'bolder' }}>
                      1700.00
                    </Text>
                  </Text>
                  <FontAwesome
                    name="chevron-right"
                    size={15}
                    style={{ marginLeft: 20, marginTop: 3 }}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 7,
              backgroundColor: '#69db7c',
              alignSelf: 'center',
              borderRadius: 10,
              paddingVertical: 5,
              paddingHorizontal: 20,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#fff',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                Add to Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
</ScrollView>
  );
}

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgb(240, 241, 242)',
    borderRadius: 10,
    padding: 5,
    marginTop: 15,
  },
});
