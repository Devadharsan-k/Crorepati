import React, { useEffect } from "react";
import Confetti from "react-confetti";
import useSound from "use-sound";
import winSound from "../../assets/sounds/winner.mp3";

const Winner = () => {
  const [playWinSound] = useSound(winSound);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    playWinSound();
  });
  const confettiStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };

  const winnerText = {
    height: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <>
      <Confetti style={confettiStyle} />

      <h1 style={winnerText}>You have won $1,000,000</h1>
    </>
  );
};

export default Winner;
