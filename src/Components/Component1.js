import React from "react";
import { data } from "./Data";
import classes from "./Component1.module.css";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
const Component1 = () => {
  const [gameData, setGameData] = useState(data);
  const [numFlip, setNumFlip] = useState(0);
  const [previousItem, setPreviousItem] = useState(0);
  const [pairsMatched, setPairsMatched] = useState(0);
  const flipCard = (id, matchedId) => {
    let temp = [...gameData];
    if (previousItem !== matchedId) {
      temp.map((element) => {
        if (element.id === id) {
          element.flip = true;
        } else {
          element.flip = false;
        }
        setGameData([...gameData]);
      });
      setPreviousItem(matchedId);
    } else {
      temp.map((element) => {
        if (element.matchedId !== matchedId) {
          element.flip = false;
        }
        else {
          element.flip = true
        }
        setGameData([...gameData]);
      });
      setPairsMatched((p) => p + 1);
    }
    setNumFlip((p) => p + 1);
    console.log(temp);
  };
  return (
    <>
      <main>
        <h1>Memory Game</h1>
        <h2>Total Moves : {numFlip}</h2>
        <h3>Pairs Matched : {pairsMatched} out of 6</h3>
        <div className={classes.main__container}>
          {gameData.map((i, index) => {
            return (
              <>
                <div key={index} className={classes.main__container_img}>
                  <ReactCardFlip isFlipped={i.flip} flipDirection="vertical">
                    <div
                      className={classes.frontDiv}
                      onClick={() => flipCard(i.id, i.matchedId)}
                    >
                      <img
                        className={classes.sample__img}
                        src="./sample.jpg"
                        alt="sample-images"
                      />
                    </div>
                    <div className={classes.backDiv}>
                      <img
                        className={classes.sample__img}
                        src={i.memoryImage}
                        alt="Items-images"
                      />
                    </div>
                  </ReactCardFlip>
                </div>
              </>
            );
          })}
        </div>
      </main>
    </>
  );
};
export default Component1;
