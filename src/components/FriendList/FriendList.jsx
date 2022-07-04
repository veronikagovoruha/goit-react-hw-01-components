import PropTypes from 'prop-types';
import styles from './friendList.module.css';

function FriendList({ friends }) {
    const listItem = friends.map(({ id, avatar, name, isOnline }) =>
        <li key={id} className={styles.item}>
            <span className={styles.status} style={{ backgroundColor: isOnline ? '#80ff00' : 'red' }} >{isOnline}</span>
            <img className={styles.avatar} src={avatar} alt={name} width="48" />
            <p className={styles.name}>{name}</p>
        </li>)
    return (
        <ul className={styles.friendList}>
            {listItem}
        </ul>
    );
}

FriendList.defaultProps = { stats: [] }

FriendList.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
    }))
};

export default FriendList;