import { UserConfig } from '../config';
import Storage from './storage';
declare class StorageUtils {
    /**
     * Accepts the userConfig dict and tries to guess and return a Storage type
     *
     * @param userConfig
     */
    static createFromUserConfig(userConfig: UserConfig): Storage<any>;
    /**
     * Accepts a HTML table element and converts it into a 2D array of data
     *
     * TODO: This function can be a step in the pipeline: Convert Table -> Load into a memory storage -> ...
     *
     * @param element
     */
    static tableElementToArray(element: HTMLElement): any[][];
}
export default StorageUtils;
