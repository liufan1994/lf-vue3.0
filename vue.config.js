const host=require('ip').address()

module.exports={
   devServer:{
       host,
       port:8080,
       open:true,
    //    proxy:''
   }
}