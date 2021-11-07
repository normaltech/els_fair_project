const _SAVE = 'DATA_SAVE';
const _SELECT = 'DATA_SELECT'
 
export const init_Data = (inputData) => ({
    type: _SAVE,
    inputData: {
        id: inputData.id,
        month: inputData.month,
        name: inputData.name
    }
})
export const init_lastIdx = (inputData) => ({
    type: _SAVE,
    id: inputData.id
})
// BoardContent.js 에서 id값을 매개변수로 받는다.
export const selectRow = (id) => ({
    type: _SELECT,
    inputData: {
        id: id,
    }
})
 
const initialState = {
    lastId: 0,
    inputData: [
        {
            id: '',
            month: '',
            name: ''
        }
    ],
    // select 된 data를 담아주기 위해 생성
    selectRowData: {}
}
 
export default function boardReducer(state = initialState, action){
    switch(action.type) {
        case _SAVE:
            return {
                inputData: state.inputData.concat({
                    ...action.inputData,
                    id: state.lastId + 1,
                }),
                lastId: state.lastId + 1
            }
        case _SELECT:
            return {
                ...state,
                // state 에 action 으로 전달받은 id값과 일치하는 data가 있다면 return 해준다.
                selectRowData: state.inputData.find(row => row.id === action.inputData.id)
            }
        default:
            return state
    }
}