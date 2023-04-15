import React, {useState} from 'react'

const PersonCard = ({ firstName, lastName, age, hair }) => {
          // getter     setter
  const [stateAge, setStateAge] = useState(age);
  return (
    
      <div className="container">
        <div className="row">
          <div class="col-6 p-5 text-bg-dark">
            <h2>{lastName}, {firstName}</h2>
            <p>Age: {stateAge}</p>
            <p>Hair Color: {hair}</p>
            <button onClick={() => setStateAge(stateAge + 1)}>
              Birthday Button for {firstName} {lastName}
            </button>
          </div>
        </div>
      </div>

  );
};

export default PersonCard


