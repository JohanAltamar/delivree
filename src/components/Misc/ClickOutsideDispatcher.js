import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import store from "../../redux2/store";
/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideDispatcher(ref, action) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        store.dispatch(action);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, action]);
}

/**
 * Component that alerts if you click outside of it
 */
function OutsideDispatcher(props) {
  const wrapperRef = useRef(null);
  useOutsideDispatcher(wrapperRef, props.action);

  return <div ref={wrapperRef}>{props.children}</div>;
}

OutsideDispatcher.propTypes = {
  children: PropTypes.element.isRequired,
};

export default OutsideDispatcher;
