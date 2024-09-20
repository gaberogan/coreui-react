"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _layout = _interopRequireDefault(require("./Shared/layout/layout"));
var _excluded = ["className", "children", "tag", "type"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  tag: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].string]),
  type: _propTypes["default"].string
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
    _layout["default"].sidebarPSToggle(!isMinimized);
  };
  _proto.handleClick = function handleClick() {
    _layout["default"].sidebarToggle();
  };
  _proto.render = function render() {
    var _this2 = this;
    var _this$props = this.props,
      className = _this$props.className,
      children = _this$props.children,
      Tag = _this$props.tag,
      type = _this$props.type,
      attributes = _objectWithoutPropertiesLoose(_this$props, _excluded);
    var classes = (0, _classnames["default"])(className, 'sidebar-minimizer', 'mt-auto');
    return /*#__PURE__*/_react["default"].createElement(Tag, _extends({
      className: classes,
      type: type
    }, attributes, {
      onClick: function onClick(event) {
        return _this2.handleClick(event);
      }
    }), children);
  };
  return AppSidebarMinimizer;
}(_react.Component);
AppSidebarMinimizer.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
AppSidebarMinimizer.defaultProps = defaultProps;
var _default = exports["default"] = AppSidebarMinimizer;
module.exports = exports.default;