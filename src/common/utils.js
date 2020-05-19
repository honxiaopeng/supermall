export function   debounce(func,delary=500){
    let timer=null 
    return function(...args){
        if(timer) clearTimeout(timer)
        
         timer=setTimeout(()=>{
             func.apply(this,args)
         },delary)
    }

}