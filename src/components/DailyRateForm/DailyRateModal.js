import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { caloriesSelector, productsSelector } from '../../redux/dailyRate/dailyRateSelector'
import styles from './DailyRateModal.module.css'



export default function DailyRateModal() {
    const dailyRateCalorie = useSelector(caloriesSelector);
    const notAllowedProducts = useSelector(productsSelector);
    const [inputValues, setInputValues] = useState('');
    const handleChange = e => setInputValues(e.target.value);
    const productsFilter = notAllowedProducts.filter(product => product.toLowerCase().includes(inputValues),);

    return (
        <div className={styles.wrapper}>
      <p className={styles.title}>
        Ваша рекомендуемая суточная норма калорий составляет
      </p>
      <div className={styles.container}>
        <p className={styles.calories_title}>
          <span className={styles.calories}>{dailyRateCalorie}</span> ккал
        </p>

        <div>
          <input
            className={styles.input}
            type="text"
            name="filter"
            value={inputValues}
            onChange={handleChange}
          />
        </div>
        <p className={styles.products}>
          Продукты, которые вам не рекомендуется употреблять
        </p>

        <ul className={styles.products_list}>
          {productsFilter.map((product, id) => (
            <li key={id} className={styles.productsItem}>
              {product}
            </li>
          ))}
        </ul>
        <Link to="/registration" className={styles.button}>
          Начать худеть
        </Link>
      </div>
    </div>
    )
}
