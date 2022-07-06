import PropTypes from 'prop-types';
import styles from './friendList.module.css';
import FriendListItem from "./FriendListItem/FriendListItem"

function FriendList({ friends }) {
    const listItem = friends.map(({ id, avatar, name, isOnline }) =>
        <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
    )
    return (
        <ul className={styles.friendList}>
            {listItem}
        </ul>
    );
}

FriendList.defaultProps = { friends: [] }

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
    }))
};

export default FriendList;