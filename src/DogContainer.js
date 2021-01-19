import React, {useState, useEffect} from 'react'
import axios from 'axios'

//component import 
import DogList from './DogList'

function DogContainer() {
    //set a state for dogs, set it to an empty array so that when map is called on it in DogList it wont freak out
    const [dogs, setDogs] = useState([]);

    //function that will call the backend to retrieve our dogs
    //NOTE: When requesting to a flask app we need to add the trailing / otherwise flask's routing system will interpret that and redirect the request to a route with a trailing / which will cause a 404 error for us.
    const getDogs = async () => {
        try {
          const parsedDogs = await axios(
            process.env.REACT_APP_FLASK_API_URL + '/api/v1/dogs/'
          );
          await setDogs(parsedDogs.data.data);
        } catch (err) {
          console.log(err);
        }
    };

    //use useEffect to run the getDogs function when browser loads (does the axios call) "so our data will be fetched as soon as the app is mounted to the dom."
    useEffect(() => {
        getDogs();
    }, [])

    return (
        <div>
            dog container woof woof
            <DogList dogs = {dogs}/>
            
        </div>
    )
}

export default DogContainer
