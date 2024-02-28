import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image', image);

    const res = await axios.post('http://localhost:5000/predict', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    setPrediction(res.data.prediction);
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5">Is Your Food Healthy?</h1>
      <form className="form-inline justify-content-center mt-4" onSubmit={handleSubmit}>
        <div className="custom-file">
          <input type="file" className="custom-file-input" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" onChange={handleImageChange} />
          <label className="custom-file-label" htmlFor="inputGroupFile04">Choose file</label>
        </div>
        <button type="submit" className="btn btn-primary ml-3">Submit</button>
      </form>
      {prediction && (
        <div className="alert alert-info mt-4" role="alert">
          {prediction}
        </div>
      )}
    </div>
  );
}

export default App;
