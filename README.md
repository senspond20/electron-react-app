# React + Electron

```
npx create-react-app electron-react-app

npm i -D electron
```

+ Install Foreman
Electron과 React를 동시에 사용하려면, 여러 개의 Thread가 필요하게 됩니다. 여기서 Electron은 Client 역할을 하고 React는 Web Server 역할을 하게 됩니다.
여기서 Foreman은 위의 두 개의 Process를 관리하는 역할을 맡게 됩니다.
아래 명령어로 Foreman도 설치합니다.
