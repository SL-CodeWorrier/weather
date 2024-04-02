
const getUser = (callback)=> {
    setTimeout(()=> {
        callback({name:"chathura"},undefined);
    },1000)
    // setTimeout(()=> {
    //     callback(undefined,{error:'user error'});
    // },1000)
    
}

getUser((data,error)=> {
    if(data) {
        console.log(data);
    } else {
        console.log(error);
    }
})