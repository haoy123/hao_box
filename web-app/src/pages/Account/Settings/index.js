import React, { Component } from 'react';
import { connect } from 'dva';


@connect(({ user }) => ({
  currentUser: user.currentUser,
}))
class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  componentDidMount() {
  }


  render() {

    return (
      <div>
        个人中心
      </div>
    );
  }
}

export default Info;
