export const Friends = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li className="item" key={id}>
            <span
              className="status"
              style={{
                backgroundColor: `${CheckStatus(isOnline)}`,
              }}
            ></span>
            <img
              className="avatar"
              src={avatar}
              alt="User avatar"
              width="24px"
            />
            <p className="name">{name}</p>
          </li>
        );
      })}
    </ul>
  );
};
function CheckStatus(status) {
  return status ? 'green' : 'red';
}
