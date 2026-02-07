
// Preload images
const preloadFonts = (id:any) => {
    return new Promise((resolve) => {
        var WebFont = require('webfontloader');
        WebFont.load({
            typekit: {
                id: id
            },
            active: resolve
        });
    });
};

const randomNumber = (min:number, max:number) => Math.floor(Math.random() * (max - min + 1)) + min;

export {
    preloadFonts,
    randomNumber
}
