req=require("request")
exp=require("express")
app=exp()
app.listen(1234)
app.get("/met1",function(requ,res){
    req("https://restcountries.eu/rest/v2/all",function(err,response,x){
        if(err)
        
        console.log(err)
        else{
            v_data=""
            tmp=JSON.parse(x)
            for(i=0;i<tmp.length;i++)
            {
                v_data+="<span style='color:red'>"+tmp[i].name+"</span> - "+tmp[i].capital+" - "+tmp[i].population+"<br>"
            }
            res.send(v_data)
        }
    
    })
})
