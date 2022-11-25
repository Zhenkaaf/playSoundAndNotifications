
/* import './App.css'; */
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import { Notifications } from 'react-push-notification';
import addNotification from 'react-push-notification';

import sound from './sounds/soobshenie-telegram.mp3';


function App() {

  //npm i react-notifications
  const createNotification = (type) => {
    console.log(type);
    switch (type) {
      case 'info':
        NotificationManager.info('Info message');
        break;
      case 'success':
        NotificationManager.success('Success message', 'Title here');
        break;
      case 'warning':
        NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
        break;
      case 'error':
        NotificationManager.error('Error message', 'Click me!', 5000, () => {
          alert('callback');
        });
        break;
    };
  }


  let song = new Audio(sound);
  //npm i react-push-notification --force
  const buttonClick = () => {
   
    
    song.play();
    addNotification({
      title: 'Warning',
      backgroundTop: 'green',
      subtitle: 'This is a subtitle',
      message: 'This is a very long message',
      theme: 'darkblue',
      native: false // when using native, your OS will handle theming.
    });
  };

  return (
    <div className="App">
      <div>
      <div style={{border: '3px solid red', height: '30px', width: '100px', right: '0px'}}>
       
      </div>
        <h2> npm i react-notifications</h2>
       
        <button className='btn btn-info'
          onClick={() => createNotification('info')}>Info
        </button>
        <hr />
        <button className='btn btn-success'
          onClick={() => createNotification('success')}>Success
        </button>
        <hr />
        <button className='btn btn-warning'
          onClick={() => createNotification('warning')}>Warning
        </button>
        <hr />
        <button className='btn btn-danger'
          onClick={() => createNotification('error')}>Error
        </button>

        <NotificationContainer />
      </div>


      <div>
        <h2>npm i react-push-notification --force</h2>

       
        <div className="row">
          <div className="content">
            Hello world.
          </div>
        </div>

        <div className="page">
          <button onClick={buttonClick} className="button">
            PAGE.
            <Notifications position='top-right'/>
          </button>
        </div>
        
       
      </div>

    </div>
  );
}

export default App;
