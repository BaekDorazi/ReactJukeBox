import React, { Component } from "react";
import CustomTable from "../CustomTable";
import { Button } from "reactstrap";

import "../../styles/ui/_RunningPlayList.css"

class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      btnState: 0, //0:정지상태, 1:플레이상태, 2:일시정지상태
      datas: {
        columns: ["idx", "제목", "신청자", "Playing"],
        data: [
          {
            idx: 0,
            title: "",
            user: "",
            checked: false
          }
        ]
      }
    };
  }

  componentWillMount() {
    //처음 로딩시 전체 노래 조회
    this.getPlayList(300);
  }

  componentWillUnmount() {}

  //서버에서 받아서 setState 해줄 메소드
  getPlayList = userIdx => {
    const music = [
      { idx: 1, title: "가지마", user: "김인중", checked: false },
      { idx: 2, title: "오지마", user: "기민중", checked: false },
      { idx: 3, title: "떠나지마", user: "김민중", checked: false }
    ];

    this.setState({ datas: { ...this.state.datas, data: music } });
  };

  // UI event
  musicPlayAction = () => {
    let firstIdx = this.state.datas.data[0].idx;
    this.musicPlay(firstIdx);

    this.setState({
      btnState: 1
    });
    // 일시 정지로 버튼 변경
    // 음악 실행 (서버로 보내야함)
  };

  musicStopAction = () => {
    this.musicStop();

    this.setState({
      btnState: 0
    });
  };

  musicNextAction = () => {
    this.musicNext();
  };

  musicPreviousAction = () => {
    this.musicPrevious();
  };

  musicPauseAction = () => {
    this.setState({
      btnState: 2
    });
  };

  // method
  musicPlay = idx => {
    const { datas } = this.state;

    let data = datas.data.map(obj => {
      if (obj.idx === idx) {
        // url을 서버로 보냄 실행해달라고
        obj.checked = true;
      } else {
        obj.checked = false;
      }
      return obj;
    });
    this.setState({
      datas: { ...datas, data: data }
    });
  };

  musicStop = () => {
    const { datas } = this.state;

    let data = datas.data.map(obj => {
      obj.checked = false;

      return obj;
    });

    this.setState({
      datas: { ...datas, data: data }
    });
  };

  musicNext = () => {
    const { datas } = this.state;
    let checked = false;

    let data = datas.data.map(obj => {
      if (obj.checked) {
        obj.checked = false;
        checked = true;
      } else if (checked) {
        obj.checked = true;
        checked = false;
      }

      return obj;
    });

    this.setState({
      datas: { ...datas, data: data }
    });
  };

  musicPrevious = () => {
    const { datas } = this.state;
    let checked = false;

    let data = datas.data.reverse().map(obj => {
      if (obj.checked) {
        obj.checked = false;
        checked = true;
      } else if (checked) {
        obj.checked = true;
        checked = false;
      }

      return obj;
    });

    this.setState({
      datas: { ...datas, data: data.reverse() }
    });
  };

  init = () => {
    const { btnState } = this.state;
    return (
      <div className="running-play-list-buttons">
        <Button className="running-play-list-buttons-style"
          color="success"
          onClick={() => this.musicPreviousAction()}
          disabled={btnState === 0 ? true : false}
        >
          이전
        </Button>
        <Button className="running-play-list-buttons-style"
          color="success"
          onClick={() => this.musicStopAction()}
          disabled={btnState === 0 ? true : false}
        >
          정지
        </Button>
        <Button className="running-play-list-buttons-style"
          color="success"
          onClick={() => {
            btnState === 1 ? this.musicPauseAction() : this.musicPlayAction();
          }}
        >
          {btnState === 1 ? "일시정지" : "시작"}
        </Button>
        <Button className="running-play-list-buttons-style"
          color="success"
          onClick={() => this.musicNextAction()}
          disabled={btnState === 0 ? true : false}
        >
          다음
        </Button>
      </div>
    );
  };

  render() {
    const { datas } = this.state;
    return (
      <div className="running-play-list-table">
        {this.init()}
        <CustomTable datas={datas} />
      </div>
    );
  }
}

export default index;
