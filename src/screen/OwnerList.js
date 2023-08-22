import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, RefreshControl} from 'react-native';
import InitilalName from '../components/InitilalName';
import FilterContainer from '../components/FilterContainer';
import CardList from '../components/CardList';
import {normalize} from '../responsive/responsive';
import axios from 'axios';
import {URL} from '@env';
import {updateTokenReducer} from '../reducers/tokenReducer';
import {updateMasterReducer} from '../reducers/masterReducer';
import {useDispatch, useSelector} from 'react-redux';

export default function OwnerList() {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);

  const token = useSelector(s => s.tokenReducer);
  const dataMaster = useSelector(s => s.masterReducer.value);
  const filterby = useSelector(s => s.filterReducer.value);

  const [masterData, setMasterData] = useState([]);

  const loginfunc = async () => {
    const data = {
      username: 'yourname',
      password: 'yourpassword',
    };
   
      try {
        const response = await axios.post(`${URL}/auth/login`, data);
        // console.log("Response:", response.data.token);
        dispatch(updateTokenReducer(response.data.token));
      } catch (error) {
        console.error('Error:', error);
      }
  };

  const getMaster = async () => {
    setRefreshing(true);
    try {
      const response = await axios.get(`${URL}/master`, {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      });
      console.log(response.data);
      setRefreshing(false);
      dispatch(updateMasterReducer(response.data));
    } catch (error) {
      setRefreshing(false);
      dispatch(updateMasterReducer([]));
      console.error('Error fetching data:', error);
    }
  };

  const editFav = async (id, firstname, lastname, desc, fav) => {
    const data = {
      firstName: firstname,
      lastName: lastname,
      description: desc,
      favorites: fav == false ? true : false,
    };
    console.log(data);
    try {
      const response = await axios.patch(`${URL}/master/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      });
      console.log('Response:', response.data);
      getMaster();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const sortByName = () => {
    const sortedData = [...dataMaster].sort((a, b) => {
      if (a.firstName && b.firstName) {
        return a.firstName.localeCompare(b.firstName);
      }
      return 0;
    });
    setMasterData(sortedData);
  };

  const sortById = () => {
    const sortedData = [...dataMaster].sort((a, b) => a.id - b.id);
    setMasterData(sortedData);
  };

  useEffect(() => {
    if (token.value === '') {
      loginfunc();
    }
    getMaster();
  }, []);

  useEffect(() => {
    console.log('filtered', filterby);
    if (filterby === 'Name') {
      sortByName();
    } else {
      sortById();
    }
  }, [filterby]);
  return (
    <View style={{flex: 1}}>
      <InitilalName />
      <FilterContainer />
      <View style={{alignItems: 'center', marginTop: normalize(30)}}>
        <ScrollView
        style={{height:normalize(400)}}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => getMaster()}
            />
          }>
          {masterData.map(item => {
            return (
              <CardList
                key={item.id}
                name={` ${item.firstName} ${item.lastName}`}
                fav={item.favorites}
                id={item.id}
                onPress={() =>
                  editFav(
                    item.id,
                    item.firstName,
                    item.lastName,
                    item.description,
                    item.favorites,
                  )
                }
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}
