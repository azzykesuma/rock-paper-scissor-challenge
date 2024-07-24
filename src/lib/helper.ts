import  gameConfig  from './gameConfig';
const DetermineWinner = (player: string, house: string) => {
     const playerConfig = gameConfig.find(item => item.name === player);
    const houseConfig = gameConfig.find(item => item.name === house);

    if (!playerConfig || !houseConfig) {
        return;
    }

    if (playerConfig.beats.includes(house)) {
        return 'YOU WIN'
    } else if (houseConfig.beats.includes(player)) {
        return 'YOU LOSE'
    } else {
        return 'DRAW'
    }
}

export default DetermineWinner