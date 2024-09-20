"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _index = require("./Shared/index");
var _toggleClasses = _interopRequireDefault(require("./Shared/toggle-classes"));
var _excluded = ["className", "children", "tag"];
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
  display: _propTypes["default"].any,
  mobile: _propTypes["default"].bool,
  tag: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].string]),
  type: _propTypes["default"].string
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
    var cssClass = _index.sidebarCssClasses[0];
    if (!mobile && display && (0, _index.checkBreakpoint)(display, _index.validBreakpoints)) {
      cssClass = "sidebar-" + display + "-show";
    }
    (0, _toggleClasses["default"])(cssClass, _index.sidebarCssClasses, force);
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
    var classes = (0, _classnames["default"])(className, 'navbar-toggler');
    return /*#__PURE__*/_react["default"].createElement(Tag, _extends({
      type: "button",
      className: classes
    }, attributes, {
      onClick: function onClick(event) {
        return _this2.sidebarToggle(event);
      },
      "data-sidebar-toggler": true
    }), children || /*#__PURE__*/_react["default"].createElement("span", {
      className: "navbar-toggler-icon"
    }));
  };
  return AppSidebarToggler;
}(_react.Component);
AppSidebarToggler.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
AppSidebarToggler.defaultProps = defaultProps;
var _default = exports["default"] = AppSidebarToggler;
module.exports = exports.default;