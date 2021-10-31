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

import * as strings from 'HelloWorldWebPartStrings';
import HelloWorld from './components/HelloWorld';
import {IHelloWorldProps} from './components/IHelloWorldProps';

export interface IHelloWorldWebPartProps {
  description: string;
  test: string;
  test1: boolean;
  test2: string;
  test3: boolean;
}

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {
  public render(): void {
    const element: React.ReactElement<IHelloWorldProps> = React.createElement(
      HelloWorld,
      {
        description: this.properties.description,
        test: this.properties.test,
        test1: this.properties.test1,
        test2: this.properties.test2,
        test3: this.properties.test3
      }
    );

    ReactDom.render(element, this.domElement);
  }

  // @ts-ignore
  protected get dataVersion(): Version {
    return Version.parse('1.0');
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
}
