import React, { Component } from "react";
import DiaryDataCalendar from "../DiaryProductDataCalendar/DiaryDataCalendar";
import s from "./DiaryProductList.module.css";
import sprite from "../../../../images/symbol-defs.svg";
import { connect } from "react-redux";
import productOperation from "../../../../redux/products/productOperation";
import DiaryListProduct from "../../DiaryListProduct";
import axiosInstance from "../../../../utils/axiosInstance";

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
  componentDidUpdate(_, prevstate) {
    if (prevstate.product !== this.state.product) {
      this.searchProducts(this.state.product)
      console.log(this.state.product);
    }
  }
  handleChange = (e) => {
    const { name, value, id } = e.target;
    console.log(id);
    this.setState({
      [name]: value,
      
    });
    if (name === "productId") {
      this.setState({
      [name]: value,
      productId:  id,
    });
    }
    
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.props.date);
    console.log(this.props.date ,
      this.state.productId,
      this.state.weight);
    this.props.toAddProducts(
      this.props.date ,
      this.state.productId,
      this.state.weight
    );
    this.setState({ product: "" });
  };
  getCurrentProduct = (e) => {
    this.setState({
      product: e.target.textContent,
      productId: e.target.id,
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
    axiosInstance
      .get(`/product?search=${query}`,{
        headers: { Authorization: `Bearer ${this.props.token}` }
        

      })
      .then((resp) => {
        this.setState({
          productsQuery: resp.data ? resp.data : []
        })
        //  console.log(this.state.productsQuery);
      })
      .catch((err) => {
        
        if (err.response?.status === 400) {
          this.setState({ productsQuery: [] });
          
        }
      });
  };

  render() {
    return (
      <>
      <DiaryDataCalendar />
      <div className={s.cont}>
        
          <form  onSubmit={this.handleSubmit}>
            <div className={s.form}>
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
            </div>
          {this.state.productsQuery.length > 0 && (
               <DiaryListProduct
              toGetProduct={this.getCurrentProduct}
              prod={this.state.productsQuery}
              
            />
          )}
          </form>
          
        </div>
        </>
    );
  }
}
const mapStateToProps = (state) => ({
  date: state.date,
  token: state.auth.tokens.accessToken
});
const mapDispatchToProps = (dispatch) => {
  return {
    toAddProducts: (data, productId, weight) =>
      dispatch(productOperation.addProduct(data, productId, weight)),
    // toFetchProducts: data => dispatch(productOperation.fetchProduct(data)),
  };
};

export default connect( mapStateToProps, mapDispatchToProps)(DiaryProductList);
