import { useEffect, useRef } from 'preact/hooks';

const ProgressBarMoney = ({ price }) => {
    const progressBarRef = useRef(null);

    useEffect(() => {
        const progressBar = progressBarRef.current;
        const days = localStorage.getItem('days');
        const cigsPerDay = localStorage.getItem('cigsPerDay');
        const cigsPerPack = localStorage.getItem('cigsPerPack');
        const pricePerPack = localStorage.getItem('pricePerPack');

        if (days && cigsPerDay && cigsPerPack && pricePerPack && price) {
            const totalCigarettes = days * cigsPerDay;
            const spentMoney = (totalCigarettes / cigsPerPack) * pricePerPack;
            let progress = (spentMoney / price) * 100;

            // Den Fortschritt auf maximal 100% begrenzen
            progress = Math.min(progress, 100);
            
            progressBar.style.width = `${progress}%`;
            progressBar.setAttribute('aria-valuenow', progress);
            progressBar.textContent = `${Math.round(progress)}%`;
        } else {
            // Fallback, wenn keine Daten im localStorage vorhanden sind oder wenn der Preis nicht übergeben wurde
            progressBar.style.width = '0%';
            progressBar.setAttribute('aria-valuenow', 0);
            progressBar.textContent = '0%';
        }
    }, [price]);

    return (
        <div className="progress" style={{ marginTop: '10px' }}>
            <div ref={progressBarRef} className="progress-bar" style={{ backgroundColor: '#ACEB98' }} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
        </div>
    );
};

export default ProgressBarMoney;
