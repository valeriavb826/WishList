import { MdPostAdd, MdMessage } from 'react-icons/md';

function TopHeader(props) {
  return (
    <header className="header">
      <h1 className="TopHeaderLogo">
        <MdMessage />
        My Wish List
      </h1>
      <p>
        <button className="TopHeaderButton" onClick={props.onCreatePost}>
          <MdPostAdd size={18} />
          New Post
        </button>
      </p>
    </header>
  );
}

export default TopHeader;