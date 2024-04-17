import React, { useState, useEffect } from 'react'
import {  Button } from '@mui/material';
const PatientData = ({patient}) => {

  const [loadingPredict, setLoadingPredict] = useState(false);
  const [loadingEvaluate, setLoadingEvaluate] = useState(false);
  const [prediction, setPrediction] = useState(null);
  const [evaluation, setEvaluation] = useState(null);

  const handlePredictClick = () => {
    setLoadingPredict(true);
    setTimeout(() => {
      setPrediction(patient.predictedDiagnosis==1?"Malignant":"Begnin");
      setLoadingPredict(false);
    }, 1000);
  };

  const handleEvaluateClick = () => {
    setLoadingEvaluate(true);
    setTimeout(() => {
      setEvaluation(patient.actualDiagnosis==patient.predictedDiagnosis?"Correct prediction":"Incorrect prediction");
      setLoadingEvaluate(false);
    }, 1000);
  };

  useEffect(() => {
    setPrediction(null);
    setEvaluation(null);
  }, [patient]);
  return (
    <div style={{
      position: 'fixed',
      bottom: '0',
      left: '0',
      width: '100%',
      padding: '20px',
      backgroundColor: 'white',
      borderTop: '1px solid #ccc'
    }}>
        <p>Paitent Id: {patient.id}</p>
        <p>Name: {patient.firstName+" "+patient.lastName}</p>
        <p>Gender: {patient.gender}</p>
        <p>Age: {patient.age}</p>
        <div>
        <Button onClick={handlePredictClick} disabled={loadingPredict}>
          {loadingPredict ? 'Predicting...' : 'Predict'}
        </Button>
        <Button onClick={handleEvaluateClick} disabled={loadingEvaluate}>
          {loadingEvaluate ? 'Evaluating...' : 'Evaluate Prediction'}
        </Button>
      </div>
      {prediction && <p>Prediction: {prediction}</p>}
      {evaluation && <p>Evaluation: {evaluation}</p>}
    </div>
  )
}

export default PatientData