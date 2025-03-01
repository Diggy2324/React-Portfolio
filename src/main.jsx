import React, { StrictMode } from 'react'; // Import StrictMode
import App from './App'; // Import the App component
import { createRoot } from 'react-dom/client'; // Correct import for createRoot

const rootElement = document.getElementById('root');
if (rootElement) {
    createRoot(rootElement).render(
        <StrictMode>
            <App />
        </StrictMode>
    );
}

export default App;