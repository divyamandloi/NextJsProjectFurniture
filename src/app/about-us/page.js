import React from 'react';
import BreadCrum from '../common/BreadCrum';
import AboutContent from './AboutContent';

export default function Aboutus() {
    let pageName = "About us"
    //About Page Small Compontents
 
    
  return (
    <div>
      <BreadCrum pageName={pageName}/>
      <AboutContent/>
    </div>
  );
}
