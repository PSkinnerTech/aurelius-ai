"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["components_CustomCursor_index_jsx"],{

/***/ "./components/CustomCursor/index.jsx":
/*!*******************************************!*\
  !*** ./components/CustomCursor/index.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CustomCursor; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction CustomCursor() {\n    _s();\n    const cursorDotOutline = react__WEBPACK_IMPORTED_MODULE_1___default().useRef();\n    const cursorDot = react__WEBPACK_IMPORTED_MODULE_1___default().useRef();\n    const requestRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef();\n    const previousTimeRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef();\n    let [mousePosition, setMousePosition] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({\n        x: 0,\n        y: 0\n    });\n    const [width, setWidth] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(window.innerWidth);\n    const [height, setHeight] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(window.innerHeight);\n    let cursorVisible = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    let cursorEnlarged = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    /**\n   * Mouse Moves\n   */ const onMouseMove = (event)=>{\n        const { pageX: x , pageY: y  } = event;\n        setMousePosition({\n            x,\n            y\n        });\n        positionDot(event);\n    };\n    const onMouseEnter = ()=>{\n        cursorVisible.current = true;\n        toggleCursorVisibility();\n    };\n    const onMouseLeave = ()=>{\n        cursorVisible.current = false;\n        toggleCursorVisibility();\n    };\n    const onMouseDown = ()=>{\n        cursorEnlarged.current = true;\n        toggleCursorSize();\n    };\n    const onMouseUp = ()=>{\n        cursorEnlarged.current = false;\n        toggleCursorSize();\n    };\n    const onResize = (event)=>{\n        setWidth(window.innerWidth);\n        setHeight(window.innerHeight);\n    };\n    /**\n   * Hooks\n   */ react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        document.addEventListener(\"mousemove\", onMouseMove);\n        document.addEventListener(\"mouseenter\", onMouseEnter);\n        document.addEventListener(\"mouseleave\", onMouseLeave);\n        document.addEventListener(\"mousedown\", onMouseDown);\n        document.addEventListener(\"mouseup\", onMouseUp);\n        window.addEventListener(\"resize\", onResize);\n        requestRef.current = requestAnimationFrame(animateDotOutline);\n        return ()=>{\n            document.removeEventListener(\"mousemove\", onMouseMove);\n            document.removeEventListener(\"mouseenter\", onMouseEnter);\n            document.removeEventListener(\"mouseleave\", onMouseLeave);\n            document.removeEventListener(\"mousedown\", onMouseDown);\n            document.removeEventListener(\"mouseup\", onMouseUp);\n            window.removeEventListener(\"resize\", onResize);\n            cancelAnimationFrame(requestRef.current);\n        };\n    }, []);\n    let { x , y  } = mousePosition;\n    const winDimensions = {\n        width,\n        height\n    };\n    let endX = winDimensions.width / 2;\n    let endY = winDimensions.height / 2;\n    /**\n   * Position Dot (cursor)\n   * @param {event}\n   */ function positionDot(e) {\n        cursorVisible.current = true;\n        toggleCursorVisibility();\n        // Position the dot\n        endX = e.pageX;\n        endY = e.pageY;\n        cursorDot.current.style.top = endY + \"px\";\n        cursorDot.current.style.left = endX + \"px\";\n    }\n    /**\n   * Toggle Cursor Visiblity\n   */ function toggleCursorVisibility() {\n        if (cursorVisible.current) {\n            cursorDot.current.style.opacity = 1;\n            cursorDotOutline.current.style.opacity = 1;\n        } else {\n            cursorDot.current.style.opacity = 0;\n            cursorDotOutline.current.style.opacity = 0;\n        }\n    }\n    /**\n   * Toggle Cursor Size\n   */ function toggleCursorSize() {\n        if (cursorEnlarged.current) {\n            cursorDot.current.style.transform = \"translate(-50%, -50%) scale(0.7)\";\n            cursorDotOutline.current.style.transform = \"translate(-50%, -50%) scale(5)\";\n        } else {\n            cursorDot.current.style.transform = \"translate(-50%, -50%) scale(1)\";\n            cursorDotOutline.current.style.transform = \"translate(-50%, -50%) scale(1)\";\n        }\n    }\n    /**\n   * Animate Dot Outline\n   * Aniamtes cursor outline with trailing effect.\n   * @param {number} time\n   */ const animateDotOutline = (time)=>{\n        if (previousTimeRef.current !== undefined) {\n            x += (endX - x) / 8;\n            y += (endY - y) / 8;\n            cursorDotOutline.current.style.top = y + \"px\";\n            cursorDotOutline.current.style.left = x + \"px\";\n        }\n        previousTimeRef.current = time;\n        requestRef.current = requestAnimationFrame(animateDotOutline);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: cursorDotOutline,\n                id: \"cursor-dot-outline\"\n            }, void 0, false, {\n                fileName: \"/Users/patrickskinner/dev/arino-nextjs/components/CustomCursor/index.jsx\",\n                lineNumber: 130,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: cursorDot,\n                id: \"cursor-dot\"\n            }, void 0, false, {\n                fileName: \"/Users/patrickskinner/dev/arino-nextjs/components/CustomCursor/index.jsx\",\n                lineNumber: 131,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(CustomCursor, \"M0AAjyHiZaINJsf4kkRykQ3kxq8=\");\n_c = CustomCursor;\nvar _c;\n$RefreshReg$(_c, \"CustomCursor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SixnQkFBZ0JxQixPQUFPLEdBQUd1QjtRQUMxQjdDLFdBQVdzQixPQUFPLEdBQUdVLHNCQUFzQkM7SUFDN0M7SUFDQSxxQkFDRTs7MEJBQ0UsOERBQUNjO2dCQUFJQyxLQUFLbkQ7Z0JBQWtCb0QsSUFBRzs7Ozs7OzBCQUMvQiw4REFBQ0Y7Z0JBQUlDLEtBQUtqRDtnQkFBV2tELElBQUc7Ozs7Ozs7O0FBRzlCLENBQUM7R0FuSXVCckQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXN0b21DdXJzb3IvaW5kZXguanN4PzdjNzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9tQ3Vyc29yKCkge1xuICBjb25zdCBjdXJzb3JEb3RPdXRsaW5lID0gUmVhY3QudXNlUmVmKCk7XG4gIGNvbnN0IGN1cnNvckRvdCA9IFJlYWN0LnVzZVJlZigpO1xuICBjb25zdCByZXF1ZXN0UmVmID0gUmVhY3QudXNlUmVmKCk7XG4gIGNvbnN0IHByZXZpb3VzVGltZVJlZiA9IFJlYWN0LnVzZVJlZigpO1xuICBsZXQgW21vdXNlUG9zaXRpb24sIHNldE1vdXNlUG9zaXRpb25dID0gUmVhY3QudXNlU3RhdGUoeyB4OiAwLCB5OiAwIH0pO1xuICBjb25zdCBbd2lkdGgsIHNldFdpZHRoXSA9IFJlYWN0LnVzZVN0YXRlKHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgY29uc3QgW2hlaWdodCwgc2V0SGVpZ2h0XSA9IFJlYWN0LnVzZVN0YXRlKHdpbmRvdy5pbm5lckhlaWdodCk7XG4gIGxldCBjdXJzb3JWaXNpYmxlID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBsZXQgY3Vyc29yRW5sYXJnZWQgPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgLyoqXG4gICAqIE1vdXNlIE1vdmVzXG4gICAqL1xuICBjb25zdCBvbk1vdXNlTW92ZSA9IGV2ZW50ID0+IHtcbiAgICBjb25zdCB7IHBhZ2VYOiB4LCBwYWdlWTogeSB9ID0gZXZlbnQ7XG4gICAgc2V0TW91c2VQb3NpdGlvbih7IHgsIHkgfSk7XG4gICAgcG9zaXRpb25Eb3QoZXZlbnQpO1xuICB9O1xuICBjb25zdCBvbk1vdXNlRW50ZXIgPSAoKSA9PiB7XG4gICAgY3Vyc29yVmlzaWJsZS5jdXJyZW50ID0gdHJ1ZTtcbiAgICB0b2dnbGVDdXJzb3JWaXNpYmlsaXR5KCk7XG4gIH07XG4gIGNvbnN0IG9uTW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgICBjdXJzb3JWaXNpYmxlLmN1cnJlbnQgPSBmYWxzZTtcbiAgICB0b2dnbGVDdXJzb3JWaXNpYmlsaXR5KCk7XG4gIH07XG4gIGNvbnN0IG9uTW91c2VEb3duID0gKCkgPT4ge1xuICAgIGN1cnNvckVubGFyZ2VkLmN1cnJlbnQgPSB0cnVlO1xuICAgIHRvZ2dsZUN1cnNvclNpemUoKTtcbiAgfTtcbiAgY29uc3Qgb25Nb3VzZVVwID0gKCkgPT4ge1xuICAgIGN1cnNvckVubGFyZ2VkLmN1cnJlbnQgPSBmYWxzZTtcbiAgICB0b2dnbGVDdXJzb3JTaXplKCk7XG4gIH07XG4gIGNvbnN0IG9uUmVzaXplID0gZXZlbnQgPT4ge1xuICAgIHNldFdpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICBzZXRIZWlnaHQod2luZG93LmlubmVySGVpZ2h0KTtcbiAgfTtcblxuICAvKipcbiAgICogSG9va3NcbiAgICovXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBvbk1vdXNlRW50ZXIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBvbk1vdXNlTGVhdmUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uTW91c2VEb3duKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25SZXNpemUpO1xuICAgIHJlcXVlc3RSZWYuY3VycmVudCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlRG90T3V0bGluZSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIG9uTW91c2VFbnRlcik7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgb25Nb3VzZUxlYXZlKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uTW91c2VEb3duKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uUmVzaXplKTtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RSZWYuY3VycmVudCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGxldCB7IHgsIHkgfSA9IG1vdXNlUG9zaXRpb247XG4gIGNvbnN0IHdpbkRpbWVuc2lvbnMgPSB7IHdpZHRoLCBoZWlnaHQgfTtcbiAgbGV0IGVuZFggPSB3aW5EaW1lbnNpb25zLndpZHRoIC8gMjtcbiAgbGV0IGVuZFkgPSB3aW5EaW1lbnNpb25zLmhlaWdodCAvIDI7XG5cbiAgLyoqXG4gICAqIFBvc2l0aW9uIERvdCAoY3Vyc29yKVxuICAgKiBAcGFyYW0ge2V2ZW50fVxuICAgKi9cbiAgZnVuY3Rpb24gcG9zaXRpb25Eb3QoZSkge1xuICAgIGN1cnNvclZpc2libGUuY3VycmVudCA9IHRydWU7XG4gICAgdG9nZ2xlQ3Vyc29yVmlzaWJpbGl0eSgpO1xuICAgIC8vIFBvc2l0aW9uIHRoZSBkb3RcbiAgICBlbmRYID0gZS5wYWdlWDtcbiAgICBlbmRZID0gZS5wYWdlWTtcbiAgICBjdXJzb3JEb3QuY3VycmVudC5zdHlsZS50b3AgPSBlbmRZICsgJ3B4JztcbiAgICBjdXJzb3JEb3QuY3VycmVudC5zdHlsZS5sZWZ0ID0gZW5kWCArICdweCc7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlIEN1cnNvciBWaXNpYmxpdHlcbiAgICovXG4gIGZ1bmN0aW9uIHRvZ2dsZUN1cnNvclZpc2liaWxpdHkoKSB7XG4gICAgaWYgKGN1cnNvclZpc2libGUuY3VycmVudCkge1xuICAgICAgY3Vyc29yRG90LmN1cnJlbnQuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICBjdXJzb3JEb3RPdXRsaW5lLmN1cnJlbnQuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnNvckRvdC5jdXJyZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgY3Vyc29yRG90T3V0bGluZS5jdXJyZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGUgQ3Vyc29yIFNpemVcbiAgICovXG4gIGZ1bmN0aW9uIHRvZ2dsZUN1cnNvclNpemUoKSB7XG4gICAgaWYgKGN1cnNvckVubGFyZ2VkLmN1cnJlbnQpIHtcbiAgICAgIGN1cnNvckRvdC5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC43KSc7XG4gICAgICBjdXJzb3JEb3RPdXRsaW5lLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID1cbiAgICAgICAgJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSg1KSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnNvckRvdC5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSknO1xuICAgICAgY3Vyc29yRG90T3V0bGluZS5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9XG4gICAgICAgICd0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSknO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBbmltYXRlIERvdCBPdXRsaW5lXG4gICAqIEFuaWFtdGVzIGN1cnNvciBvdXRsaW5lIHdpdGggdHJhaWxpbmcgZWZmZWN0LlxuICAgKiBAcGFyYW0ge251bWJlcn0gdGltZVxuICAgKi9cbiAgY29uc3QgYW5pbWF0ZURvdE91dGxpbmUgPSB0aW1lID0+IHtcbiAgICBpZiAocHJldmlvdXNUaW1lUmVmLmN1cnJlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgeCArPSAoZW5kWCAtIHgpIC8gODtcbiAgICAgIHkgKz0gKGVuZFkgLSB5KSAvIDg7XG4gICAgICBjdXJzb3JEb3RPdXRsaW5lLmN1cnJlbnQuc3R5bGUudG9wID0geSArICdweCc7XG4gICAgICBjdXJzb3JEb3RPdXRsaW5lLmN1cnJlbnQuc3R5bGUubGVmdCA9IHggKyAncHgnO1xuICAgIH1cbiAgICBwcmV2aW91c1RpbWVSZWYuY3VycmVudCA9IHRpbWU7XG4gICAgcmVxdWVzdFJlZi5jdXJyZW50ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGVEb3RPdXRsaW5lKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiByZWY9e2N1cnNvckRvdE91dGxpbmV9IGlkPVwiY3Vyc29yLWRvdC1vdXRsaW5lXCIgLz5cbiAgICAgIDxkaXYgcmVmPXtjdXJzb3JEb3R9IGlkPVwiY3Vyc29yLWRvdFwiIC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDdXN0b21DdXJzb3IiLCJjdXJzb3JEb3RPdXRsaW5lIiwidXNlUmVmIiwiY3Vyc29yRG90IiwicmVxdWVzdFJlZiIsInByZXZpb3VzVGltZVJlZiIsIm1vdXNlUG9zaXRpb24iLCJzZXRNb3VzZVBvc2l0aW9uIiwidXNlU3RhdGUiLCJ4IiwieSIsIndpZHRoIiwic2V0V2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGVpZ2h0Iiwic2V0SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJjdXJzb3JWaXNpYmxlIiwiY3Vyc29yRW5sYXJnZWQiLCJvbk1vdXNlTW92ZSIsImV2ZW50IiwicGFnZVgiLCJwYWdlWSIsInBvc2l0aW9uRG90Iiwib25Nb3VzZUVudGVyIiwiY3VycmVudCIsInRvZ2dsZUN1cnNvclZpc2liaWxpdHkiLCJvbk1vdXNlTGVhdmUiLCJvbk1vdXNlRG93biIsInRvZ2dsZUN1cnNvclNpemUiLCJvbk1vdXNlVXAiLCJvblJlc2l6ZSIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFuaW1hdGVEb3RPdXRsaW5lIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwid2luRGltZW5zaW9ucyIsImVuZFgiLCJlbmRZIiwiZSIsInN0eWxlIiwidG9wIiwibGVmdCIsIm9wYWNpdHkiLCJ0cmFuc2Zvcm0iLCJ0aW1lIiwidW5kZWZpbmVkIiwiZGl2IiwicmVmIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CustomCursor/index.jsx\n"));

/***/ })

}]);