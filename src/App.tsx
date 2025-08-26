import React, { useEffect, useState } from 'react';


export default function App() {
    type Grade = { course: string; grade: string };

    const [grades, setGrades] = useState<Grade[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/grades')
            .then(r => r.ok ? r.json() : [])
            .then(setGrades)
            .catch(() => setGrades([{ course: 'Math', grade: '1.7 (demo)' }]));
    }, []);

    return (
        <div style={{ padding: 12, border: '1px solid #eee', borderRadius: 12 }}>
            <h3>Grade Service</h3>
            <table>
                <tbody>
                {grades.map((g, i) => (
                    <tr key={i}><td style={{paddingRight:8}}>{g.course}</td><td>{g.grade}</td></tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

