let userreq=document.getElementById("userinput")


document.getElementById("searchbn").addEventListener("click",()=>{
     if(userreq.value!=""){
        helper(userreq.value);
     }
})

async function helper(newname){
//  url=url+newname;
 let data=await getdata(newname);
                helper1(data)
}

async function getdata(newname){
    let info=await fetch(`https://api.github.com/users/${newname}`);
    let result=await info.json();

    return result;
}

let dumytext="User not given";
function helper1(data){

    let creationdate=data?.created_at;
  
     let date=new String(new Date(creationdate));
     let mydate=date.split(" ").splice(0,4).join(" ");
    let profilepic=data?.avatar_url;
    let loginind=data?.login;
    let username=data?.name==null?loginind:data?.name;
    let about=data?.bio;
    let repono=data?.public_repos;
    let followers=data?.followers;
    let following=data?.following;
    let lo=data?.location;
    let giurl=data?.blog;
    let twittername=data?.twitter_username;
    let twitterurl="https://twitter.com/"+data?.twitter_username;
    let company=data?.company;

   document.getElementById("userprofilename").textContent=username;
   document.getElementById("datejoin").textContent=mydate;
   document.getElementById("userimage").setAttribute("src",profilepic)
   document.getElementById("about").textContent=about==null?dumytext:about;
   document.getElementById("reponumber").textContent=repono;
   document.getElementById("Followers").textContent=followers;
   document.getElementById("followingnumber").textContent=following==null?dumytext:following;
   document.getElementById("userlink").textContent="Portfolio Link";
   document.getElementById("userlink").href=giurl;
   document.getElementById("twitterlink").textContent=twittername==null?dumytext:twittername;
   document.getElementById("twitterlink").href=twitterurl;
   document.getElementById("companyname").textContent=company==null?dumytext:company;
   document.getElementById("location").textContent=lo==null?dumytext:lo;
   document.getElementById("userid").textContent="@"+loginind;

   
}