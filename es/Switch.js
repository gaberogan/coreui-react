var _excluded = ["className", "disabled", "color", "name", "label", "outline", "size", "required", "type", "value", "dataOn", "dataOff", "variant"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
var propTypes = process.env.NODE_ENV !== "production" ? {
  color: PropTypes.string,
  label: PropTypes.bool,
  outline: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.oneOf(['', 'alt'])]),
  size: PropTypes.oneOf(['', 'lg', 'sm']),
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  defaultValue: PropTypes.any,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  form: PropTypes.any,
  name: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  type: PropTypes.oneOf(['checkbox', 'radio']),
  variant: PropTypes.oneOf(['', '3d', 'pill']),
  className: PropTypes.string,
  dataOn: PropTypes.string,
  dataOff: PropTypes.string
} : {};
var defaultProps = {
  color: 'secondary',
  label: false,
  outline: false,
  size: '',
  checked: false,
  defaultChecked: undefined,
  disabled: undefined,
  required: undefined,
  type: 'checkbox',
  variant: '',
  dataOn: 'On',
  dataOff: 'Off'
};
var AppSwitch = /*#__PURE__*/function (_Component) {
  function AppSwitch(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.handleKeyUp = _this.handleKeyUp.bind(_this);
    _this.state = {
      uncontrolled: !!_this.props.defaultChecked,
      checked: _this.props.defaultChecked || _this.props.checked,
      selected: []
    };
    return _this;
  }
  _inheritsLoose(AppSwitch, _Component);
  var _proto = AppSwitch.prototype;
  _proto.toggleState = function toggleState(check) {
    this.setState({
      checked: check
    });
  };
  _proto.handleChange = function handleChange(event) {
    var target = event.target;
    this.toggleState(target.checked);
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };
  _proto.handleKeyDown = function handleKeyDown(event) {
    if (event.key === ' ') {
      event.preventDefault();
    }
  };
  _proto.handleKeyUp = function handleKeyUp(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      this.toggleState(!this.state.checked);
    }
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (!this.state.uncontrolled && this.props.checked !== prevState.checked) {
      this.toggleState(this.props.checked);
    }
  };
  _proto.render = function render() {
    var _this$props = this.props,
      className = _this$props.className,
      disabled = _this$props.disabled,
      color = _this$props.color,
      name = _this$props.name,
      label = _this$props.label,
      outline = _this$props.outline,
      size = _this$props.size,
      required = _this$props.required,
      type = _this$props.type,
      value = _this$props.value,
      dataOn = _this$props.dataOn,
      dataOff = _this$props.dataOff,
      variant = _this$props.variant,
      attributes = _objectWithoutPropertiesLoose(_this$props, _excluded);
    var tabindex = attributes.tabIndex;
    delete attributes.tabIndex;
    delete attributes.checked;
    delete attributes.defaultChecked;
    delete attributes.onChange;
    var classes = classNames(className, 'switch', label ? 'switch-label' : false, size ? "switch-" + size : false, variant ? "switch-" + variant : false, "switch" + (outline ? '-outline' : '') + "-" + color + (outline === 'alt' ? '-alt' : ''), 'form-check-label');
    var inputClasses = classNames('switch-input', 'form-check-input');
    var sliderClasses = classNames('switch-slider');
    return /*#__PURE__*/React.createElement("label", {
      className: classes,
      tabIndex: tabindex,
      onKeyUp: this.handleKeyUp,
      onKeyDown: this.handleKeyDown
    }, /*#__PURE__*/React.createElement("input", _extends({
      type: type,
      className: inputClasses,
      onChange: this.handleChange,
      checked: this.state.checked,
      name: name,
      required: required,
      disabled: disabled,
      value: value,
      "aria-checked": this.state.checked,
      "aria-disabled": disabled,
      "aria-readonly": disabled
    }, attributes)), /*#__PURE__*/React.createElement("span", {
      className: sliderClasses,
      "data-checked": dataOn,
      "data-unchecked": dataOff
    }));
  };
  return AppSwitch;
}(Component);
AppSwitch.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
AppSwitch.defaultProps = defaultProps;
export default AppSwitch;