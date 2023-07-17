import React, { useReducer } from 'react';

const reducer = (state, action) => {
  //   let key = action.type;
  //   switch (action.type) {
  //     case 'name':
  //       return { ...state, [key]: action.value };
  //     //   return { ...state, [name]: action.value };
  //     case 'nickname':
  //       return { ...state, [key]: action.value };
  //     //   return { ...state, [nickname]: action.value };
  //     default:
  //       return state;
  //   }
  // action.name => name, nickname
  // action.type => text
  // action.value => 값
  return { ...state, [action.name]: action.value };
  // {name:"", nickname:"",}
};

//use를 써야 안에 use 관련된 것을 쓸 수 있다
const useModel = (initState) => {
  //const [state, dispatch] = useReducer(reducer, initState);
  const [state, dispatch] = useReducer(reducer, initState);

  //data 변경에 대한 이벤트 핸들러
  //데이터 변경 함수
  //e.target.name, e.target.value
  const onChange = (e) => {
    //e.target.name = nickname
    //dispatch({ type: 'name', value: e.target.value });
    //dispatch({ type: e.target.name, value: e.target.value });
    dispatch(e.target);
  };
  //return [state, onChange]; // 색인 배열
  return {
    //연관 배열
    state,
    onChange,
  };
};

export default useModel;
