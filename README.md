# Open Source Account Management System


## Purpose

- 개인들은 살아가면서 당연하게 발생하게 되는 수익/지출을 요새 Toss, Bank Salad, Open Banking 등의 서비스로 관리받고 있다.

- 당연하겠지만, 개인들에게 발생하게 되는 수익/지출을 관리해주는 서비스가 생기기 이전에 기업들은 사내 비용 관리 시스템을 만들어 사용하고 있었다.

- 엑셀 등에 기록하는 것에 현타를 느꼈고, Google Spread Sheet를 사용해 기록하는 것은 "접근 권한"을 받은 사용자가 접근할 수 있고, 인터넷에 연결만 되어 있으면 볼 수 있지만, 작업하는 게 매우 번거롭다.

- 무엇보다 직원들 급여 대장을 엑셀로 작업하는 것에 엄청나게 현타가 온다. 급여 계산에 필요한 숫자를 GUI에서 입력하고, 입력된 결과 값을 PDF로 출력해 직원들의 서명을 받으면 얼마나 편리할까?

- 월별 재무 보고서를 작업하는 일을 1 ~ 2 페이지로 보기 쉽게 GUI로 입력해서 PDF로 출력하면 얼마나 좋을까?

- 영수증을 일자별 사용 금액에 같이 첨부해서 디지털화 시키면 얼마나 편할까? (매번 영수증 원본을 반드시 갖고 있어야 하나?)

- 이런 필요성들을 느껴서, 제작을 진행하게 되었다.

- 결정적으로 React 고객 관리 시스템 예제([나동빈 유튜버의 리액트 프로그래밍 강좌](https://www.youtube.com/watch?v=9rJmH_WRyLY&list=PLRx0vPvlEmdD1pSqKZiTihy5rplxecNpz&index=17))를 보면서 별로 어렵지 않다는 게 느껴졌고, 빨리 만들어봐야겠다는 생각이 들었다.


## Programming Stack

- Language : Javascript (추후 Typescript로 Refactoring 예정)

- Front : React.js

- Back : Node.js

- DB : Mongo DB or Maria DB (Node.js로 서버 구성할 때 MongoDB를 많이 활용하긴 하지만, 프로젝트의 목적상 관계형 DB를 필요로 할 가능성이 농후하기 때문에 MariaDB를 사용할 것으로 예상한다. 이 문장은 추후 DB 확정 이후 삭제 예정이다.)

## User Process

## Core Functions

- [Project Specification](https://github.com/RyanKor/account-management-system/issues/3)

## UI Design

- Figma를 사용해 프로토 타이핑 진행 예정

## DB Diagram

- 초안(1st Draft) (2020.11.22 업데이트)

![image](https://user-images.githubusercontent.com/40455392/99901438-4580c080-2ce9-11eb-9a57-9040ae102488.png)

## 프로젝트 제작 기간

- 2020.11.22 ~ 2020.12.31 (약 40일)
