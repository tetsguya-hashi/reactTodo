
import { useEffect, useState } from 'react';
import Colorfullmessage from './components/Colorfullmessage';

const App = () => {
  console.log('最初')
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCoutnUp = () => {
    setNum(num + 1);
  }
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  }

  useEffect(() => {
    if (num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);
  return (
    <div>
      <h1>Hellow world</h1>
      <Colorfullmessage color='blue' message='お元気ですか？' />
      <Colorfullmessage color='pink' message='元気です' />
      <button onClick={onClickCoutnUp}>カウントアップ</button>
      <button onClick={onClickSwitchShowFlag}>顔文字を表示・非表示</button>
      <p>{num}</p>
      {faceShowFlag && <p>＼(^o^)／</p>}
    </div>
  )
}

export default App;