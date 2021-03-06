import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Player } from '../api/Models';

const App: React.FC = () => {
    const [state, setState] = useState({
        data: [] as Player[],
        loaded: false,
        placeholder: 'loading',
    });

    useEffect(() => {
        axios
            .get('/api/players')
            .then((response) => {
                if (response.status > 400) {
                    setState((prevState) => ({
                        ...prevState,
                        placeholder: 'Something went wrong!',
                    }));
                }
                return response;
            })
            .then((response) => {
                console.log(response.data);
                setState((prevState) => ({
                    ...prevState,
                    data: response.data,
                    loaded: true,
                }));
            });
    }, []);

    return (
        <>
            {state.loaded && (
                <ul>
                    {state.data.map((player) => {
                        return <li key={player.name}>{player.name}</li>;
                    })}
                </ul>
            )}
        </>
    );
};
export default App;
