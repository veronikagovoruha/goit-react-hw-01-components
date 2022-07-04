import PropTypes from 'prop-types';
import styles from './statistics.module.css';

export default function Statistics({ stats }) {
    const listItems = stats.map(({ id, label, percentage }) =>
        <li
            key={id}
            className={styles.item}
            style={{ backgroundColor: getRandomHexColor() }}
        >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}</span>
        </li>
    );
    return (
        <section className={styles.statistics}>
            <h2 className={styles.title}>Upload stats</h2>

            <ul className={styles.statList}>
                {listItems}
            </ul>
        </section >)
}

Statistics.defaultProps = { stats: [] }

Statistics.prototype = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}