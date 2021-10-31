import { ISPList } from './HelloWorldWebPartModel';
export default class MockHttpClient {
    private static _items;
    static get(): Promise<ISPList[]>;
}
