import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { APIData, Lead, Team } from '../api/Models';

const App: React.FC = () => {
    const [state, setState] = useState({
        data: {} as Team,
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
                    {state.data.squad.map((player) => {
                        return (
                            <li key={player.id}>
                                {player.firstName} {player.lastName}
                            </li>
                        );
                    })}
                </ul>
            )}
        </>
    );
};
export default App;
