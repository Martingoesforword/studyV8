/**
 * 这个文件负责解析字节码
 * 包含完整的Token => Expression => Statement => FunctionLiteral => ByteCode过程
 */
const source_code = "let a = 1;";

import { Isolate, CreateParams } from './execution/Isolate';
import Context from './execution/Context';
import Script from './execution/Script';

let create_params = new CreateParams();
let isolate = Isolate.New(create_params);
let context = new Context(isolate);

Script.Compile(context, source_code);