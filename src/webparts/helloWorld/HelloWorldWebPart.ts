import * as React from 'react';
import * as ReactDom from 'react-dom';
import {Version} from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneCheckbox,
  PropertyPaneDropdown,
  PropertyPaneDropdownOptionType,
  PropertyPaneTextField, PropertyPaneToggle
} from '@microsoft/sp-webpart-base';

import {
  Environment,
  EnvironmentType
} from '@microsoft/sp-core-library';

import * as strings from 'HelloWorldWebPartStrings';
import MockHttpClient from './MockHttpClient';
import {
  SPHttpClient,
  SPHttpClientResponse
} from '@microsoft/sp-http';
import HelloWorld from './components/HelloWorld';
import {IHelloWorldProps} from './components/IHelloWorldProps';
import {IHelloWorldWebPartProps, ISPList, ISPLists} from "./HelloWorldWebPartModel";

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {
  public render(): void {
    this.getList().then(ispList => {
      const element: React.ReactElement<IHelloWorldProps> = React.createElement(
        HelloWorld,
        {
          description: this.properties.description,
          test: this.properties.test,
          test1: this.properties.test1,
          test2: this.properties.test2,
          test3: this.properties.test3,
          context: this.context.pageContext,
          ispList
        }
      );

      ReactDom.render(element, this.domElement);
    });
  }

  // @ts-ignore
  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  private getList(): Promise<ISPList[]> {
    // Local environment
    if (Environment.type === EnvironmentType.Local) {
      return this._getMockListData().then(({value}) => value);
    }

    if ([EnvironmentType.SharePoint, EnvironmentType.ClassicSharePoint].indexOf(Environment.type) !== -1) {
      return this._getListData().then(({value}) => value);
    }
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
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
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel,
                  multiline: true,
                }),
                PropertyPaneTextField('test', {
                  label: 'Text field'
                }),
                PropertyPaneCheckbox('test1', {
                  text: 'Checkbox'
                }),
                PropertyPaneDropdown('test2', {
                  label: 'Dropdown',
                  options: [
                    {key: '1', text: 'One'},
                    {key: '2', text: 'Two'},
                    {key: '3', text: 'Three'},
                    {type: PropertyPaneDropdownOptionType.Header, key: 'header', text: 'Header'},
                    {type: PropertyPaneDropdownOptionType.Divider, key: 'divider', text: ''},
                    {key: '5', text: 'Another option'}
                  ]
                }),
                PropertyPaneToggle('test3', {
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
  }

  private _getMockListData(): Promise<ISPLists> {
    return MockHttpClient.get()
      .then((data: ISPList[]) => ({value: data})) as Promise<ISPLists>;
  }

  private _getListData(): Promise<ISPLists> {
    return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl + `/_api/web/lists?$filter=Hidden eq false`, SPHttpClient.configurations.v1)
      .then((response: SPHttpClientResponse) => {
        return response.json();
      });
  }
}
