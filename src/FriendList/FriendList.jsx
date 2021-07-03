import FriendListItem from '../FriendListItem/FriendListItem';

function FriendList({ friends }) {
  return (
    <div>
      <ul className="friend-list">
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </ul>
    </div>
  );
}

export default FriendList;
