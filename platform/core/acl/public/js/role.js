(()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,n(o.key),o)}}function n(t){var n=function(t,n){if("object"!=e(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,n||"default");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==e(n)?n:String(n)}var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,r,o;return n=e,(r=[{key:"init",value:function(){$("#auto-checkboxes li").tree({onCheck:{node:"expand"},onUncheck:{node:"expand"},dnd:!1,selectable:!1}),$("#mainNode .checker").change((function(e){var t=$(e.currentTarget),n=t.attr("data-set"),r=t.is(":checked");$(n).each((function(e,t){r?$(t).attr("checked",!0):$(t).attr("checked",!1)}))}))}}])&&t(n.prototype,r),o&&t(n,o),Object.defineProperty(n,"prototype",{writable:!1}),e}();$((function(){(new r).init()}))})();