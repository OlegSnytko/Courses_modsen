const promise1 = new Promise(function (resolve) {
    let num = 3;
    resolve(num);
})

promise1
    .then((num) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let res = num * num;
                console.log(`промежуточной 1-й результат: ${res}`);
                resolve(res);
            }, 3000);
        });
    })
    .then((num) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let res = num * num;
                console.log(`промежуточной 2-oй результат: ${res}`);
                resolve(res);
            }, 3000);
        });
    })
    .then((num) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let res = num * num;
                console.log(`финальный результат: ${res}`);
                resolve(res);
            }, 3000);
        });
    })

console.log(promise1);
