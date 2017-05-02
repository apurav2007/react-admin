import React from 'react';
import classnames from 'classnames';

const TextFieldGroup = ({ field, value, label, error, type, onChange, checkUserExists,icon }) => {
  return (
    <div className={classnames('input-group mb-1', { 'has-error': error })}>
      <span className="input-group-addon"><i className={icon}></i></span>
      <input
        onChange={onChange}
        onBlur={checkUserExists}
        value={value}
        type={type}
        placeholder={label}
        name={field}
        className="form-control"
      />

    </div>  );
}

TextFieldGroup.propTypes = {
  field: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  error: React.PropTypes.string,
  type: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  checkUserExists: React.PropTypes.func
}

TextFieldGroup.defaultProps = {
  type: 'text'
}

export default TextFieldGroup;
