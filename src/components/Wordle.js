import React, { useEffect } from 'react';
import useWordle from '../hooks/useWordle';

const Wordle = ({ solution }) => {

    const { currentGuess, handleKeyup } = useWordle(solution)

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)

        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup])

    return (
        <>
            <div>solution - {solution}</div>
            <div>
                current guess - {currentGuess}
            </div>
        </>
    );
}

export default Wordle;