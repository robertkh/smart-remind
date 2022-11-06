//?
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import openNotification from "./notification";
import useSound from "use-sound";
import sound from "./ns.mp3";
import AddForm from "./AddForm";
import WordList from "./WordList";
import { Switch } from "antd";

// todo
export default function Words() {
  const lsRef = useRef([]);
  const [play] = useSound(sound);
  const [words, setWords] = useState([]);
  const [checked, setChecked] = useState(false);

  //
  useEffect(() => {
    //
    if (localStorage.getItem("keywords")) {
      lsRef.current = JSON.parse(localStorage.getItem("keywords"));
    } else {
      localStorage.setItem("keywords", JSON.stringify([]));
    }

    //
    let id = setInterval(() => {
      lsRef.current.forEach((el, index) => {
        //
        if (+Date.now() > +el.t[0]) {
          play();
          openNotification(`${el.w}`, `${el.inf || ""}`, 0);
          el.t.shift();
          localStorage.setItem("keywords", JSON.stringify(lsRef.current));
          setWords([...lsRef.current]);
        }
      });
    }, 5000);

    //
    setWords([...lsRef.current]);

    //
    return () => clearInterval(id);
  }, [play]);

  //
  return (
    <>
      <AddForm lsRef={lsRef} set={setWords} />
      <Switch
        checked={checked}
        size="small"
        onChange={() => setChecked(!checked)}
        className="mt-4"
      />

      {checked && <WordList words={words} lsRef={lsRef} set={setWords} />}
    </>
  );
}
