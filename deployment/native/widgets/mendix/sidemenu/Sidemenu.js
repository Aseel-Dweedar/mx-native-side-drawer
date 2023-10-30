module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Sidemenu.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2;}module.exports=_arrayLikeToArray,module.exports.__esModule=true,module.exports["default"]=module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}module.exports=_arrayWithHoles,module.exports.__esModule=true,module.exports["default"]=module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey=__webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/toPropertyKey.js");function _defineProperty(obj,key,value){key=toPropertyKey(key);if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}module.exports=_defineProperty,module.exports.__esModule=true,module.exports["default"]=module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends(){module.exports=_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;},module.exports.__esModule=true,module.exports["default"]=module.exports;return _extends.apply(this,arguments);}module.exports=_extends,module.exports.__esModule=true,module.exports["default"]=module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}module.exports=_interopRequireDefault,module.exports.__esModule=true,module.exports["default"]=module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1;}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err;}finally{try{if(!_n&&null!=_i["return"]&&(_r=_i["return"](),Object(_r)!==_r))return;}finally{if(_d)throw _e;}}return _arr;}}module.exports=_iterableToArrayLimit,module.exports.__esModule=true,module.exports["default"]=module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}module.exports=_nonIterableRest,module.exports.__esModule=true,module.exports["default"]=module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles=__webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");var iterableToArrayLimit=__webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");var unsupportedIterableToArray=__webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");var nonIterableRest=__webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");function _slicedToArray(arr,i){return arrayWithHoles(arr)||iterableToArrayLimit(arr,i)||unsupportedIterableToArray(arr,i)||nonIterableRest();}module.exports=_slicedToArray,module.exports.__esModule=true,module.exports["default"]=module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toPrimitive.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof=__webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];function _toPrimitive(input,hint){if(_typeof(input)!=="object"||input===null)return input;var prim=input[Symbol.toPrimitive];if(prim!==undefined){var res=prim.call(input,hint||"default");if(_typeof(res)!=="object")return res;throw new TypeError("@@toPrimitive must return a primitive value.");}return(hint==="string"?String:Number)(input);}module.exports=_toPrimitive,module.exports.__esModule=true,module.exports["default"]=module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toPropertyKey.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof=__webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];var toPrimitive=__webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/toPrimitive.js");function _toPropertyKey(arg){var key=toPrimitive(arg,"string");return _typeof(key)==="symbol"?key:String(key);}module.exports=_toPropertyKey,module.exports.__esModule=true,module.exports["default"]=module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj){"@babel/helpers - typeof";return(module.exports=_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj;}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;},module.exports.__esModule=true,module.exports["default"]=module.exports),_typeof(obj);}module.exports=_typeof,module.exports.__esModule=true,module.exports["default"]=module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray=__webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return arrayLikeToArray(o,minLen);}module.exports=_unsupportedIterableToArray,module.exports.__esModule=true,module.exports["default"]=module.exports;

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");var _extends2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));var getOwnPropertySymbols=Object.getOwnPropertySymbols;var hasOwnProperty=Object.prototype.hasOwnProperty;var propIsEnumerable=Object.prototype.propertyIsEnumerable;function toObject(val){if(val===null||val===undefined){throw new TypeError('Object.assign cannot be called with null or undefined');}return Object(val);}function shouldUseNative(){try{if(!Object.assign){return false;}var test1=new String('abc');test1[5]='de';if(Object.getOwnPropertyNames(test1)[0]==='5'){return false;}var test2={};for(var i=0;i<10;i++){test2['_'+String.fromCharCode(i)]=i;}var order2=Object.getOwnPropertyNames(test2).map(function(n){return test2[n];});if(order2.join('')!=='0123456789'){return false;}var test3={};'abcdefghijklmnopqrst'.split('').forEach(function(letter){test3[letter]=letter;});if(Object.keys((0,_extends2.default)({},test3)).join('')!=='abcdefghijklmnopqrst'){return false;}return true;}catch(err){return false;}}module.exports=shouldUseNative()?Object.assign:function(target,source){var from;var to=toObject(target);var symbols;for(var s=1;s<arguments.length;s++){from=Object(arguments[s]);for(var key in from){if(hasOwnProperty.call(from,key)){to[key]=from[key];}}if(getOwnPropertySymbols){symbols=getOwnPropertySymbols(from);for(var i=0;i<symbols.length;i++){if(propIsEnumerable.call(from,symbols[i])){to[symbols[i]]=from[symbols[i]];}}}}return to;};

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var printWarning=function printWarning(){};if(true){var ReactPropTypesSecret=__webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");var loggedTypeFailures={};var has=__webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");printWarning=function printWarning(text){var message='Warning: '+text;if(typeof console!=='undefined'){console.error(message);}try{throw new Error(message);}catch(x){}};}function checkPropTypes(typeSpecs,values,location,componentName,getStack){if(true){for(var typeSpecName in typeSpecs){if(has(typeSpecs,typeSpecName)){var error;try{if(typeof typeSpecs[typeSpecName]!=='function'){var err=Error((componentName||'React class')+': '+location+' type `'+typeSpecName+'` is invalid; '+'it must be a function, usually from the `prop-types` package, but received `'+typeof typeSpecs[typeSpecName]+'`.'+'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');err.name='Invariant Violation';throw err;}error=typeSpecs[typeSpecName](values,typeSpecName,componentName,location,null,ReactPropTypesSecret);}catch(ex){error=ex;}if(error&&!(error instanceof Error)){printWarning((componentName||'React class')+': type specification of '+location+' `'+typeSpecName+'` is invalid; the type checker '+'function must return `null` or an `Error` but returned a '+typeof error+'. '+'You may have forgotten to pass an argument to the type checker '+'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and '+'shape all require an argument).');}if(error instanceof Error&&!(error.message in loggedTypeFailures)){loggedTypeFailures[error.message]=true;var stack=getStack?getStack():'';printWarning('Failed '+location+' type: '+error.message+(stack!=null?stack:''));}}}}}checkPropTypes.resetWarningCache=function(){if(true){loggedTypeFailures={};}};module.exports=checkPropTypes;

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var ReactIs=__webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");var assign=__webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");var ReactPropTypesSecret=__webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");var has=__webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");var checkPropTypes=__webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");var printWarning=function printWarning(){};if(true){printWarning=function printWarning(text){var message='Warning: '+text;if(typeof console!=='undefined'){console.error(message);}try{throw new Error(message);}catch(x){}};}function emptyFunctionThatReturnsNull(){return null;}module.exports=function(isValidElement,throwOnDirectAccess){var ITERATOR_SYMBOL=typeof Symbol==='function'&&Symbol.iterator;var FAUX_ITERATOR_SYMBOL='@@iterator';function getIteratorFn(maybeIterable){var iteratorFn=maybeIterable&&(ITERATOR_SYMBOL&&maybeIterable[ITERATOR_SYMBOL]||maybeIterable[FAUX_ITERATOR_SYMBOL]);if(typeof iteratorFn==='function'){return iteratorFn;}}var ANONYMOUS='<<anonymous>>';var ReactPropTypes={array:createPrimitiveTypeChecker('array'),bigint:createPrimitiveTypeChecker('bigint'),bool:createPrimitiveTypeChecker('boolean'),func:createPrimitiveTypeChecker('function'),number:createPrimitiveTypeChecker('number'),object:createPrimitiveTypeChecker('object'),string:createPrimitiveTypeChecker('string'),symbol:createPrimitiveTypeChecker('symbol'),any:createAnyTypeChecker(),arrayOf:createArrayOfTypeChecker,element:createElementTypeChecker(),elementType:createElementTypeTypeChecker(),instanceOf:createInstanceTypeChecker,node:createNodeChecker(),objectOf:createObjectOfTypeChecker,oneOf:createEnumTypeChecker,oneOfType:createUnionTypeChecker,shape:createShapeTypeChecker,exact:createStrictShapeTypeChecker};function is(x,y){if(x===y){return x!==0||1/x===1/y;}else{return x!==x&&y!==y;}}function PropTypeError(message,data){this.message=message;this.data=data&&typeof data==='object'?data:{};this.stack='';}PropTypeError.prototype=Error.prototype;function createChainableTypeChecker(validate){if(true){var manualPropTypeCallCache={};var manualPropTypeWarningCount=0;}function checkType(isRequired,props,propName,componentName,location,propFullName,secret){componentName=componentName||ANONYMOUS;propFullName=propFullName||propName;if(secret!==ReactPropTypesSecret){if(throwOnDirectAccess){var err=new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. '+'Use `PropTypes.checkPropTypes()` to call them. '+'Read more at http://fb.me/use-check-prop-types');err.name='Invariant Violation';throw err;}else if( true&&typeof console!=='undefined'){var cacheKey=componentName+':'+propName;if(!manualPropTypeCallCache[cacheKey]&&manualPropTypeWarningCount<3){printWarning('You are manually calling a React.PropTypes validation '+'function for the `'+propFullName+'` prop on `'+componentName+'`. This is deprecated '+'and will throw in the standalone `prop-types` package. '+'You may be seeing this warning due to a third-party PropTypes '+'library. See https://fb.me/react-warning-dont-call-proptypes '+'for details.');manualPropTypeCallCache[cacheKey]=true;manualPropTypeWarningCount++;}}}if(props[propName]==null){if(isRequired){if(props[propName]===null){return new PropTypeError('The '+location+' `'+propFullName+'` is marked as required '+('in `'+componentName+'`, but its value is `null`.'));}return new PropTypeError('The '+location+' `'+propFullName+'` is marked as required in '+('`'+componentName+'`, but its value is `undefined`.'));}return null;}else{return validate(props,propName,componentName,location,propFullName);}}var chainedCheckType=checkType.bind(null,false);chainedCheckType.isRequired=checkType.bind(null,true);return chainedCheckType;}function createPrimitiveTypeChecker(expectedType){function validate(props,propName,componentName,location,propFullName,secret){var propValue=props[propName];var propType=getPropType(propValue);if(propType!==expectedType){var preciseType=getPreciseType(propValue);return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+preciseType+'` supplied to `'+componentName+'`, expected ')+('`'+expectedType+'`.'),{expectedType:expectedType});}return null;}return createChainableTypeChecker(validate);}function createAnyTypeChecker(){return createChainableTypeChecker(emptyFunctionThatReturnsNull);}function createArrayOfTypeChecker(typeChecker){function validate(props,propName,componentName,location,propFullName){if(typeof typeChecker!=='function'){return new PropTypeError('Property `'+propFullName+'` of component `'+componentName+'` has invalid PropType notation inside arrayOf.');}var propValue=props[propName];if(!Array.isArray(propValue)){var propType=getPropType(propValue);return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected an array.'));}for(var i=0;i<propValue.length;i++){var error=typeChecker(propValue,i,componentName,location,propFullName+'['+i+']',ReactPropTypesSecret);if(error instanceof Error){return error;}}return null;}return createChainableTypeChecker(validate);}function createElementTypeChecker(){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];if(!isValidElement(propValue)){var propType=getPropType(propValue);return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected a single ReactElement.'));}return null;}return createChainableTypeChecker(validate);}function createElementTypeTypeChecker(){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];if(!ReactIs.isValidElementType(propValue)){var propType=getPropType(propValue);return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected a single ReactElement type.'));}return null;}return createChainableTypeChecker(validate);}function createInstanceTypeChecker(expectedClass){function validate(props,propName,componentName,location,propFullName){if(!(props[propName]instanceof expectedClass)){var expectedClassName=expectedClass.name||ANONYMOUS;var actualClassName=getClassName(props[propName]);return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+actualClassName+'` supplied to `'+componentName+'`, expected ')+('instance of `'+expectedClassName+'`.'));}return null;}return createChainableTypeChecker(validate);}function createEnumTypeChecker(expectedValues){if(!Array.isArray(expectedValues)){if(true){if(arguments.length>1){printWarning('Invalid arguments supplied to oneOf, expected an array, got '+arguments.length+' arguments. '+'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');}else{printWarning('Invalid argument supplied to oneOf, expected an array.');}}return emptyFunctionThatReturnsNull;}function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];for(var i=0;i<expectedValues.length;i++){if(is(propValue,expectedValues[i])){return null;}}var valuesString=JSON.stringify(expectedValues,function replacer(key,value){var type=getPreciseType(value);if(type==='symbol'){return String(value);}return value;});return new PropTypeError('Invalid '+location+' `'+propFullName+'` of value `'+String(propValue)+'` '+('supplied to `'+componentName+'`, expected one of '+valuesString+'.'));}return createChainableTypeChecker(validate);}function createObjectOfTypeChecker(typeChecker){function validate(props,propName,componentName,location,propFullName){if(typeof typeChecker!=='function'){return new PropTypeError('Property `'+propFullName+'` of component `'+componentName+'` has invalid PropType notation inside objectOf.');}var propValue=props[propName];var propType=getPropType(propValue);if(propType!=='object'){return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected an object.'));}for(var key in propValue){if(has(propValue,key)){var error=typeChecker(propValue,key,componentName,location,propFullName+'.'+key,ReactPropTypesSecret);if(error instanceof Error){return error;}}}return null;}return createChainableTypeChecker(validate);}function createUnionTypeChecker(arrayOfTypeCheckers){if(!Array.isArray(arrayOfTypeCheckers)){ true?printWarning('Invalid argument supplied to oneOfType, expected an instance of array.'):undefined;return emptyFunctionThatReturnsNull;}for(var i=0;i<arrayOfTypeCheckers.length;i++){var checker=arrayOfTypeCheckers[i];if(typeof checker!=='function'){printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but '+'received '+getPostfixForTypeWarning(checker)+' at index '+i+'.');return emptyFunctionThatReturnsNull;}}function validate(props,propName,componentName,location,propFullName){var expectedTypes=[];for(var i=0;i<arrayOfTypeCheckers.length;i++){var checker=arrayOfTypeCheckers[i];var checkerResult=checker(props,propName,componentName,location,propFullName,ReactPropTypesSecret);if(checkerResult==null){return null;}if(checkerResult.data&&has(checkerResult.data,'expectedType')){expectedTypes.push(checkerResult.data.expectedType);}}var expectedTypesMessage=expectedTypes.length>0?', expected one of type ['+expectedTypes.join(', ')+']':'';return new PropTypeError('Invalid '+location+' `'+propFullName+'` supplied to '+('`'+componentName+'`'+expectedTypesMessage+'.'));}return createChainableTypeChecker(validate);}function createNodeChecker(){function validate(props,propName,componentName,location,propFullName){if(!isNode(props[propName])){return new PropTypeError('Invalid '+location+' `'+propFullName+'` supplied to '+('`'+componentName+'`, expected a ReactNode.'));}return null;}return createChainableTypeChecker(validate);}function invalidValidatorError(componentName,location,propFullName,key,type){return new PropTypeError((componentName||'React class')+': '+location+' type `'+propFullName+'.'+key+'` is invalid; '+'it must be a function, usually from the `prop-types` package, but received `'+type+'`.');}function createShapeTypeChecker(shapeTypes){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];var propType=getPropType(propValue);if(propType!=='object'){return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type `'+propType+'` '+('supplied to `'+componentName+'`, expected `object`.'));}for(var key in shapeTypes){var checker=shapeTypes[key];if(typeof checker!=='function'){return invalidValidatorError(componentName,location,propFullName,key,getPreciseType(checker));}var error=checker(propValue,key,componentName,location,propFullName+'.'+key,ReactPropTypesSecret);if(error){return error;}}return null;}return createChainableTypeChecker(validate);}function createStrictShapeTypeChecker(shapeTypes){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];var propType=getPropType(propValue);if(propType!=='object'){return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type `'+propType+'` '+('supplied to `'+componentName+'`, expected `object`.'));}var allKeys=assign({},props[propName],shapeTypes);for(var key in allKeys){var checker=shapeTypes[key];if(has(shapeTypes,key)&&typeof checker!=='function'){return invalidValidatorError(componentName,location,propFullName,key,getPreciseType(checker));}if(!checker){return new PropTypeError('Invalid '+location+' `'+propFullName+'` key `'+key+'` supplied to `'+componentName+'`.'+'\nBad object: '+JSON.stringify(props[propName],null,'  ')+'\nValid keys: '+JSON.stringify(Object.keys(shapeTypes),null,'  '));}var error=checker(propValue,key,componentName,location,propFullName+'.'+key,ReactPropTypesSecret);if(error){return error;}}return null;}return createChainableTypeChecker(validate);}function isNode(propValue){switch(typeof propValue){case'number':case'string':case'undefined':return true;case'boolean':return!propValue;case'object':if(Array.isArray(propValue)){return propValue.every(isNode);}if(propValue===null||isValidElement(propValue)){return true;}var iteratorFn=getIteratorFn(propValue);if(iteratorFn){var iterator=iteratorFn.call(propValue);var step;if(iteratorFn!==propValue.entries){while(!(step=iterator.next()).done){if(!isNode(step.value)){return false;}}}else{while(!(step=iterator.next()).done){var entry=step.value;if(entry){if(!isNode(entry[1])){return false;}}}}}else{return false;}return true;default:return false;}}function isSymbol(propType,propValue){if(propType==='symbol'){return true;}if(!propValue){return false;}if(propValue['@@toStringTag']==='Symbol'){return true;}if(typeof Symbol==='function'&&propValue instanceof Symbol){return true;}return false;}function getPropType(propValue){var propType=typeof propValue;if(Array.isArray(propValue)){return'array';}if(propValue instanceof RegExp){return'object';}if(isSymbol(propType,propValue)){return'symbol';}return propType;}function getPreciseType(propValue){if(typeof propValue==='undefined'||propValue===null){return''+propValue;}var propType=getPropType(propValue);if(propType==='object'){if(propValue instanceof Date){return'date';}else if(propValue instanceof RegExp){return'regexp';}}return propType;}function getPostfixForTypeWarning(value){var type=getPreciseType(value);switch(type){case'array':case'object':return'an '+type;case'boolean':case'date':case'regexp':return'a '+type;default:return type;}}function getClassName(propValue){if(!propValue.constructor||!propValue.constructor.name){return ANONYMOUS;}return propValue.constructor.name;}ReactPropTypes.checkPropTypes=checkPropTypes;ReactPropTypes.resetWarningCache=checkPropTypes.resetWarningCache;ReactPropTypes.PropTypes=ReactPropTypes;return ReactPropTypes;};

