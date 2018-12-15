import {createStore} from  'redux';

const initialState = {
  count : 8,
}


const reducer = (state = initialState,action) =>{
  console.log("there are reducer",action);
    return state;
}

const store  =  createStore(reducer);
export default store;
