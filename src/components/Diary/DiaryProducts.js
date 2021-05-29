import React from 'react'
import DiaryProductList from './DiaryProducts/DiaryProductList/DiaryProductList'
import s from './DiaryProducts.module.css'



const DiaryProducts =()=> {
    
        return (
            <>
                <DiaryProductList/>
                <h2 className={s.title} > Продукты еще не добавлены</h2>
           </>     
        );
    
}

export default DiaryProducts;