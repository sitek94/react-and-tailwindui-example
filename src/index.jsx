import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import './index.css';

import UserList from './user-list';
import users from './users.json';

function App() {
  return (
    <>
      <Header />
      <div className="text-center p-4 max-w-lg mx-auto">
        <H2>Users Example</H2>
        <UserList users={users} />
      </div>
    </>
  );
}

const H2 = props => <h2 className="text-2xl font-medium" {...props} />;

ReactDOM.render(<App />, document.getElementById('root'));
