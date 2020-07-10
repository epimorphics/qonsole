import { PipelineProcessor, ProcessorType } from '../processor';
import Tabular from '../../tabular';
import { ArrayResponse } from './storageResponseToArray';
declare class ArrayToTabularTransformer extends PipelineProcessor<Tabular, {}> {
    get type(): ProcessorType;
    _process(arrayResponse: ArrayResponse): Tabular;
}
export default ArrayToTabularTransformer;
