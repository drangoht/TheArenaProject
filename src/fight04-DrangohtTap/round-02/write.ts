import * as fs from 'fs';
export const writeTest = () => {
    const data = '🙂😇😗😝😛😎🥳🤩🥸😎➤℞❫]❪♔😽🙀';
    fs.writeFileSync("testhello.txt", data, { encoding: 'utf-8' });
}