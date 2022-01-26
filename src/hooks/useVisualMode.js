import { useState } from 'react';

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    if (replace === true) {
      history.pop()
    }
    setHistory([...history, newMode])
    setMode(newMode);

  };

  const back = () => {
    history.pop()
    setMode(history[history.length - 1])

  }

  return (
    { transition, back, mode }
  );
}