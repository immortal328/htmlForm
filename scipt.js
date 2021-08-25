
personalInfo ={
      name:"",
      surname:"",
      email:"",
      gender:"",
      DateOdBirth:"",
      Qualification:"",
      YearOfPassing:"",

}

let submitBtn = document.querySelector("#submit");
let nm = document.querySelector("#name");
let sname = document.querySelector("#sname");
let email = document.querySelector("#email");

let male = document.querySelector("#male");
let female = document.querySelector("#female");

let quali = document.querySelectorAll(".quali");
let year = document.querySelector("#year");
let dob = document.querySelector("#dob");


const List =(items)=>{
      if(items.checked){
            //console.log(items.value);
            personalInfo.Qualification=items.value;
            items.checked = false;
      }

}

const Submit = ()=>{
      // console.log(nm.value);
      personalInfo.name=nm.value;
      // console.log(sname.value);
      personalInfo.surname=sname.value;
      // console.log(email.value);
      personalInfo.email=email.value;

      
      if(male.checked){
            //console.log(male.value);
            personalInfo.gender=male.value;
            male.checked = false;
      }else if(female.checked){
            //console.log(female.value);
            personalInfo.gender=female.value;
            female.checked = false;
      }
     // console.log(dob.value);
     personalInfo.DateOdBirth=dob.value;
      quali.forEach(List);      
      //console.log(year.value);
     personalInfo.YearOfPassing=year.value;





      nm.value="";
      sname.value="";
      dob.value=null
      email.value="";
      year.value=null;
      
}

submitBtn.addEventListener("click",Submit);