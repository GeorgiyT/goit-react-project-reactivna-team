import s from '../Diary/DiaryProducts.module.css'


const DiaryListProduct = ({prod ,toGetProduct}) => {
    return <ul  className={s.list} onClick={toGetProduct}>
        {prod.map(el => <li className={s.listin} value={el.title.ru} key={el._id}>{el.title.ru }</li>)}
    </ul>
}
export default DiaryListProduct