"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _reactstrap = require("reactstrap");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _excluded = ["className", "tag"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
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
    return (0, _reactRouterDom.matchPath)(url, {
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
      match.isExact ? /*#__PURE__*/_react["default"].createElement(_reactstrap.BreadcrumbItem, {
        active: true
      }, routeName) : /*#__PURE__*/_react["default"].createElement(_reactstrap.BreadcrumbItem, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        to: match.url || ''
      }, routeName))
    );
  }
  return null;
};
BreadcrumbsItem.propTypes = process.env.NODE_ENV !== "production" ? {
  match: _propTypes["default"].shape({
    url: _propTypes["default"].string
  })
} : {};
var Breadcrumbs = function Breadcrumbs(args) {
  var paths = getPaths(args.location.pathname);
  var items = paths.map(function (path, i) {
    return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
      key: i.toString(),
      path: path,
      component: BreadcrumbsItem
    });
  });
  return /*#__PURE__*/_react["default"].createElement(_reactstrap.Breadcrumb, null, items);
};
var propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  appRoutes: _propTypes["default"].any,
  tag: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].string])
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
    var classes = (0, _classnames["default"])(className);
    return /*#__PURE__*/_react["default"].createElement(Tag, {
      className: classes
    }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, _extends({
      path: "/:path",
      component: Breadcrumbs
    }, attributes)));
  };
  return AppBreadcrumb;
}(_react.Component);
AppBreadcrumb.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
AppBreadcrumb.defaultProps = defaultProps;
var _default = exports["default"] = AppBreadcrumb;
module.exports = exports.default;