/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if(true){var ReactIs=__webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");var throwOnDirectAccess=true;module.exports=__webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement,throwOnDirectAccess);}else{}

/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var ReactPropTypesSecret='SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';module.exports=ReactPropTypesSecret;

/***/ }),

/***/ "./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=Function.call.bind(Object.prototype.hasOwnProperty);

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */if(true){(function(){'use strict';var hasSymbol=typeof Symbol==='function'&&Symbol.for;var REACT_ELEMENT_TYPE=hasSymbol?Symbol.for('react.element'):0xeac7;var REACT_PORTAL_TYPE=hasSymbol?Symbol.for('react.portal'):0xeaca;var REACT_FRAGMENT_TYPE=hasSymbol?Symbol.for('react.fragment'):0xeacb;var REACT_STRICT_MODE_TYPE=hasSymbol?Symbol.for('react.strict_mode'):0xeacc;var REACT_PROFILER_TYPE=hasSymbol?Symbol.for('react.profiler'):0xead2;var REACT_PROVIDER_TYPE=hasSymbol?Symbol.for('react.provider'):0xeacd;var REACT_CONTEXT_TYPE=hasSymbol?Symbol.for('react.context'):0xeace;var REACT_ASYNC_MODE_TYPE=hasSymbol?Symbol.for('react.async_mode'):0xeacf;var REACT_CONCURRENT_MODE_TYPE=hasSymbol?Symbol.for('react.concurrent_mode'):0xeacf;var REACT_FORWARD_REF_TYPE=hasSymbol?Symbol.for('react.forward_ref'):0xead0;var REACT_SUSPENSE_TYPE=hasSymbol?Symbol.for('react.suspense'):0xead1;var REACT_SUSPENSE_LIST_TYPE=hasSymbol?Symbol.for('react.suspense_list'):0xead8;var REACT_MEMO_TYPE=hasSymbol?Symbol.for('react.memo'):0xead3;var REACT_LAZY_TYPE=hasSymbol?Symbol.for('react.lazy'):0xead4;var REACT_BLOCK_TYPE=hasSymbol?Symbol.for('react.block'):0xead9;var REACT_FUNDAMENTAL_TYPE=hasSymbol?Symbol.for('react.fundamental'):0xead5;var REACT_RESPONDER_TYPE=hasSymbol?Symbol.for('react.responder'):0xead6;var REACT_SCOPE_TYPE=hasSymbol?Symbol.for('react.scope'):0xead7;function isValidElementType(type){return typeof type==='string'||typeof type==='function'||type===REACT_FRAGMENT_TYPE||type===REACT_CONCURRENT_MODE_TYPE||type===REACT_PROFILER_TYPE||type===REACT_STRICT_MODE_TYPE||type===REACT_SUSPENSE_TYPE||type===REACT_SUSPENSE_LIST_TYPE||typeof type==='object'&&type!==null&&(type.$$typeof===REACT_LAZY_TYPE||type.$$typeof===REACT_MEMO_TYPE||type.$$typeof===REACT_PROVIDER_TYPE||type.$$typeof===REACT_CONTEXT_TYPE||type.$$typeof===REACT_FORWARD_REF_TYPE||type.$$typeof===REACT_FUNDAMENTAL_TYPE||type.$$typeof===REACT_RESPONDER_TYPE||type.$$typeof===REACT_SCOPE_TYPE||type.$$typeof===REACT_BLOCK_TYPE);}function typeOf(object){if(typeof object==='object'&&object!==null){var $$typeof=object.$$typeof;switch($$typeof){case REACT_ELEMENT_TYPE:var type=object.type;switch(type){case REACT_ASYNC_MODE_TYPE:case REACT_CONCURRENT_MODE_TYPE:case REACT_FRAGMENT_TYPE:case REACT_PROFILER_TYPE:case REACT_STRICT_MODE_TYPE:case REACT_SUSPENSE_TYPE:return type;default:var $$typeofType=type&&type.$$typeof;switch($$typeofType){case REACT_CONTEXT_TYPE:case REACT_FORWARD_REF_TYPE:case REACT_LAZY_TYPE:case REACT_MEMO_TYPE:case REACT_PROVIDER_TYPE:return $$typeofType;default:return $$typeof;}}case REACT_PORTAL_TYPE:return $$typeof;}}return undefined;}var AsyncMode=REACT_ASYNC_MODE_TYPE;var ConcurrentMode=REACT_CONCURRENT_MODE_TYPE;var ContextConsumer=REACT_CONTEXT_TYPE;var ContextProvider=REACT_PROVIDER_TYPE;var Element=REACT_ELEMENT_TYPE;var ForwardRef=REACT_FORWARD_REF_TYPE;var Fragment=REACT_FRAGMENT_TYPE;var Lazy=REACT_LAZY_TYPE;var Memo=REACT_MEMO_TYPE;var Portal=REACT_PORTAL_TYPE;var Profiler=REACT_PROFILER_TYPE;var StrictMode=REACT_STRICT_MODE_TYPE;var Suspense=REACT_SUSPENSE_TYPE;var hasWarnedAboutDeprecatedIsAsyncMode=false;function isAsyncMode(object){{if(!hasWarnedAboutDeprecatedIsAsyncMode){hasWarnedAboutDeprecatedIsAsyncMode=true;console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, '+'and will be removed in React 17+. Update your code to use '+'ReactIs.isConcurrentMode() instead. It has the exact same API.');}}return isConcurrentMode(object)||typeOf(object)===REACT_ASYNC_MODE_TYPE;}function isConcurrentMode(object){return typeOf(object)===REACT_CONCURRENT_MODE_TYPE;}function isContextConsumer(object){return typeOf(object)===REACT_CONTEXT_TYPE;}function isContextProvider(object){return typeOf(object)===REACT_PROVIDER_TYPE;}function isElement(object){return typeof object==='object'&&object!==null&&object.$$typeof===REACT_ELEMENT_TYPE;}function isForwardRef(object){return typeOf(object)===REACT_FORWARD_REF_TYPE;}function isFragment(object){return typeOf(object)===REACT_FRAGMENT_TYPE;}function isLazy(object){return typeOf(object)===REACT_LAZY_TYPE;}function isMemo(object){return typeOf(object)===REACT_MEMO_TYPE;}function isPortal(object){return typeOf(object)===REACT_PORTAL_TYPE;}function isProfiler(object){return typeOf(object)===REACT_PROFILER_TYPE;}function isStrictMode(object){return typeOf(object)===REACT_STRICT_MODE_TYPE;}function isSuspense(object){return typeOf(object)===REACT_SUSPENSE_TYPE;}exports.AsyncMode=AsyncMode;exports.ConcurrentMode=ConcurrentMode;exports.ContextConsumer=ContextConsumer;exports.ContextProvider=ContextProvider;exports.Element=Element;exports.ForwardRef=ForwardRef;exports.Fragment=Fragment;exports.Lazy=Lazy;exports.Memo=Memo;exports.Portal=Portal;exports.Profiler=Profiler;exports.StrictMode=StrictMode;exports.Suspense=Suspense;exports.isAsyncMode=isAsyncMode;exports.isConcurrentMode=isConcurrentMode;exports.isContextConsumer=isContextConsumer;exports.isContextProvider=isContextProvider;exports.isElement=isElement;exports.isForwardRef=isForwardRef;exports.isFragment=isFragment;exports.isLazy=isLazy;exports.isMemo=isMemo;exports.isPortal=isPortal;exports.isProfiler=isProfiler;exports.isStrictMode=isStrictMode;exports.isSuspense=isSuspense;exports.isValidElementType=isValidElementType;exports.typeOf=typeOf;})();}

/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
if(false){}else{module.exports=__webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");}

/***/ }),

/***/ "./node_modules/react-native-side-drawer/index.js":
/*!********************************************************!*\
  !*** ./node_modules/react-native-side-drawer/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _defineProperty2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));var _react=_interopRequireWildcard(__webpack_require__(/*! react */ "react"));var _reactNative=__webpack_require__(/*! react-native */ "react-native");var _propTypes=_interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));var _this=this,_jsxFileName="C:\\Users\\adweidar\\Documents\\Mendix\\boshra-main\\custom widgets\\sidemenu\\node_modules\\react-native-side-drawer\\index.js";function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}var MenuDrawer=function MenuDrawer(props){var fadeAnim=(0,_react.useRef)(new _reactNative.Animated.Value(0)).current;var window=(0,_reactNative.useWindowDimensions)();var screenHeight=props.fullSize?_reactNative.Dimensions.get('screen').height:window.height;var screenWidth=props.fullSize?_reactNative.Dimensions.get('screen').width:window.width;var initialDrawerWidth=screenWidth*(props.drawerPercentage/100);var drawerWidthRef=(0,_react.useRef)(initialDrawerWidth);var leftOffsetRef=(0,_react.useRef)(new _reactNative.Animated.Value(0));(0,_react.useEffect)(function(){var newDrawerWidth=screenWidth*(props.drawerPercentage/100);drawerWidthRef.current=newDrawerWidth;if(props.open){leftOffsetRef.current=new _reactNative.Animated.Value(determineNewLeftOffset(drawerWidthRef.current));}else{leftOffsetRef.current=new _reactNative.Animated.Value(0);}},[screenWidth]);var determineNewLeftOffset=function determineNewLeftOffset(drawerWidth){return props.position==="left"?drawerWidth:-drawerWidth;};(0,_react.useEffect)(function(){props.open?openDrawer():closeDrawer();},[props.open]);var openDrawer=function openDrawer(){var drawerPercentage=props.drawerPercentage,animationTime=props.animationTime,opacity=props.opacity;var drawerWidth=drawerWidthRef.current;var leftOffset=leftOffsetRef.current;_reactNative.Animated.parallel([_reactNative.Animated.timing(leftOffset,{toValue:determineNewLeftOffset(drawerWidth),duration:animationTime,useNativeDriver:true}),_reactNative.Animated.timing(fadeAnim,{toValue:opacity,duration:animationTime,useNativeDriver:true})]).start();};var closeDrawer=function closeDrawer(){var drawerPercentage=props.drawerPercentage,animationTime=props.animationTime;var drawerWidth=drawerWidthRef.current;var leftOffset=leftOffsetRef.current;_reactNative.Animated.parallel([_reactNative.Animated.timing(leftOffset,{toValue:0,duration:animationTime,useNativeDriver:true}),_reactNative.Animated.timing(fadeAnim,{toValue:1,duration:animationTime,useNativeDriver:true})]).start();};var drawerFallback=function drawerFallback(){return _react.default.createElement(_reactNative.TouchableOpacity,{onPress:closeDrawer,__self:_this,__source:{fileName:_jsxFileName,lineNumber:83,columnNumber:7}},_react.default.createElement(_reactNative.Text,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:84,columnNumber:9}},"Close"));};var renderPush=function renderPush(){var children=props.children,drawerContent=props.drawerContent,position=props.position,drawerPercentage=props.drawerPercentage;var drawerWidth=drawerWidthRef.current;var leftOffset=leftOffsetRef.current;var animated={transform:[{translateX:leftOffset}]};return _react.default.createElement(_reactNative.Animated.View,{style:[animated,styles.pushMain,{flexDirection:position==="left"?"row":"row-reverse",left:position==="left"?-drawerWidth:0,height:screenHeight,width:drawerWidth+screenWidth}],__self:_this,__source:{fileName:_jsxFileName,lineNumber:96,columnNumber:7}},_react.default.createElement(_reactNative.View,{style:[{height:screenHeight,width:drawerWidth}],__self:_this,__source:{fileName:_jsxFileName,lineNumber:108,columnNumber:9}},drawerContent?drawerContent:drawerFallback()),_react.default.createElement(_reactNative.Animated.View,{style:[{height:screenHeight,width:screenWidth,opacity:fadeAnim}],__self:_this,__source:{fileName:_jsxFileName,lineNumber:118,columnNumber:9}},children));};var renderOverlay=function renderOverlay(){var children=props.children,position=props.position,drawerContent=props.drawerContent,drawerPercentage=props.drawerPercentage;var drawerWidth=drawerWidthRef.current;var leftOffset=leftOffsetRef.current;var animated={transform:[{translateX:leftOffset}]};return _react.default.createElement(_react.default.Fragment,null,_react.default.createElement(_reactNative.Animated.View,{style:[animated,styles.drawerOverlay,(0,_defineProperty2.default)({height:screenHeight,width:drawerWidth},position,-drawerWidth)],__self:_this,__source:{fileName:_jsxFileName,lineNumber:141,columnNumber:9}},drawerContent?drawerContent:drawerFallback()),_react.default.createElement(_reactNative.Animated.View,{style:[styles.containerOverlay,{opacity:fadeAnim}],__self:_this,__source:{fileName:_jsxFileName,lineNumber:150,columnNumber:9}},children));};return props.overlay?renderOverlay():renderPush();};MenuDrawer.defaultProps={open:false,drawerPercentage:45,animationTime:200,overlay:true,opacity:0.4,position:"left",fullSize:false};MenuDrawer.propTypes={open:_propTypes.default.bool,drawerPercentage:_propTypes.default.number,animationTime:_propTypes.default.number,overlay:_propTypes.default.bool,opacity:_propTypes.default.number,position:_propTypes.default.oneOf(["left","right"]),fullSize:_propTypes.default.bool};var styles=_reactNative.StyleSheet.create({mainPush:{position:"absolute",flex:1},containerOverlay:{flex:1,elevation:0,zIndex:0},drawerOverlay:{position:"absolute",elevation:1,zIndex:1}});var _default=MenuDrawer;exports.default=_default;

