import { TypeAnimation } from 'react-type-animation';
import React from 'react';

const TypeEffect  = () => {
  return (
    <h2 className="text-white text-2xl">
    I am a{' '}
    <TypeAnimation
      sequence={[
        ' Stack Developer',
        1000, 
        'Full Stack Developer',
        1000,
        'I m Wev Developer',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
    </h2>
  );
};
export default TypeAnimation