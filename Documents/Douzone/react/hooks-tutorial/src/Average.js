import React, { useCallback, useRef, useMemo, useState } from 'react';

const getAverage = (list) => {
  console.log('평균값 구하기');
  if (list === null || list.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  //cosnt sum = list.reduce((a,b) => a+b);
  return sum / list.length;
};

const Average = () => {
  const [list, setList] = useState([10, 50, 30, 70, 100]);
  const [number, setNumber] = useState('');
  const inputElement = useRef();
  const clickCount = useRef(1);
  //let clickCount = 1;
  // const [avg, setAvg] = useState(0);

  // useEffect(() => {
  //   setAvg(getAverage(list));
  // }, []);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); // 변화된 것이 없으면 콜백 안함

  const onClick = useCallback(
    // 함수에 대한 캐싱 (내부에 있는 함수에 대해서 캐싱이 목적)
    (e) => {
      setList(list.concat(parseInt(number)));
      //setAvg(getAverage(list));
      setNumber('');

      inputElement.current.focus();
      //inputElement.current.style.display = 'none';
    },
    [list, number] // 변화가 있을 때만 해당 함수를 다시 만들어라
  );

  const avg = useMemo(() => getAverage(list), [list]); //외부에 대한 캐싱

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setList(list.concat(parseInt(number)));
      //setAvg(getAverage(list));
      setNumber('');
      inputElement.current.focus();
      clickCount.current++;

      console.log('clickCount: ' + clickCount.current);
    },
    [list, number]
  );

  console.log('화면 재구성함');
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={number} onChange={onChange} ref={inputElement} />
        <button>등록</button>
      </form>

      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b>
        {avg}
      </div>
    </div>
  );
};

export default Average;
