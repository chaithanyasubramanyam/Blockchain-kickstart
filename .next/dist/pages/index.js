'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = require('semantic-ui-react');

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'G:\\blockchain\\kickstart\\pages\\index.js?entry';


var Campaignindex = function (_React$Component) {
    (0, _inherits3.default)(Campaignindex, _React$Component);

    function Campaignindex() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Campaignindex);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Campaignindex.__proto__ || (0, _getPrototypeOf2.default)(Campaignindex)).call.apply(_ref, [this].concat(args))), _this), _this.rendercamp = function () {
            var items = _this.props.campaignAddress.map(function (address) {
                return {
                    header: address,
                    description: _react2.default.createElement(_routes.Link, { route: '/campaigns/' + address, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 19
                        }
                    }, _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 19
                        }
                    }, 'vew campaign')),
                    fluid: true
                };
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Campaignindex, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }), _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }), _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, 'open campaign'), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { floated: 'right', content: 'Create campaign', icon: 'add cirlce', primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }))), this.rendercamp());
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var campaignAddress;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _factory2.default.methods.getCampaigns().call();

                            case 2:
                                campaignAddress = _context.sent;
                                return _context.abrupt('return', { campaignAddress: campaignAddress });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref2.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return Campaignindex;
}(_react2.default.Component);

exports.default = Campaignindex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsImZhY3RvcnkiLCJDYXJkIiwiQnV0dG9uIiwiSWNvbiIsIkxheW91dCIsIkxpbmsiLCJDYW1wYWlnbmluZGV4IiwicmVuZGVyY2FtcCIsIml0ZW1zIiwicHJvcHMiLCJjYW1wYWlnbkFkZHJlc3MiLCJtYXAiLCJoZWFkZXIiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsIm1ldGhvZHMiLCJnZXRDYW1wYWlnbnMiLCJjYWxsIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBYTs7OztBQUNwQixBQUFTLEFBQ1QsQUFBUyxBQUFROztBQUNqQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUSxBQUFXOzs7Ozs7O0ksQUFHRTs7Ozs7Ozs7Ozs7Ozs7OE4sQUFNakIsYUFBVyxZQUFJLEFBQ1g7Z0JBQU0sY0FBUSxBQUFLLE1BQUwsQUFBVyxnQkFBWCxBQUEyQixJQUFJLG1CQUFVLEFBQ25EOzs0QkFBTyxBQUNLLEFBQ1I7aURBQWMsQUFBQyw4QkFBSyx1QkFBTixBQUEyQjtzQ0FBM0I7d0NBQUEsQUFBc0M7QUFBdEM7cUJBQUEsa0JBQXNDLGNBQUE7O3NDQUFBO3dDQUFBO0FBQUE7QUFBQSx1QkFGakQsQUFFVyxBQUFzQyxBQUNwRDsyQkFISixBQUFPLEFBR0ssQUFFZjtBQUxVLEFBQ0g7QUFGUixBQUFjLEFBUWQsYUFSYzs7aURBUVAsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFxQjs4QkFBckI7Z0NBQVAsQUFBTyxBQUNWO0FBRFU7YUFBQTtBOzs7OztpQ0FHSCxBQUNKO21DQUVBLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0E7QUFEQTtBQUFBLGFBQUEsMENBQ00sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7OEJBQTVCO2dDQURBLEFBQ0EsQUFDQTtBQURBO2dDQUNBLEFBQUM7OzhCQUFEO2dDQUZBLEFBRUEsQUFDQTtBQURBO0FBQUEsZ0NBQ0EsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBSEEsQUFHQSxBQUNBLGtDQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZOzhCQUFaO2dDQUFBLEFBQTZCO0FBQTdCOytCQUE2QixjQUFBOzs4QkFBQTtnQ0FBQSxBQUM3QjtBQUQ2QjtBQUFBLCtCQUM3QixBQUFDLHlDQUFPLFNBQVIsQUFBZ0IsU0FBUSxTQUF4QixBQUFnQyxtQkFBa0IsTUFBbEQsQUFBdUQsY0FBYSxTQUFwRTs4QkFBQTtnQ0FMQSxBQUlBLEFBQTZCLEFBQzdCLEFBR0M7QUFIRDt1QkFQQSxBQUVBLEFBUUMsQUFBSyxBQUdUOzs7Ozs7Ozs7Ozs7dUNBOUJpQyxrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsZSxBQUFoQixBQUErQjs7aUNBQXZEO0E7aUVBQ0MsRUFBQyxpQixBQUFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBSDZCLGdCLEFBQU07O2tCLEFBQTdCIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ikc6L2Jsb2NrY2hhaW4va2lja3N0YXJ0In0=