var _excluded = ["className", "children", "type", "tag"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { asideMenuCssClasses, validBreakpoints, checkBreakpoint } from './Shared/index';
import toggleClasses from './Shared/toggle-classes';
var propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.node,
  className: PropTypes.string,
  defaultOpen: PropTypes.bool,
  display: PropTypes.any,
  mobile: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  type: PropTypes.string
} : {};
var defaultProps = {
  defaultOpen: false,
  display: 'lg',
  mobile: false,
  tag: 'button',
  type: 'button'
};
var AppAsideToggler = /*#__PURE__*/function (_Component) {
  function AppAsideToggler(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    _this.asideToggle = _this.asideToggle.bind(_this);
    _this.state = {};
    return _this;
  }
  _inheritsLoose(AppAsideToggler, _Component);
  var _proto = AppAsideToggler.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.toggle(this.props.defaultOpen);
  };
  _proto.toggle = function toggle(force) {
    var _ref = [this.props.display, this.props.mobile],
      display = _ref[0],
      mobile = _ref[1];
    var cssClass = asideMenuCssClasses[0];
    if (!mobile && display && checkBreakpoint(display, validBreakpoints)) {
      cssClass = "aside-menu-" + display + "-show";
    }
    toggleClasses(cssClass, asideMenuCssClasses, force);
  };
  _proto.asideToggle = function asideToggle(e) {
    e.preventDefault();
    this.toggle();
  };
  _proto.render = function render() {
    var _this2 = this;
    var _this$props = this.props,
      className = _this$props.className,
      children = _this$props.children,
      type = _this$props.type,
      Tag = _this$props.tag,
      attributes = _objectWithoutPropertiesLoose(_this$props, _excluded);
    delete attributes.defaultOpen;
    delete attributes.display;
    delete attributes.mobile;
    var classes = classNames(className, 'navbar-toggler');
    return /*#__PURE__*/React.createElement(Tag, _extends({
      type: type,
      className: classes
    }, attributes, {
      onClick: function onClick(event) {
        return _this2.asideToggle(event);
      }
    }), children || /*#__PURE__*/React.createElement("span", {
      className: "navbar-toggler-icon"
    }));
  };
  return AppAsideToggler;
}(Component);
AppAsideToggler.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
AppAsideToggler.defaultProps = defaultProps;
export default AppAsideToggler;