const userDate = document.getElementById('uDate');
userDate.max = new Date().toISOString().split("T")[0];

function ageCalculator(){
    let inputDate = new Date(userDate.value);

    let d1 = inputDate.getDate();
    let m1 = inputDate.getMonth() + 1;
    let y1 = inputDate.getFullYear();

    const todayDate = new Date();

    let d2 = todayDate.getDate();
    let m2 = todayDate.getMonth() + 1;
    let y2 = todayDate.getFullYear();

    let d, m, y;

    y = y2 - y1;
    
    if(m2>=m1){
        m = m2 - m1;
    }else {
        y--;
        m = 12 -(m1 - m2);
    }

    if(d2>=d1){
        d = d2 -d1;
    }else {
        m--
        d = getDaysInMonth(y1 , m1) + d2 - d1;
    }

    if(m<0){
        m = 11;
        y--;
    }

    const result = document.getElementById('result');
    result.innerHTML = `You are ${y} years, ${m} months, and ${d} days old.`;

}

function getDaysInMonth(year , month){
    return new Date(year, month, 0).getDate();
}