import {IHelloWorldWebPartProps} from "../HelloWorldWebPartModel";
import {PageContext} from '@microsoft/sp-page-context';
import {ISPList} from "../HelloWorldWebPartModel";

export type IHelloWorldProps = IHelloWorldWebPartProps & {
  context: PageContext,
  ispList: ISPList[];
}
