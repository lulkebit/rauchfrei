import { useEffect, useRef, useState } from 'preact/hooks';

const ProgressBarMoney = ({ price }) => {
    const progressBarRef = useRef(null);
    const [timeToReachGoal, setTimeToReachGoal] = useState(null);

    useEffect(() => {
        const days = localStorage.getItem('days');
        const cigsPerDay = localStorage.getItem('cigsPerDay');
        const cigsPerPack = localStorage.getItem('cigsPerPack');
        const pricePerPack = localStorage.getItem('pricePerPack');
        const currentPrice = Number(price);

        if (days && cigsPerDay && cigsPerPack && pricePerPack && currentPrice) {
            const totalCigarettes = days * cigsPerDay;
            const spentMoney = (totalCigarettes / cigsPerPack) * pricePerPack;
            const remainingMoney = Math.max(price - spentMoney, 0);

            if (remainingMoney <= 0) {
                setTimeToReachGoal("<b>Ziel wurde erreicht!</b>");
            } else {
                const remainingCigarettes = Math.ceil((remainingMoney / pricePerPack) * cigsPerPack);
                const remainingDays = Math.ceil(remainingCigarettes / cigsPerDay);
                setTimeToReachGoal(`Wird erreicht in <b>${remainingDays}</b> Tagen`);
            }
            
            const progress = Math.min((spentMoney / price) * 100, 100);
            
            progressBarRef.current.style.width = `${progress}%`;
            progressBarRef.current.setAttribute('aria-valuenow', progress);
            progressBarRef.current.textContent = `${Math.round(progress)}%`;
        } else {
            progressBarRef.current.style.width = '0%';
            progressBarRef.current.setAttribute('aria-valuenow', 0);
            progressBarRef.current.textContent = '0%';
        }
    }, [price]);

    return (
        <div>
            <div className="progress" style={{ marginTop: '10px' }}>
                <div ref={progressBarRef} className="progress-bar" style={{ backgroundColor: '#ACEB98' }} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
            </div>
            <div style={{ marginTop: '5px' }} dangerouslySetInnerHTML={{ __html: timeToReachGoal }} />
        </div>
    );
};

export default ProgressBarMoney;
