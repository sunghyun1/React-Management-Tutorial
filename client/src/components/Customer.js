import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Customer extends React.Component { // React.component는 일종의 라이브러리이자 클래스이다
    render() {  // render는 항상 수행되는 함수. Customer의 함수를 실제 화면에 그리고자 할 때 사용한다.
                // render 함수의 경우 출력값을 return 문 안에 작성해야한다.
                // <!-- 이와 같은 하드코딩 대신 props(속성)과 같은 형태로 데이터를 전달한다. -->
        return (
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.image} alt="profile"/></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birthday}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.job}</TableCell>
            </TableRow>
        )
    }
}


export default Customer;