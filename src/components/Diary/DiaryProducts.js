import React from 'react'
import DiaryProductList from './DiaryProducts/DiaryProductList/DiaryProductList'
import s from './DiaryProducts.module.css'
import productOperation from '../../redux/products/productOperation';
import { connect } from 'react-redux';
import productSelector from '../../redux/products/productSelector';
import DiaryProdustListItem from './DiaryProducts/DiaryProdustListItem/DiaryProdustListItem';





const DiaryProducts =({products})=> {
    
        return (
            <>
                <DiaryProductList />
                {products ? (
                    <h2 className={s.title}> Продукты еще не добавлены</h2>) : (
                    ''
                )}
                {products && (
                    <ul>
                        {products.map(({ id, ...props }) => (
                            <DiaryProdustListItem key={id}  {...props} />
                        ))}
                    </ul>
                )}
           </>     
        );
    
}
const mapStateToProps = state => ({
    products:productSelector.getProducts(state),
  date: state.date,
});
const mapDispatchToProps = dispatch => {
  return {
      toFetchProducts: data=> dispatch(productOperation.fetchProduct(data))
  };
};

export default connect( mapStateToProps ,mapDispatchToProps)(DiaryProducts);
