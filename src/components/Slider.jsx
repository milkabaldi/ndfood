import React from 'react'

export function Slider() {
  function handleClick() {
    console.log('increment like count');
  }

  return (
    <section>
      <div className='banners'>
        
      </div>
      <div className='buttons'>
        <button onClick={handleClick} className='button'>Like</button>
      </div>
      
    </section>
  );
}

