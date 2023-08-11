
import {useState} from 'react';
import Post from './components/Post';
import TopHeader from './components/TopHeader';


function App() {
  const [modalVisible, setModalVisible] = useState(false);
  function showModalHandler(){
    setModalVisible(true);
  }

  function hideModalHandler (){
    setModalVisible(false);
  }

  return (
    <>
      <TopHeader onCreatePost={showModalHandler}/>
      <main>
          <Post isPosting={modalVisible} onStopPosting={hideModalHandler}/>
      </main>
    </> 
  );
}


export default App;
