"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = YearInput;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Input = _interopRequireDefault(require("./Input"));

var _dates = require("../shared/dates");

var _propTypes2 = require("../shared/propTypes");

var _utils = require("../shared/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function YearInput(_ref) {
  var maxDate = _ref.maxDate,
      minDate = _ref.minDate,
      valueType = _ref.valueType,
      otherProps = _objectWithoutProperties(_ref, ["maxDate", "minDate", "valueType"]);

  var maxYear = (0, _utils.min)(275760, maxDate && (0, _dates.getYear)(maxDate));
  var minYear = (0, _utils.max)(1000, minDate && (0, _dates.getYear)(minDate));

  var yearStep = function () {
    if (valueType === 'century') {
      return 10;
    }

    return 1;
  }();

  return _react["default"].createElement(_Input["default"], _extends({
    max: maxYear,
    min: minYear,
    name: "year",
    step: yearStep
  }, otherProps));
}

YearInput.propTypes = {
  ariaLabel: _propTypes["default"].string,
  className: _propTypes["default"].string.isRequired,
  disabled: _propTypes["default"].bool,
  itemRef: _propTypes["default"].func,
  maxDate: _propTypes2.isMaxDate,
  minDate: _propTypes2.isMinDate,
  onChange: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  onKeyUp: _propTypes["default"].func,
  placeholder: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  value: _propTypes["default"].number,
  valueType: _propTypes2.isValueType
};
YearInput.defaultProps = {
  placeholder: '----'
};