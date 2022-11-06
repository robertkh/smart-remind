//?
import React from "react";
import { Badge, Row, Col } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";

// todo
export default function WordList({ words, lsRef, set }) {
  function deleteHandler(pkey) {
    for (let i = 0; i < lsRef.current.length; i++) {
      if (lsRef.current[i].key === pkey) {
        lsRef.current.splice(i, 1);
        break;
      }
    }

    localStorage.setItem("keywords", JSON.stringify(lsRef.current));
    set([...lsRef.current]);
  }

  //
  return (
    <ul className="list-group mt-5">
      {words.map((el) => (
        <li key={el.key} className="list-group-item ps-2 pe-0">
          <div className="w-100">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={4}>
                {el.w}
              </Col>
              <Col className="gutter-row" span={16}>
                <span className="text-primary">{el.inf}</span>
              </Col>
              <Col className="gutter-row" span={2}>
                <Badge count={12 - el.t.length} />
              </Col>
              <Col className="gutter-row" span={2}>
                <DeleteTwoTone
                  style={{ fontSize: "20px" }}
                  onClick={() => deleteHandler(el.key)}
                />
              </Col>
            </Row>
          </div>
        </li>
      ))}
    </ul>
  );
}
