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
var ReactDom = require("react-dom");
var sp_core_library_1 = require("@microsoft/sp-core-library");
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var sp_core_library_2 = require("@microsoft/sp-core-library");
var strings = require("HelloWorldWebPartStrings");
var MockHttpClient_1 = require("./MockHttpClient");
var sp_http_1 = require("@microsoft/sp-http");
var HelloWorld_1 = require("./components/HelloWorld");
var HelloWorldWebPart = (function (_super) {
    __extends(HelloWorldWebPart, _super);
    function HelloWorldWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelloWorldWebPart.prototype.render = function () {
        var _this = this;
        this.getList().then(function (ispList) {
            var element = React.createElement(HelloWorld_1.default, {
                description: _this.properties.description,
                test: _this.properties.test,
                test1: _this.properties.test1,
                test2: _this.properties.test2,
                test3: _this.properties.test3,
                context: _this.context.pageContext,
                ispList: ispList
            });
            ReactDom.render(element, _this.domElement);
        });
    };
    Object.defineProperty(HelloWorldWebPart.prototype, "dataVersion", {
        // @ts-ignore
        get: function () {
            return sp_core_library_1.Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    HelloWorldWebPart.prototype.getList = function () {
        // Local environment
        if (sp_core_library_2.Environment.type === sp_core_library_2.EnvironmentType.Local) {
            return this._getMockListData().then(function (_a) {
                var value = _a.value;
                return value;
            });
        }
        if ([sp_core_library_2.EnvironmentType.SharePoint, sp_core_library_2.EnvironmentType.ClassicSharePoint].indexOf(sp_core_library_2.Environment.type) !== -1) {
            return this._getListData().then(function (_a) {
                var value = _a.value;
                return value;
            });
        }
    };
    HelloWorldWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                sp_webpart_base_1.PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel,
                                    multiline: true,
                                }),
                                sp_webpart_base_1.PropertyPaneTextField('test', {
                                    label: 'Text field'
                                }),
                                sp_webpart_base_1.PropertyPaneCheckbox('test1', {
                                    text: 'Checkbox'
                                }),
                                sp_webpart_base_1.PropertyPaneDropdown('test2', {
                                    label: 'Dropdown',
                                    options: [
                                        { key: '1', text: 'One' },
                                        { key: '2', text: 'Two' },
                                        { key: '3', text: 'Three' },
                                        { type: sp_webpart_base_1.PropertyPaneDropdownOptionType.Header, key: 'header', text: 'Header' },
                                        { type: sp_webpart_base_1.PropertyPaneDropdownOptionType.Divider, key: 'divider', text: '' },
                                        { key: '5', text: 'Another option' }
                                    ]
                                }),
                                sp_webpart_base_1.PropertyPaneToggle('test3', {
                                    label: 'Toggle',
                                    offText: 'Off',
                                    onText: 'On'
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    HelloWorldWebPart.prototype._getMockListData = function () {
        return MockHttpClient_1.default.get()
            .then(function (data) { return ({ value: data }); });
    };
    HelloWorldWebPart.prototype._getListData = function () {
        return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl + "/_api/web/lists?$filter=Hidden eq false", sp_http_1.SPHttpClient.configurations.v1)
            .then(function (response) {
            return response.json();
        });
    };
    return HelloWorldWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
exports.default = HelloWorldWebPart;

//# sourceMappingURL=HelloWorldWebPart.js.map
