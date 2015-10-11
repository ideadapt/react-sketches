var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
require('./component.scss');
var React = require('react/addons');
var Component = (function (_super) {
    __extends(Component, _super);
    function Component() {
        _super.apply(this, arguments);
    }
    Component.prototype.shouldComponentUpdate = function () {
        return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
    };
    return Component;
})(React.Component);
var Hello = (function (_super) {
    __extends(Hello, _super);
    function Hello() {
        _super.call(this);
        this.state = { message: 'Hello world!' };
    }
    Hello.prototype.render = function () {
        return React.createElement("h1", null, this.state.message);
    };
    return Hello;
})(Component);
exports.Hello = Hello;
