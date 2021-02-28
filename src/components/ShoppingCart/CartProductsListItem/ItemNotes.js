import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNotesMedical } from "@fortawesome/free-solid-svg-icons";

const ItemNotes = ({ notes, notesChangeFnc }) => {
  const [addNotes, setAddNotes] = useState(notes ? true : false);
  const handleAddNoteClick = () => {
    setAddNotes(!addNotes);
  };

  useEffect(() => {
    if (notes.length === 0) setAddNotes(false);
  }, [notes]);

  return (
    <>
      {(notes || addNotes) && (
        <span className="cart__products-item-notes mt-2">
          <textarea
            autoFocus
            value={notes}
            onChange={notesChangeFnc}
            placeholder="Escriba su nota aquí"
            maxLength={250}
          />
        </span>
      )}
      {!notes && (
        <button
          className={`cart__products-item-add-notes btn btn-h-2 ${
            addNotes ? "btn-outline-error" : "btn-outline-success"
          } mt-2 mb-2`}
          onClick={handleAddNoteClick}
        >
          <FontAwesomeIcon icon={faNotesMedical} />
        </button>
      )}
    </>
  );
};

export default ItemNotes;

ItemNotes.propTypes = {
  notes: PropTypes.string.isRequired,
  notesChangeFnc: PropTypes.func.isRequired,
};
