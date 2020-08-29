import { useEffect } from 'react';
import { useState } from 'react';
import { developmentLog } from '../services/functions';
import db from '../services/firebase';
import moment from 'moment';
import 'moment/locale/es';

export const useLoadLatestOrders = (userID) => {
  const [state, setState] = useState({
    recentOrders: [],
    loading: true,
  });

  useEffect(() => {
    let unsubscribe = db
      .collection('orders')
      .where('uid', '==', userID)
      .onSnapshot(function (querySnapshot) {
        let userOrders = [];
        querySnapshot.forEach(function (doc) {
          const orderObj = { ...doc.data(), orderId: doc.id };
          userOrders.push(orderObj);
        });
        userOrders.sort(
          (a, b) =>
            moment(b.timestamp).format('X') - moment(a.timestamp).format('X')
        );
        developmentLog(userOrders);
        setState({ recentOrders: userOrders, loading: false });
      });
    return () => {
      unsubscribe();
    };
  }, [userID]);

  useEffect(() => {
    return () => {
      setState({ recentOrders: [], loading: true });
    };
  }, []);

  return state;
};
