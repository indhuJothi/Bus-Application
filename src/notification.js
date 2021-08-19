// import React from 'react'

// import Alert from 'react-popup-alert'

// const App = () => {
//   const [alert, setAlert] = React.useState({
//     type: 'error',
//     text: 'This is a alert message',
//     show: false
//   })

//   function onCloseAlert() {
//     setAlert({
//       type: '',
//       text: '',
//       show: false
//     })
//   }

//   function onShowAlert(type) {
//     setAlert({
//       type: type,
//       text: 'Demo alert',
//       show: true
//     })
//   }

//   return (
//     <div>
//       <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
//         <button onClick={() => onCloseAlert()}>Hide alert</button>
//         <button onClick={() => onShowAlert('success')}>
//           Show success alert
//         </button>
//         <button onClick={() => onShowAlert('error')}>Show error alert</button>
//         <button onClick={() => onShowAlert('warning')}>
//           Show warning alert
//         </button>
//       </div>
//       <Alert
//         header={'Header'}
//         btnText={'Close'}
//         text={alert.text}
//         type={alert.type}
//         show={alert.show}
//         onClosePress={onCloseAlert}
//         pressCloseOnOutsideClick={true}
//         showBorderBottom={true}
//         alertStyles={{}}
//         headerStyles={{}}
//         textStyles={{}}
//         buttonStyles={{}}
//       />
//     </div>
//   )
// }

// export default App

import React, {Component} from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';


export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      alert: null
    };
  } 

  deleteThisGoal() {
    const getAlert = () => (
      <SweetAlert 
        success 
        title="!" 
        onConfirm={() => this.hideAlert()}
      >
        Hello world!
      </SweetAlert>
    );

    this.setState({
      alert: getAlert()
    });
  }


  hideAlert() {
    console.log('Hiding alert...');
    this.setState({
      alert: null
    });
  }

  render() {

    return (
      <div style={{ padding: '20px' }}>
          <button
            onClick={() => this.deleteThisGoal()}
            className='btn btn-danger'
          >
            <i className="fa fa-trash" aria-hidden="true"></i> Delete Goal
        </button>
        
         
        
        {this.state.alert}
      </div>
    );
  }
}

