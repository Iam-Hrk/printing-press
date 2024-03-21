function validateform(){  
    var firstname=document.myform.firstname.value;  
    var lastname=document.myform.lastname.value;
    var password=document.myform.password.value; 
    var secpassword=document.myform.password2.value;
    var num=document.myform.num.value;
      
    if (firstname==null || firstname==""){  
      alert("First Name can't be blank");  
      return false;  
    }
    else if(lastname==null || lastname==""){  
        alert("Last Name can't be blank");  
        return false;  
    }
    else if(isNaN(num)){
        document.getElementById("numloc").innerHTML="Enter Numeric value only";
        return false;
    }
    else if(password.length<6){  
      alert("Password must be at least 6 characters long.");  
      return false;  
    }
    else if(password==secpassword){
        alert("done successfully")
        return true;
        }
        else{
            alert("password must be same!");
            return false;
            }       
    }