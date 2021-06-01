import React from 'react'
import DiaryProductList from './DiaryProducts/DiaryProductList/DiaryProductList'
import s from './DiaryProducts.module.css'
import productOperation from '../../redux/products/productOperation';
import { connect } from 'react-redux';
import productSelector from '../../redux/products/productSelector';
import DiaryProdustListItem from './DiaryProducts/DiaryProdustListItem/DiaryProdustListItem';
// import s from '../Diary/DiaryProducts/DiaryProdustListItem/DiaryProdustListItem.module.css'





const DiaryProducts =({products})=> {
    console.log(products,'products');
        return (
            <>
                <DiaryProductList />
                {/* {products ? (
                    <h2 className={s.title}> Продукты еще не добавлены</h2>) : (
                    ''
                )} */}
                {products && (
                    <ul className={s.listeeeer}>
                        {products.map(({ id, ...props}) => (
                            <DiaryProdustListItem key={id} id={id} {...props} />
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
