import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
    const [tech, setTech] = useState([]);
    const [newTech, setNewTech] = useState('');

    const handleAdd = useCallback(() => {
        setTech([...tech, newTech]);
        setNewTech('');
    }, [newTech, tech]);

    useEffect(() => {
        const storageTech = localStorage.getItem('tech');

        if (storageTech) {
            setTech(JSON.parse(storageTech));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tech', JSON.stringify(tech));
    }, [tech]);

    const techSize = useMemo(() => tech.length, [tech]);

    return (
        <>
            <ul>
                {tech.map(t => (
                    <li key={t}>{t}</li>
                ))}
            </ul>
            <input value={newTech} onChange={e => setNewTech(e.target.value)} />
            <button type="button" onClick={handleAdd}>
                Adicionar
            </button>
            <div>
                <strong>Você tem {techSize} tecnologia(s)</strong>
            </div>
        </>
    );
}

export default App;
