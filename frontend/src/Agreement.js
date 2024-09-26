import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Agreement = () => {

  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // Function to handle PDF generation
  const handleGeneratePDF = () => {
    // Display the success message
    setMessage('PDF Generated Successfully!');

    // Wait for 2 seconds, then navigate to the Payment page
    setTimeout(() => {
      // Clear the message before navigation
      setMessage('');
      navigate('/payment-section'); // Navigate to the Payment page
    }, 2000);
  };
  // State variables for form fields
  const [companyName, setCompanyName] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const [farmerName, setFarmerName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [village, setVillage] = useState('');
  const [district, setDistrict] = useState('');
  const [effectiveDate, setEffectiveDate] = useState('');
  const [contractDate, setContractDate] = useState('');
  const [cropType, setCropType] = useState('');
  const [area, setArea] = useState('');
  // const [message, setMessage] = useState('');

  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);

  // Handle mouse events for signature canvas

  
  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    setDrawing(true);
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  const stopDrawing = () => {
    setDrawing(false);
  };

  const draw = (e) => {
    if (!drawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  };

  // Clear canvas
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  // const handleDeploy = () => {
  //   deployContract();
  // };
  

  const saveSignature = async () => {
    const canvas = canvasRef.current;
    const signatureData = canvas.toDataURL('image/png');
    try {
      const response = await fetch('/save-signature', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ signature: signatureData }),
      });

      const result = await response.json();
      setMessage(result.message);
    } catch (err) {
      console.error('Error saving signature:', err);
    }
  };


  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1>Sign Contract</h1>

        <label>Company Name:</label>
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="Enter company name"
          style={styles.input}
        />

        <label>Company Address:</label>
        <input
          type="text"
          value={companyAddress}
          onChange={(e) => setCompanyAddress(e.target.value)}
          placeholder="Enter company address"
          style={styles.input}
        />

        <label>Farmer Name:</label>
        <input
          type="text"
          value={farmerName}
          onChange={(e) => setFarmerName(e.target.value)}
          placeholder="Enter farmer name"
          style={styles.input}
        />

        <label>Father's Name:</label>
        <input
          type="text"
          value={fatherName}
          onChange={(e) => setFatherName(e.target.value)}
          placeholder="Enter father's name"
          style={styles.input}
        />

        <label>Village:</label>
        <input
          type="text"
          value={village}
          onChange={(e) => setVillage(e.target.value)}
          placeholder="Enter village"
          style={styles.input}
        />

        <label>District:</label>
        <input
          type="text"
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
          placeholder="Enter district"
          style={styles.input}
        />

        <label>Effective Date:</label>
        <input
          type="date"
          value={effectiveDate}
          onChange={(e) => setEffectiveDate(e.target.value)}
          style={styles.input}
        />

        <label>Contract Date:</label>
        <input
          type="date"
          value={contractDate}
          onChange={(e) => setContractDate(e.target.value)}
          style={styles.input}
        /><br/>

        <label>Crop Name:</label>
        <input
          type="text"
          value={cropType}
          onChange={(e) => setCropType(e.target.value)}
          placeholder="Enter crop name"
          style={styles.input}
        /><br/>

        <label>Area (in acres):</label>
        <input
          type="text"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          placeholder="Enter the area"
          style={styles.input}
        />

        {/* Canvas for capturing the signature */}
        <canvas
          ref={canvasRef}
          width="400"
          height="200"
          style={styles.canvas}
          onMouseDown={startDrawing}
          onMouseUp={stopDrawing}
          onMouseMove={draw}
        />

        <div style={styles.buttonContainer}>
          <button onClick={clearCanvas} style={styles.button}>Clear</button>
          <button onClick={saveSignature} style={styles.button}>Save Signature</button>
          <button id="generatePDFButton" onClick={handleGeneratePDF} style={styles.button}>Generate PDF</button>
        </div>

        <div style={styles.message}>{message}</div>
      </div>
    </div>
  );
};

// Inline styles for the component
const styles = {
  body: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f4f4f9',
  },
  container: {
    background: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    width: '100%',
  },
  input: {
    width: '90%',
    padding: '10px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  canvas: {
    border: '2px solid #333',
    borderRadius: '4px',
    backgroundColor: '#fff',
    marginBottom: '20px',
  },
  buttonContainer: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: 'hsl(111, 73%, 65%)',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    margin: '5px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  message: {
    marginTop: '20px',
    color: 'green',
    fontWeight: 'bold',
  },
};

export default Agreement;
