import { Card } from 'card/index';
import faker from 'faker';

function App() {
  return (
    <div className="App">
      <Card 
        avatar={ faker.image.avatar() }
        name={ `${ faker.name.firstName() } ${ faker.name.firstName() }` }
        title={ `${ faker.name.jobTitle() }` }
        />
      <Card 
        avatar={ faker.image.avatar() }
        name={ `${ faker.name.firstName() } ${ faker.name.firstName() }` }
        title={ `${ faker.name.jobTitle() }` }
        />
      <Card 
        avatar={ faker.image.avatar() }
        name={ `${ faker.name.firstName() } ${ faker.name.firstName() }` }
        title={ `${ faker.name.jobTitle() }` }
      />
    </div>
  );
}

export default App;
