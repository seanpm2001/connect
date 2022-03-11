import path from 'path';

export const ABSOLUTE_BASE = path.normalize(path.join(__dirname, '..'));
export const LIB_NAME = 'TrezorConnect';
export const DIST = path.join(ABSOLUTE_BASE, 'build/');
export const SRC = path.join(ABSOLUTE_BASE, 'src/');
export const JS_SRC = path.join(ABSOLUTE_BASE, 'src/js/');
export const HTML_SRC = path.join(ABSOLUTE_BASE, 'src/html/');
export const NODE_MODULES = path.join(ABSOLUTE_BASE, 'node_modules/');
export const DATA_SRC = path.join(NODE_MODULES, '@trezor/connect-common/src/files');
export const STYLE_SRC = path.join(ABSOLUTE_BASE, 'src/styles/');
export const INLINE_STYLESHEET = path.join(ABSOLUTE_BASE, 'src/js/iframe/');
export const CONNECT_COMMON_DATA_SRC = path.join(NODE_MODULES, '@trezor/connect-common/src/files');
export const PORT = 8088;
