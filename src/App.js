// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import MyEditor from './components/MyEditor'
import KanBan from './components/Plan/KanBan';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      {/* <MyEditor/> */}
      <KanBan/>
    </div>
  );
}

export default App;
