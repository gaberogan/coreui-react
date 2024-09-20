"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _excluded = ["className", "disabled", "color", "name", "label", "outline", "size", "required", "type", "value", "dataOn", "dataOff", "variant"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes["default"].string,
  label: _propTypes["default"].bool,
  outline: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].string, _propTypes["default"].oneOf(['', 'alt'])]),
  size: _propTypes["default"].oneOf(['', 'lg', 'sm']),
  checked: _propTypes["default"].bool,
  defaultChecked: _propTypes["default"].bool,
  defaultValue: _propTypes["default"].any,
  value: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  form: _propTypes["default"].any,
  name: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  type: _propTypes["default"].oneOf(['checkbox', 'radio']),
  variant: _propTypes["default"].oneOf(['', '3d', 'pill']),
  className: _propTypes["default"].string,
  dataOn: _propTypes["default"].string,
  dataOff: _propTypes["default"].string
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
    var classes = (0, _classnames["default"])(className, 'switch', label ? 'switch-label' : false, size ? "switch-" + size : false, variant ? "switch-" + variant : false, "switch" + (outline ? '-outline' : '') + "-" + color + (outline === 'alt' ? '-alt' : ''), 'form-check-label');
    var inputClasses = (0, _classnames["default"])('switch-input', 'form-check-input');
    var sliderClasses = (0, _classnames["default"])('switch-slider');
    return /*#__PURE__*/_react["default"].createElement("label", {
      className: classes,
      tabIndex: tabindex,
      onKeyUp: this.handleKeyUp,
      onKeyDown: this.handleKeyDown
    }, /*#__PURE__*/_react["default"].createElement("input", _extends({
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
    }, attributes)), /*#__PURE__*/_react["default"].createElement("span", {
      className: sliderClasses,
      "data-checked": dataOn,
      "data-unchecked": dataOff
    }));
  };
  return AppSwitch;
}(_react.Component);
AppSwitch.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
AppSwitch.defaultProps = defaultProps;
var _default = exports["default"] = AppSwitch;
module.exports = exports.default;