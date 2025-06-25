const data = 2;
function getData(data){
    return new Promise((resolve, reject) =>{
        if(typeof data !== 'number' || isNaN(data)){
            reject(new Error('Error'));
        }else if(data % 2 !== 0){
                setTimeout(() =>{
                resolve('Odd');
                console.log('вернули odd');
            }, 1000);
        }else{
            setTimeout(() =>{
            resolve('Even');
            console.log('вернули Even');
            }, 2000);
        }
    });
}

console.log(getData(data));