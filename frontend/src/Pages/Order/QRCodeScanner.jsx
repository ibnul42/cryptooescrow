import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const QRCodeScanner = () => {
    const [result, setResult] = useState('');

    const handleScan = (data) => {
        if (data) {
            setResult(data);
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(data)}`;
        }
    };

    const handleError = (error) => {
        console.error(error);
    };

    return (
        <div>
            <QrReader delay={300} onError={handleError} onScan={handleScan} style={{ width: '100%' }} />
            {result && <p>Scanned Result: {result}</p>}
        </div>
    );
};

export default QRCodeScanner;
