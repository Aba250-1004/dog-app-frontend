import React from 'react'
import { Card, Button} from 'semantic-ui-react'

function DogList({ dogs }) {

    //map through the dogs and return card items
    const listDogs = (dogs) => {
        return dogs.map(dog => {
            return (
                <Card key={dog.id}>
                  <Card.Content>
                    <Card.Header>{dog.name}</Card.Header>
                    <Card.Description>{dog.breed}</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <Button>DeleteDog</Button>
                    <Button>Edit Dog</Button>
                  </Card.Content>
                </Card>
            )
        })
    }

    return (
        <div>
            <Card.Group>
                {listDogs(dogs)}
                {/* {allDogs} */}
            </Card.Group>
            
        </div>
    )
}

export default DogList
