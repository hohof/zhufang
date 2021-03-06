'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _toCapitalString = require('./toCapitalString');

var _toCapitalString2 = _interopRequireDefault(_toCapitalString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function withPropsReactive(MapComponent) {
  return function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class(props) {
      _classCallCheck(this, _class);

      var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

      _this.instanceCreated = false;
      _this.myMapComponent = null;
      _this.registeredEvents = [];
      _this.onInstanceCreated = _this.onInstanceCreated.bind(_this);
      return _this;
    }

    _createClass(_class, [{
      key: 'onInstanceCreated',
      value: function onInstanceCreated() {
        this.instanceCreated = true;
        if ('events' in this.props) {
          var instance = this.myMapComponent.instance;

          if (this.props.events.created) {
            this.props.events.created(instance);
          }
        }
        this.reactivePropChange(this.props, false);
      }
    }, {
      key: 'createEventsProxy',
      value: function createEventsProxy(props) {
        var self = this;
        var instance = this.myMapComponent.instance;

        var evs = Object.keys(props.events || {});
        evs.length && evs.forEach(function (ev) {
          if (self.registeredEvents.indexOf(ev) === -1) {
            self.registeredEvents.push(ev);
            instance.on(ev, function (ev) {
              return function () {
                if (self.props.events && ev in self.props.events) {
                  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }

                  self.props.events[ev].apply(null, args);
                }
              };
            }(ev));
          }
        });
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        this.reactivePropChange(nextProps, true);
      }
    }, {
      key: 'reactivePropChange',
      value: function reactivePropChange(nextProps) {
        var _this2 = this;

        var shouldDetectChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        if (!this.instanceCreated) {
          return false;
        }
        var _myMapComponent = this.myMapComponent,
            _myMapComponent$sette = _myMapComponent.setterMap,
            setterMap = _myMapComponent$sette === undefined ? {} : _myMapComponent$sette,
            _myMapComponent$conve = _myMapComponent.converterMap,
            converterMap = _myMapComponent$conve === undefined ? {} : _myMapComponent$conve,
            _myMapComponent$insta = _myMapComponent.instance,
            instance = _myMapComponent$insta === undefined ? {} : _myMapComponent$insta;

        var list = Object.keys(nextProps);
        list.length && list.forEach(function (key) {
          if (key === 'events') {
            return _this2.createEventsProxy(nextProps);
          }

          var willReactive = true;
          if (shouldDetectChange) {
            willReactive = _this2.detectPropChange(key, nextProps, _this2.props);
          }
          if (!willReactive) {
            return false;
          }
          var setterParam = nextProps[key];
          if (key in converterMap) {
            setterParam = converterMap[key](nextProps[key]);
          }
          if (key in setterMap) {
            setterMap[key](setterParam);
          } else {
            var trySetterName = 'set' + (0, _toCapitalString2.default)(key);
            if (trySetterName in instance) {
              instance[trySetterName](setterParam);
            }
          }
        });
      }
    }, {
      key: 'detectPropChange',
      value: function detectPropChange(key, nextProps, oldProps) {
        return nextProps[key] !== oldProps[key];
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        return _react2.default.createElement(MapComponent, _extends({
          onInstanceCreated: this.onInstanceCreated,
          ref: function ref(comp) {
            _this3.myMapComponent = comp;
          }
        }, this.props));
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        var instance = this.myMapComponent.instance;

        if (!instance) return;
        if ('destroy' in instance) {
          setTimeout(function () {
            instance.destroy();
          }, 10);
        }
        if ('hide' in instance) {
          instance.hide();
        }
        if ('__map__' in this.props && 'setMap' in instance) {
          instance.setMap(null);
        }
      }
    }]);

    return _class;
  }(_react2.default.Component);
};

exports.default = withPropsReactive;