const Canvas = require('canvas');
module.exports={
    name: 'test-canvas',
    async exec(message){
        const canvas = new Canvas.createCanvas(1200,720,"svg");
        const ctx = new Canvas.getContext('2d');
        const sfondo = await Canvas.loadImage('.../canvas/img/testù.png')
    }
}