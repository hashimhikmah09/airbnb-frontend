import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "../components/Navbar/Navbar";
import Homepages from '../pages/Homepage';
import Footer from '../components/Footer/footer';
import PropertyDetails from '../pages/[slug]';




const Navigations = () => {
 
    return (
    <Router>

        {/* Navbar links */}
        <Navbar />
 
         {/* pages */}
         <Routes> 
             {/* Desktop specific */}
             <Route path='/' element={<Homepages />} />
             <Route path="/property/:slug" element={<PropertyDetails />} />

             
         </Routes>
           
  
          {/* footer */}
         <Footer/> 
      </Router>
    );
  };
  
export default Navigations; 