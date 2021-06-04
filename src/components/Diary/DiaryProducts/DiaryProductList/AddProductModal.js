// import React, { Component } from "react";
// import axiosInstance from "../../../../utils/axiosInstance";

// import s from "./Modal.module.css";

// class Modal extends Component {
//   state = {
//     product: "",
//     weight: "",
//     productsQuery: [],
//     productId: "",
//     error: "",
//     isOpen: false,

//   };
// handleChange = e => {
//     const { name, value, id } = e.target;
//     console.log(id);
//     this.setState({
//       [name]: value,
//     });
//     if (name === "productId") {
//       this.setState({
//         [name]: value,
//         productId: id,
//       });
//     }
//   };
  
//   render() {
//     return (
//       <div className={s.modaka}>
//         <input
//           className={s.productModal }
//             name="product"
//             placeholder="Введите название продукта"
//           type="text"
//           // value={this.state.product}
//           autoComplete="off"
//           onChange={this.handleChange}
//             />
//         <input
//           className={s.gramModal}
//             name="weight"
//             placeholder="Граммы"
//           type="number"
//           //  value={this.state.product ? this.state.weight : ""}
//               // onChange={this.handleChange}
//           />
//         <button type="button"
//         className={s.buttonModal}>
//              Добавить
//             </button>
//     </div>
      
//     );
//   }
// }

// export default Modal;
