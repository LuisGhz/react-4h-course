import faker from 'faker';
import { Card } from 'card/index';
import { YesNoButtons } from 'yes-no-buttons/index';

function App() {
  return (
    <div className="App">
      <Card 
        avatar={ faker.image.avatar() }
        name={ `${ faker.name.firstName() } ${ faker.name.firstName() }` }
        title={ `${ faker.name.jobTitle() }` }
      ><YesNoButtons /></Card>
      <Card 
        avatar={ faker.image.avatar() }
        name={ `${ faker.name.firstName() } ${ faker.name.firstName() }` }
        title={ `${ faker.name.jobTitle() }` }
      ><YesNoButtons /></Card>
      <Card 
        avatar={ faker.image.avatar() }
        name={ `${ faker.name.firstName() } ${ faker.name.firstName() }` }
        title={ `${ faker.name.jobTitle() }` }
      ><YesNoButtons /></Card>
    </div>
  );
}

export default App;
