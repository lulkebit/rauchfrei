
export default function FunFact() {
    const messages = [
        'Fakt 1',
        'Fakt 2',
        'Fakt 3',
        'Fakt 4'
    ];

    const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

    return (
        randomMessage()
    );
}