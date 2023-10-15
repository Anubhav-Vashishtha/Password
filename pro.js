
let array1=
[
    "1","2","3","4","5","6","7","8","9","0","p","o","i","u","y","t","r","e","w","q","a","s","d","f","g","h","j","k","l","m","n","b","v","c","x","z","!","#","$","%","&","@"
]

let name1=["Aaran@", "Aaren@", "Aarez@", "Aarman@", "Aaron@", "Aaron-James@" ,"Aarron@", "Aaryan@", "Aaryn@", "Aayan@", "Aazaan@", "Abaan@", "Abbas@","Abdallah@", "Abdalroof@", "Abdihakim@", "Abdirahman@", "Abdisalam@","Abdul@",  ,"Abdul-Aziz@", "Abdulbasir@", "Abdulkadir@", "Emlyn@", "Emmanuel@", "Emmet@","Eng@", "Eniola@", "Enis@", "Ennis@", "Enrico@", "Enrique@", "Enzo@", "Eoghain@","Eoghan@", "Eoin@", "Eonan@", "Erdehan@", "Eren@", "Erencem@", "Eric@","Ericlee@", "Erik@", "Eriz@", "Ernie-Jacks@", "Eroni@", "Eryk@", "Eshan@","Essa@", "Esteban@", "Ethan@", "Etienne@", "Etinosa@", "Euan@", "Eugene@","Evan@", "Wesley-Scott@", "Wiktor@", "Wilkie@", "Will@", "William@","William-John@", "Willum@", "Wilson@", "Windsor@", "Wojciech@", "Woyenbrakemi@","Wyatt@", "Wylie@", "Wynn@", "Xabier@", "Xander@", "Xavier@", "Xiao@", "Xida@","Xin@", "Xue@", "Yadgor@", "Yago@", "Yahya@", "Yakup@", "Yang@", "Yanick@","Yann@", "Yannick@", "Yaseen@", "Yasin@", "Yasir@", "Yassin@", "Yoji@", "Yong@","Yoolgeun@", "Yorgos@", "Youcef@", "Yousif@", "Youssef@", "Yu@", "Yuanyu@","Yuri@", "Yusef@", "Yusuf@", "Yves@", "Zaaine@", "Zaak@", "Zac@", "Zach@","Zachariah@", "Zacharias@", "Zacharie@", "Zacharius@", "Zachariya@", "Zachary@","Zachary-Marc@", "Zachery@", "Zack@", "Zackary@", "Zaid@", "Zain@", "Zaine@","Zaineddine@", "Zainedin@", "Zak@", "Zakaria@", "Zakariya@", "Zakary@", "Zaki@","Zakir@", "Zakk@", "Zamaar@", "Zander@", "Zane@", "Zarran@", "Zayd@", "Zayn@","Zayne@", "Ze@", "Zechariah@", "Zeek@", "Zeeshan@", "Zeid@", "Zein@", "Zen@","Zendel@", "Zenith@", "Zennon@", "Zeph@", "Zerah@", "Zhen@", "Zhi@", "Zhong@","Zhuo@", "Zi@", "Zidane@", "Zijie@", "Zinedine@", "Zion@", "Zishan@", "Ziya@","Ziyaan@", "Zohaib@", "Zohair@", "Zoubaeir@", "Zubair@", "Zubayr@", "Zuriel"]

let name2=["Aaran", "Aaren", "Aarez", "Aarman", "Aaron", "Aaron-James" ,"Aarron", "Aaryan", "Aaryn", "Aayan", "Aazaan", "Abaan", "Abbas","Abdallah", "Abdalroof", "Abdihakim", "Abdirahman", "Abdisalam","Abdul",  ,"Abdul-Aziz", "Abdulbasir", "Abdulkadir", "Emlyn", "Emmanuel", "Emmet","Eng", "Eniola", "Enis", "Ennis", "Enrico", "Enrique", "Enzo", "Eoghain","Eoghan", "Eoin", "Eonan", "Erdehan", "Eren", "Erencem", "Eric","Ericlee", "Erik", "Eriz", "Ernie-Jacks", "Eroni", "Eryk", "Eshan","Essa", "Esteban", "Ethan", "Etienne", "Etinosa", "Euan", "Eugene","Evan", "Wesley-Scott", "Wiktor", "Wilkie", "Will", "William","William-John", "Willum", "Wilson", "Windsor", "Wojciech", "Woyenbrakemi","Wyatt", "Wylie", "Wynn", "Xabier", "Xander", "Xavier", "Xiao", "Xida","Xin", "Xue", "Yadgor", "Yago", "Yahya", "Yakup", "Yang", "Yanick","Yann", "Yannick", "Yaseen", "Yasin", "Yasir", "Yassin", "Yoji", "Yong","Yoolgeun", "Yorgos", "Youcef", "Yousif", "Youssef", "Yu", "Yuanyu","Yuri", "Yusef", "Yusuf", "Yves", "Zaaine", "Zaak", "Zac", "Zach","Zachariah", "Zacharias", "Zacharie", "Zacharius", "Zachariya", "Zachary","Zachary-Marc", "Zachery", "Zack", "Zackary", "Zaid", "Zain", "Zaine","Zaineddine", "Zainedin", "Zak", "Zakaria", "Zakariya", "Zakary", "Zaki","Zakir", "Zakk", "Zamaar", "Zander", "Zane", "Zarran", "Zayd", "Zayn","Zayne", "Ze", "Zechariah", "Zeek", "Zeeshan", "Zeid", "Zein", "Zen","Zendel", "Zenith", "Zennon", "Zeph", "Zerah", "Zhen", "Zhi", "Zhong","Zhuo", "Zi", "Zidane", "Zijie", "Zinedine", "Zion", "Zishan", "Ziya","Ziyaan", "Zohaib", "Zohair", "Zoubaeir", "Zubair", "Zubayr", "Zuriel"]


let strong="";
let medium="";
let weak="";
let num1;
let pass=document.getElementById("pass");
let box=document.getElementsByClassName("box");
class Password{
    Strong(){
        for (let i = 0; i < 6; i++) {
            num1=Math.floor(Math.random()*42)
            strong+=array1[num1];
        }      
        return strong;
    }
    
    Medium(){
        num1=Math.floor(Math.random()*165);
        medium=name1[num1] + Math.floor(Math.random()*10000);
        return medium
    }

    Weak(){
        num1=Math.floor(Math.random()*165);
        weak=name2[num1] ;
        return weak
    }

}

box[0].onclick=()=>{
    let a = new Password;
    pass.innerHTML=`
    <h1>Your Strong Password</h1>
        <h3>${a.Strong()}</h3>
    `;
    strong="";
}

box[1].onclick=()=>{
    let a = new Password;
    pass.innerHTML=`
    <h1>Your Medium Password</h1>
        <h3>${a.Medium()}</h3>
    `;
    medium="";
    
}

box[2].onclick=()=>{
    let a = new Password;
    pass.innerHTML=`
    <h1>Your Weak Password</h1>
        <h3>${a.Weak()}</h3>
    `;
    weak="";

}
