const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
    // Den entsprechenden Wert aus dem localStorage abrufen
    const storedValue = localStorage.getItem(input.name);
    
    // Wenn ein Wert im localStorage gefunden wurde, füge ihn in das Input-Feld ein
    if (storedValue !== null) {
        input.value = storedValue;
    }

    // Füge jedem InputFiled einen Listener hinzu, welcher das localStorage updated
    input.addEventListener('change', () => {
        localStorage.setItem(input.name, input.value);
    });
});

console.log('Days: ' + localStorage.getItem('days'));
