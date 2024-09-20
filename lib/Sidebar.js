"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Shared = require("./Shared");
var _reactOnclickout = _interopRequireDefault(require("react-onclickout"));
require("./Shared/element-closest");
var _layout = _interopRequireDefault(require("./Shared/layout/layout"));
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
  compact: _propTypes["default"].bool,
  display: _propTypes["default"].string,
  fixed: _propTypes["default"].bool,
  minimized: _propTypes["default"].bool,
  isOpen: _propTypes["default"].bool,
  offCanvas: _propTypes["default"].bool,
  staticContext: _propTypes["default"].any,
  tag: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].string])
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
    _layout["default"].sidebarToggle(minimized);
  };
  _proto.isOffCanvas = function isOffCanvas(offCanvas) {
    if (offCanvas) {
      document.body.classList.add('sidebar-off-canvas');
    }
  };
  _proto.displayBreakpoint = function displayBreakpoint(display) {
    var cssTemplate = "sidebar-" + display + "-show";
    var _sidebarCssClasses$ = _Shared.sidebarCssClasses[0],
      cssClass = _sidebarCssClasses$[0];
    if (display && _Shared.sidebarCssClasses.indexOf(cssTemplate) > -1) {
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
    var classes = (0, _classnames["default"])(className, 'sidebar');

    // sidebar-nav root
    return /*#__PURE__*/_react["default"].createElement(_reactOnclickout["default"], {
      onClickOut: function onClickOut(e) {
        _this2.onClickOut(e);
      }
    }, /*#__PURE__*/_react["default"].createElement(Tag, _extends({
      className: classes
    }, attributes), children));
  };
  return AppSidebar;
}(_react.Component);
AppSidebar.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
AppSidebar.defaultProps = defaultProps;
var _default = exports["default"] = AppSidebar;
module.exports = exports.default;