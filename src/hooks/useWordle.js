import { useState } from 'react'

const useWordle = (solution) => {
    const [turn, setTurn] = useState(0); // tracks what turn the user is on. Each turn goes up by 1. Max 6
    const [currentGuess, setCurrentGuess] = useState(''); // tracks what the user is currently typing. Updates everytime new key is hit (handleKeyup)
    const [guesses, setGuesses] = useState([]); // each guess is an array. Stores users past formated guesses.
    const [history, setHistory] = useState([]); // each guess is an string. Stores users past string guesses. Prevents user from submitting duplicate guesses
    const [isCorrect, setItCorrect] = useState(false); // only changes to true when user wins the game

    // format a guess into an array of letter objects
    // e.g. [{key: 'a', color: 'green'}]
    const formatGuess = () => {

    }

    // add a new guess to the guesses state
    // update the isCorrect state if the guess is correct
    // add 1 to the turn state
    const addNewGuess = () => {

    }

    // handle keyup event & track current guess
    // if user presses enter, add the new guess
    const handleKeyup = () => {

    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyup}

}

export default useWordle