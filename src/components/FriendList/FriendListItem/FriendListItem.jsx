import PropTypes from 'prop-types';
import styles from './friendListItem.module.css';

function FriendListItem({ avatar, id, isOnline, name }) {
    return (
        <li key={id} className={styles.item}>
            <span className={styles.status} style={{ backgroundColor: isOnline ? '#80ff00' : 'red' }} >{isOnline}</span>
            <img className={styles.avatar} src={avatar} alt={name} width="48" />
            <p className={styles.name}>{name}</p>
        </li>
    );
}


FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
};

export default FriendListItem;