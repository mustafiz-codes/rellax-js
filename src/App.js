import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './component/Header';
import Pricing from './component/Pricing';
import Test from './component/Test';

{/* <script>
      // Accepts any class name
      var rellax = new Rellax('.rellax');
    </script> */}

    
function App() {
    // const [Rellax, serRellax] = useState(0);

    useEffect(() => {
      const script = document.createElement('script');
      var rellax = new window.Rellax('.rellax');
      // script.async = true;
      script.innerHTML = "new window.Rellax('.rellax')";
      document.body.appendChild(script);
      
      return () => {
        document.body.removeChild(script);
      }
    }, []);

  return (
    <div className="App">
      <Header/>
      <Pricing/>
      <Test/>
    </div>
  );
}

export default App;
