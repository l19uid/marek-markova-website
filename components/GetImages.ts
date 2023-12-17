import fs from "fs";

export function GetImages(dir : string) {
    const files = fs.readdirSync(dir);
    const images = files.map((file) => {
        return {
            src: dir + file,
            alt: file,
        }
    });
    return images;
}