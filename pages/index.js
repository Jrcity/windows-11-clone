import React from 'react';
import Desktop from '../src/components/_desktop/Desktop';

function Home() {
  React.useEffect(() => {

  document.body.oncontextmenu = () => false;
  }, [])
  return (
    <Desktop>

    </Desktop>
  );
}

export default Home;
