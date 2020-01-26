import MediaHandler from "./MediaHandler";
import Scene from "./Scene";
const mediaHandler = new MediaHandler();

const gameStates = {
    gameOn: "GAME_ON"
}

const imageSources = [
    "./images/player.png",
    "./images/road.png",
    "./images/obstacle.png",
    "./images/background.png"
];

export default class Game {
    constructor(ctx) {
        this.ctx = ctx;
    }

    async init() {
        mediaHandler.setImageSources(imageSources);

        console.log("Image preloading.");
        await mediaHandler.preloadAllImages();
        console.log("Images preloading done.");
    }

    async start() {
        await this.init();
        this.gameState = gameStates.gameOn;
        console.log(Scene);
        // Scene.init();
        // Scene.render();
    }  
}

// const imageSources = [
//     "../images/player.png",
//     "../images/road.png",
//     "../images/punk.png",
//     "../images/trash.png",
//     "../images/hooker.png",
//     "../images/background.png",
//     "../images/hologram.png",
//     "../images/cloud.png",
// ];