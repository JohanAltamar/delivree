import { useEffect, useState } from 'react';
import { useQuery } from './useQuery';
import db from '../services/firebase';
import { developmentLog } from '../services/functions';

export const useOrderInfo = () => {
  const query = useQuery();
  const orderID = query.get('id');
  const [orderInfo, setOrderInfo] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (orderID) {
      const checkOrderNumber = () => {
        db.collection('orders')
          .doc(orderID)
          .onSnapshot(function (doc) {
            developmentLog('Current data: ', doc.data());
            setOrderInfo({ ...doc.data(), id: orderID });
            setLoading(false);
          });
      };
      checkOrderNumber();
    }
  }, [orderID]);

  return { orderInfo, loading, orderID };
};
