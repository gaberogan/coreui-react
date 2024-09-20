var _excluded = ["className", "children", "tag"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { asideMenuCssClasses, checkBreakpoint, validBreakpoints } from './Shared';
import toggleClasses from './Shared/toggle-classes';
var propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.node,
  className: PropTypes.string,
  display: PropTypes.string,
  fixed: PropTypes.bool,
  isOpen: PropTypes.bool,
  offCanvas: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
} : {};
var defaultProps = {
  tag: 'aside',
  display: '',
  fixed: false,
  isOpen: false,
  offCanvas: true
};
var AppAside = /*#__PURE__*/function (_Component) {
  function AppAside(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    _this.isFixed = _this.isFixed.bind(_this);
    _this.isOffCanvas = _this.isOffCanvas.bind(_this);
    _this.displayBreakpoint = _this.displayBreakpoint.bind(_this);
    return _this;
  }
  _inheritsLoose(AppAside, _Component);
  var _proto = AppAside.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.isFixed(this.props.fixed);
    this.isOffCanvas(this.props.offCanvas);
    this.displayBreakpoint(this.props.display);
  };
  _proto.isFixed = function isFixed(fixed) {
    if (fixed) {
      document.body.classList.add('aside-menu-fixed');
    }
  };
  _proto.isOffCanvas = function isOffCanvas(offCanvas) {
    if (offCanvas) {
      document.body.classList.add('aside-menu-off-canvas');
    }
  };
  _proto.displayBreakpoint = function displayBreakpoint(display) {
    if (display && checkBreakpoint(display, validBreakpoints)) {
      var cssClass = "aside-menu-" + display + "-show";
      toggleClasses(cssClass, asideMenuCssClasses, true);
    }
  };
  _proto.render = function render() {
    var _this$props = this.props,
      className = _this$props.className,
      children = _this$props.children,
      Tag = _this$props.tag,
      attributes = _objectWithoutPropertiesLoose(_this$props, _excluded);
    delete attributes.display;
    delete attributes.fixed;
    delete attributes.offCanvas;
    delete attributes.isOpen;
    var classes = classNames(className, 'aside-menu');
    return /*#__PURE__*/React.createElement(Tag, _extends({}, attributes, {
      className: classes
    }), children);
  };
  return AppAside;
}(Component);
AppAside.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
AppAside.defaultProps = defaultProps;
export default AppAside;