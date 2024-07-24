import { createContext, useState } from "react";
import MainLayout from "./components/layout/MainLayout";
import GameMatch from "./components/GameMatch";
import MainGameInterface from "./components/MainGameInterface";
import { AnimatePresence } from "framer-motion";
import DialogRules from "./components/DialogRules";
import {ModalContextType, GameInfo, allPossibleChoices} from '../Types'


export const ModalContext = createContext<ModalContextType>({
  open: false,
  setOpen: () => {},
});

export const GameStatus = createContext<GameInfo>({
  step: 'initial',
  setStep: () => {},
  playerChoice: '',
  setPlayerChoice: () => {},
  houseChoice: '',
  setHouseChoice: () => {},
  score: 0,
  setScore: () => {},
});


function App() {
  const localScore = localStorage.getItem('store');
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<'initial' | 'housepick' | 'result'>('initial');
  const [playerChoice, setPlayerChoice] = useState<allPossibleChoices>('');
  const [houseChoice, setHouseChoice] = useState<allPossibleChoices>('');
  const [score, setScore] = useState<number>(localScore ? parseInt(localScore) : 0);

  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      <GameStatus.Provider value={{ step, setStep, playerChoice, setPlayerChoice, houseChoice, setHouseChoice,score, setScore}}>
        <MainLayout>
          {step === 'initial' && <MainGameInterface />}
          <AnimatePresence>{step === 'housepick' && <GameMatch />}</AnimatePresence>
          <AnimatePresence
          >{open && <DialogRules />}</AnimatePresence>
        </MainLayout>
      </GameStatus.Provider>
    </ModalContext.Provider>
  );
}

export default App;
