var content="welcome " 

function getName(){
    if(localStorage.getItem("Name")!=null){
        content+=localStorage.getItem("Name")
        hambozo.innerhtml=content;
    }
}
getName()