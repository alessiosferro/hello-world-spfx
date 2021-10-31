"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var HelloWorld_module_scss_1 = require("./HelloWorld.module.scss");
var sp_lodash_subset_1 = require("@microsoft/sp-lodash-subset");
var HelloWorld = (function (_super) {
    __extends(HelloWorld, _super);
    function HelloWorld() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelloWorld.prototype.render = function () {
        return (React.createElement("div", { className: HelloWorld_module_scss_1.default.helloWorld },
            React.createElement("div", { className: HelloWorld_module_scss_1.default.container },
                React.createElement("div", { className: HelloWorld_module_scss_1.default.row },
                    React.createElement("div", { className: HelloWorld_module_scss_1.default.column },
                        React.createElement("span", { className: HelloWorld_module_scss_1.default.title }, "Welcome to SharePoint!"),
                        React.createElement("p", { className: HelloWorld_module_scss_1.default.subTitle }, "Customize SharePoint experiences using Web Parts."),
                        React.createElement("p", { className: HelloWorld_module_scss_1.default.description }, sp_lodash_subset_1.escape(this.props.description)),
                        React.createElement("p", { className: HelloWorld_module_scss_1.default.description }, sp_lodash_subset_1.escape(this.props.test)),
                        React.createElement("p", { className: HelloWorld_module_scss_1.default.description }, this.props.test1),
                        React.createElement("p", { className: HelloWorld_module_scss_1.default.description }, sp_lodash_subset_1.escape(this.props.test2)),
                        React.createElement("p", { className: HelloWorld_module_scss_1.default.description }, this.props.test3),
                        React.createElement("p", { className: HelloWorld_module_scss_1.default.description }, this.props.context.web.title),
                        React.createElement("a", { href: "https://aka.ms/spfx", className: HelloWorld_module_scss_1.default.button },
                            React.createElement("span", { className: HelloWorld_module_scss_1.default.label }, "Learn more")))),
                React.createElement("ul", { className: HelloWorld_module_scss_1.default.list }, this.props.ispList.map(function (ispItem) { return React.createElement("li", { key: ispItem.Id, className: HelloWorld_module_scss_1.default.listItem },
                    React.createElement("span", { className: "ms-font-l" }, ispItem.Title)); })))));
    };
    return HelloWorld;
}(React.Component));
exports.default = HelloWorld;

//# sourceMappingURL=HelloWorld.js.map
