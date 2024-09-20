var _excluded = ["className", "tag"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
import React, { Component } from 'react';
import { Route, Link, matchPath } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';
var routes;
var getPaths = function getPaths(pathname) {
  var paths = ['/'];
  if (pathname === '/') return paths;
  pathname.split('/').reduce(function (prev, curr) {
    var currPath = prev + "/" + curr;
    paths.push(currPath);
    return currPath;
  });
  return paths;
};
var findRouteName = function findRouteName(url) {
  var aroute = routes.find(function (route) {
    return matchPath(url, {
      path: route.path,
      exact: route.exact
    });
  });
  return aroute && aroute.name ? aroute.name : null;
};
var BreadcrumbsItem = function BreadcrumbsItem(_ref) {
  var match = _ref.match;
  var routeName = findRouteName(match.url);
  if (routeName) {
    return (
      // eslint-disable-next-line react/prop-types
      match.isExact ? /*#__PURE__*/React.createElement(BreadcrumbItem, {
        active: true
      }, routeName) : /*#__PURE__*/React.createElement(BreadcrumbItem, null, /*#__PURE__*/React.createElement(Link, {
        to: match.url || ''
      }, routeName))
    );
  }
  return null;
};
BreadcrumbsItem.propTypes = process.env.NODE_ENV !== "production" ? {
  match: PropTypes.shape({
    url: PropTypes.string
  })
} : {};
var Breadcrumbs = function Breadcrumbs(args) {
  var paths = getPaths(args.location.pathname);
  var items = paths.map(function (path, i) {
    return /*#__PURE__*/React.createElement(Route, {
      key: i.toString(),
      path: path,
      component: BreadcrumbsItem
    });
  });
  return /*#__PURE__*/React.createElement(Breadcrumb, null, items);
};
var propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.node,
  className: PropTypes.string,
  appRoutes: PropTypes.any,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
} : {};
var defaultProps = {
  tag: 'div',
  className: '',
  appRoutes: [{
    path: '/',
    exact: true,
    name: 'Home',
    component: null
  }]
};
var AppBreadcrumb = /*#__PURE__*/function (_Component) {
  function AppBreadcrumb(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    _this.state = {
      routes: props.appRoutes
    };
    routes = _this.state.routes;
    return _this;
  }
  _inheritsLoose(AppBreadcrumb, _Component);
  var _proto = AppBreadcrumb.prototype;
  _proto.render = function render() {
    var _this$props = this.props,
      className = _this$props.className,
      Tag = _this$props.tag,
      attributes = _objectWithoutPropertiesLoose(_this$props, _excluded);
    delete attributes.children;
    delete attributes.appRoutes;
    var classes = classNames(className);
    return /*#__PURE__*/React.createElement(Tag, {
      className: classes
    }, /*#__PURE__*/React.createElement(Route, _extends({
      path: "/:path",
      component: Breadcrumbs
    }, attributes)));
  };
  return AppBreadcrumb;
}(Component);
AppBreadcrumb.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
AppBreadcrumb.defaultProps = defaultProps;
export default AppBreadcrumb;