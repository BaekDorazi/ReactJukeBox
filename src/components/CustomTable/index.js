import React, { Component } from "react";
import { Table } from "reactstrap";

let textStyle = {
  color: "whitesmoke",
  fontSize: "20px",
  fontWeight: "normal"
}
class Playlist extends Component {
  craeteHeader = () => {
    const { datas } = this.props;

    return datas.columns.map(column => {
      return <th style={textStyle}>{column}</th>;
    });
  };

  createBody = () => {
    const { datas } = this.props;

    return datas.data.map(data => {
      return (
        <tr>
          {Object.keys(data).map(key => {
            if(key == "checked") {
              if(data[key]) return <th style={textStyle}>v</th>;
            }
            return <th style={textStyle}>{data[key]}</th>;
          })}
        </tr>
      );
    });
  };

  render() {
    const { datas } = this.props;
    console.log(datas.data);

    return (
      <div>
        <Table hover>
          <thead>
            <tr>{this.craeteHeader()}</tr>
          </thead>
          <tbody>{this.createBody()}</tbody>
        </Table>
      </div>
    );
  }
}

export default Playlist;
