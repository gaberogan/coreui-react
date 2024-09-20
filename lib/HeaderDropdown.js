"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactstrap = require("reactstrap");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _excluded = ["children"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var propTypes = process.env.NODE_ENV !== "production" ? _extends({
  children: _propTypes["default"].node,
  direction: _propTypes["default"].string
}, _reactstrap.Dropdown.propTypes) : {};
var defaultProps = {
  direction: 'down'
};
var AppHeaderDropdown = /*#__PURE__*/function (_Component) {
  function AppHeaderDropdown(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    _this.toggle = _this.toggle.bind(_this);
    _this.state = {
      dropdownOpen: false
    };
    return _this;
  }
  _inheritsLoose(AppHeaderDropdown, _Component);
  var _proto = AppHeaderDropdown.prototype;
  _proto.toggle = function toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };
  _proto.render = function render() {
    var _this$props = this.props,
      children = _this$props.children,
      attributes = _objectWithoutPropertiesLoose(_this$props, _excluded);
    return /*#__PURE__*/_react["default"].createElement(_reactstrap.Dropdown, _extends({
      nav: true,
      isOpen: this.state.dropdownOpen,
      toggle: this.toggle
    }, attributes), children);
  };
  return AppHeaderDropdown;
}(_react.Component);
AppHeaderDropdown.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
AppHeaderDropdown.defaultProps = defaultProps;
var _default = exports["default"] = AppHeaderDropdown;
module.exports = exports.default;