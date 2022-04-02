# 602277107 박은수


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

### 4.비밀키 숨기는 방법
```
* .env 파일을 만들고, 그 파일에 비밀키 변수를 등록한 다음, 비밀키가 필요한 다른 파일에서 비밀키 변수를 불러 참조하게 만듬.
* 이때, 비밀키 변수가 바로 __환경변수__ 이다.
* .env 파일만 깃허브에 업로드하지 않으면 비밀키 노출을 막을수있다.
* 다른 파일에서 환경변수를 쓰려면 process.env.을 붙여 process.env.REACT_APP_API_KEY로 입력해야한다.
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
