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
            .get('/api/hello')
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
                console.log(response.data.response);
                setState((prevState) => ({
                    ...prevState,
                    data: response.data.response,
                    loaded: true,
                }));
            });
    }, []);

    return (
        <>
            {state.loaded && (
                <ul>
                    {state.data.map((player) => {
                        return <li key={player.player.id}>{player.player.name}</li>;
                    })}
                </ul>
            )}
        </>
    );
};
export default App;
