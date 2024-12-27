import React, { useState } from 'react';

function Home() {
  const [price] = useState(prompt("Enter price"));

  return (
    <div className="">
      <p>
        Price: {price ? price : <span>Price is not defined</span>}
      </p>
    </div>
  );
}

export default Home;
