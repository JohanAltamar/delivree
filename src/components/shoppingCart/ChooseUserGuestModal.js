import React from 'react';
import { useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  guestCheckoutUser,
  guestCheckoutModalStatus,
  setDeliveryValue,
} from '../../redux/actions';
import { cities, neighborhoods } from '../../helpers/areas';
import { getDeliveryValue } from '../../helpers/getDeliveryValue';
import { useHandleFieldChange } from '../../hooks/useHandleFieldChange';

const ChooseUserGuestModal = (props) => {
  let history = useHistory();

  const dispatch = useDispatch();
  const guestInfo = useSelector((state) => state.user.guestCheckoutInfo);
  const modalStatus = useSelector(
    (state) => state.shoppingCart.guestInfoModalStatus
  );

  useEffect(() => {
    const dispatchDelivery = () => {
      dispatch(
        setDeliveryValue(
          getDeliveryValue(guestInfo.city, guestInfo.neighborhood)
        )
      );
    };
    if (guestInfo.city && guestInfo.neighborhood && modalStatus) {
      dispatchDelivery();
    } else if (!guestInfo.city) {
      dispatch(guestCheckoutUser('city', cities[0]));
    } else if (!guestInfo.neighborhood) {
      dispatch(
        guestCheckoutUser(
          'neighborhood',
          neighborhoods[guestInfo.city][0]['neighborhood']
        )
      );
    }
  }, [guestInfo.neighborhood, guestInfo.city, dispatch, modalStatus]);

  return (
    <Modal
      {...props}
      className="brand-font-family"
      id="guest-checkout-modal"
      centered
    >
      <div
        id="guest-modal-close-button"
        onClick={() => dispatch(guestCheckoutModalStatus(false))}
      >
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <h5 className="text-center pt-4">Datos de envío</h5>
      <Form
        style={{ padding: '20px 8.33%' }}
        onSubmit={() => history.push('/cart/confirmData/guest')}
      >
        <Form.Group>
          <Form.Label>Nombre Completo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Juanito Perez"
            value={guestInfo.fullname}
            onChange={useHandleFieldChange('fullname')}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            type="text"
            placeholder="Calle XX # XX - XX"
            value={guestInfo.address}
            onChange={useHandleFieldChange('address')}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            type="text"
            placeholder="3001231212"
            value={guestInfo.telephone}
            onChange={useHandleFieldChange('telephone')}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Ciudad</Form.Label>
          <Form.Control
            as="select"
            placeholder="Barranquilla"
            value={guestInfo.city}
            onChange={useHandleFieldChange('city')}
            required
          >
            {cities.map((city, idx) => (
              <option key={idx}>{city}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Barrio</Form.Label>
          <Form.Control
            as="select"
            name="neighborhood"
            value={guestInfo.neighborhood}
            onChange={useHandleFieldChange('neighborhood')}
            required
          >
            {neighborhoods[guestInfo.city || cities[0]].map(
              ({ neighborhood }, key) => (
                <option key={key}>{neighborhood}</option>
              )
            )}
          </Form.Control>
        </Form.Group>
        <div id="guest-modal-continue-button">
          <Button variant="warning" type="submit">
            Continuar
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default ChooseUserGuestModal;
