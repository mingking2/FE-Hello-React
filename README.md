# FE-React
React - 리액트를 다루는 기술

- npm start

<img src="https://bangdori.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8518369a-9e17-43ae-b102-b1d7cde394e0%2FUntitled.png?id=97b7447d-ba50-4ddc-91b4-e7dec34a6d0c&table=block&spaceId=00806414-a331-4fe5-9349-7a5c15857f83&width=1590&userId=&cache=v2" width="244px"/>

책을 읽고 내용을 정리하는 레포지토리입니다.

## 목차
- [1장 리액트 시작](#1장-리액트-시작)
- [2장 JSX](#2장-jsx)
- [3장 컴포넌트](#3장-컴포넌트)
- [4장 이벤트 핸들링](#4장-이벤트-핸들링)
- [5장 ref: DOM에 이름 달기](#5장-ref-dom에-이름-달기)
- [6장 컴포넌트 반복](#6장-컴포넌트-반복)
- [7장 컴포넌트의 라이프사이클 메서드](#7장-컴포넌트의-라이프사이클-메서드)
- [8장 Hooks](#8장-hooks)
- [9장 컴포넌트 스타일링](#9장-컴포넌트-스타일링)
- [10장 일정 관리 웹 애플리케이션 만들기](#10장-일정-관리-웹-애플리케이션-만들기)
- [11장 컴포넌트 성능 최적화](#11장-컴포넌트-성능-최적화)
- [12장 immer를 사용하여 더 쉽게 불변성 유지하기](#12장-immer를-사용하여-더-쉽게-불변성-유지하기)
- [13장 리액트 라우터로 SPA 개발하기](#13장-리액트-라우터로-spa-개발하기)
- [14장 외부 API를 연동하여 뉴스 뷰어 만들기](#14장-외부-api를-연동하여-뉴스-뷰어-만들기)
- [15장 Context API](#15장-context-api)
- [16장 리덕스 라이브러리 이해하기](#16장-리덕스-라이브러리-이해하기)
- [17장 리덕스를 사용하여 리액트 애플리케이션 상태 관리하기](#17장-리덕스를-사용하여-리액트-애플리케이션-상태-관리하기)
- [18장 리덕스 미들웨어를 통한 비동기 작업 관리](#18장-리덕스-미들웨어를-통한-비동기-작업-관리)
- [19장 코드 스플리팅](#19장-코드-스플리팅)
- [20장 서버 사이드 렌더링](#20장-서버-사이드-렌더링)
- [21장 백엔드 프로그래밍:Node.js의 Koa 프레임워크](#21장-백엔드-프로그래밍nodejs의-koa-프레임워크)
- [22장 mongoose를 이용한 MongoDB 연동 실습](#22장-mongoose를-이용한-mongodb-연동-실습)
- [23장 JWT를 통한 회원 인증 시스템 구현하기](#23장-jwt를-통한-회원-인증-시스템-구현하기)
- [24장 프런트엔드 프로젝트: 시작 및 회원 인증 구현](#24장-프런트엔드-프로젝트-시작-및-회원-인증-구현)
- [25장 프런트엔드 프로젝트: 글쓰기 기능 구현하기](#25장-프런트엔드-프로적트-글쓰기-기능-구현하기)
- [26장 프런트엔드 프로젝트: 포스트 조회 기능 구현하기](#26장-프런트엔드-프로젝트-포스트-조회-기능-구현하기)
- [27장 프런트엔드 프로젝트: 수정/삭제 기능 구현 및 마무리](#27장-프런트엔드-프로젝트-수정삭제-기능-구현-및-마무리)
- [28장 그다음은?](#28장-그다음은)

## 1장 리액트 시작

### 1.1 왜 리액트인가?
- MVC, MVVM, MVW 등과 같은 여러 구조가 지닌 공통점은 모델(Model)과 뷰(View)가 있다는 것이다.
  - 모델은 애플리케이션에서 사용하는 데이터를 관리하는 영역이고, 뷰는 사용자에게 보이는 부분이다.
  - 프로그램이 사용자에게서 어떤 작업을 받으면 컨트롤러는 모델 데이터를 조회하거나 수정하고, 변경된 사항을 뷰에 반영한다.
    <br><br>
- 업데이트하는 항목에 따라 어떤 부분을 찾아서 변경할지 규칙을 정하는 작업은 간단하지만, 애플리케이션 규모가 크면 상당히 복잡해지고 제대로 관리하지 않으면 성능도 떨어질 수 있다.
  <br><br>
- 페이스북 개발 팀은 이를 해결하려고 하나의 아이디어를 고안했다.
  - 어떤 데이터가 변할 때마다 어떤 변화를 줄지 고민하는 것이 아니라 그냥 기존 뷰를 날려 버리고 처음부터 새로 렌더링하는 방식이다.
  - 이렇게 하면 애플리케이션 구조가 매우 간단하고, 작성해야 할 코드양도 많이 줄어든다.
  - 더이상 어떻게 변화를 줄지 신경 쓸 필요가 없고, 그저 뷰가 어떻게 생길지 선언하며, 데이터에 변화가 있으면 기존에 있던 것은 버리고 정해진 규칙에 따라 새로 렌더링하면 된다.
    <br><br>

**페이스북 개발 팀이 앞서 설명한 방식으로 최대한 성능을 아끼고 편안한 사용자 경험을 제공하면서 구현하고자 개발한 것이 바로 리액트이다.**

<br><br>

- 리액트는 자바스크립트 라이브러리로 사용자 인터페이스를 만드는 데 사용한다. 구조가 MVC, MVW 등인 프레임워크와 달리, **오직 V만 신경 쓰는 라이브러리이다.**
  <br><br>
- 리액트 프로젝트에서 특정 부분이 어떻게 생길지 정하는 선언체가 있는데, 이를 **컴포넌트**라고 한다.
- 컴포넌트는 다른 프레임워크에서 사용자 인터페이스를 다룰 때 사용하는 템플릿과는 다른 개념이다.
- 템플릿은 보통 데이터셋이 주어지면 HTML 태그 형식을 문자열로 반환하는데, 이와 달리 컴포넌트는 좀 더 복합적인 개념이다.
- 컴포넌트는 재사용이 가능한 API로 수많은 기능들을 내장하고 있으며, 컴포넌트 하나에서 해당 컴포넌트의 생김새와 작동 방식을 정의한다.
  <br><br>
- 렌더링: 사용자 화면에 뷰를 보여 주는 것
- 리액트 라이브러리는 뷰를 어떻게 렌더링하길래 데이터가 변할 때마다 새롭게 리렌더링하면서 성능을 아끼고, 최적의 사용자 경험을 제공할 수 있을까?
- 이 비밀을 알려면 리액트 컴포넌트가 최초로 실행한 **'초기 렌더링'** 과 컴포넌트의 데이터 변경으로 다시 실행되는 **'리렌더링'** 개념을 이해해야 한다.
  <br><br>
- 초기 렌더링
  - 어떤 UI 관련 프레임워크, 라이브러리를 사용하든지 간에 맨 처음 어떻게 보일지를 정하는 초기 렌더링이 필요하다. 리엑트에서는 이를 다루는 render 함수가 있다.
  - 이 함수는 컴포넌트가 어떻게 생겼는지 정의하는 역할을 한다. 이 함수는 html 형식의 문자열을 반환하지 않고, 뷰가 어떻게 생겼고 어떻게 동작하는지에 대한 정보를 지닌 객체를 반환한다.
  - 컴포넌트 내부에는 또 다른 컴포넌트들이 들어갈 수 있다. 이때 render 함수를 실행하면 그 내부에 있는 컴포넌트들도 재귀적으로 렌더링한다.
  - 이렇게 최상위 컴포넌트의 렌더링 작업이 끝나면 지니고 잇는 정보들을 사용하여 HTML 마크업을 만들고, 이를 우리가 정하는 실제 페이지의 DOM 요소 안에 주입한다.

![images](/images/초기%20렌더링.png)  
 <br><br>

- 조화 과정
  - 리액트 라이브러리에서 중요한 부분인 업데이트를 어떻게 진행하는지 알아보자.
  - 리엑트에서 뷰를 업데이트할 때는 "업데이트 과정을 거친다"라고 하기보다는 "조화 과정을 거친다"라고 하는 것이 더 정확하다.
  - 컴포넌트에서 데이터에 변화가 있을 때 우리가 보기에는 변화에 따라 뷰가 변형되는 것처럼 보이지만, 사실은 새로운 요소로 갈아 끼우기 때문이다.
    <br><br>
  - 이 작업 또한 render 함수가 맡아서 한다.
    - render 함수는 뷰가 어떻게 생겼고 어떻게 동작하는지 객체를 반환한다.
  - 컴포넌트는 데이터를 업데이트했을 때 단순히 업데이트한 값을 수정하는 것이 아니라, 새로운 데이터를 가지고 render 함수를 또 다시 생성한다.
    - 하지만 이때 render 함수가 반환하는 결과를 곧바로 DOM에 반영하지 않고, 이전에 render 함수가 만들었던 컴포넌트 정보와 현재 render 함수가 만든 컴포넌트 정보를 비교한다.
    <br><br>
    ![Alt text](/images/두%20DOM%20비교.png)
    <br><br>
    - 자바스크립트를 사용하여 두 가지 뷰를 최소한의 연산으로 비교한 후, 둘의 차이를 알아내 최소한의 연산으로 DOM 트리를 업데이트한다.
    <br><br>
    ![Alt text](/images/DOM%20트리의%20차이%20확인.png)
    <br><br>

**결국 방식 자체는 루트 노드부터 시작하여 전체 컴포넌트를 처음부터 다시 렌더링하는 것처럼 보이지만, 사실 최적의 자원을 사용하여 이를 수행하는 것이다.**    

<br><br>

### 1.2 리액트의 특징
- Virtual DOM
    - 리액트의 주요 특징 중 하나는 Virtual DOM을 사용하는 것이다.
    <BR><BR>
    - DOM(Document Object Model)
        - 객체로 문서 구조를 표현하는 방법으로 XML이나 HTML로 작성한다.
        - 웹 브라우저는 DOM을 활용하여 객체에 자바스크립트와 CSS를 적용한다.
        - DOM은 트리 형태라서 특정 노드를 찾거나 수정하거나 삭제하거나 원하는 곳에 삽입할 수 있다.
        <bR><BR>
    - DOM은 느린가?
        - 요즘 DOM API를 수많은 플랫폼과 웹 브라우저에서 사용하는데, **DOM의 문제점은 바로 동적 UI에 최적화되어 있지 않다는 것이다.**
        - HTML은 자체적으로는 정적이지만 자바스크립트를 사용하여 동적으로 만들 수 있다.
        - 하지만 요즘 흔히 접하는 큰 규모의 웹 애플리케이션(페이스북)을 생각해보자.
            - 스크롤바를 내릴수록 수많은 데이터가 로딩된다.
            - 규모가 큰 웹 애플리케이션에서 DOM에 직접 접근하여 변화를 주다 보면 성능 이슈가 조금씩 발생하기 시작한다. = 느려진다.
            - DOM자체는 빠르다. **단, 웹 브라우저 단에서 DOM에 변화가 일어나면 웹 브라우저가 CSS를 다시 연산하고, 레이아웃을 구성하고, 페이지를 리페인트한다.**
                - 이 과정에서 시간이 허비된다.
            <bR><BR>
    - 해결법
        - DOM을 조작할 때마다 엔진이 웹 페이지를 새로 그리기 때문에 업데이트가 너무 잦으면 성능이 저하될 수 있다.
        - DOM을 최소한으로 조작하여 작업을 처리하는 방식으로 개선할 수 있다.
        - **리액트는 Virtual DOM 방식을 사용하여 DOM 업데이트를 추상화함으로써 DOM 처리 횟수를 최소화하고 효율적으로 진행한다.**
        <bR><BR>
        <bR><BR>
    - Virtual DOM
        - Virtual DOM을 사용하면 실제 DOM에 접근하여 조작하는 대신, 이를 추상화한 자바스크립트 객체를 구성하여 사용한다.
        <bR><BR>
        - 리액트에서 데이터가 변하여 웹 브라우저에 실제 DOM을 업데이트할 때는 다음 세 가지 절차를 밟는다.
            1. 데이터를 업데이트하면 전체 UI를 Virtual DOM에 리렌더링한다.
            2. 이전 Virtual DOM에 있던 내용과 현재 내용을 비교한다.
            3. 바뀐 부분만 실제 DOM에 적용한다.
    <bR><BR>
    - 오른쪽의 **'새로운 DOM 트리'가 바로 Virtual DOM**이다.
    ![dom](/images/두%20DOM%20비교.png)
    <bR><BR>
        - 오해
            - Virtual DOM을 사용한다고 해서 사용하지 않을 때와 비교하여 무조건 빠른 것은 아니다.
            - **지속적으로 데이터가 변환하는 대규모 애플리케이션 구축하기** 
            - 래액트와 Virtual DOM이 언제나 제공할 수 있는 것은 바로 업데이트 처리 간결성이다. UI를 업데이트하는 과정에서 생기는 복잡함을 모두 해소하고, 더욱 쉽게 업데이트에 접근할 수 있다.
            

            
### 1.3 작업 환경 설정
- Node.js
- npm

## 2장 JSX

### 2.1 코드 이해하기
```jsx
import logo from "./logo.svg";
import "./App.css";
```
- import 구문은 특정 파일을 불러오는 것을 의미한다. 리액트로 만든 프로젝트의 자바스크립트 파일에서는 import를 사용하여 다른 파일들을 불러와 사용할 수 있다.
- 모듈을 불러와서 사용하는 것은 사실 원래 브라우저에는 없던 기능이다. 브라우저가 아닌 환경에서 자바스크립트를 실행할 수 있게 해 주는 환경인 Node.js에서 지원하는 기능이다.
- 참고로 Node.js에서는 import가 아닌 require라는 구문으로 패키지를 불러올 수 있다.
- 이러한 기능을 브라우저에서도 사용하기 위해 번들러를 사용한다.
<br><br>
- 대표적인 번들러로 웹팩, Parcel, browserify라는 도구들이 있다. 리액트 프로젝트에서는 주로 웹팩을 사용한다. 펀의성과 확장성이 다른 도구보다 뛰어나기 때문이다.
<br><br>
- 웹팩을 사용하면 SVG 파일과 CSS 파일도 불러와서 사용할 수 있다. 이렇게 파일들을 불러오는 것은 웹팩의 로더라는 기능이 담당한다.
    - css-loader: CSS 파일을 불러올 수 있게 한다.
    - file-loader: 자바스크립트 파일들을 불러오면서 최신 자바스크립트 문법으로 작성된 코드를 바벨이라는 도구를 사용하여 ES5 문법으로 변환해준다.
- 웹팩의 로더는 원래 직접 설치하고 설정해야 하지만 리액트 프로젝트를 만들 때 사용했던 create-react-app이 번거로운 작업을 모두 대신해 주기 때문에 별도의 설정이 필요없다.
<br><br>
### 2.2 JSX란?
- JSX는 자바스크립트의 확장 문법이며 XML과 매우 비슷하게 생겼다. 이런 형식으로 작성한 코드는 브라우저에서 실행되기 전에 코드가 번들링되는 과정에서 바벨을 사용하여 일반 자바스크립트 형태의 코드로 변환된다.
```JSX
function App() {
    return (
        <div>
            Hello <b>react</b>
        </div>
    );
}
```
```jsx
function App() {
    return React.createElement("div", null, "Hello ", React.createElement("b", null, "react));
}
```
- 만약 컴포넌트를 렌더링할 때마다 JSX 코드를 작성하는 것이 아니라 위 코드처럼 매번 React.createElement 함수를 사용해야 한다면 매우 불편하다. 
- JSX를 사용하면 매우 편하게 UI를 렌더링할 수 있다.
<br><br>

### 2.3 JSX의 장점
1. 보기 쉽고 익숙하다
    - JSX를 사용하는 편이 더 가독성이 높고 작성하기 쉽다.
2. 더욱 높은 활용도
    - JSX에서는 우리가 알고 있는 div나 span 같은 HTML 태그를 사용할 수 있을 뿐만 아니라, 앞으로 만들 컴포넌트도 JSX 안에서 작성할 수 있다.
<br><br>

### 2.4 JSX 문법
1. 감싸인 요소
    - 컴포넌트에 여러 요소가 있다면 반드시 부모 요소 하나로 감싸야 한다.
        - Virtual DOM에서 컴포넌트 변화를 감지해 낼 때 효율적으로 비교할 수 있도록 컴포넌트 내부는 하나의 DOM 트리 구조로 이루어져야 한다는 규칙이 있기 때문이다.
    ```jsx
    function App() {
        return (
            <div>
                <h1>리액트 안녕!</h1>
                <h2>잘 작동하니?</h2>
            </div>
        )
    }

    export default App;
    ```
    ```jsx
    import { Fragment } from 'react';

    function App() {
        return (
            <Fragment>
                <h1>리액트 안녕!</h1>
                <h2>잘 작동하니?</h2>
            </Fragment>
        )
    }

    export default App;
    ```
    ```jsx
    function App() {
        return (
            <>
                <h1>리액트 안녕!</h1>
                <h2>잘 작동하니?</h2>
            </>
        )
    }

    export default App;
    ```
<br><br>
2. 자바스크립트 표현
- JSX 안에서는 자바스크립트 표현식을 쓸 수 있다.
- 자바스크립트 표현식을 작성하려면 JSX 내부에서 코드를 { }로 감싸면 된다.
    ```jsx
    function App() {
        const name = '리액트';
        return (
            <>
                <h1>{name} 안녕!</h1>
                <h2>잘 작동하니?</h2>
            </>
        )
    }

    export default App;
    ```
<br><br>
3. IF 문 대신 조건부 연산자
- JSX 내부의 자바스크립트 표현식에서 if 문을 사용할 수 없다.
- 하지만 조건에 따라 다른 내용을 렌더링해야 할 때는 JSX 밖에서 if 문을 사용하여 사전에 값을 설정하거나, { } 안에 조건부 연산자를 사용하면 된다.
- 조건부 연산자의 또 다른 이름은 삼항 연산자이다.
    ```jsx
    function App() {
        const name = '리액트';
        return (
            <div>
                {name === '리액트' ? (
                    <h1>리액트입니다.</h1>
                ) : (
                    <h2>리액트가 아닙니다.</h2>    
                )}
            </div>
        );
    }

    export default App;
    ```
<br><br>
4. AND 연산자(&&)를 사용한 조건부 렌더링
```jsx
function App() {
    const name = '뤼액트';
    return <div>{name === '리액트' && <h1>리액트입니다.</h1>}</div>;
}

export default App;
```
<br><br>
5. undefined를 렌더링하지 않기
- 리액트 컴포넌트에서는 함수에서 undefined만 반환하여 렌더링하는 상황을 만들면 안 된다.
    - 어떤 값이 undefined일 수도 있다면, OR(||) 연산자를 사용하면 해당 값이 undefined일 때 사용할 값을 지정할 수 있으므로 간단하게 오류를 방지할 수 있다.
    ```jsx
    import './App.css';

    function App() {
        const name = undefined;
        return name || '값이 undefined입니다.';
    }

    export default App;
    ```
    <br><br>
    - 반면 JSX 내부에서 undefined를 렌더링하는 것은 괜찮다.    
    ```jsx
    import './App.css';

    function App() {
        const name = undefined;
        return <div>name</div>;
    }

    export default App;
    ```
<br><br>
6. 인라인 스타일링
- 리액트에서 DOM 요소에 스타일을 적용할 때는 문자열 형태로 넣는 것이 아니라 객체 형태로 넣어 주어야 한다.
- 카멜 표기법으로 작성해야 한다.
```jsx
function App() {
    const name = '리액트';
    const style = {
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: '48px',
        fontWeight: 'bold',
        padding: 16
    };
    return <div style={style}>{name}</div>;
}

export default App;
```
- 지금은 style 객체를 미리 선언하고 div의 style 값으로 지정해 주었는데 미리 선언하지 않고 바로 style 값을 지정할 수도 있다.
```jsx
function App() {
    const name = '리액트';

    return (
        <div 
            style={{
                backgroundColor: 'black',
                color: 'aqua',
                fontSize: '48px',
                fontWeight: 'bold',
                padding: 16
            }}
        >
            {name}
        </div>
    );
}

export default App;
```
<br><br>
7. class 대신 className
- 일반 HTML에서 CSS 클래스를 사용할 때는 `<div class="myclass"></div>`와 같이 class라는 속성을 설정한다. 하지만 JSX에서는 class가 아닌 className으로 설정해 주어야 한다.
```css
.react {
    background: 'aqua',
    color: 'black',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16px
}
```

```jsx
import './App.css';

function App() {
    const name = '리액트';
    return <div className="react">{name}</div>;
}

export default App;
```

<br><br>
8. 꼭 닫아야 하는 태그
- `<input></input>`
- `<input />`
    - 태그 사이에 별도의 내용이 들어가지 않는 경우 self-closing 태그라고 부른다.
    - 선언하면서 동시에 닫을 수 있는 태그이다.

<br><br>
9. 주석
- {/* ... */}
<br><br>

### 2.5 ESLint와 Prettier 적용하기
- 기타 설정
<br><br>

### 2.6 정리
- JSX는 HTML과 비슷하지만 완전히 똑같지는 않다. 코드로 보면 XML 형식이지만 실제로는 자바스크립트 객체이며, 용도도 다르고 문법도 조금씩 차이가 난다.
<br><br>

## 3장 컴포넌트

### 3.1 클래스형 컴포넌트
- 컴포넌트를 선언하는 방식은 두 가지이다.
    - 함수 컴포넌트
        ```js
        import './App.css';
        
        function App() {
            const name = '리액트';
            return return <div className="react">{name}</div>;
        }

        export default App;
        ```
    - 클래스형 컴포넌트
        ```js
        import { Component } from 'react';

        class App extends Component {
            render() {
                const name = 'react';
                return <div className="react">{name}</div>;
            }
        }

        export default App;
        ```
- 클래스형 컴포넌트와 함수 컨포넌트의 차이점
    - 클래스형 컴포넌트
        - state 기능 및 라이프 사이클 기능을 사용할 수 있다.
        - 임의 메서드를 정의할 수 있다.
        - render 함수가 꼭 있어야 하고, 그 안에서 보여 주어야 할 JSX를 반환해야 한다.
    - 함수형 컴포넌트
        - 클래스형 컴포넌트보다 선언하기 훨씬 편하다.
        - 메모리 자원도 클래스형 컴포넌트보다 덜 사용한다.
        - 프로젝트를 완성하여 빌드한 후 배포할 때도 함수 컴포넌트를 사용하는 것이 결과물의 파일 크기가 더 작다.(중요하지 않음)
        - state와 라이프사이클 API의 사용이 불가능하다
            - Hooks라는 기능 도입되면서 해결

- 그래서 뭘 써야하나?
    - 초반부에서는 기능을 구현할 때 클래스형 컴포넌트 위주로 사용하여 리액트의 기본기를 익힌다.
    - 후반부에서는 Hooks를 완벽히 이해한 후 함수 컴포넌트와 Hooks를 기반으로 컴포넌트를 작성한다.
<br><br>

### 3.2 첫 컴포넌트 생성
- src 디렉토리에 MyComponent.js 파일 생성
- 코드 작성하기
- 모듈 내보내기 및 불러오기
    - 모듈 내보내기(export)
    - 모듈 불러오기(import)

### 3.3 props
props는 properties를 줄인 표현으로 컴포넌트 속성을 설정할 때 사용하는 요소이다. 
- JSX 내부에서 props 렌더링
    - props 값은 컴포넌트 함수의 피라미터로 받아 와서 사용할 수 있다.
    ```js
    const MyComponent = props => {
        return <div>안녕하세요, 제 이름은 {props.name}입니다.</div>;
    };

    export default MyComponent;
    ```
    <br><br>
- 컴포넌트를 사용할 때 props 값 지정하기
    ```js
    import MyComponent from './MyComponent';

    const App = () => {
        return <MyComponent name="React" />;
    };

    export default App;
    ```
    <br><br>
- props 기본값 설정: defaultProps
    ```js
    const MyComponent = props => {
        return <div>안녕하세요, 제 이름은 {props.name}입니다.</div>;
    };

    MyComponent.defaultProps = {
        name: '기본 이름'
    };

    export default MyComponent;
    ```
    <br><br>
- 태그 사이의 내용을 보여 주는 children
    ```js
    import MyComponent from './MyComponent';

    const App = () => {
        return <MyComponent>리액트</MyComponent>;
    };

    export default App;
    ```

    ```js
    const MyComponent = props => {
        return (
            <div>
                안녕하세요, 제 이름은 {props.name}입니다. <br />
                children 값은 {props.children}
                입니다.
            </div>
        );
    };

    MyComponent.defaultProps = {
        name: '기본 이름'
    };

    export default MyComponent;
    ```
    <br><br>
- 비구조화 할당 문법을 통해 props 내부 값을 추출하기
    ```js
    const MyComponent = props => {
        const { name, children } = props;
        return (
            <div>
                안녕하세요, 제 이름은 {name}입니다. <br />
                children 값은 {children}
                입니다.
            </div>
        );  
    };

    MyComponent.defaultProps = {
        name: '기본 이름'
    };

    export default MyComponent;
    ```
    - 객체에서 값을 추출하는 문법을 비구조화 할당이라고 한다.
    <br><br>
    ```js
    const MyComponent = ({ name, children }) => {
        return (
            <div>
                안녕하세요, 제 이름은 {name}입니다. <br />
                children 값은 {children}
                입니다.
            </div>
        );  
    };

    MyComponent.defaultProps = {
        name: '기본 이름'
    };

    export default MyComponent;
    ```
    - 앞으로 함수 컴포넌트에서 props를 사용할 때 이렇게 파라미터 부분에서 비구조화 할당 문법을 사용한다.
<br><br>
- propTypes를 통한 props 검증
    - 컴포넌트의 필수 props를 지정하거나 props의 타입을 지정할 때는 propTypes를 사용한다.
    ```js
    import PropTypes from 'prop-types';

    const MyComponent = ({ name, children }) => {
        return (....);
    };

    MyComponent.defaultProps = {
        name: '기본 이름'
    };
    
    MyComponent.propTypes = {
        name: ProTypes.string
    };

    export default MyComponent;
    ```

    ```js
    import MyComponent from './MyComponent';

    const App = () => {
        return <MyComponent name="React">리액트</MyComponent>;
    };

    export default App;
    ```
    
    - isRequired를 사용하여 필수 propTypes 설정

    ```js
    import PropTypes from 'prop-types';

    const MyComponent = ({ name, favoriteNumber, children }) => {
        return (
            <div>
                안녕하세요, 제 이름은 {name}입니다. <br />
                children 값은 {children}
                입니다.
                <br />
                제가 좋아하는 숫자는 {favoriteNumber}입니다.
            </div>
        );
    };

    MyComponent.defaultProps = {
        name: '기본 이름'
    };
    
    MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
    };

    export default MyComponent;
    ```
 
    ```js
    import MyComponent from './MyComponent';

    const App = () => {
        return (
            <MyComponent name="React" favoriteNumber={1}>
            리액트
            </MyComponent>
        );
    };

    export default App;
    ```
- 더 많은 PropTypes 종류
    - array: 배열
    - arrayOf(다른 PropType): 특정 PropType으로 이루어진 배열
    - bool
    - func: 함수
    - number
    - object
    - string
    - symbol: ES6의 Symbol
    - node: 렌더링할 수 있는 모든 것
    - instanceOf: 특정 클래스의 인스턴스
    - oneOf(['dog', 'cat']): 주어진 배열 요소 중 값 하나
    - oneOfType([React.PropTypes.string, PropTypes.number]): 주어진 배열 안의 종류 중 하나
    - objectOf(React.PropTypes.number): 객체의 모든 키 값이 인자로 주어진 PropType인 객체
    - shape({ name: PropTypes.string, num: PropTypes.number }): 주어진 스키마를 가진 객체
    - any: 아무 종류
<br /><br />
- 클래스형 컴포넌트에서 props 사용하기
    - 클래스형 컴포넌트에서 props를 사용할 때는 render 함수에서 this.props를 조회하면 된다.
    ```js
    import { Component } from 'react';
    import PropTypes from 'prop-types';

    class MyComponent extends Component {
        render() {
            const { name, favoriteNumber, children } = this.props; // 비구조화 할당
            return (
                <div>
                    안녕하세요, 제 이름은 {name}입니다. <br />
                    children 값은 {children}
                    입니다.
                    <br />
                    제가 좋아하는 숫자는 {favoriteNumber}입니다.
                </div>
            );
        }
    }

    MyComponent.defaultProps = {
    name: '기본 이름'
    };

    MyComponent.propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired
    };

    export default MyComponent;
    ```
    - 클래스형 컴포넌트에서 defaultProps와 propTypes를 설정할 때 class 내부에서 지정하는 방법도 있다.
     ```js
    import { Component } from 'react';
    import PropTypes from 'prop-types';

    class MyComponent extends Component {
        static defaultProps = {
            name: '기본 이름'
        };

        static propTypes = {
            name: PropTypes.string,
            favoriteNumber: PropTypes.number.isRequired
        };

        render() {
            const { name, favoriteNumber, children } = this.props; // 비구조화 할당
            return (
                <div>
                    안녕하세요, 제 이름은 {name}입니다. <br />
                    children 값은 {children}
                    입니다.
                    <br />
                    제가 좋아하는 숫자는 {favoriteNumber}입니다.
                </div>
            );
        }
    }

    export default MyComponent;
    ```
    <br />
### 3.4 state
- props는 컴포넌트가 사용되는 과정에서 부모 컴포넌트가 설정하는 값이며, 컴포넌트 자신은 해당 props를 읽기 전용으로만 사용할 수 있다.
    - props를 바꾸려면 부모 컴포넌트에서 바꿔야 한다.
<br /><br />
- 리액트에서 state는 컴포넌트 내부에서 바뀔 수 있는 값을 의미한다.
    - 클래스형 컴포넌트가 지니고 있는 state
    - 함수 컴포넌트에서 useState라는 함수를 통해 사용하는 state
    <br /><br />

- 클래스형 컴포넌트의 state
    ```js
    import { Component } from "react";

    class Counter extends Component {
        constructor(props) {
            super(props);
            // state의 초깃값 설정하기
            this.state = {
                number: 0
                fixedNumber: 0 // state 객체 안에 여러 값을 넣을 수 있다.
            };
        }
        render() {
            const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회한다.
            return (
                <div>
                    <h1>{number}</h1>
                    <h2>변하지 않는 값: {fixedNumber}</h2>
                    <button
                        // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정한다.
                        onClick={() => {
                            // this.setState를 사용하여 state에 새로운 값을 넣을 수 있다.
                            this.setState({ number: number + 1});
                    }}
                    >
                        +1
                    </button>
                </div>
            );
        }
    }

    export default Counter;
    ```
    - state를 construcotr에서 꺼내기
        ```js
        state = {
            number: 0,
            fixedNumber: 0
        };
        ```
        - 이렇게 하면 constructor 메서드를 선언하지 않고도 state 초깃값을 설정할 수 있다.
        - 앞으로 state를 사용할 때 이 방식을 사용하여 state의 초깃값을 설정한다.
           <br /><br />
    - this.setState에 객체 대신 함수 인자 전달하기
        - this.setState를 사용하여 state 값을 업데이트할 때는 상태가 비동기적으로 업데이트된다.
        - 만약 다음과 같이 onClick에 설정한 함수 내부에서 this.setState를 두 번 호출하면 어떻게 되는가?
        ```js
        onClick={() => {
            // this.setState를 사용하여 state에 새로운 값을 넣을 수 있다.
            this.setState({ number: number + 1 });
            this.setState({ number: this.state.number + 1 });
        }}
        ```
        - 결과: this.setState를 두 번 사용하는 것임에도 불구하고 버튼을 클릭할 때 숫자가 1씩 더해진다. 
        - this.setState를 사용한다고 해서 state 값이 바로 바뀌지는 않는다.
            <br /><br />
        - 해결책: this.setState를 사용할 때 객체 대신에 함수를 인자로 넣어준다.
        ```js
        this.setState((prevState, props) => {
            return {
                // 업데이트하고 싶은 내용
            }
        })
        ```
        - prevState는 기존 상태이고, props는 현재 지니고 있는 props를 가리킨다. 만약 업데이트하는 과정에서 props가 필요하지 않다면 생략해도 된다.
        ```js
        <button
            // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정한다.
            onClick={() => {
                this.setState(prevState => {
                    return {
                        number: prevState.number + 1
                        };
                    });
                    // 위 코드와 아래 코드는 완전히 똑같은 기능을 한다.
                    // 아래 코드는 함수에서 바로 객체를 반환한다는 의미이다.
                    this.setState(prevState => ({
                        number: prevState.number + 1
                    }));
                }}
            >   
               +1
            </button>
        ```
        <br /><br />
    - this.setState가 끝난 후 특정 작업 실행하기
        - setState를 사용하여 값을 업데이트하고 난 다음에 특정 작업을 하고 싶을 때는 setState의 두 번째 파라미터로 콜백 함수를 등록하여 작업을 처리할 수 있다.
        ```js
        <button
            // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정한다.
            onClick={() => {
                this.setState(
                {
                    number: number + 1
                },
                () => {
                    console.log('방금 setState가 호출되었다.');
                    console.log(this.state);
                    }
                );
            }}
        >   
          +1
        </button>
        ```
    <br /><br />
- 함수 컴포넌트에서 useState 사용하기
    - 배열 비구조화 할당
        - 배열 안에 들어 있는 값을 쉽게 추출할 수 있도록 해주는 문법
        ```js
        const array = [1, 2];
        
        const one = array[0];
        const two = array[1];

        const [one, two] = array;
        ```
    - useState 사용하기
        ```js
        import { useState } from "react";

        const Say = () => {
            const [message, setMessage] = useState('');
            const onClickEnter = () => setMessage('안녕하세요!');
            const onClickLeave = () => setMessage('안녕히 가세요!');

            return (
                <div>
                    <button onClick={onClickEnter}>입장</button>
                    <button onClick={onClickLeave}>퇴장</button>
                    <h1>{message}</h1>
                </div>
            );
        };

        export default Say;
        ```
    - 한 컴포넌트에서 useState 여러 번 사용하기
        ```js
        const [color, setColor] = useState('black');

        return (
            <div>
                <button onClick={onClickEnter}>입장</button>
                <button onClick={onClickLeave}>퇴장</button>
                <h1 style={{ color }}>{message}</h1>
                <button style={{ color: 'red' }} onClick={() => setColor('red')}>빨간색</button>
                <button style={{ color: 'green' }} onClick={() => setColor('green')}>초록색</button>
                <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>파란색</button>
            </div>
        );
        ```
    
    <br /><br />
### 3.5 state를 사용할 때 주의 사항
- state 값을 바꾸어야 할 때는 setState 혹은 useState를 통해 전달받은 세터 함수를 사용해야 한다.
- 배열이나 객체를 업데이트해야 할 때는 어떻게 할까?
    - 배열이나 객체 사본을 만들고 그 사본에 값을 업데이트한 후, 그 사본의 상태를 setState 혹은 세터 함수를 통해 업데이트한다.
    ```js
    // 객체 다루기
    const object = { a: 1, b: 2, c: 3 };
    const nextObject = { ...object, b: 2 }; // 사본을 만들어서 b 값만 덮어 쓰기
    
    // 배열 다루기
    const array = [
        { id: 1, value: true },
        { id: 2, value: true },
        { id: 3, value: false }
    ];
    let nextArray = array.concat({ id: 4 }); // 새 항목 추가
    nextArray.filter(item => item.id !== 2); // id가 2인 항목 제거
    nextArray.map(item => (item.id === 1 ? { ...item, value: false } : item)); // id가 1인 항목의 value를 false로 설정
    ```
    - 객체에 대한 사본을 만들 때는 spread 연산자라 불리는 ...을 사용하여 처리하고, 배열에 대한 사본을 만들 때는 배열의 내장 함수를 활용한다.
    <br /><br />
### 3.6 정리
- props와 state는 둘 다 컴포넌트에서 사용하거나 렌더링할 데이터를 담고 있으므로 비슷해 보일 수 있지만, 그 역할은 매우 다르다.
    - props는 부모 컴포넌트가 설정하고, state는 컴포넌트 자체적으로 지닌 값으로 컴포넌트 내부에서 값을 업데이트할 수 있다.
    - props를 사용한다고 해서 값이 무조건 고정적이지는 않다.
    - 부모 컴포넌트의 state를 자식 컴포넌트의 props로 전달하고, 자식 컴포넌트에서 특정 이벤트가 발생할 때 부모 컴포넌트의 메서드를 호출하면 props도 유동적으로 사용할 수 있다.
    <br /><br />

![Alt text](<images/props와 state 요약.png>)
<br /><br />
**앞으로 새로운 컴포넌트를 만들 때는 useState를 사용할 것을 권장한다.**
<br /><br />


## 4장 이벤트 핸들링
사용자가 웹 브라우저에서 DOM 요소들과 상호 작용하는 것을 이벤트라고 한다.
<br /><br />

### 4.1 리액트의 이벤트 시스템
- 이벤트를 사용할 때 주의 사항
    1. 이벤트 이름은 카멜 표기법으로 작성한다.
    2. 이벤트를 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달한다.
    3. DOM 요소에만 이벤트를 설정할 수 있다.
<br /><br />
- 이벤트 종류
    - Clipboard
    - Composition
    - Keyboard
    - Focus
    - Form
    - Mouse
    - Selection
    - Touch
    - UI
    - Wheel
    - Media
    - Image
    - Animation
    - Transition
<br /><br />

### 4.2 예제로 이벤트 핸들링 익히기
- 컴포넌트 생성
- App.js에서 EventPractice 렌더링
- onChange 이벤트 핸들링하기
    ```js
    <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        onChange={
            (e) => {
                console.log(e.target.value);
            }
        }
     />
    ```
    - 콘솔에 기록되는 e 객체는 SyntheticEvent로 웹 브라우저의 네이티브 이벤트를 감싸는 객체이다.
    - SyntheticEvent는 네이티브 이벤트와 달리 이벤트가 끝나고 나면 이벤트가 초기화되므로 정보를 참조할 수 없다.
    - 만약 비동기적으로 이벤트 객체를 참조할 일이 있다면 e.persist() 함수를 호출해야 한다.
    - 변할 인풋 값인 **e.target.value**를 콘솔에 기록한다.
<br /><br />
- state에 input 값 담기 
    ```js
    <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={this.state.message}
        onChange={
            (e) => {
                this.setState({
                    message: e.target.value
                })
            }
        }
    />
    ```
    - 생성자 메서드인 constructor에서 state 초깃값을 설정하고, 이벤트 핸들링 함수 내부에서 this.setState 메서드를 호출하여 state를 업데이트한다.
    - input의 value 값을 state에 있는 값으로 설정한다.
<br /><br />
- 버튼을 누를 때 comment 값을 공백으로 설정
    ```js
    <button onClick={
        () => {
                alert(this.state.message);
                this.setState({
                    message: ''
                });
        }
    }>확인</button>
    ```
<br /><br />
- 임의 메서드 만들기
    - 이벤트를 처리할 때 렌더링하는 동시에 함수를 만들어서 전달했다.
    - 이 방법 대신 함수를 미리 준비하여 전달하는 방법도 있다.
        - 성능 차이는 거의 없지만, 가독성이 훨씬 높다.
    - onChange와 onClick에 전달한 함수를 따로 빼내서 컴포넌트 임의 메서드를 만들자.
    ```js
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({
            message: e.target.value
        });
    }

    handleClick() {
        alert(this.state.message);
        this.setState({
            message: ''
        });
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요"
                    value={this.state.message}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
    ```
    - 함수가 호출될 때 this는 호출부에 따라 결정되므로, 클래스의 임의 메서드가 특정 HTML 요소의 이벤트로 등록되는 과정에서 메서드와 this의 관계가 끊어져 버린다.
    - 이 때문에 임의 메서드가 이벤트로 등록되어도 this를 컴포넌트 자신으로 제대로 가리키기 위해서는 메서드를 this와 바인딩하는 작업이 필요하다.
    - 만약 바인딩하지 않는 경우라면 this가 undefined를 가리키게 된다.
        - 현재 constructor 함수에서 함수를 바인딩하는 작업이 이루어지고 있다.
<br /><br />
- Property Initializer Syntax를 사용한 메서드 작성
    - 메서드 바인딩은 생성자 메서드에서 하는 것이 정석이다.
    - 새 메서드를 만들 때마다 constructor를 수정해야하기 때문에 불편하다.
    <br /><br />
    - 바벨의 transform-class-properties 문법을 사용하여 화살표 함수 형태로 메서드를 정의한다.
    ```js
    handleChange = (e) => {
        this.setState({
            message: e.target.value
        });
    }

    handleClick = () => {
        alert(this.state.message);
        this.setState({
            message: ''
        });
    }

    
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요"
                    value={this.state.message}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
    ```
<br /><br />
- input 여러 개 다루기
    - event 객체를 활용하여 e.target.name 값을 사용한다.
    ```js
    class EventPractice extends Component {

        state = {
            username: '',
            message: ''
        }

        handleChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            });
        }

        handleClick = () => {
            alert(this.state.username + ": " + this.state.message);
            this.setState({
                username: '',
                message: ''
            });
        }


        render() {
            return (
                <div>
                    <h1>이벤트 연습</h1>
                    <input
                        type="text"
                        name="username"
                        placeholder="사용자명"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="message"
                        placeholder="아무거나 입력해 보세요"
                        value={this.state.message}
                        onChange={this.handleChange}
                    />
                    <button onClick={this.handleClick}>확인</button>
                </div>
            );
        }
    }
    ```
<br /><br />
- onKeyPress 이벤트 핸들링
    ```js
   handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleClick();
        }
    }

    ...
    <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={this.state.message}
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
    />
    ```
<br /><br />

### 4.3 함수 컴포넌트로 구현해 보기
- 방금 우리가 했던 작업을 함수 컴포넌트로 똑같이 구현해보자
```js
import { useState } from "react";

const EventPractice = () => {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const onChangeUsername = e => setUsername(e.target.value);
    const onChangeMessage = e => setMessage(e.target.value);
    const onClick = () => {
        alert(username + ": " + message);
        setUsername('');
        setMessage('');
    };
    const onKeyPress = e => {
        if(e.key === 'Enter') {
            onClick();
        }
    };
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input 
                type="text"
                name="username"
                placeholder="사용자명"
                value={username}
                onChange={onChangeUsername}
            />
            <input
                type="text"
                name="message"
                placeholder="아무거나 입력해 보세요"
                value={message}
                onChange={onChangeMessage}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    );
};
export default EventPractice;
```
- 위 코드는 e.target.name을 활용하지 않고 onChange 관련 함수 두 개를 따로 만들었다.
- input의 개수가 많아진다면 e.target.name을 활용하는 것이 더 좋을 수 있다.
<br /><br />
<br /><br />
- 이번에는 useState를 통해 사용하는 상태에 문자열이 아닌 객체를 넣어 보자.
```js
import { useState } from "react";

const EventPractice = () => {
    const [form, setForm] = useState({
        username: '',
        message: ''
    });
    const { username, message } = form;
    const onChange = e => {
        const nextForm = {
            ...form, // 기존의 form 내용을 이 자리에 복사한 뒤
            [e.target.name]: e.target.value // 원하는 값을 덮어 씌우기
        };
        setForm(nextForm);
    };
    const onClick = () => {
        alert(username + ": " + message);
        setForm({
            username: '',
            message: ''
        });
    };
    const onKeyPress = e => {
        if(e.key === 'Enter') {
            onClick();
        }
    };
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input 
                type="text"
                name="username"
                placeholder="사용자명"
                value={username}
                onChange={onChange}
            />
            <input
                type="text"
                name="message"
                placeholder="아무거나 입력해 보세요"
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    );
};
export default EventPractice;
```
- e.target.name 값을 활용하려면, 위와 같이 useState를 쓸 때 input 값들이 들어 있는 form 객체를 사용하면 된다.

<br /><br />

### 4.4 정리
- 리액트에서 이벤트를 다루는 것은 순수 자바스크립트 또는 jQuery를 사용한 웹 애플리케이션에서 이벤트를 다루는 것과 비슷하다.
- 기존 HTML DOM Event를 알고 있다면 리액트의 컴포넌트 이벤트도 쉽게 다룰 수 있을 것이다.
<br /><br />

## 5장 ref: DOM에 이름 달기
## 6장 컴포넌트 반복
## 7장 컴포넌트의 라이프사이클 메서드
## 8장 Hooks
## 9장 컴포넌트 스타일링
## 10장 일정 관리 웹 애플리케이션 만들기
## 11장 컴포넌트 성능 최적화
## 12장 immer를 사용하여 더 쉽게 불변성 유지하기ㄴ
## 13장 리액트 라우터로 SPA 개발하기
## 14장 외부 API를 연동하여 뉴스 뷰어 만들기
## 15장 Context API
## 16장 리덕스 라이브러리 이해하기
## 17장 리덕스를 사용하여 리액트 애플리케이션 상태 관리하기
## 18장 리덕스 미들웨어를 통한 비동기 작업 관리
## 19장 코드 스플리팅
## 20장 서버 사이드 렌더링
## 21장 백엔드 프로그래밍:Node.js의 Koa 프레임워크
## 22장 mongoose를 이용한 MongoDB 연동 실습
## 23장 JWT를 통한 회원 인증 시스템 구현하기
## 24장 프런트엔드 프로젝트: 시작 및 회원 인증 구현
## 25장 프런트엔드 프로적트: 글쓰기 기능 구현하기
## 26장 프런트엔드 프로젝트: 포스트 조회 기능 구현하기
## 27장 프런트엔드 프로젝트: 수정/삭제 기능 구현 및 마무리
## 28장 그다음은?