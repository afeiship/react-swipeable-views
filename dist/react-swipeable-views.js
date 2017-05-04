!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("noop"),require("react")):"function"==typeof define&&define.amd?define(["noop","react"],t):"object"==typeof exports?exports.ReactSwipeableViews=t(require("noop"),require("react")):e.ReactSwipeableViews=t(e.noop,e.react)}(this,function(e,t){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),r=o(i);t.default=r.default},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(2),p=o(s),c=n(3),f=(o(c),function(e){function t(e){i(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={unit:e.unit,animate:e.animate,duration:e.duration,activeIndex:e.activeIndex,translate:0,bound:{}},n}return u(t,e),a(t,[{key:"componentWillMount",value:function(){this.toIndex()}},{key:"componentWillReceiveProps",value:function(e,t){this.setState(e)}},{key:"componentDidMount",value:function(){var e=this.refs.root;this.setState({bound:e.getBoundingClientRect()})}},{key:"play",value:function(e){this._index=e+this._boundary.min,this.toIndex()}},{key:"slide",value:function(){this.setState({duration:this.props.duration,translate:"-"+100*this._index/this._length+"%"})}},{key:"toIndex",value:function(){}},{key:"updateIndex",value:function(){}},{key:"syncState",value:function(){var e=this;setTimeout(function(){e.setState({activeIndex:e._index-e._boundary.min})})}},{key:"next",value:function(e){var t=this;this._index++,this.toIndex(),setTimeout(function(){t.props.onNext(e),t.props.onChange(e)})}},{key:"prev",value:function(e){var t=this;this._index--,this.toIndex(),setTimeout(function(){t.props.onNext(e),t.props.onChange(e)})}},{key:"onSwipingNext",value:function(e,t){var n=this._index*this.state.bound[this.state.unit];this.setState({duration:0,translate:-n-t+"px"})}},{key:"onSwipingPrev",value:function(e,t){var n=this._index*this.state.bound[this.state.unit];this.setState({duration:0,translate:-n+t+"px"})}}]),t}(c.PureComponent));f.propTypes={unit:c.PropTypes.string,animate:c.PropTypes.string,duration:c.PropTypes.number,activeIndex:c.PropTypes.number,onNext:c.PropTypes.func,onPrev:c.PropTypes.func,onChange:c.PropTypes.func},f.defaultProps={unit:"width",animate:"linear",duration:.3,activeIndex:0,onNext:p.default,onPrev:p.default,onChange:p.default},t.default=f},function(t,n){t.exports=e},function(e,n){e.exports=t}])});
//# sourceMappingURL=react-swipeable-views.js.map