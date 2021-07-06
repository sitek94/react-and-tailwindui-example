function UserItem({ user }) {
  return (
    <li className="py-4 flex">
      <img className="h-10 w-10 rounded-full" src={user.image} alt="" />
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-900">{user.name}</p>
        <p className="text-sm text-gray-500">{user.email}</p>
      </div>
    </li>
  );
}

export default function UserList({ users }) {
  return (
    <ul className="divide-y divide-gray-200">
      {users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  );
}
