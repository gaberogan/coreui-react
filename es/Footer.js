var _excluded = ["className", "children", "tag"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
var propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.node,
  className: PropTypes.string,
  fixed: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
} : {};
var defaultProps = {
  tag: 'footer',
  fixed: false
};
var AppFooter = /*#__PURE__*/function (_Component) {
  function AppFooter(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    _this.isFixed = _this.isFixed.bind(_this);
    return _this;
  }
  _inheritsLoose(AppFooter, _Component);
  var _proto = AppFooter.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.isFixed(this.props.fixed);
  };
  _proto.isFixed = function isFixed(fixed) {
    if (fixed) {
      document.body.classList.add('footer-fixed');
    }
  };
  _proto.render = function render() {
    var _this$props = this.props,
      className = _this$props.className,
      children = _this$props.children,
      Tag = _this$props.tag,
      attributes = _objectWithoutPropertiesLoose(_this$props, _excluded);
    delete attributes.fixed;
    var classes = classNames(className, 'app-footer');
    return /*#__PURE__*/React.createElement(Tag, _extends({
      className: classes
    }, attributes), children);
  };
  return AppFooter;
}(Component);
AppFooter.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
AppFooter.defaultProps = defaultProps;
export default AppFooter;