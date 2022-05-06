# 602277107 박은수
## `[5월4일]`
### 1. provider 적용하기
```
provider에 대입한 것을 소셜 로그인 서비스 제공 업데 정도로 생각하면됨
```
### 2. signWithPopup 함수
```
Continue with Google 버튼 클릭하면 소셜 로그인 시도하는 팝업 발생 확인
```
### 3. 로그아웃
```
onLogOutClick 함수를 적용하여 IndexedDB에 있는 정보를 알아서 비우고 로그아웃 처리까지 해주는 함수
```
### 4. 트윗을 위한 파이어베이스 데이터베이스 생성하기
* Firebase Database> 클릭 -> 데이터베이스 만들기 클릭 -> 테스터 모드에서 시작 -> 다음 -> asia-northeast1으로 데이터베이스 위치 설정 -> 사용 설정 눌러 설정 마침
 
## `[4월27일]`
### 1. 파이어 베이스로 로그인과 회원가입 처리하기

### 2. 로그인을 지속시켜주는 setPersistence 알아보기
파이어베이스는 로그인 상태 지속을 3가지로 나눠 관리함 -> 이것이 setPersistence
  * local : 웹 브라우저를 종료해도 로그인 유지
     ```
      local 옵션은 웹 브라우저를 종료해도 로그인한 사용자의 정보를 기억할 수 있게 해주는 옵션이다. 쉽게 말해 웹 브라우저를 종료해도 로그인을 유지시켜줌
     ```
 * session : 웹 브라우저의 탭을 종료하면 로그아웃
     ```
     session 옵션은 웹 브라우저의 탭을 종료하면 로그아웃 시켜줌
     ```
 * none : 새로고침하면 로그아웃
     ```
      none 옵션은 사용자 정보를 기억하지 않아 새로고침하면 로그인이 풀림
     ```
### 3. 사용자 정보가 저장되어 있는 곳 살펴보기
```
개발자 도구의 Application 탭 > Storage > IndexedDB > firebaseLocalStorageDB > firebaseLocalStorage
```
### 4. 딜레이 눈으로 확인하기
```
setInterval 함수 이용하기
setInterval(()=> console.log(authService.currentUser), 2000);
setInterval 함수의 시간 단위는 밀리초이다. 따라서 2초 간격을 위해 2000 입력
```
### 5. 로그아웃은 어떻게?
```
IndexedDB 를 clear 하면 로그아웃 가능
```
### 6. 회원가입 토글 버튼 적용하기
```
SetNew Account 함수에 (prev) => !prev 와 같이 함수를 전달
useState 함수에 함수를 인자로 전달하면 인자로 전달한 함수의 1번째 인자(prev)의 이전의 상태가 넘어옴
이를 이용하면 토글 버튼을 만들수 있다
```
## `[4월14일]`
### 1. 파이어 베이스 버전 낮추기
```
npm install firebase@8.8.0
```

* 파이어 베이스 인증 설정하기
  ```
    1. https://console.firebase.google.com 접속
    2. 이전에 만들었던 nwitter 프로젝트 선택
    3. 왼쪽 Authentication 선택
    4. 시작하기 클릭
    5. Users 탭 클릭
    6. 로그인 방법 설정 클릭
    7. 이메일/비밀번호 사용 설정 ON
    8. 구글 소셜 로그인 사용 설정 ON, 본인 구글 이메일 입력
  ```
  
* Auth.js 수정
  ```
    1. 소셜 로그인은 파이어 베이스 서버에 로그인 요청만 하면 되므로 서버 호출을 할수 있게
     <button>
      </button> 형식으로 생성
    2. 이메일, 비밀번호 로그인의 경고 이메일과 비밀번호를 입력받아야하므로 
      <form>
        <input>
        </input>
      </form> 엘리먼트 사용
  ```
 
### 2.로그인 폼이 상태를 업데이트 하도록 만들기
```
form 엘리먼트가 실행되도록 만드려면 useState 함수로 상태를 만들어주고, onChange, onSubmit 함수로 이벤트를 연결해주어야함

```
## `[4월 6일]`
### 1. components/Router.js 내 Switch 에러 해결 방법
```
1. Switch를 Routes로 변경
2. react-router-dom 버전 낮춰주기
  - > npm i react-router-dom@5.2.0
```
### 2. 파이어베이스 로그인 준비하기
* 연도를 출력해보자
  ```
   <footer>&copy; {new Date().getFullYear()} Nwitter</footer
   (자바스크립트 코드를 삽입할 때는 코드를 중괄호로 감싸주어야함)
  ```
* firebase.js의 파일 이름 바꾸기
  ```
    npm install로 설치한 패키지 이름이 파일 이름과 같으면 오류가 발생하기 때문에
    firebase.js -> fbase.js 로 파일 이름을 변경해준다.
  ```

