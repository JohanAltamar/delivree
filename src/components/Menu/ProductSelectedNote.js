import React, { useState } from "react";
import PropTypes from "prop-types";
import { faNotesMedical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { updateSelectedProduct } from "../../redux2/actions/productsActions";

const ProductSelectedNote = ({ product }) => {
  const [notesState, setNotesState] = useState(false);

  const dispatch = useDispatch();

  const handleAddNote = () => {
    setNotesState(true);
  };

  const handleNoteChange = ({ target }) => {
    const { value } = target;
    dispatch(updateSelectedProduct({ ...product, notes: value }));
  };

  return (
    <>
      {notesState ? (
        <textarea
          className="mt-3"
          maxLength={250}
          name="notes"
          placeholder="Escriba su nota aquí"
          onChange={handleNoteChange}
          rows={3}
          value={product.notes}
        />
      ) : (
        <button
          className="btn btn-outline-error btn-block mt-3"
          onClick={handleAddNote}
        >
          <span className="mr-2">
            <FontAwesomeIcon icon={faNotesMedical} />
          </span>
          Nota
        </button>
      )}
    </>
  );
};

export default ProductSelectedNote;

ProductSelectedNote.propTypes = {
  product: PropTypes.object.isRequired,
};
