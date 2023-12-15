import { useEffect, useState } from "react";

export default function Timer({ setStop, questionNum }) {
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    if (timer === 0) return setStop(true);
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, setStop]);

  useEffect(() => {
    setTimer(60);
  }, [questionNum]);
  return timer;
}
