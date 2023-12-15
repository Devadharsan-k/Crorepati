import React, { useEffect, useState } from "react";
import "./Question.css";
import { QuestionsData } from "./QuestionsData";
import { moneyPyramid } from "../../moneyPyramid";
import Winner from "../Winner/Winner";
import Timer from "../Timer/Timer";
import useSound from "use-sound";
import play from "../../assets/sounds/play.mp3";
import correct from "../../assets/sounds/correct.mp3";
import wrong from "../../assets/sounds/wrong.mp3";
import wait from "../../assets/sounds/wait.mp3";

const Question = ({ setMoneyLevel }) => {
  const [questionNum, setQuestionNum] = useState(1);
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState(0);
  const [hasWon, setHasWon] = useState(false);

  const [letsPlay, { stop: stopLetsPlay }] = useSound(play);
  const [correctAnswer, { stop: stopCorrectAnswer }] = useSound(correct);
  const [wrongAnswer, { stop: stopWrongAnswer }] = useSound(wrong);
  const [waits, { stop: stopWait }] = useSound(wait);

  useEffect(() => {
    letsPlay();
  }, []);

  useEffect(() => {
    setQuestion(QuestionsData[questionNum - 1]);
    questionNum > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNum - 1).amount);
  }, [questionNum]);

  const handleClick = (a) => {
    if (selectedAnswer !== null) {
      return;
    }
    waits();
    setSelectedAnswer(a);
    setClassName("answer active");
    setTimeout(() => {
      setClassName(a.correct ? "answer correct" : "answer wrong");
    }, 800);
    setTimeout(() => {
      if (a.correct) {
        stopWait();
        correctAnswer();
        setTimeout(() => {
          stopLetsPlay();
          stopCorrectAnswer();
          stopWrongAnswer();
          setQuestionNum((prev) => prev + 1);
          setMoneyLevel((prev) => prev + 1);
          setSelectedAnswer(null);
        }, 4000);

        if (questionNum === 15) {
          setHasWon(true);
        }
      } else {
        stopWait();
        wrongAnswer();
        setTimeout(() => {
          setStop(true);
        }, 4000);
      }
    }, 6000);
  };

  return (
    <div className="ques">
      {stop ? (
        <h1 className="end text">you earned: {earned}</h1>
      ) : hasWon ? (
        <Winner />
      ) : (
        <>
          <div className="top">
            <div className="timer">
              <Timer setStop={setStop} questionNum={questionNum} />
            </div>
          </div>
          <div className="bottom">
            <div className="question">{question?.question}</div>
            <div className="answers">
              {question &&
                question.answers.map((a, index) => (
                  <div
                    key={index}
                    className={selectedAnswer === a ? className : "answer"}
                    onClick={() => handleClick(a)}
                  >
                    {a.text}
                  </div>
                ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Question;
