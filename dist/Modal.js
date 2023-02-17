"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
require("./style.css");
function Modal(props) {
  var _useState = (0, _react.useState)(""),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var textModal = props.text;
  (0, _react.useEffect)(function () {
    if (props.open === true) {
      setIsOpen("active");
    } else {
      setIsOpen("");
    }
  }, [props.open]);
  var modalRef = (0, _react.useRef)();
  var closeModal = function closeModal() {
    setIsOpen('');
  };
  (0, _react.useEffect)(function () {
    document.addEventListener('mousedown', function (e) {
      if (!modalRef.current.contains(e.target)) {
        setIsOpen("");
      }
    });
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: 'modal ' + isOpen
  }, /*#__PURE__*/_react.default.createElement("div", {
    ref: modalRef,
    className: "containerText"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modalHeader"
  }, /*#__PURE__*/_react.default.createElement("i", {
    onClick: closeModal,
    className: "fa-solid fa-xmark"
  })), /*#__PURE__*/_react.default.createElement("p", null, textModal)));
}
var _default = Modal;
exports.default = _default;