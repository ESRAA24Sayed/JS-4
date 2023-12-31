

var signList = [];

        var userName = document.getElementById("userName");
        var emailAccount = document.getElementById("emailAccount");
        var passAccount = document.getElementById("passAccount");
        var registMessage = document.getElementById("registMessage");
        var success=document.getElementById("success");

        // Retrieve users from local storage
        var signList = JSON.parse(localStorage.getItem("users")) || [];

        function addAccount() {
          
            var newUser = {
                name: userName.value,
                email: emailAccount.value,
                password: passAccount.value
            };

            if (isAccountExist(newUser)) {
                registMessage.classList.remove("d-none");
               
            } else {
                registMessage.classList.add("d-none");
                success.classList.remove("d-none");
                signList.push(newUser);
                localStorage.setItem("users", JSON.stringify(signList));
            }
            clearaccount()
        }
    

        function isAccountExist(newUser) {
            for (var i = 0; i < signList.length; i++) {
                if (signList[i].email === newUser.email && signList[i].name === newUser.name && signList[i].password==newUser.password) {
                    localStorage.setItem('Name', userName);
                    return true; // Account with the same email or username exists
                }
            }
            return false; // Account does not exist
        }
        function clearaccount(){
            userName.value="";
            emailAccount.value="";
            passAccount.value=""
        }

        document.getElementById("loginin").addEventListener('click',function(){
            window.location= "./index.html";
        })

        




