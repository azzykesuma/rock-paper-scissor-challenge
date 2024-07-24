import scissorIcon from '../assets/images/icon-scissors.svg'
import paperIcon from '../assets/images/icon-paper.svg'
import rockIcon from '../assets/images/icon-rock.svg'
import lizard from '../assets/images/icon-lizard.svg'
import spock from '../assets/images/icon-spock.svg'

const basicClass = 'absolute bg-white rounded-full bg-gradient-to-br'

const gameConfig = [
    {
        name: 'rock',
        icon: rockIcon,
        beats: ['scissors', 'lizard'],
        className: `${basicClass} -bottom-5 right-7  from-rock-start to-rock-end`
    },
    {
        name: 'paper',
        icon: paperIcon,
        beats: ['rock', 'spock'],
        className: `${basicClass} top-[20%] -right-5  from-paper-start to-paper-end`
    },
    {
        name: 'scissors',
        icon: scissorIcon,
        beats: ['paper', 'lizard'],
        className: ` ${basicClass} -top-10 right-[35%]  from-scissors-start to-scissors-end`
    },
    {
        name: 'lizard',
        icon: lizard,
        beats: ['spock', 'paper'],
        className: ` ${basicClass} -bottom-5 left-7  from-lizard-start to-lizard-end`
    },
    {
        name: 'spock',
        icon: spock,
        beats: ['rock', 'scissors'],
        className: `${basicClass} top-[20%] -left-5  from-spock-start to-spock-end`
    }
]

export default gameConfig