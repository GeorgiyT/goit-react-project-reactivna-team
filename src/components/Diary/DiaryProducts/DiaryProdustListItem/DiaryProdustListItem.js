import React from 'react'
import { connect } from 'react-redux';
import productOperation from '../../../../redux/products/productOperation';

const DiaryProdustListItem = ({ title, weidht, kcal,dayId }) => {

        return (
        <>
        <li>
              <p>{title}</p>
                <p>{weidht}</p>
                <p>{kcal}</p>
                {/* <button type="button" onClick={() => deleteProduct(dayId)}>
                </button>            */}
        </li>
   </>
 );

}
// const mapStateToProps = state => ({
//         dayId: state.products.id
// })

// const mapDispatchToProps = (dispatch) => {
//         return {
//                 deleteProduct: dayId => {
//                         return dispatch(productOperation.deleteProduct(dayId))
//                 },
//         };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(DiaryProdustListItem);
export default DiaryProdustListItem