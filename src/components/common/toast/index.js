import  Toast from  './toast'

const obj ={
    // install:function(Vue){

    // }

 }
 obj.install = function (Vue){
   const toastcon =  Vue.extend(Toast)
  
   
   const toast =new toastcon()
   
   
   toast.$mount(document.createElement('div'))
 
   
   document.body.appendChild(toast.$el)
   Vue.prototype.$toast=toast
//  console.log(toastcon);
 
 

 }


export default obj