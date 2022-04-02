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
### 3. 파이어베이스 비밀키

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
