function startCalculation() {
    // 1. Get Values
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    // Validate inputs
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Please enter all values");
        return;
    }

    // 2. Show Animation & Hide old results
    document.getElementById('result-container').classList.add('hidden');
    document.getElementById('loader').classList.remove('hidden');

    // 3. Wait 2 seconds (2000ms)
    setTimeout(() => {
        calculateRoots(a, b, c);
    }, 2000);
}

function calculateRoots(a, b, c) {
    const loader = document.getElementById('loader');
    const resultBox = document.getElementById('result-container');
    const x1Text = document.getElementById('x1');
    const x2Text = document.getElementById('x2');

    // Hide loader
    loader.classList.add('hidden');

    // Discriminant formula: D = b^2 - 4ac
    const discriminant = (b * b) - (4 * a * c);

    if (discriminant > 0) {
        let r1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let r2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        x1Text.innerHTML = `Root 1: <b>${r1.toFixed(2)}</b>`;
        x2Text.innerHTML = `Root 2: <b>${r2.toFixed(2)}</b>`;
    } else if (discriminant === 0) {
        let r = -b / (2 * a);
        x1Text.innerHTML = `Real & Equal Root: <b>${r.toFixed(2)}</b>`;
        x2Text.textContent = "";
    } else {
        x1Text.innerHTML = "No Real Roots";
        x2Text.innerHTML = "(Complex numbers detected)";
    }

    // Show result with animation
    resultBox.classList.remove('hidden');
}
