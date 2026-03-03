function handleSolve() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    // Basic Validation
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Please fill in all three fields (a, b, and c).");
        return;
    }

    if (a === 0) {
        alert("The value of 'a' cannot be 0 in a quadratic equation.");
        return;
    }

    // Reset UI for new calculation
    document.getElementById('results').classList.add('hidden');
    document.getElementById('loader').classList.remove('hidden');

    // Start 2 second delay for animation
    setTimeout(() => {
        solveQuadratic(a, b, c);
    }, 2000);
}

function solveQuadratic(a, b, c) {
    document.getElementById('loader').classList.add('hidden');
    const resultsDiv = document.getElementById('results');
    const r1Disp = document.getElementById('root1');
    const r2Disp = document.getElementById('root2');

    // Formula: D = b^2 - 4ac
    const discriminant = (b * b) - (4 * a * c);

    if (discriminant > 0) {
        let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        r1Disp.innerHTML = `x₁ = <b>${x1.toFixed(2)}</b>`;
        r2Disp.innerHTML = `x₂ = <b>${x2.toFixed(2)}</b>`;
    } 
    else if (discriminant === 0) {
        let x = -b / (2 * a);
        r1Disp.innerHTML = `Identical Root: <b>${x.toFixed(2)}</b>`;
        r2Disp.textContent = "";
    } 
    else {
        r1Disp.innerHTML = "<b>No Real Roots</b>";
        r2Disp.textContent = "The roots are imaginary.";
    }

    resultsDiv.classList.remove('hidden');
}

function resetAll() {
    document.getElementById('a').value = '';
    document.getElementById('b').value = '';
    document.getElementById('c').value = '';
    document.getElementById('results').classList.add('hidden');
    document.getElementById('loader').classList.add('hidden');
}
