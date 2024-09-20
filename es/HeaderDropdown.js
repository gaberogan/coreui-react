var _excluded = ["children"];
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { Component } from 'react';
import { Dropdown } from 'reactstrap';
import PropTypes from 'prop-types';
var propTypes = process.env.NODE_ENV !== "production" ? _extends({
  children: PropTypes.node,
  direction: PropTypes.string
}, Dropdown.propTypes) : {};
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
    return /*#__PURE__*/React.createElement(Dropdown, _extends({
      nav: true,
      isOpen: this.state.dropdownOpen,
      toggle: this.toggle
    }, attributes), children);
  };
  return AppHeaderDropdown;
}(Component);
AppHeaderDropdown.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
AppHeaderDropdown.defaultProps = defaultProps;
export default AppHeaderDropdown;