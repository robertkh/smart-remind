//?
import React, { useState, useEffect, useRef } from "react";
import { DatePicker, Space, Form, Button, Input, Divider } from "antd";
import openNotification from "./notification";
import useSound from "use-sound";
import sound from "./ns.mp3";
import ListMaker from "./ListMaker";

// todo
export default function Remainder() {
  //
  const [listArr, setListArr] = useState([]);
  const datepicker = useRef(null);
  const [play] = useSound(sound);

  //
  useEffect(() => {
    if (localStorage.getItem("keynotes")) {
      setListArr(JSON.parse(localStorage.getItem("keynotes")));
    } else {
      localStorage.setItem("keynotes", JSON.stringify([]));
    }
  }, []);

  //
  useEffect(() => {
    //
    const id = setInterval(() => {
      if (listArr.length > 0) {
        if (+Date.now() > +listArr[0]?.time) {
          openNotification(listArr[0].title, listArr[0].body, 0);
          play();
          let arr = [...listArr];
          arr.shift();
          setListArr(arr);

          localStorage.setItem("keynotes", JSON.stringify(arr));
        }
      } else {
        clearInterval(id);
      }
    }, 10000);

    return () => clearInterval(id);
  }, [listArr, play]);

  //
  function onChange(v) {
    datepicker.current = v._d;
  }

  //
  function onFinish(val) {
    let tempArr = [
      ...listArr,
      {
        time: +datepicker.current,
        title: val.title,
        body: val.body,
        key: Date.now(),
      },
    ].sort((a, b) => a.time - b.time);

    setListArr(tempArr);

    localStorage.setItem("keynotes", JSON.stringify(tempArr));
  }

  //
  return (
    <>
      <Divider>
        <span className="text-danger">Լրացնել ծանուցագիրը</span>
      </Divider>
      <div className="border border-success rounded p-3 pb-0">
        <Space direction="vertical">
          <DatePicker showTime onChange={onChange} />
        </Space>
        <Form onFinish={onFinish} className="mt-4">
          <Form.Item name="title">
            <Input placeholder="Ծանուցման գլխագիր" required />
          </Form.Item>

          <Form.Item name="body">
            <Input placeholder="Ծանուցման տեքստ" required />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Հաստատել
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Divider>
        <span className="text-success">Հերթում առկա ծանուցագրերը</span>
      </Divider>
      <ListMaker list={listArr} set={setListArr} />
    </>
  );
}
