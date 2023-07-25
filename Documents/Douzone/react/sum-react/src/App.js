import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [state, setState] = useState({
    status: -1,
    result: 0,
    message: "",
    uuid: "",
  });

  const onSum = async (e) => {
    //alert("계산요청");
    const response = await axios.get("/api/createId");
    if (response.data.status === 1) {
      setState({ ...state, uuid: response.data.uuid });
      const response2 = await axios.get("/api/sum?uuid=" + response.data.uuid);
      console.log(response.headers["sessionid"]);
      //console.log(response.data);
      setState(response2.data);
      console.log(response2.data);
    }
  };

  const onSumCancel = async (e) => {
    //alert("계산취소");
    console.log(state.uuid);
    const response = await axios.get("/api/sumCancel?uuid=" + state.uuid);
    setState(response.data);
    console.log(response.data);
  };

  return (
    <div>
      <div>
        <h1>axios</h1>
        <p>
          결과 : {state.status === 1 || state.status === -2 ? state.result : ""}
        </p>
        <p>메시지 : {state.message}</p>
        <button onClick={onSum}>계산요청</button>
        <button onClick={onSumCancel}>계산취소</button>
      </div>
    </div>
  );
}

export default App;
