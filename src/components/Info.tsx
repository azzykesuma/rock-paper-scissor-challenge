/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import { GameStatus } from '../App'
import DetermineWinner from '../lib/helper'

const Info = () => {
    const {playerChoice, houseChoice, setHouseChoice, setPlayerChoice, setStep, setScore,score} = useContext(GameStatus);
    const [textResult, setTextResult] = useState('');

    const handleReset = () => {
        setHouseChoice && setHouseChoice('');
        setPlayerChoice && setPlayerChoice('');
        setStep('initial');
    }
    
    useEffect(() => {
        if (houseChoice) {
            const result = DetermineWinner(playerChoice, houseChoice);
            setTextResult(result ?? "");
        }
    }, [houseChoice, playerChoice]);

    useEffect(() => {
        switch (textResult) {
            case 'YOU WIN':
                setScore(prev => {
                    const newScore = prev + 1;
                    localStorage.setItem('store', newScore.toString());
                    return newScore;
                });
                break;
            case 'YOU LOSE':
                if (score !== 0) {
                    setScore(prev => {
                        const newScore = prev - 1;
                        localStorage.setItem('store', newScore.toString());
                        return newScore;
                    });
                }
                break;
            default:
                break;
        }
    }, [textResult, setScore]);
    
  return (
    <motion.div
    initial={{scale: 0, opacity: 0 }}
    animate={{scale: 1, opacity: 1 }}
    exit={{scale: 0, opacity: 0}}
    className='flex flex-col items-center mt-5'
    >
      <h3 className='text-4xl text-white font-bold mb-4'>{textResult}</h3>
      <button onClick={handleReset} className='bg-white rounded py-1 px-8 text-darkText tracking-wider font-semibold'>PLAY AGAIN</button>
    </motion.div>
  )
}

export default Info
