const express = require('express');
const fs = require('fs');
const PDFDocument = require('pdfkit');
const path = require('path');
const app = express();

app.use(express.json({ limit: '10mb' }));
app.use(express.static(path.join(__dirname)));

// Handle saving signature
app.post('/save-signature', (req, res) => {
    try {
        const { signature } = req.body;
        const base64Data = signature.replace(/^data:image\/png;base64,/, "");
        const timestamp = Date.now();
        const signatureFilePath = path.join(__dirname, `signature_${timestamp}.png`);
        fs.writeFileSync(signatureFilePath, base64Data, 'base64');
        res.json({ message: 'Signature saved successfully.', filePath: signatureFilePath });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'An error occurred while saving the signature.' });
    }
});

// Handle PDF generation
app.post('/generate-pdf', (req, res) => {
    try {
        const {
            signature, 
            companyName, 
            companyAddress, 
            farmerName, 
            fatherName, 
            village, 
            district, 
            effectiveDate, 
            contractDate, 
            croptype,
            area,
            title
        } = req.body;
        
        const base64Data = signature.replace(/^data:image\/png;base64,/, "");
        const timestamp = Date.now();
        const userSignatureFilePath = path.join(__dirname, `signature_${timestamp}.png`);
        const pdfPath = path.join(__dirname, `signed_contract_${timestamp}.pdf`);
        const companySignaturePath = path.join(__dirname, 'company_signature.png'); // Path to the company signature image

        // Save the user's signature
        fs.writeFileSync(userSignatureFilePath, base64Data, 'base64');

        const doc = new PDFDocument({ size: 'A4' });
        doc.pipe(fs.createWriteStream(pdfPath));

        // Add contract text with dynamic content
        doc.fontSize(18).text('AGREEMENT', { align: 'center', underline: true });
        doc.fontSize(12).text(`\n\nThis Agreement is made on ${contractDate} between ${companyName}, having its corporate office at ${companyAddress}, (hereinafter referred to as "Company") of the First Part, and Shri ${farmerName}, S/o ${fatherName}, Village ${village}, District ${district} (hereinafter referred to as "Farmer") of the Second Part for the crop ${croptype} at an area of ${area}.`, { paragraphGap: 10 });
        
        // Add more content...
        doc.text('\nSignatures:');
        
        // Reserve space for signatures
        doc.text('Party of First Part:                                                                       Party of Second Part:', { continued: true });
        
        // Add company signature image to the PDF (bottom left)
        if (fs.existsSync(companySignaturePath)) {
            const bottomLeftX = 70;
            const bottomLeftY = doc.page.height - 230;
            doc.image(companySignaturePath, bottomLeftX, bottomLeftY, { width: 150 });
        } else {
            console.log('Company signature image not found.');
        }

        // Add the user’s signature image to the PDF (bottom right)
        if (fs.existsSync(userSignatureFilePath)) {
            const bottomRightX = doc.page.width - 220;
            const bottomRightY = doc.page.height - 230;
            doc.image(userSignatureFilePath, bottomRightX, bottomRightY, { width: 150 });
        }

        doc.end();

        res.json({ message: 'PDF generated successfully.', pdfPath });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'An error occurred while generating the PDF.' });
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
