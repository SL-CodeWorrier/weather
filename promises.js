
const getUser = ()=> {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            resolve({user:'chathura'})
        },1000)
        // setTimeout(()=>{
        //     reject({error:'user error'})
        // },1000)
    })
}

const chkAuth = ()=> {
    return new Promise((resolve, reject)=> {
        // setTimeout(()=>{
        //     resolve({auth:true})
        // },1000)
        setTimeout(()=>{
            reject({error:'auth error'})
        },1000)
    })
}

// getUser().then((data)=> {
//     console.log(data);
//         })
//     .catch((error)=> {
//         console.log(error);
//     })

chkAuth().then(()=> {
        return getUser()
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    })
