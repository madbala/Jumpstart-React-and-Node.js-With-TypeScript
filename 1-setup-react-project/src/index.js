import React from 'react';
import { createRoot } from "react-dom/client";

const Home = () =>{
    return (
        <div>
            <h1>First Task</h1>
        </div>
    );
};



const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Home />);