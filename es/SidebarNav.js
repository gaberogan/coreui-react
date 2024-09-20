var _excluded = ["className", "children", "navConfig"];
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Badge, Nav, NavItem, NavLink as RsNavLink } from 'reactstrap';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
var propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.node,
  className: PropTypes.string,
  navConfig: PropTypes.any,
  navFunc: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  isOpen: PropTypes.bool,
  staticContext: PropTypes.any,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
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
  isOpen: false
};
var AppSidebarNav = /*#__PURE__*/function (_Component) {
  function AppSidebarNav(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    _this.handleClick = _this.handleClick.bind(_this);
    _this.activeRoute = _this.activeRoute.bind(_this);
    _this.hideMobile = _this.hideMobile.bind(_this);
    return _this;
  }
  _inheritsLoose(AppSidebarNav, _Component);
  var _proto = AppSidebarNav.prototype;
  _proto.handleClick = function handleClick(e) {
    e.preventDefault();
    e.currentTarget.parentElement.classList.toggle('open');
  };
  _proto.activeRoute = function activeRoute(routeName, props) {
    return props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
  };
  _proto.hideMobile = function hideMobile() {
    if (document.body.classList.contains('sidebar-show')) {
      document.body.classList.toggle('sidebar-show');
    }
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
    var classes = classNames('nav-title', title["class"]);
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
    var classes = classNames('divider', divider["class"]);
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
    var classIcon = classNames('nav-icon', item.icon);
    var attributes = JSON.parse(JSON.stringify(item.attributes || {}));
    var classes = classNames('nav-link', 'nav-dropdown-toggle', item["class"], attributes["class"]);
    delete attributes["class"];
    return /*#__PURE__*/React.createElement("li", {
      key: key,
      className: this.activeRoute(item.url, this.props)
    }, /*#__PURE__*/React.createElement("a", _extends({
      className: classes,
      href: "#",
      onClick: this.handleClick
    }, attributes), /*#__PURE__*/React.createElement("i", {
      className: classIcon
    }), item.name, this.navBadge(item.badge)), /*#__PURE__*/React.createElement("ul", {
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
  }

  // nav link
  ;
  _proto.navLink = function navLink(item, key, classes) {
    var url = item.url || '';
    var itemIcon = /*#__PURE__*/React.createElement("i", {
      className: classes.icon
    });
    var itemBadge = this.navBadge(item.badge);
    var attributes = item.attributes || {};
    return /*#__PURE__*/React.createElement(NavItem, {
      key: key,
      className: classes.item
    }, attributes.disabled ? /*#__PURE__*/React.createElement(RsNavLink, _extends({
      href: '',
      className: classes.link
    }, attributes), itemIcon, item.name, itemBadge) : this.isExternal(url) ? /*#__PURE__*/React.createElement(RsNavLink, _extends({
      href: url,
      className: classes.link,
      active: true
    }, attributes), itemIcon, item.name, itemBadge) : /*#__PURE__*/React.createElement(NavLink, _extends({
      to: url,
      className: classes.link,
      activeClassName: "active",
      onClick: this.hideMobile
    }, attributes), itemIcon, item.name, itemBadge));
  }

  // badge addon to NavItem
  ;
  _proto.navBadge = function navBadge(badge) {
    if (badge) {
      var classes = classNames(badge["class"]);
      return /*#__PURE__*/React.createElement(Badge, {
        className: classes,
        color: badge.variant
      }, badge.text);
    }
    return null;
  };
  _proto.isExternal = function isExternal(url) {
    var link = url ? url.substring(0, 4) : '';
    return link === 'http';
  };
  _proto.render = function render() {
    var _this$props = this.props,
      className = _this$props.className,
      children = _this$props.children,
      navConfig = _this$props.navConfig,
      attributes = _objectWithoutPropertiesLoose(_this$props, _excluded);
    delete attributes.isOpen;
    delete attributes.staticContext;
    delete attributes.Tag;
    var navClasses = classNames(className, 'sidebar-nav');

    // ToDo: find better rtl fix
    var isRtl = getComputedStyle(document.documentElement).direction === 'rtl';

    // sidebar-nav root
    return /*#__PURE__*/React.createElement(PerfectScrollbar, _extends({
      className: navClasses
    }, attributes, {
      options: {
        suppressScrollX: !isRtl
      }
    }), /*#__PURE__*/React.createElement(Nav, null, children || this.navList(navConfig.items)));
  };
  return AppSidebarNav;
}(Component);
AppSidebarNav.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
AppSidebarNav.defaultProps = defaultProps;
export default AppSidebarNav;