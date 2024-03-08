import { useEffect, useRef } from 'preact/hooks';

const ProgressBarTime = ({minutes}) => {
    const progressBarRef = useRef(null);

    useEffect(() => {
        const progressBar = progressBarRef.current;
        const dateOfReturn = localStorage.getItem('dateOfReturn');

        if (dateOfReturn) {
            const currentDate = new Date();
            const returnDate = new Date(dateOfReturn);
            const elapsedTime = currentDate - returnDate;
            const totalDuration = minutes * 60 * 1000; // Minuten in Millisekunden umwandeln

            const progress = Math.min((elapsedTime / totalDuration) * 100, 100);
            
            progressBar.style.width = `${progress}%`;
            progressBar.setAttribute('aria-valuenow', progress);
            progressBar.textContent = `${Math.round(progress)}%`;
        } else {
            // Fallback, wenn kein Datum im localStorage vorhanden ist
            progressBar.style.width = '0%';
            progressBar.setAttribute('aria-valuenow', 0);
            progressBar.textContent = '0%';
        }
    }, [minutes]);

    return (
        <div class="progress" style={{ marginTop: '10px' }}>
            <div ref={progressBarRef} class="progress-bar" style={{ backgroundColor: '#ACEB98' }} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
        </div>
    );
};

export default ProgressBarTime;

