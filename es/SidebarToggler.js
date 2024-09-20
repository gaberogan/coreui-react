var _excluded = ["className", "children", "tag"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { sidebarCssClasses, validBreakpoints, checkBreakpoint } from './Shared/index';
import toggleClasses from './Shared/toggle-classes';
var propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.node,
  className: PropTypes.string,
  display: PropTypes.any,
  mobile: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  type: PropTypes.string
} : {};
var defaultProps = {
  display: 'lg',
  mobile: false,
  tag: 'button',
  type: 'button'
};
var AppSidebarToggler = /*#__PURE__*/function (_Component) {
  function AppSidebarToggler(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    _this.sidebarToggle = _this.sidebarToggle.bind(_this);
    return _this;
  }
  _inheritsLoose(AppSidebarToggler, _Component);
  var _proto = AppSidebarToggler.prototype;
  _proto.sidebarToggle = function sidebarToggle(e) {
    e.preventDefault();
    this.toggle();
  };
  _proto.toggle = function toggle(force) {
    var _ref = [this.props.display, this.props.mobile],
      display = _ref[0],
      mobile = _ref[1];
    var cssClass = sidebarCssClasses[0];
    if (!mobile && display && checkBreakpoint(display, validBreakpoints)) {
      cssClass = "sidebar-" + display + "-show";
    }
    toggleClasses(cssClass, sidebarCssClasses, force);
  };
  _proto.render = function render() {
    var _this2 = this;
    var _this$props = this.props,
      className = _this$props.className,
      children = _this$props.children,
      Tag = _this$props.tag,
      attributes = _objectWithoutPropertiesLoose(_this$props, _excluded);
    delete attributes.mobile;
    delete attributes.display;
    var classes = classNames(className, 'navbar-toggler');
    return /*#__PURE__*/React.createElement(Tag, _extends({
      type: "button",
      className: classes
    }, attributes, {
      onClick: function onClick(event) {
        return _this2.sidebarToggle(event);
      },
      "data-sidebar-toggler": true
    }), children || /*#__PURE__*/React.createElement("span", {
      className: "navbar-toggler-icon"
    }));
  };
  return AppSidebarToggler;
}(Component);
AppSidebarToggler.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
AppSidebarToggler.defaultProps = defaultProps;
export default AppSidebarToggler;