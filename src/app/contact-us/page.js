import React from 'react';
import BreadCrum from '../common/BreadCrum';

export default function page() {
    let pageName = "Contact Us"
  return (
    <div>
      <BreadCrum pageName={pageName}/>
    </div>
  );
}
