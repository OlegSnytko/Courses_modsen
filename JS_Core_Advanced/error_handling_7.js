const errorHadling = () => {
    try{
        functionThatNotExist();
    }catch(error){
        console.error(error);
    }
};

console.log(errorHadling());