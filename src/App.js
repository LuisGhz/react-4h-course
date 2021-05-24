import React, { useState } from 'react';
import faker from 'faker';
import { Card } from 'card/index';
import { YesNoButtons } from 'yes-no-buttons/index';

function App() {
  const [name, setName] = useState('Edwin');

  const changeNameHandler = () => {
    setName( faker.name.firstName() );
  }

  const changeNameFromInputHandler = event => {
    setName(event.target.value);
  }

  return (
    <div className="App">
      <Card 
        avatar={ 'https://cdn.fakercloud.com/avatars/mwarkentin_128.jpg' }
        name={ name }
        title={ 'Customer Research Developer' }
        onChangeName={ () => changeNameHandler() }
        onChangeNameFromInput={ changeNameFromInputHandler }
      ><YesNoButtons /></Card>
    </div>
  );
}

export default App;
