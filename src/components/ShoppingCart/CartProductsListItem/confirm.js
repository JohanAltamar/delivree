import Swal from "sweetalert2";
import store from "../../../redux2/store";
import { removeCartProductAction } from "../../../redux2/actions/cartActions";

const confirm2RemoveProductFnc = (id) => {
  Swal.fire({
    title: "Estás seguro?",
    text: "No podrás deshacerlo!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#00d000",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, elimínalo!",
    cancelButtonText: "No, salgamos!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Borrado!", "El producto ha sido eliminado.", "success");
      store.dispatch(removeCartProductAction(id));
    }
  });
};

export default confirm2RemoveProductFnc;
