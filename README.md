# 602277107 박은수


## `[3월 30일]`
### 1. 파이어 베이스 설정하기
1. "https://firebase.google.com" 접속
2. 시작하기 클릭
3. 프로젝트 만들기 클릭
4. 프로젝트 이름 지정하는 화면나오면 nwitter로 지정
5. Google 애널리틱스 사용 설정 끄고 프로젝트 만들기 눌러 프로젝트 설정 마침

### 2. 파이어 베이스 웹 애플리케이션 등록하기
1. </> 아이콘을 눌러 웹 애플리케이션 등록
2. '또한 이 앱의 Firebase 호스팅을 설정하세요' 체크 해제 확인 후 앱 등록 클릭
3. firebaseConfig값 미리 복사
4. nwitter 폴더에서 >npm install firebase
5. src 폴더에 firebase.js 새로 만들어 앞에서 복사한 코드 입력
  * > npm install firebase 입력시 주의사항
  * > [firebase 8버전 이하]
    import firebase from 'firebase/app';
    import 'firebase/auth';
    import 'firebase/firestore';

  * > [firebase 9버전 이상]
    import firebase from 'firebase/compat/app';
    import 'firebase/compat/auth';
    import 'firebase/compat/firestore';

## `[3월 23일]`
### 1. 개인 노트북으로 Visual Studio Code Github로 Push 도전
구글링을 하며 push 경로 지정
1. git init
2. git add .
3. git commit -m "init git"
4. git config user.name "parkeunsu-1"
5. gif config user.email "tkfkdgo77855@naver.com"
6. git remote add origin "https://github.com/parkeunsu-1/nwitter.git"
7. git push -u origin master

명령어 입력후 Github로 Push 정상적으로 실행됨 확인
클론코딩트위터 책 p.30~33 참고하여 ./package.json, .src/index.js, .src/App.js 파일 수정한후 Github로 Push
Github 페이지에서 master로 변경후 내가 수정한 파일 정상적으로 수정되어 올려져 있는지 확인
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
