function classify() {
    var prime = prompt('판별할 자연수를 입력하세요.','')
    var result = "";

if (isNaN(prime) == false) {
    if (prime == 1) {
        result = "소수도 합성수도 아닙";
    } else if (prime == 2 || prime == 3) {
        result = "소수 입";
    } else if (prime % 2 == 0) {
        result = "합성수 입";
    } else {
        var division = 3;
        var max = Math.sqrt(prime);

        while (max >= division) {
        if (prime % division == 0) {
            result = "합성수 입"; 
            break;
        } else {
            result = "소수 입";
        }
        division += 2;
        }
    }
} else {
    result = "수가 아닙";
}

prime = prime + "은(는) "
result = result + "니다."