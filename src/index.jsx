import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './header';
import SimpleHeader from './simple-header';
import UserList from './user-list';
import users from './users.json';

function App() {
  return (
    <div className="text-center bg-gray-100">
      <div className="py-4">
        <H2>Header Example</H2>
        <Header />
      </div>

      <div className="py-4">
        <H2>Simple Header Example</H2>
        <SimpleHeader />
      </div>

      <div className="py-4">
        <div className="text-center p-4 max-w-lg mx-auto">
          <H2>Users Example</H2>
          <UserList users={users} />
        </div>
      </div>
    </div>
  );
}

const H2 = props => <h2 className="text-2xl py-2 font-medium" {...props} />;

ReactDOM.render(<App />, document.getElementById('root'));
