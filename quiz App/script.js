let quizes = [
    {
        que: "MacOS operatsion tizimini yaratishda qaysi dasturlash tilidan foydalanilgan ?",
        a: "C++",
        b: "Python",
        c: "C",   
        correct: "Objective-C"
    },
    {
        que: "Pasportsiz ham butun dunyoni sayohat qila oladigan inson kim ?",
        a: "Dunyo go‘zali g‘olibasi",
        b: "AQSH prezidenti",
        c: "Mister Bin",   
        correct: "Elizaveta 2"
    },
        {
        que: "Kim qachon tug'ilgan? 😂",
        a: "1990-yil, 9-may",
        b: "1991-yil, 31-avgust",
        c: "1992-yil, 2-may",   
        correct: "1984-yil, 8-yanvar"
    },
        {
        que: "Eng oson pul topuvchi kasb egasini belgilang.",
        a: "Sportchilar",
        b: "IT mutaxassislari",
        c: "Bloggerlar",   
        correct: "Uchuvchilar"
    },
        {
        que: "Sigirlar nima sababli koinotga uchirilmagan ?",
        a: "Yem xashak masalasi qiyin",
        b: "Sut sog‘ib olish imkonsizligidan",
        c: " Vazni og‘ir bo‘lganiga",   
        correct: "Somonyo‘li sababli"
    },
        {
        que: "Kino tarixida 1-bo‘lib naqd 2 milliard dollar daromad olib kelgan kino qaysi ?",
        a: "Titanik",
        b: "Terminator",
        c: "Yulduzlar jangi",
        correct: "Avatar"
    },
    {
        que: "Unix operatsion tizmini kimlar yaratgan ?",
        a: "Brendan Eich, Guido van Rossum",
        b: "Ken Tompson, Donald Knut",
        c: "Dennis Ritchie, James Gosling",   
        correct: "Dennis Ritchie, Ken Tompson"
    },
    {
        que: "Oyda odam izi hech qachon o‘chib ketmaydi. Chunki oyda...",
        a: " Izni qayta bosishni imkoni yo‘q",
        b: "Oydagi tuproq qatlami shunday yaratilgan",
        c: "Bo‘lmagan gap! Izlar o‘chadi",   
        correct: "Hech qachon shamol bo‘lmaydi"
    },
    {
        que: "Mushuklar universitetga o‘qishi mumkin bo‘lsa qaysi fakultetni tanlashgan bo‘lar edi ?",
        a: "Zoologiya",
        b: "Biologiya",
        c: "Terminalogiya",   
        correct: "Pisixologiya"
    },
    {
        que: "JavaScript dasturlash tili va kim tomonidan qachon yaratilgan ?",
        a: "Brendan Eich, 1895",
        b: "Brendan Eich, 1985",
        c: "Brendan Eich, 1975",   
        correct: "Brendan Eich, 1995"
    },
    {
        ball: 0,
    }
]
const button = document.querySelector("#btn"),
    reButton = document.querySelector("#reverse"),
    correct = document.querySelector("#correct"),
    var1 = document.querySelector(".var1"),
    var2 = document.querySelector(".var2"),
    var3 = document.querySelector(".var3"),
    quizContent = document.querySelector("#quiz-content"),
    trueAnswer = document.querySelector(".var4"),
    correctDiv = document.querySelector(".correct"),
    bDiv = document.querySelector(".quiz-body > div:nth-child(3)"),
    span = document.querySelector(".result");
let count = 0;
let ball = 0;

quizContent.innerHTML = quizes[count].que;
var1.innerHTML = quizes[count].a;
var2.innerHTML = quizes[count].b;
var3.innerHTML = quizes[count].c;
trueAnswer.innerHTML = quizes[count].correct;

button.addEventListener("click", () => {
    randomOrder(correctDiv);
    randomOrder2(bDiv);
    count++;
    quizContent.innerHTML = quizes[count].que;
    var1.innerHTML = quizes[count].a;
    var2.innerHTML = quizes[count].b;
    var3.innerHTML = quizes[count].c;
    trueAnswer.innerHTML = quizes[count].correct;
    
    if(count > 9){
        quizes[10].ball = ball;
        quizContent.innerHTML = `Savollar Tugadi.`;
        span.innerHTML = `${quizes[10].ball}/9.`
        let body = document.querySelectorAll(".main");
        body.forEach(element => {
            element.classList.add("hidden");
        });
        document.querySelector(".free").style.display = "flex";
        let percent = Math.floor(ball * (100 / 9));
        console.log(percent);
    }

    if(correct.checked === true){
        ball++;
        correct.checked = false;
    }else  {
        let inputGroup = document.querySelectorAll(".main > input");
        inputGroup.forEach(input =>  {
            input.checked = false;
        })
    }

});

function randomOrder(element){
    let sign = ['', '-'];
    let orderNumber = Math.floor(Math.random() * 4),
        randomSign = Math.floor(Math.random() * 2);
    return element.style.order = `${sign[randomSign]}${orderNumber}`;
}

function randomOrder2(element){
    let sign = ['', '-'];
    let orderNumber = Math.floor(Math.random() * 4),
        randomSign = Math.floor(Math.random() * 2);
    return element.style.order = `${sign[randomSign]}${orderNumber}`;
}

reButton.addEventListener("click", () => {
    count = 0;
    ball = 0;

    quizContent.innerHTML = quizes[count].que;
    var1.innerHTML = quizes[count].a;
    var2.innerHTML = quizes[count].b;
    var3.innerHTML = quizes[count].c;
    trueAnswer.innerHTML = quizes[count].correct;

    let body = document.querySelectorAll(".main");
    body.forEach(element => {
        element.classList.remove("hidden");
    });
    document.querySelector(".free").style.display = "none";
})