## `[3월 30일]`
### 1. 파이어 베이스 설정하기
```
1. "https://firebase.google.com" 접속
2. 시작하기 클릭
3. 프로젝트 만들기 클릭
4. 프로젝트 이름 지정하는 화면나오면 nwitter로 지정
5. Google 애널리틱스 사용 설정 끄고 프로젝트 만들기 눌러 프로젝트 설정 마침
```
### 2. 파이어 베이스 웹 애플리케이션 등록하기
```
1. </> 아이콘을 눌러 웹 애플리케이션 등록
2. '또한 이 앱의 Firebase 호스팅을 설정하세요' 체크 해제 확인 후 앱 등록 클릭
3. firebaseConfig값 미리 복사
4. nwitter 폴더에서 >npm install firebase
5. src 폴더에 firebase.js 새로 만들어 앞에서 복사한 코드 입력
```
  * npm install firebase 입력시 주의사항
    > [firebase 8버전 이하]
     ``` 
      import firebase from 'firebase/app';
      import 'firebase/auth';
      import 'firebase/firestore';
      ```

    > [firebase 9버전 이상]
      ```
      import firebase from 'firebase/compat/app';
      import 'firebase/compat/auth';
      import 'firebase/compat/firestore';
      ```
### 3. 파이어베이스 비밀키란?

> firebase.js 파일 내 apikey와 같은 값들이 파이어베이스에 접속하는 비밀키로 쓰인다.
![캡처](https://user-images.githubusercontent.com/100770547/161374155-89196816-3273-45f2-b3e5-5930a7f31f4d.PNG)

예를들어, 깃허브에 firebase.js를 올리면 누구나 비밀키를 볼수 있다.
그 비밀키를 본 사람이 우리의 데이터베이스에 접근해서 데이터를 바꾸는등의 보안 문제가 생길수도 있어 비밀키를 숨겨야한다.

### 4. 비밀키 숨기는 방법
```
- .env 파일을 만들고, 그 파일에 비밀키 변수를 등록한 다음, 비밀키가 필요한 다른 파일에서 비밀키 변수를 불러 참조하게 만듬.
- 이때, 비밀키 변수가 바로 __환경변수__ 이다.
- .env 파일만 깃허브에 업로드하지 않으면 비밀키 노출을 막을수있다.
- 다른 파일에서 환경변수를 쓰려면 process.env.을 붙여 process.env.REACT_APP_API_KEY로 입력해야한다.
```

### 5. 라우터 준비하기
> 라우터란 ? 주소 표시줄에 주소를 입력했을때 어떤 컴포넌트를 보여 줄지 결정하는 역할을 함
```
- 페이지를 routes 폴더에, 구성요소들을 components 폴더에 나눠 저장한다.
- routes <- Auth.js, EditProfile.js, Home.js, Profile.js 파일 새로 생성
- components <- App.js 이동
- App.js 파일을 이동하였으니 App.js를 참고하는 모든 파일의 import문을 수정해야함
  -> import App from "./components/App";
```
> 라우터 설치


``` 
npm install react-router-dom
```
> 이후 라우터 설정
```
import { HashRouter as Router, Route, Switch } from "react-router-dom";

const AppRouter = () => {
  return(
    <Router>
      <Switch>
        <Route />
      </Switch>
    </Router>
  )
};

export default AppRouter; 
```
### 6. 라우터 적용하기
* 라우터? 
```
어떤 화면을 보여 줄지 관리해주는 친구
```
* 훅스? 
```
React는 클래스형 컴포넌트와 함수형 컴포넌트 두 가지 형태의 컴포넌트를 사용할 수 있다.
이때 함수형 컴포넌트에서 상태 관리를 위해 사용하는 기능이 바로 Hooks다.
```
* React Hooks에서 사용하는 useState 함수
```
React Hooks를 사용하기 위해서는 useState 함수를 사용하면 된다.
useState 함수는 아래 예시와 같이 인자로 [상태, 상태관리함수, 이름]과 같은 형태의 배열을 입력 받는다.
[isLoggedIn, setIsLoggedIn] = useState(false)
```
## `[3월 23일]`
### 1. 개인 노트북으로 Visual Studio Code Github로 Push 도전
구글링을 하며 push 경로 지정
```
   1. git init
   2. git add .
   3. git commit -m "init git"
   4. git config user.name "parkeunsu-1"
   5. gif config user.email "tkfkdgo77855@naver.com"
   6. git remote add origin "https://github.com/parkeunsu-1/nwitter.git"
   7. git push -u origin master
   ```

명령어 입력후 Github로 Push 정상적으로 실행됨 확인

클론코딩트위터 책 p.30~33 참고하여 ./package.json, .src/index.js, .src/App.js 파일 수정한후 Github로 Push

Github 페이지에서 master로 변경후 내가 수정한 파일 정상적으로 수정되어 올려져 있는지 확인
