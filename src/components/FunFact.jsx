
export default function FunFact() {
    const messages = [
        'Fakt 1',
        'Fakt 2',
        'Fakt 3',
        'Fakt 4'
    ];

    const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

    return (
        <div>
            <h2>Funfact</h2>
            <p>{randomMessage()}</p>
        </div>
    );
}