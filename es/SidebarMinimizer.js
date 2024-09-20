var _excluded = ["className", "children", "tag", "type"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import LayoutHelper from './Shared/layout/layout';
var propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  type: PropTypes.string
} : {};
var defaultProps = {
  tag: 'button',
  type: 'button'
};
var AppSidebarMinimizer = /*#__PURE__*/function (_Component) {
  function AppSidebarMinimizer(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }
  _inheritsLoose(AppSidebarMinimizer, _Component);
  var _proto = AppSidebarMinimizer.prototype;
  _proto.componentDidMount = function componentDidMount() {
    var isMinimized = document.body.classList.contains('sidebar-minimized');
    LayoutHelper.sidebarPSToggle(!isMinimized);
  };
  _proto.handleClick = function handleClick() {
    LayoutHelper.sidebarToggle();
  };
  _proto.render = function render() {
    var _this2 = this;
    var _this$props = this.props,
      className = _this$props.className,
      children = _this$props.children,
      Tag = _this$props.tag,
      type = _this$props.type,
      attributes = _objectWithoutPropertiesLoose(_this$props, _excluded);
    var classes = classNames(className, 'sidebar-minimizer', 'mt-auto');
    return /*#__PURE__*/React.createElement(Tag, _extends({
      className: classes,
      type: type
    }, attributes, {
      onClick: function onClick(event) {
        return _this2.handleClick(event);
      }
    }), children);
  };
  return AppSidebarMinimizer;
}(Component);
AppSidebarMinimizer.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
AppSidebarMinimizer.defaultProps = defaultProps;
export default AppSidebarMinimizer;