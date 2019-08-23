import React from 'react';
import Test from './Test';
import TextField from './TextField';
import './App'
import Lifecycle from './Lifecycles';
import SetState from './SetState';
import Form from './Form'
import ValidateForm from './ValidateForm';
const App = () => {
  return (
    <div >
      <TextField value="Name" error="Its an error" />
      <Test name="Successive"/>
      <Test name="NodeXperts"/>
      <Test name="Pixians"/>
      <Lifecycle/>
      <Test name="Dentsu">I am lorem ipsum </Test>
      <SetState/>
      <Form/><br/>
      <p>Validating Forms</p>
      <br/>
      <ValidateForm/>
    </div>
  );
}

export default App;
