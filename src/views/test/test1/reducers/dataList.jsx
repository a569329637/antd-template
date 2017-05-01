import Immutable from 'immutable';
import { handleActions, createAction } from 'redux-actions';

const ADD_DATA = 'ADD_DATA';
const DEL_DATA = 'DEL_DATA';
const CLEAR_DATA = 'CLEAR_DATA';

let id = 1;

// reducers
export default handleActions({
  [ADD_DATA]: (state, action) => {
    const data = state.toJS();
    id += 1;
    data.push({ id, name: `pdd_${id}`, age: '100', address: 'N/A' });
    return Immutable.fromJS(data);
  },
  [DEL_DATA]: (state, action) => state.filter(item => item.get('id') !== action.payload),
  [CLEAR_DATA]: (state, action) => Immutable.fromJS([]),
}, Immutable.fromJS([{ id, name: 'pdd(default)', age: '100(default)', address: 'N/A(default)' }]));

// action 创建函数
export const addData = createAction(ADD_DATA);
export const delData = createAction(DEL_DATA);
export const clearData = createAction(CLEAR_DATA);

// 不用 handleActions, createAction, 就可以用下面的形式
// reducers
// export default function dataList(state = Immutable.fromJS([{ id: id, name: 'pdd(default)', age: '100(default)', address: 'N/A(default)' }]), action) {
//   switch(action.type) {
//     case ADD_DATA:
//       let data = state.toJS();
//       id = id + 1;
//       data.push({ id: id, name: `pdd_${id}`, age: '100', address: 'N/A' });
//       return Immutable.fromJS(data);
//     case DEL_DATA:
//       return state.filter(item => item.get('id') !== action.id); // 这里不同
//     case CLEAR_DATA:
//       return Immutable.fromJS([]);
//     default:
//       return state;
//   }
// }

// action 创建函数
// export function addData(data) {
//   return { type: ADD_DATA, data };
// }
// export function delData(id) {
//   return { type: DEL_DATA, id };
// }
// export function clearData(data) {
//   return { type: CLEAR_DATA };
// }
