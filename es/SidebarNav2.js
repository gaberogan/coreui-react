var _excluded = ["className", "children", "navConfig"];
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React, { Component } from 'react';
import { Badge, Nav, NavItem, NavLink as RsNavLink } from 'reactstrap';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import '../css/scrollbar.css';
import LayoutHelper from './Shared/layout/layout';
var propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.node,
  className: PropTypes.string,
  navConfig: PropTypes.any,
  navFunc: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  isOpen: PropTypes.bool,
  staticContext: PropTypes.any,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  router: PropTypes.any,
  props: PropTypes.any
} : {};
var defaultProps = {
  tag: 'nav',
  navConfig: {
    items: [{
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    }]
  },
  isOpen: false,
  router: {
    RsNavLink: RsNavLink
  }
};
var AppSidebarNav2 = /*#__PURE__*/function (_Component) {
  function AppSidebarNav2(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    _defineProperty(_this, "_scrollBarRef", null);
    _this.handleClick = _this.handleClick.bind(_this);
    _this.activeRoute = _this.activeRoute.bind(_this);
    _this.hideMobile = _this.hideMobile.bind(_this);
    _this.changes = null;
    _this.state = {
      sidebarMinimized: false
    };
    return _this;
  }
  _inheritsLoose(AppSidebarNav2, _Component);
  var _proto = AppSidebarNav2.prototype;
  _proto.handleClick = function handleClick(e, item) {
    if (item.attributes && typeof item.attributes.onClick === 'function' && !this.isActiveRoute(item.url, this.props)) {
      item.attributes.onClick(e, item);
    } else {
      e.preventDefault();
    }
    e.currentTarget.parentElement.classList.toggle('open');
  };
  _proto.isActiveRoute = function isActiveRoute(routeName, props) {
    return props.location.pathname.indexOf(routeName) > -1;
  };
  _proto.activeRoute = function activeRoute(routeName, props) {
    return this.isActiveRoute(routeName, props) ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
  };
  _proto.hideMobile = function hideMobile() {
    if (document.body.classList.contains('sidebar-show')) {
      document.body.classList.toggle('sidebar-show');
    }
  };
  _proto.getAttribs = function getAttribs(attributes) {
    return _extends({}, attributes);
  }

  // nav list
  ;
  _proto.navList = function navList(items) {
    var _this2 = this;
    return items.map(function (item, index) {
      return _this2.navType(item, index);
    });
  }

  // nav type
  ;
  _proto.navType = function navType(item, idx) {
    return item.title ? this.navTitle(item, idx) : item.divider ? this.navDivider(item, idx) : item.label ? this.navLabel(item, idx) : item.children ? this.navDropdown(item, idx) : this.navItem(item, idx);
  }

  // nav list section title
  ;
  _proto.navTitle = function navTitle(title, key) {
    var classes = classNames('nav-title', title["class"], title.className);
    return /*#__PURE__*/React.createElement("li", {
      key: key,
      className: classes
    }, this.navWrapper(title), " ");
  }

  // simple wrapper for nav-title item
  ;
  _proto.navWrapper = function navWrapper(item) {
    return item.wrapper && item.wrapper.element ? React.createElement(item.wrapper.element, item.wrapper.attributes, item.name) : item.name;
  }

  // nav list divider
  ;
  _proto.navDivider = function navDivider(divider, key) {
    var classes = classNames('divider', divider["class"], divider.className);
    return /*#__PURE__*/React.createElement("li", {
      key: key,
      className: classes
    });
  }

  // nav label with nav link
  ;
  _proto.navLabel = function navLabel(item, key) {
    var classes = {
      item: classNames('hidden-cn', item["class"]),
      link: classNames('nav-label', item["class"] ? item["class"] : ''),
      icon: classNames('nav-icon', !item.icon ? 'fa fa-circle' : item.icon, item.label.variant ? "text-" + item.label.variant : '', item.label["class"] ? item.label["class"] : '')
    };
    return this.navLink(item, key, classes);
  }

  // nav dropdown
  ;
  _proto.navDropdown = function navDropdown(item, key) {
    var _this3 = this;
    var itemIcon = this.navIcon(item);
    var attributes = this.getAttribs(item.attributes);
    var classes = classNames('nav-link', 'nav-dropdown-toggle', item["class"], attributes["class"], attributes.className);
    delete attributes["class"];
    delete attributes.className;
    var itemAttr = this.getAttribs(item.itemAttr);
    var liClasses = classNames('nav-item', 'nav-dropdown', itemAttr["class"], itemAttr.className);
    delete itemAttr["class"];
    delete itemAttr.className;
    var NavLink = this.props.router.NavLink || RsNavLink;
    return /*#__PURE__*/React.createElement("li", _extends({
      key: key,
      className: classNames(liClasses, {
        'open': this.isActiveRoute(item.url, this.props)
      })
    }, itemAttr), /*#__PURE__*/React.createElement(NavLink, _extends({
      activeClassName: "open",
      className: classes,
      to: item.url || ''
    }, attributes, {
      onClick: function onClick(e) {
        return _this3.handleClick(e, item);
      }
    }), itemIcon, item.name, this.navBadge(item.badge)), /*#__PURE__*/React.createElement("ul", {
      className: "nav-dropdown-items"
    }, this.navList(item.children)));
  }

  // nav item with nav link
  ;
  _proto.navItem = function navItem(item, key) {
    var classes = {
      item: classNames(item["class"]),
      link: classNames('nav-link', item.variant ? "nav-link-" + item.variant : ''),
      icon: classNames('nav-icon', item.icon)
    };
    return this.navLink(item, key, classes);
  };
  _proto.navIcon = function navIcon(item) {
    var icon = item.icon;
    var iconObject = typeof icon === 'object' && icon !== null ? _extends({
      iconClass: icon["class"],
      iconClassName: icon.className
    }, icon) : {
      iconClass: icon
    };
    var iconClass = iconObject.iconClass,
      iconClassName = iconObject.iconClassName,
      innerText = iconObject.innerText,
      img = iconObject.img,
      attributes = iconObject.attributes;
    var iconAttr = _extends({}, attributes);
    delete iconAttr["class"];
    delete iconAttr.className;
    delete iconAttr.img;
    var iconImg = img && img.src ? img : null;
    var iconInner = innerText || null;
    var classIcon = classNames('nav-icon', iconClass, iconClassName);
    var iconComponent = iconImg ? /*#__PURE__*/React.createElement("img", _extends({}, iconAttr, {
      className: classIcon,
      src: iconImg.src
    })) : /*#__PURE__*/React.createElement("i", _extends({}, iconAttr, {
      className: classIcon
    }), iconInner);
    return iconComponent;
  }

  // nav link
  ;
  _proto.navLink = function navLink(item, key, classes) {
    var _this4 = this;
    var ref = React.createRef();
    var url = item.url || '';
    var itemIcon = this.navIcon(item);
    var itemBadge = this.navBadge(item.badge);
    var attributes = this.getAttribs(item.attributes);
    classes.link = classNames(classes.link, attributes["class"], attributes.className);
    delete attributes["class"];
    delete attributes.className;
    var itemAttr = this.getAttribs(item.itemAttr);
    classes.item = classNames(classes.item, itemAttr["class"], itemAttr.className);
    delete itemAttr["class"];
    delete itemAttr.className;
    var NavLink = this.props.router.NavLink || RsNavLink;
    return /*#__PURE__*/React.createElement(NavItem, _extends({
      key: key,
      className: classes.item
    }, itemAttr), attributes.disabled ? /*#__PURE__*/React.createElement(RsNavLink, _extends({
      href: '',
      className: classes.link
    }, attributes), itemIcon, item.name, itemBadge) : this.isExternal(url, this.props) || NavLink === RsNavLink ? /*#__PURE__*/React.createElement(RsNavLink, _extends({
      href: url,
      className: classes.link,
      active: true
    }, attributes), itemIcon, item.name, itemBadge) : /*#__PURE__*/React.createElement(NavLink, _extends({
      to: url,
      className: classes.link,
      activeClassName: "active",
      onClick: function onClick() {
        return _this4.hideMobile(ref);
      },
      ref: ref
    }, attributes), itemIcon, item.name, itemBadge));
  }

  // badge addon to NavItem
  ;
  _proto.navBadge = function navBadge(badge) {
    if (badge) {
      var classes = classNames(badge["class"], badge.className);
      return /*#__PURE__*/React.createElement(Badge, {
        className: classes,
        color: badge.variant
      }, badge.text);
    }
    return null;
  };
  _proto.isExternal = function isExternal(url, props) {
    var linkType = typeof url;
    var link = linkType === 'string' ? url : linkType === 'object' && url.pathname ? url.pathname : linkType === 'function' && typeof url(props.location) === 'string' ? url(props.location) : linkType === 'function' && typeof url(props.location) === 'object' ? url(props.location).pathname : '';
    return link.substring(0, 4) === 'http';
  };
  _proto.observeDomMutations = function observeDomMutations() {
    var _this5 = this;
    if (window.MutationObserver) {
      // eslint-disable-next-line
      this.changes = new MutationObserver(function (mutations) {
        var isSidebarMinimized = document.body.classList.contains('sidebar-minimized') || false;
        _this5.setState({
          sidebarMinimized: isSidebarMinimized
        });
        LayoutHelper.sidebarPSToggle(!isSidebarMinimized);
      });
      var element = document.body;
      this.changes.observe(element, {
        attributes: true,
        attributeFilter: ['class']
      });
    }
    window.addEventListener('resize', this.onResize);
  };
  _proto.onResize = function onResize() {
    LayoutHelper.sidebarPSToggle(true);
  };
  _proto.componentDidMount = function componentDidMount() {
    this.observeDomMutations();
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    try {
      this.changes.disconnect();
      window.removeEventListener('resize', this.onResize);
    } catch (ignore) {
      // eslint-disable-next-line
      console.warn('CoreUI SidebarNav failed to disconnect from MutationObserver', ignore);
    }
  };
  _proto.render = function render() {
    var _this6 = this;
    var _this$props = this.props,
      className = _this$props.className,
      children = _this$props.children,
      navConfig = _this$props.navConfig,
      attributes = _objectWithoutPropertiesLoose(_this$props, _excluded);
    delete attributes.isOpen;
    delete attributes.staticContext;
    delete attributes.Tag;
    delete attributes.router;
    var navClasses = classNames(className, 'sidebar-nav');
    var options = Object.assign({}, {
      suppressScrollX: true,
      suppressScrollY: this.state.sidebarMinimized
    });

    // sidebar-nav root
    return /*#__PURE__*/React.createElement(PerfectScrollbar, _extends({
      className: navClasses
    }, attributes, {
      options: options,
      ref: function ref(_ref) {
        _this6._scrollBarRef = _ref;
      }
    }), /*#__PURE__*/React.createElement(Nav, null, children || this.navList(navConfig.items)));
  };
  return AppSidebarNav2;
}(Component);
AppSidebarNav2.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
AppSidebarNav2.defaultProps = defaultProps;
export default AppSidebarNav2;