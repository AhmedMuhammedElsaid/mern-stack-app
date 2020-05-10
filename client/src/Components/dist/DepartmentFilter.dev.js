"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DepartmentFilter = function DepartmentFilter() {
  var data = (0, _reactRedux.useSelector)(function (stat) {
    return state.data;
  });
  console.log(data.departments);
};

var _default = DepartmentFilter;
exports["default"] = _default;