import React from 'react';
import ReactDOM from 'react-dom';
import Example1 from './example-1';
import './index.css';

function App() {
  return (
    <div className="text-center p-4 max-w-lg mx-auto">
      <h1 className="text-4xl">React and Tailwind UI Example</h1>
      <Divider />

      <H2>Example 1</H2>
      <Example1 />
      <Divider />

      
    </div>
  );
}

const Divider = () => <hr className="my-8" />;
const H2 = props => <h2 className="text-2xl font-medium" {...props} />;

ReactDOM.render(<App />, document.getElementById('root'));
