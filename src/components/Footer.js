import React from 'react';


const Footer = () => {

    
   const d = new Date();
  let year = d.getFullYear();
    
    return (
        <div className="footer">
        <p>Copyright &copy;{year} Daniel Amoateng</p>
        </div>
    )
}

export default Footer
