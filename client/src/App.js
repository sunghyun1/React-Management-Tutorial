import React, { Component } from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper'; // 컴포넌트의 외부를 감싸기 위해 사용
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles'; // css 라이브러리


const styles = theme => ({
  root: { // 루트 클래스의 경우 
    width : '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX : "auto" // x축으로 오버플로우 발생 가능하도록 한다.
  },
  table: {
    minWidth : 1080 //1080 픽셀 이상 출력, 화면이 크기가 줄어들었을 때도 전체 1080의 테이블 크기가 생성되므로 가로 스크롤바가 생성된다.
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
});

function App() {

  state = {
    customers: "",
    completed: 0
  }

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }
  
  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1});
  }

  const { classes } = this.props;
  return (
    <Paper className = {classes.root}>
      <Table className = {classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.customers ? this.state.customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/> ) 
          }) : 
          <TableRow>
            <TableCell colSpan="6" align="center">
              <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}/>
            </TableCell>
          </TableRow>
          }    
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(App);
