import { ISPList } from './helloWorld/HelloWorldWebPartModel';
export default class MockHttpClient {
    private static _items;
    static get(): Promise<ISPList[]>;
}
