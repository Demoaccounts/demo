var database={
    1900:{name:"john",age:23,acno:1900,pass:1234,add:"dgfgddd",phone:43544,email:"reee@gmail.com",pin:1234,balance:1000},
    1901:{name:"david",age:24,acno:1901,pass:1233,add:"dgfgdd",phone:43543,email:"reee1@gmail.com",pin:1233,balance:3456778}
    
}
console.log(database[1900]);
function login(){
    var ac=document.querySelector(".acno").value;
    var password=document.querySelector(".pass").value;
    console.log(ac,password);
    if(ac in database){
        if(password == database[ac].pass){
            alert("welcome");
            localStorage.setItem("user",ac);//local storage
            window.location="userdetails.html";
        }
        else{
            alert("password is incorrect");
        }
    }
    else{
        alert("user doesnt exist");
    }

}


function loggeduser(){
    localStorage.setItem("withdraw",0);
    var logged=localStorage.getItem("user");
    var uname=document.querySelector(".name");
    uname.innerHTML=database[logged].name;
    var addres=document.querySelector(".address");
    addres.innerHTML=database[logged].add;
    var accoun=document.querySelector(".account");
    accoun.innerHTML=database[logged].acno;
    var balanc=document.querySelector(".balance");
    balanc.innerHTML=database[logged].balance + Number(localStorage.getItem("deposite"));
    var phon=document.querySelector(".phone");
    phon.innerHTML=database[logged].phone;
    var emai=document.querySelector(".email");
    emai.innerHTML=database[logged].email;


}
// console.log(database[1901].add);
// console.log(24 == database[1901].age)


function deposite(){
    var acc=localStorage.getItem("user");
    var amounts=document.querySelector(".amount").value;
    var pinno=document.querySelector(".pins").value;
    if(database[acc].pin==pinno){
       localStorage.setItem("deposite",amounts);
       alert("deposite sucess");
       window.location="userdetails.html";
    }

    else{
       var msg= document.querySelector(".msg");
       msg.innerHTML="failed";
       msg.classList.add("alert");
       msg.classList.add("alert-danger");
    }
}

function withdraw(){
    var  accs=localStorage.getItem("user");
    var amoun = document.querySelector(".amount").value;
    var pincode =document.querySelector(".pins").value;
    if(database[accs].pin == pincode){
        localStorage.setItem("withdraw",amoun +localStorage.getItem("withdraw"));
        localStorage.setItem("deposite",localStorage.getItem("deposite")-amoun);
        alert("withdraw sucess");
        window.location="userdetails.html";
    }
    else{
        var message=document.querySelector('.message');
        message.innerHTML="failed";
    }
}