export interface ModalContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export type StepType = "initial" | "housepick" | "result";

export type allPossibleChoices = "rock" | "paper" | "scissors" | "lizard" | "spock" | "";

export interface GameInfo {
  step: StepType;
  setStep: (step: StepType) => void;
  playerChoice: string;
  setPlayerChoice?: (playerChoice: allPossibleChoices) => void;
   houseChoice: string;
  setHouseChoice?: (playerChoice: allPossibleChoices) => void;
  score: number;
  setScore:  React.Dispatch<React.SetStateAction<number>>
}
