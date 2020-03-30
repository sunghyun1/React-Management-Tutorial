import React from 'react';
import './App.css';
import Customer from './components/customer';

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
  return (
    <div>
      {customers.map(c => {
        return (
        <Customer
          key={c.id}  // map을 사용함에 있어 key 속성이 필요하다. key 속성을 이용해서 원소를 구분할 수 있다.
                      // 여기서는 id값에 따라 고객이 달라지므로 key는 id가 된다. map을 이용해 다수의 정보를 출력할 때 key 사용 필수
          id={c.id}
          image={c.image}
          name={c.name}
          birthday={c.birthday}
          gender={c.gender}
          job={c.job}
        />
        )
      })}
    </div>
  )
}

class CustomerProfile extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.image} alt="profile"/>
          <h2>{this.props.name}({this.props.id})</h2>
      </div>
    )
  }
}

class CustomerInfo extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.birthday}</p>
        <p>{this.props.gender}</p>
        <p>{this.props.job}</p>
      </div>
    )
  }
}

export default App;