/***/ }),

/***/ "./src/Sidemenu.jsx":
/*!**************************!*\
  !*** ./src/Sidemenu.jsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:true});exports.Sidemenu=Sidemenu;var _extends2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));var _slicedToArray2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));var _react=__webpack_require__(/*! react */ "react");var _reactNative=__webpack_require__(/*! react-native */ "react-native");var _reactNativeSideDrawer=_interopRequireDefault(__webpack_require__(/*! react-native-side-drawer */ "./node_modules/react-native-side-drawer/index.js"));var _useSwipe2=__webpack_require__(/*! ./components/useSwipe */ "./src/components/useSwipe.jsx");var _jsxFileName="C:\\Users\\adweidar\\Documents\\Mendix\\boshra-main\\custom widgets\\sidemenu\\src\\Sidemenu.jsx";var _Dimensions$get=_reactNative.Dimensions.get("window"),windowHeight=_Dimensions$get.height,windowWidth=_Dimensions$get.width;function Sidemenu(_ref){var _this=this;var isOpen=_ref.isOpen,content=_ref.content,closeDrawer=_ref.closeDrawer,menuPosition=_ref.menuPosition,drawerPercentage=_ref.drawerPercentage,animationTime=_ref.animationTime,DrawerColor=_ref.DrawerColor,overlayColor=_ref.overlayColor;var _useState=(0,_react.useState)(false),_useState2=(0,_slicedToArray2.default)(_useState,2),isMenuOpen=_useState2[0],setIsMenuOpen=_useState2[1];var _useSwipe=(0,_useSwipe2.useSwipe)(onSwipeLeft,onSwipeRight,6),onTouchStart=_useSwipe.onTouchStart,onTouchEnd=_useSwipe.onTouchEnd;function onSwipeLeft(){if(menuPosition==="left")onClickOverlayOrSwipe();}function onSwipeRight(){if(menuPosition==="right")onClickOverlayOrSwipe();}var onClickOverlayOrSwipe=function onClickOverlayOrSwipe(){(closeDrawer==null?void 0:closeDrawer.canExecute)&&closeDrawer.execute();};var drawerContent=function drawerContent(){return(0,_react.createElement)(_reactNative.View,{onTouchStart:onTouchStart,onTouchEnd:onTouchEnd,style:(0,_extends2.default)({},styles.animatedBox,{backgroundColor:DrawerColor?DrawerColor:"#edf3f6"}),__self:_this,__source:{fileName:_jsxFileName,lineNumber:42,columnNumber:9}},(0,_react.createElement)(_reactNative.ScrollView,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:47,columnNumber:13}},content));};var validateValue=function validateValue(value,min,max){return value<min?min:value>max?max:value;};(0,_react.useEffect)(function(){if(isOpen.status==="available"){setIsMenuOpen(isOpen.value);}},[isOpen]);return(0,_react.createElement)(_reactNative.View,{style:(0,_extends2.default)({},styles.container,{height:isMenuOpen?windowHeight:"auto",width:isMenuOpen?windowWidth:"auto",right:menuPosition==="right"?0:"auto",left:menuPosition==="left"?0:"auto",backgroundColor:isMenuOpen?overlayColor?overlayColor:"#00000080":"transparent"}),__self:this,__source:{fileName:_jsxFileName,lineNumber:68,columnNumber:9}},(0,_react.createElement)(_reactNativeSideDrawer.default,{open:isMenuOpen,position:menuPosition,drawerContent:drawerContent(),drawerPercentage:validateValue(drawerPercentage,10,100),animationTime:animationTime<0?0:animationTime,overlay:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:78,columnNumber:13}},(0,_react.createElement)(_reactNative.TouchableOpacity,{onPress:onClickOverlayOrSwipe,style:{height:isMenuOpen?windowHeight:"auto",width:isMenuOpen?windowWidth:"auto"},__self:this,__source:{fileName:_jsxFileName,lineNumber:86,columnNumber:17}})));}var styles=_reactNative.StyleSheet.create({container:{alignItems:"baseline",position:"absolute",top:0,zIndex:10000},animatedBox:{shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:0.25,shadowRadius:3.84,elevation:5,padding:0,margin:0,height:windowHeight}});

/***/ }),

/***/ "./src/components/useSwipe.jsx":
/*!*************************************!*\
  !*** ./src/components/useSwipe.jsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.useSwipe=useSwipe;var _react=__webpack_require__(/*! react */ "react");var _reactNative=__webpack_require__(/*! react-native */ "react-native");var windowWidth=_reactNative.Dimensions.get("window").width;function useSwipe(onSwipeLeft,onSwipeRight){var rangeOffset=arguments.length>2&&arguments[2]!==undefined?arguments[2]:4;var firstTouch=0;function onTouchStart(e){firstTouch=e.nativeEvent.pageX;}function onTouchEnd(e){var positionX=e.nativeEvent.pageX;var range=windowWidth/rangeOffset;if(positionX-firstTouch>range){onSwipeRight&&onSwipeRight();}else if(firstTouch-positionX>range){onSwipeLeft&&onSwipeLeft();}}return{onTouchStart:onTouchStart,onTouchEnd:onTouchEnd};}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-native":
/*!*******************************!*\
  !*** external "react-native" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-native");

/***/ })

/******/ });
//# sourceMappingURL=Sidemenu.js.map