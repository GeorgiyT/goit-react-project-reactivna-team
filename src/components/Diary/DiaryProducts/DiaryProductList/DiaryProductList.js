import React, { Component } from "react";
import DiaryDataCalendar from "../DiaryProductDataCalendar/DiaryDataCalendar";
import s from "./DiaryProductList.module.css";
import sprite from "../../../../images/symbol-defs.svg";
import { connect } from "react-redux";
import productOperation from "../../../../redux/products/productOperation";
import axios from "axios";

class DiaryProductList extends Component {
  state = {
    product: "",
    weight: "",
    productsQuery: [],
    productId: "",
    error: "",
  };
  componentDidMount() {
    // this.props.toFetchProducts(this.props.date)
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.toAddProducts(
      this.props.date,
      this.state.productId,
      this.state.weight
    );
    this.setState({ product: "" });
  };
  getCurrentProduct = (e) => {
    this.setState({
      product: e.target.textContent,
      productId: e.target.dataset.id,
      productsQuery: [],
      weight: 100,
    });
  };
  searchProducts = (query) => {
    if (
      query.includes("(") ||
      query.includes("%") ||
      query.includes("+") ||
      query.includes("&")
    )
      return;
    axios
      .get(`/product?search=${query}`)
      .then((resp) => {
        if (this.state.product.length < 3) {
          return(resp(console.log))
        }
        // this.setState({
        //   productsQuery: resp.data.length > 1 ? [...resp.data] : [],
        // });
      })
      .catch((err) => {
        if (
          err.response.status === 401 ||
          err.response.status === 403 ||
          err.response.status === 404
        ) {
          this.props.refreshUser();
        }
        if (err.response.status === 400) {
          this.setState({ productsQuery: [] });
          //   this.props.errorToTrue();
          //   this.props.NotificationToTrue();
          //   setTimeout(() => {
          //     this.props.NotificationToFalse();
          //   }, 2000);
        }
      });
  };

  render() {
    return (
      <div className={s.cont}>
        <DiaryDataCalendar />
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              className={s.product}
              placeholder="Введите название продукта"
              name="product"
              value={this.state.product}
              type="text"
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
              className={s.gram}
              placeholder="Граммы"
              name="weight"
              value={this.state.product ? this.state.weight : ""}
              onChange={this.handleChange}
            />
          </label>
          <button className={s.but} type="submit">
            <svg className={s.icon}>
              <use href={sprite + "#icon-plus"} />
            </svg>
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  date: state.date,
});
const mapDispatchToProps = (dispatch) => {
  return {
    toAddProducts: (data, productId, weight) =>
      dispatch(productOperation.addProduct(data, productId, weight)),
    // toFetchProducts: data => dispatch(productOperation.fetchProduct(data)),
  };
};

export default connect(mapDispatchToProps, mapStateToProps)(DiaryProductList);
