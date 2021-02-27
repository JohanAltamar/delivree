import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNotesMedical } from "@fortawesome/free-solid-svg-icons";

const ItemNotes = ({ notes, notesChangeFnc }) => {
  const [addNotes, setAddNotes] = useState(false);
  const handleAddNoteClick = () => {
    setAddNotes(!addNotes);
  };

  return (
    <>
      {(notes || addNotes) && (
        <span className="cart__products-item-notes mt-2">
          <textarea value={notes} onChange={notesChangeFnc} />
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
