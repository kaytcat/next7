import React, {Component} from 'react';
import Link from 'next/link';

class App extends Component {
  render () {
    return (
      <>
        <Link href="/b">
          <a>here</a>
        </Link>
        Hi!
      </>
    );
  }
}

export default App;
