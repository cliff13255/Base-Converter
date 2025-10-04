//obtaining attributes from html using there ids and using them to bring about the manupilation of DOM

let heading =document.getElementById("heading");
let instruction=document.getElementById("instructions");
let input=document.getElementById("input");
let answer=document.getElementById("answer");
let button1=document.getElementById("button1");
let button2=document.getElementById("button2");




//a blocked scoped variable that makes the code clean and contains the contect to be manupilated on the code
const data=[
        {
        name:"try again",
        buttonText:["Binary","Decimal"],
        buttonFunction:[toBinary,toDecimal],
        instruction:"Please choose keenly because there are restrictions"

    },
        {
        name:"binary",
        buttonText:["Binary-Decimal","GoBack"],
        buttonFunction:[toDecimalConvert,goBack],
        instruction:"Please enter the value to be converted"

    },
        {
        name:"decimal",
        buttonText:["Decimal-Binary","GoBack"],
        buttonFunction:[toBinaryConvert,goBack],
        instruction:"Please enter the value to be converted"

    }
]

//addtion of an eventlistiner that gives functionality to the page

button1.onclick= toBinary;
button2.onclick= toDecimal;


//main function that will be called to each onclick function
function main(show){

button1.innerText= show.buttonText[0];
button2.innerText= show.buttonText[1];


button1.onclick= show.buttonFunction[0];
button2.onclick= show.buttonFunction[1];


instruction.innerText=show.instruction;

}

//actions when the buttons are onclcked are powered by the following functions

function goBack(){
    main(data[0]);
    input.style.display="none";
    input.value="";
    answer.style.display="none";
}

function toBinary(){
 main(data[1]);
 input.style.display="inline-block";
 input.value="";
 answer.style.display="none";
}

function toDecimal(){
     main(data[2]);
     input.style.display="inline-block";
     input.value="";
     answer.style.display="none";
}



//the function to perform the varius conversions
//the input currently is a decimal in string form hence its converted to an interger by parseInt so that the convrsion is done using js inbuilt function which is toString

function toBinaryConvert(){
  const number=input.value.trim();
  //let cleaned=number.replace(/[a-z]/gi,''); sorry for the mislead
 let decimal=parseInt(number,10);

 //this checks for entering of anything that aint a number and throws an error immediatey

 if(!/^\d+$/.test(number)){
    answer.innerText="Invalid input (only whole numbers are allowed) "
    answer.style.display="block";
    return;
 }



   /*if(isNaN(decimal) ){
    answer.innerText="Invalid input (only numbers are allowed) "
    answer.style.display="block";
    return;
   }*/

    answer.innerText=decimal.toString(2);
    answer.style.display="block";
}

//the input value is binnary in binnary form and we need to convert it to decimal using this function

function toDecimalConvert(){
    //takes the inputed value and clears all the spaces

    const number=input.value.trim();

    //a REGEX method to check whether the input is in binary form i.e 0's &1's hence if not it returns the error above

       if (!/^[01]+$/.test(number)) {
        answer.innerText = "Please enter a valid binary number (0 or 1 only)";
        answer.style.display="block";
       return;
     }

//the bainary is always a string automatically hence no need to convert it into a integer,,use inult function of the jsto convert to decimal (parseInt)
    let decimal=parseInt(number,2);

    //checks if the value entered is a number or not and if it's not a number the it displays an error and otherwise

   if(isNaN(decimal)){
    answer.innerText="Invalid input"
    answer.style.display="block";
    return;
   }


//returns the output and adds a css property of display block to override the first that stated display none by default


    answer.innerText=decimal;
    answer.style.display="block";
    
    //the code now runs smoothly,,,hold tight because i'll be droping one to convert to hexdecimal and octal


}

