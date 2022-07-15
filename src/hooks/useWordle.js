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
        let solutionArray = [...solution]
        let formattedGuess = [...currentGuess].map((l)=>{
            return {key: l, color: 'grey'}
        })

        // find any green letters
        formattedGuess.forEach((l, i)=>{
            if (solutionArray[i] === l.key) {
                formattedGuess[i].color = 'green'
                solutionArray[i] = null
            }
        })

        // find any yellow letters
        formattedGuess.forEach((l, i)=>{
            if (solutionArray.includes(l.key) && l.color !== 'green') {
                formattedGuess[i].color = 'yellow'
                solutionArray[solutionArray.indexOf(l.key)] = null
            }
        })

        return formattedGuess
    }

    // add a new guess to the guesses state
    // update the isCorrect state if the guess is correct
    // add 1 to the turn state
    const addNewGuess = () => {

    }

    // handle keyup event & track current guess
    // if user presses enter, add the new guess
    const handleKeyup = ({key}) => {

        if (key === 'Enter') {
            // only add guess if turn is less than 5
            if (turn > 5) {
                console.log('you used all your guesses')
                return
            }
            // do not allow duplicate words
            if (history.includes(currentGuess)) {
                console.log('you already tried that word')
                return
            }
            // word must be 5 characters long
            if (currentGuess.length !==5) {
                console.log('word must be 5 chars long')
                return
            }
            const formatted = formatGuess()
            console.log(formatted)
        }

        if (key === 'Backspace') {
            setCurrentGuess((prev)=> {
                return prev.slice(0, -1)
            })
            return
        }

        if (/^[A-Za-z]$/.test(key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess((prev)=>{
                    return prev + key
                })
            }
        }

    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyup}

}

export default useWordle