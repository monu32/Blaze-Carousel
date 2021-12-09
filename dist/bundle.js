/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./blaze-carousel.js":
/*!***************************!*\
  !*** ./blaze-carousel.js ***!
  \***************************/
/***/ (() => {

eval("(function (){\r\n    \r\n    function getHtmlTags(tagClass)\r\n    {\r\n        return document.getElementsByClassName(tagClass)\r\n    }\r\n\r\n    function applyBlazeClasses()\r\n    {\r\n        for(let i=0;i<numberOfInnerContainers;i++)\r\n        {\r\n            let innerContainer = document.createElement(\"div\")\r\n            innerContainer.classList.add('blaze-inner-container')\r\n            \r\n            for(let j=0;j<n;j++)\r\n            {\r\n                if(items[0].classList.contains(\"blaze-inner-container\")){\r\n                    break;\r\n                }\r\n                else\r\n                {\r\n                    items[0].classList.add(\"blaze-item\")\r\n                    innerContainer.appendChild(items[0])                \r\n                }\r\n            }\r\n            outerContainer.appendChild(innerContainer)\r\n        }\r\n    }\r\n\r\n    function itemsPerSlide()\r\n    {\r\n        const items = getHtmlTags('blaze-container')\r\n        const outerContainerWidth = items[0].offsetWidth\r\n        const item = items[0].children[0]\r\n        const itemWidth = item.offsetWidth        \r\n        const n = parseInt(outerContainerWidth/itemWidth)-1;\r\n        return !n ? 1 : n; \r\n    }\r\n\r\n    const n = itemsPerSlide();\r\n    const outerContainer = getHtmlTags(\"blaze-container\")[0]\r\n    const items = outerContainer.children\r\n    const numberOfInnerContainers = items.length % n ? parseInt(items.length/n + 1)  : items.length / n\r\n    applyBlazeClasses()\r\n    const innerContainersList = getHtmlTags('blaze-inner-container')\r\n\r\n    document.getElementById(\"blaze-right-btn\").addEventListener(\"click\",function () { \r\n\r\n        for(var i=0;i<innerContainersList.length;i++)\r\n        {\r\n            rightValue = innerContainersList[i].style.right\r\n            if(rightValue==='') {\r\n                innerContainersList[i].style.setProperty('right','100%');\r\n            }\r\n            else\r\n            {\r\n                rightValue = parseInt(rightValue.replace('%',''))+100                \r\n                if(numberOfInnerContainers*100 === rightValue){\r\n                    return;\r\n                }\r\n\r\n                rightValue+='%'\r\n                innerContainersList[i].style.setProperty('right',rightValue);\r\n            }\r\n        }\r\n    })\r\n\r\n    document.getElementById(\"blaze-left-btn\").addEventListener(\"click\",function () { \r\n\r\n        for(var i=0;i<innerContainersList.length;i++)\r\n        {\r\n            rightValue = innerContainersList[i].style.right\r\n            if(rightValue==='') {\r\n                innerContainersList[i].style.setProperty('right','0%');\r\n            }\r\n            else\r\n            {\r\n                rightValue = parseInt(rightValue.replace('%',''))-100                \r\n                if(rightValue === -100){\r\n                    return;\r\n                }\r\n\r\n                rightValue+='%'\r\n                innerContainersList[i].style.setProperty('right',rightValue);\r\n            }\r\n        }\r\n    })\r\n\r\n})()\r\n\r\n\n\n//# sourceURL=webpack://Carousel/./blaze-carousel.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./blaze-carousel.js"]();
/******/ 	
/******/ })()
;