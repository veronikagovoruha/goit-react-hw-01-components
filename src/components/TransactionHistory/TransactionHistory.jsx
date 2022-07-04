import PropTypes from 'prop-types';
import styles from './transaction.module.css';

function TransactionHistory({ items }) {
    const listItem = items.map(({ id, type, amount, currency }) =>
        <tr key={id}>
            <th className={styles.type}>{type}</th>
            <th className={styles.amount}>{amount}</th>
            <th className={styles.currency}>{currency}</th>
        </tr>)
    return (
        <table className={styles.transactionHistory}>
            <thead>
                <tr className={styles.headers}>
                    <th className={styles.title}>Type</th>
                    <th className={styles.title}>Amount</th>
                    <th className={styles.title}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {listItem}
            </tbody>
        </table>
    );
}

TransactionHistory.defaultProps = { stats: [] }

TransactionHistory.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    }))
};

export default TransactionHistory;