# react-motion

- 페이지 링크: https://github.com/chenglou/react-motion

React가 최근 핫한 트렌드임을 부인할 수는 없겠지요.

이 프로젝트는 React 기반의 Anmiation 프레임워크 입니다.

[데모보기](https://cdn.rawgit.com/chenglou/react-motion/3b5be548cd08630a836562a053576ff91f94b93f/demo4/index.html)

백문이 불여일견! 데모로 내용을 확인해 보시는게 더 좋을 것 같구요.

개발자에게 중요한 것은 데모도 데모이겠지만 어떻게 개발할 수 있을지 소스코드 snippet 이겠지요.

```
let Demo = React.createClass({
  getInitialState() {
    return {open: false};
  },

  handleMouseDown() {
    this.setState({open: !this.state.open});
  },

  render() {
    return (
      <div>
        <button onMouseDown={this.handleMouseDown}>Toggle</button>
        <Spring endValue={{val: this.state.open ? 400 : 0}}>
          {interpolated =>
            <div className="demo0-block" style={{
              transform: `translate3d(${interpolated.val}px, 0, 0)`,
            }} />
          }
        </Spring>
      </div>
    );
  }
});
```

Spring 태그 안에 값을 어떻게 넣을 지 지정해 주는 방식입니다.
