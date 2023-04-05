import { useState } from 'react';
import { useEffect } from 'react';
import { ColoredMessage } from './components/ColoredMessage';
import classes from './css/CssModules.module.scss';

export const App = () => {
  console.log('レンダリング');
  const [num, setNum] = useState(0);
  const onClickButton = () => {
    setNum((prev) => prev + 1);
  };
  useEffect(() => {
    alert();
  }, [num]);
  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは！</h1>
      <ColoredMessage color='blue'>お元気ですか？</ColoredMessage>
      <ColoredMessage color='pink'>元気です!</ColoredMessage>
      <button className={classes.button} onClick={onClickButton}>
        ボタン
      </button>
      <p>{num}</p>
    </>
  );
};
