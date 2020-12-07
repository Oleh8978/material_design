import { RedoRounded } from "@material-ui/icons";
import React from "react";

export default function imageCard(props) {
  return (
    <div
      style={{
        float: "left",
        background: "#e6e6ff",
        marginLeft: "5px",
        marginBottom: "5px",
        width: "150px",
        height: "150px",
        borderRadius: "35px"
      }}
    >
      <div>
        <img
          src={props.data.image}
          style={{
            width: "70px",
            height: "70px",
            marginLeft: "40px",
            marginTop: "30px"
          }}
          alt="img"
        />
      </div>
      <div style={{ marginLeft: "30px" }}>{props.data.name}</div>
    </div>
  );
}
