import { Context } from 'preact';
import { Config } from '../config';
/**
 * This is a hack to get the current global config from Preact context.
 * My assumption is that we only need one global context which is the ConfigContext
 *
 * @param context
 */
export default function getConfig(context: {
    [key: string]: Context<any>;
}): Config;
