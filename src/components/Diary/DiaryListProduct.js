import s from '../Diary/DiaryProducts.module.css'


const DiaryListProduct = ({prod ,toGetProduct}) => {
    return <ul  className={s.list} >
        {prod.map(el => <li onClick={toGetProduct} className={s.listin} value={el.title.ru}  id={el._id} key={el._id}>{el.title.ru }</li>)}
    </ul>
}
export default DiaryListProduct