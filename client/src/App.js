import React, { Component } from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper'; // 컴포넌트의 외부를 감싸기 위해 사용
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles'; // css 라이브러리


const styles = theme => ({
  root: { // 루트 클래스의 경우 
    width : '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX : "auto" // x축으로 오버플로우 발생 가능하도록 한다.
  },
  table: {
    minWidth : 1080 //1080 픽셀 이상 출력, 화면이 크기가 줄어들었을 때도 전체 1080의 테이블 크기가 생성되므로 가로 스크롤바가 생성된다.
  }
})

const customers = [
{
  'id' : 1,
  'image' : 'http://placeimg.com/64/64/1',
  'name' : '홍길동',
  'birthday' : '930828',
  'gender' : '여자',
  'job' : '요리사'
},
{
  'id' : 2,
  'image' : 'http://placeimg.com/64/64/2',
  'name' : '최성현',
  'birthday' : '930928',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id' : 3,
  'image' : 'http://placeimg.com/64/64/3',
  'name' : '나동빈',
  'birthday' : '931028',
  'gender' : '남자',
  'job' : '프로그래머'
}
]

function App() {

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
          {customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/> ) })}    
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(App);
