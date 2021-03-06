import React from 'react';

export default class SlateInput extends React.Component {
  constructor(props) {
    super(props);

    this.input = React.createRef();
    this.isFocus = false;
  }

  handleFocus = () => {
    this.isFocus = true;
  };

  handleBlur = () => {
    this.isFocus = false;
  };

  handleChange = event => {
    const value = event.target.value;
    this.props.onChange(value);
  };

  componentDidUpdate() {
    if (this.isFocus) {
      setTimeout(() => {
        this.input.current.focus();
      }, 0);
    }
  }

  render() {
    const { value, type } = this.props;

    return (
      <input
        className="slate-input"
        type={type}
        value={value}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        ref={this.input}
      />
    );
  }
}

SlateInput.defaultProps = {
  type: 'text'
};
