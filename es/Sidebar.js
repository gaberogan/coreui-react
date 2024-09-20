var _excluded = ["className", "children", "tag"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { sidebarCssClasses } from './Shared';
import ClickOutHandler from 'react-onclickout';
import './Shared/element-closest';
import LayoutHelper from './Shared/layout/layout';
var propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.node,
  className: PropTypes.string,
  compact: PropTypes.bool,
  display: PropTypes.string,
  fixed: PropTypes.bool,
  minimized: PropTypes.bool,
  isOpen: PropTypes.bool,
  offCanvas: PropTypes.bool,
  staticContext: PropTypes.any,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
} : {};
var defaultProps = {
  tag: 'div',
  compact: false,
  display: '',
  fixed: false,
  minimized: false,
  isOpen: false,
  offCanvas: false
};
var AppSidebar = /*#__PURE__*/function (_Component) {
  function AppSidebar(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    _this.isCompact = _this.isCompact.bind(_this);
    _this.isFixed = _this.isFixed.bind(_this);
    _this.isMinimized = _this.isMinimized.bind(_this);
    _this.isOffCanvas = _this.isOffCanvas.bind(_this);
    _this.displayBreakpoint = _this.displayBreakpoint.bind(_this);
    _this.hideMobile = _this.hideMobile.bind(_this);
    return _this;
  }
  _inheritsLoose(AppSidebar, _Component);
  var _proto = AppSidebar.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.displayBreakpoint(this.props.display);
    this.isCompact(this.props.compact);
    this.isFixed(this.props.fixed);
    this.isMinimized(this.props.minimized);
    this.isOffCanvas(this.props.offCanvas);
  };
  _proto.isCompact = function isCompact(compact) {
    if (compact) {
      document.body.classList.add('sidebar-compact');
    }
  };
  _proto.isFixed = function isFixed(fixed) {
    if (fixed) {
      document.body.classList.add('sidebar-fixed');
    }
  };
  _proto.isMinimized = function isMinimized(minimized) {
    LayoutHelper.sidebarToggle(minimized);
  };
  _proto.isOffCanvas = function isOffCanvas(offCanvas) {
    if (offCanvas) {
      document.body.classList.add('sidebar-off-canvas');
    }
  };
  _proto.displayBreakpoint = function displayBreakpoint(display) {
    var cssTemplate = "sidebar-" + display + "-show";
    var _sidebarCssClasses$ = sidebarCssClasses[0],
      cssClass = _sidebarCssClasses$[0];
    if (display && sidebarCssClasses.indexOf(cssTemplate) > -1) {
      cssClass = cssTemplate;
    }
    document.body.classList.add(cssClass);
  };
  _proto.hideMobile = function hideMobile() {
    if (document.body.classList.contains('sidebar-show')) {
      document.body.classList.remove('sidebar-show');
    }
  };
  _proto.onClickOut = function onClickOut(e) {
    if (typeof window !== 'undefined' && document.body.classList.contains('sidebar-show')) {
      if (!e.target.closest('[data-sidebar-toggler]')) {
        this.hideMobile();
      }
    }
  };
  _proto.render = function render() {
    var _this2 = this;
    var _this$props = this.props,
      className = _this$props.className,
      children = _this$props.children,
      Tag = _this$props.tag,
      attributes = _objectWithoutPropertiesLoose(_this$props, _excluded);
    delete attributes.compact;
    delete attributes.display;
    delete attributes.fixed;
    delete attributes.minimized;
    delete attributes.offCanvas;
    delete attributes.isOpen;
    delete attributes.staticContext;
    var classes = classNames(className, 'sidebar');

    // sidebar-nav root
    return /*#__PURE__*/React.createElement(ClickOutHandler, {
      onClickOut: function onClickOut(e) {
        _this2.onClickOut(e);
      }
    }, /*#__PURE__*/React.createElement(Tag, _extends({
      className: classes
    }, attributes), children));
  };
  return AppSidebar;
}(Component);
AppSidebar.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
AppSidebar.defaultProps = defaultProps;
export default AppSidebar;