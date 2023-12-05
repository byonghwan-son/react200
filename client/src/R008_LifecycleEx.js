import React, { Component } from 'react'

class R008_LifecycleEx extends Component {

    static getDerivedStateFromProps(props, state) {
        console.log('2. getDerivedStateFromProps Call : ' + props.prop_value)
        return { tmp_state : props.prop_value }
    }

    constructor(props) {
        super(props);
        this.state = {}
        console.log('1. constructor call')
    }

    componentDidMount() {
        console.log('4. componentDidMount Call')
        console.log('5. tmp_state : ' + this.state.tmp_state)
        this.setState({ tmp_state2: true })     // 상태가 변경되면 다시 getDerivedStateFromProps 호출
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // componentDidMount에서 tmp_state2에 true 값을 담아 온다.
        console.log('6. shouldComponentUpdate Call / tmp_state2 = ' + nextState.tmp_state2)
        return nextState.tmp_state2         // 리턴 값이 true 이면 render() 함수를 한 번 더 호출한다.
    }

    render() {
        console.log('3. render call')
        return <h2>[THIS IS shouldComponentUpdate FUNCTION]</h2>
    }
}

export default R008_LifecycleEx;