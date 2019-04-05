import React, { Component } from "react";
import { Table } from "reactstrap";

class Playlist extends Component {
  craeteHeader = () => {
    const { datas } = this.props;

    return datas.columns.map(column => {
      return <th>{column}</th>;
    });
  };

  createBody = () => {
    const { datas } = this.props;

    return datas.data.map(data => {
      return (
        <tr>
          {Object.keys(data).map(key => {
            if(key == "checked") {
              if(data[key]) return <th>v</th>;
            }
            return <th>{data[key]}</th>;
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
