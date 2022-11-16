const number = 50

let isAPrime = 0;

for (i = 2; i <= number; i++) {
    if (number % i == 0) {
        isAPrime = 1;
        for (j = 2; j <= i / 2; j++) {
            if (i % j == 0) {
                isAPrime = 0;
            }
        }
        if (isAPrime == 1) {
            console.log(i);
        }
    }
}
