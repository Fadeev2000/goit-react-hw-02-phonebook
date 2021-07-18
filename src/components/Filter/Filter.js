import PropTypes from 'prop-types';
import css from './Filter.module.css';

function Filter({ value, onChange }) {
    return (
        <label className={css.label}>Find contacts by name
            <input
                type="text"
                name="filter"
                className={css.input}
                value={value}
                onChange={onChange}
            />
        </label>
    );
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Filter;