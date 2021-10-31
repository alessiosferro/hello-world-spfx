import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
import { IHelloWorldWebPartProps } from "./HelloWorldWebPartModel";
export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {
    render(): void;
    protected readonly dataVersion: Version;
    private getList();
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
    private _getMockListData();
    private _getListData();
}
