function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className="item">
      <span
        className="status"
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></span>
      <img className="avatar" src={avatar} alt={'ava ' + name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

export default FriendListItem;
