import './index.js';

const game = new Game({parent: document.querySelector('#selectorId')});

const endingsConfig = {
    id: 1,
    sound: "https://imblox-staging.s3.amazonaws.com/media/uploads/widgets/S5s6FGk0S7FRbkFr1O53e7-file_example_MP3_700KB.mp3",
    image: "https://imblox.s3.amazonaws.com/media/uploads/widgets/Zj9wGMt6rzCmTm5uuxEzO0-IMblox-3_1.png",
};


let lock = false;
const actions = [];
const next = document.getElementById("next");
const restart = document.getElementById("restart");
const gameBtn = document.getElementById("game");
const live = document.getElementById("live");
const levelUp = document.getElementById("levelUp");
const levelDown = document.getElementById("levelDown");

async function liveAction() {
    if (lock) {
        console.log("WAIT! it is loading");
        return;
    }
    await game.stage({stage: AppStage.LIVE});
    lock = false
}

async function gameAction() {
    if (lock) {
        console.log("WAIT! it is loading");
        return;
    }
    await game.stage({stage: AppStage.GAME});
    lock = false
}

async function restartAction() {
    if (lock) {
        console.log("WAIT! it is loading");
        return;
    }
    await game.restart();
    lock = false
}

async function levelUpAction() {
    if (lock) {
        console.log("WAIT! it is loading");
        return;
    }
    if (game.gameConfig.level < 19) {
        game.gameConfig.level++;
    }
    console.log("Level: " + game.gameConfig.level);
    await game.restart();
    lock = false
}

async function LevelDownAction() {
    if (lock) {
        console.log("WAIT! it is loading");
        return;
    }
    if (game.gameConfig.level > 0) {
        game.gameConfig.level--;
    }
    console.log("Level: " + game.gameConfig.level);
    await game.restart();
    lock = false
}

async function nextAction() {
    if (lock) {
        console.log("WAIT! it is loading");
        return;
    }
    const action = actions.shift();
    if (action) {
        lock = true;
        await action();
        console.log("DONE!");
        lock = false
    }
}

live.onclick = liveAction;
restart.onclick = restartAction;
gameBtn.onclick = gameAction;
next.onclick = nextAction;
levelUp.onclick = levelUpAction;
levelDown.onclick = LevelDownAction;
actions.push(async () => await game.config());
actions.push(async () => await game.config({playerImage: "assets/player.png"}));
actions.push(async () => await game.config({coinImage: "assets/coin2.png"}));
actions.push(async () => await game.config({coinImage: "assets/coin3.png"}));
actions.push(async () => await game.config({coinImage: "assets/coin4.png"}));

actions.push(async () => await game.stage({stage: AppStage.LIVE}));
actions.push(async () => await game.restart());
actions.push(async () => await game.stage({stage: AppStage.GAME}));
actions.push(async () => await game.restart());

// INIT_APP
// =========
actions.push(async () => await game.stage({config: defaultConfig, stage: AppStage.LIVE}));
// actions.push(async () => await game.config({backgroundTileImage: ""}));





