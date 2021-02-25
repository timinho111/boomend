import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { APIData, Lead } from '../api/Models';

const App: React.FC = () => {
    const [state, setState] = useState({
        data: {} as APIData,
        loaded: false,
        placeholder: 'loading',
    });

    useEffect(() => {
        axios
            .get('/api/lead')
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
                    {state.data.results.map((contact: Lead) => {
                        return (
                            <li key={contact.id}>
                                {contact.name} - {contact.email}
                            </li>
                        );
                    })}
                </ul>
            )}
        </>
    );
};
export default App;
