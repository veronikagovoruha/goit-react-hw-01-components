import PropTypes from 'prop-types';
import styles from './section.module.css';


function Section({ title, subtitle, children }) {
    return (
        <section className={styles.section}>

            <div className={styles.info}>
                {title && <h2 className={styles.title}>{title}</h2>}
                {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
            </div>

            {children}
        </section>
    );
}

Section.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    children: PropTypes.object,
};

export default Section;