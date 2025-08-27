import React from 'react';


export default function App() {
    type Grade = { course: string; grade: string };
    const [grades, setGrades] = React.useState<Grade[]>([]);

    React.useEffect(() => {
        fetch('http://localhost:3000/api/grades')
            .then(r => r.ok ? r.json() : [])
            .then(setGrades)
            .catch(() => setGrades([{ course: 'Math', grade: '1.7 (demo)' }]));
    }, []);

    return (
        <table className="table">
            <tbody>
            {grades.map((g, i) => (
                <tr key={i}>
                    <td>{g.course}</td>
                    <td style={{textAlign:'right'}}>{g.grade}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

