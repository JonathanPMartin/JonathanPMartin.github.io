let Chars=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0", "1", "2", "3", "4", "5", "6", "7", "8", "9","!", "@", "#", "$", "%", "&", "*", "-", "_", "=", "+",
    "[", "]", "{", "}", ";", ":", ",", ".", "?", "~"]
let strength=0;
let nums=[4250, 7280, 6565, 9625, 733, 466, 7939, 9872, 9890, 7208, 1754, 8636, 4336, 9195, 4003, 1443, 2379, 7852, 4324, 9433, 9426, 899, 5220, 1512, 470, 4145, 9469, 7801, 3620, 6048, 5039, 4774, 5012, 9528, 1549, 6328, 5533, 9292, 9479, 9275, 4678, 2204, 459, 3102, 8868, 8940, 3297, 4436, 9448, 4030, 2048, 6934, 684, 6982, 8182, 762, 5739, 5726, 4400, 4266, 9747, 8520, 1429, 426, 9043, 7090, 8932, 4280, 1562, 9830, 3684, 4014, 2919, 5019, 6099, 3141, 4828, 6342, 7180, 2504, 9636, 3817, 3826]
function PasswordStrength(Password,NumberGenations){
    let bigno=1
    for(let i=0;i<Password.length ;i++){
        for(let j=0 ;j<Chars.length ;j++){
            if(Password[i]==Chars[j]){
                bigno=bigno*NumberGenations[j]
            }
        }
    }

    bigno=bigno.toString()
    let Return=""
    for(let i=0 ; i<bigno.length -1 ; i++){
        let tem=bigno[i]+bigno[i+1]
        tem=Number(tem)
        if (tem> Chars.length){
            tem=tem-Chars.length
        }
        Return=Return+Chars[tem]
    }
    let num=Number(bigno.substring(0,5))
    if (num<10){
        num=Math.round(num*10000)
    }
    return [Return,num]
}
function GenNums(Password)
{
    let templist=[]
    let test=true
    CurPass=Password
    while(test){
        Reuslt=PasswordStrength(CurPass,nums)
        CurPass=Reuslt[0]
        let SeccondTest=true
        for(let i=0 ;i<templist.length ;i++){
            if (templist[i]==Reuslt[1]){
                SeccondTest=false
            }
        }
        if(SeccondTest){
            templist.push(Reuslt[1])
        }
        if(templist.length==nums.length){
            test=false
        }
    }
    nums=templist
    return templist
}

function displayText() {
    // Get the input value from the user
    var userInput = document.getElementById("user-input").value;
    let NewPass=PasswordStrength(userInput,nums)[0]
    let Filteredpass=""
let List=NewPass.split('a')

for (let i=0; i<List.length;i++){
    Filteredpass=Filteredpass+List[i]
}
List=Filteredpass.split('undefined')
Filteredpass=""
for (let i=0; i<List.length;i++){
    Filteredpass=Filteredpass+List[i]
}
    // Display the input text in the display area
    var displayArea = document.getElementById("display-text");
    displayArea.textContent =  Filteredpass;
}
function Strength() {
    var userInput = document.getElementById("user-input").value;
    StrongNums=(GenNums("userInput"))
    var displayArea = document.getElementById("display-text");
    strength=strength+1
    displayArea.textContent = "Strengthend!!"+strength;
}
/*
let StrongNums=(GenNums("dave"))
let NewPass=PasswordStrength("Test",StrongNums)[0]
let Filteredpass=""
let List=NewPass.split('a')
for (let i=0; i<List.length;i++){
    Filteredpass=Filteredpass+List[i]
}
console.log(Filteredpass)
//let BigNo=PasswordStrength("PasswordResetTestingThing",nums)[0]
*/

//cGwz7m0A!A*bOeWdJ
//cGwz7m0A!A*bOeWdJ