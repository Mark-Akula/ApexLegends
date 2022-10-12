function calculateRoots() {
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    const c = document.getElementById("c").value;
    const answer = document.getElementById("answer");

    const discriminant = b * b - 4 * a * c;

    if (discriminant < 0) {
        answer.innerHTML = "Since the discriminant of the quadratic equation is " + discriminant + ", which is less than 0, there are no real roots";
    } else if (discriminant == 0) {
        answer.innerHTML = "Since the discriminant of the quadratic equation is 0, there is one real root<br>";
        const root = -b / (2 * a);
        answer.innerHTML += "The root is: <b>" + root + "</b>";
    } else {
        answer.innerHTML = "Since the discriminant of the quadratic equation is " + discriminant + ", which is greater than 0, there are two real roots<br>";
        const root1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
        const root2 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
        answer.innerHTML += "The roots are: <b>" + root1 + "</b> and <b>" + root2 + "</b>";
    }
    return false;
}
