var _excluded = ["className", "children", "tag"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
var propTypes = process.env.NODE_ENV !== "production" ? {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  brand: PropTypes.any,
  full: PropTypes.any,
  minimized: PropTypes.any
} : {};
var defaultProps = {
  tag: 'a'
};
var AppNavbarBrand = /*#__PURE__*/function (_Component) {
  function AppNavbarBrand() {
    return _Component.apply(this, arguments) || this;
  }
  _inheritsLoose(AppNavbarBrand, _Component);
  var _proto = AppNavbarBrand.prototype;
  _proto.imgSrc = function imgSrc(brand) {
    return brand.src ? brand.src : '';
  };
  _proto.imgWidth = function imgWidth(brand) {
    return brand.width ? brand.width : 'auto';
  };
  _proto.imgHeight = function imgHeight(brand) {
    return brand.height ? brand.height : 'auto';
  };
  _proto.imgAlt = function imgAlt(brand) {
    return brand.alt ? brand.alt : '';
  };
  _proto.navbarBrandImg = function navbarBrandImg(props, classBrand, key) {
    return /*#__PURE__*/React.createElement("img", {
      src: this.imgSrc(props),
      width: this.imgWidth(props),
      height: this.imgHeight(props),
      alt: this.imgAlt(props),
      className: classBrand,
      key: key.toString()
    });
  };
  _proto.render = function render() {
    var _this$props = this.props,
      className = _this$props.className,
      children = _this$props.children,
      Tag = _this$props.tag,
      attributes = _objectWithoutPropertiesLoose(_this$props, _excluded);
    var classes = classNames(className, 'navbar-brand');
    var img = [];
    if (this.props.brand) {
      var props = this.props.brand;
      var classBrand = 'navbar-brand';
      img.push(this.navbarBrandImg(props, classBrand, img.length + 1));
    }
    if (this.props.full) {
      var _props = this.props.full;
      var _classBrand = 'navbar-brand-full';
      img.push(this.navbarBrandImg(_props, _classBrand, img.length + 1));
    }
    if (this.props.minimized) {
      var _props2 = this.props.minimized;
      var _classBrand2 = 'navbar-brand-minimized';
      img.push(this.navbarBrandImg(_props2, _classBrand2, img.length + 1));
    }
    return /*#__PURE__*/React.createElement(Tag, _extends({}, attributes, {
      className: classes
    }), children || img);
  };
  return AppNavbarBrand;
}(Component);
AppNavbarBrand.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
AppNavbarBrand.defaultProps = defaultProps;
export default AppNavbarBrand;