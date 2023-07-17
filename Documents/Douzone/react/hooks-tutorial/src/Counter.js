import React, { useReducer } from 'react';

// reducer 즉 dispatcher 보내다
// 데이터가 여기에 있다
function model(state, action) {
  //처리 루틴 여러개가 될 수 있음
  //state는 관리하는 상태 변수
  //action : 명령 (처리 루틴 여러개를 구분하는 키
  switch (action.type) {
    case 'incValue':
      return { value: state.value + 1 };
    case 'decValue':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const Counter = () => {
  // 상태 변수 선언
  //const [value, setValue] = useState(0);
  const [state, dispatch] = useReducer(model, { value: 0 });
  //model: 처리함수
  //state : model의 데이터를 읽기 위해 존재
  //{value : 0 } 초기값 -> state가 초기값을 받는 함수
  //dispatch: action을 수행할 함수를 나타냄, 기능 수행

  // 아래에 선언된 것은 데이터 관리 함수
  // 이 함수를 명령어로 만들겠다
  const incValue = () => {
    //setValue(value + 1);
    dispatch({ type: 'incValue' }); // 비동기 호출
  };

  const decValue = () => {
    //setValue(value - 1);
    dispatch({ type: 'incValue' });
  };

  // 아래는 출력에 대한 코드
  return (
    <div>
      <p>
        현재 카운트 값은 <b>{state.value}</b>입니다
      </p>
      <button onClick={incValue}>1 증가</button>
      <button onClick={decValue}>1 감소</button>
    </div>
  );
};
/*
Counter(); 1 증가 클릭 -> value(0 -> 1) Counter(); 호출 
Counter();
*/
export default Counter;
