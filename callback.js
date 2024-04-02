const getUser = (callback) => {
    setTimeout(()=>{
        callback({name:'chathura'},undefined) 
    },1000)
    // setTimeout(()=>{
    //     callback(undefined, {error: 'user error'}) 
    // },1000)
    
}



const chkAuth = (acb)=> {
    setTimeout(()=>{
        acb({auth:true},undefined)
    },1000)
    // setTimeout(()=>{
    //     acb(undefined, {error:'Auth error'});
    // },1000)
}

chkAuth((d,e)=> {
    if(d) {
        console.log(d);
        getUser((data,error)=> {
            if(data) {
                console.log(data);
            } else {
                console.log(error);
            }
            
        })
    } else {
        console.log(e);
    }
})