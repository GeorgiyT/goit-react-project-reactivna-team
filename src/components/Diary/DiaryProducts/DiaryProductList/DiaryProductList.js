import React from 'react';
import DiaryDataCalendar from '../DiaryProductDataCalendar/DiaryDataCalendar';
import s from './DiaryProductList.module.css';
import sprite from '../../../../images/symbol-defs.svg'


const DiaryProductList =()=> {
      
        return (
            <div className={s.cont}>
                <DiaryDataCalendar />
                <form>
                    <label >
                        <input className={s.product} placeholder='Введите название продукта'/>  
                    </label>
                    <label>
                        <input  className={s.gram} placeholder='Граммы'/>
                    </label>
                    <button className={s.but}>
                        <svg className={s.icon} >
                    <use href={sprite + "#icon-plus"} />
                    </svg>
                    </button>
                </form>
           </div>     
        );
    
}

export default DiaryProductList;