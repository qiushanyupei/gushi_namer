import { debugMode } from './config';

export const log = debugMode ? console.log.bind(console) : () => { };
//js中bind是内置函数，用于对某个函数绑定this值，保证不出现覆盖定义等一场情况，导致报错，实际上就是定义了console.log函数的简写
