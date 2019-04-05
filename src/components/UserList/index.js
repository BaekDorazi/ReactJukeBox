import React, { Component } from "react";
import CustomTable from "../CustomTable";

class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      datas: {
        columns: ["idx", "이름", "보기"],
        data: [
          {
            idx: 0,
            name: ""
          }
        ]
      }
    };
  }

  componentWillMount() {
    //처음 로딩시 사용자 조회
    this.getUserList()
  }

  getUserList = () => {
    const users = [{ idx: 1, name: "김인중" }, { idx: 2, name: "백도형" }];

    this.setState({ datas: {...this.state.datas, data: users} });
  };

  render() {
    const { datas } = this.state;
    return (
      <div>
        <CustomTable datas={datas} />
      </div>
    );
  }
}

export default index;
