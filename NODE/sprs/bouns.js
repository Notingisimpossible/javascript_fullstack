// const caculateBonus = ()=>{

// }
let caculateBonus;
    let categories={
        'S':(salary)=>{
            return salary*60;
        },
        'A':(salary)=>{
            return salary*24;
        },
        'B' :(salary)=>{
            return salary*18;
        },
        'C' :(salary)=>{
            return salary*15;
        },
        'D' :(salary)=>{
            return salary*12;
        }

    }
    caculateBonus=(salary,type='C')=>{
        let bouns=categories[type](salary);
        return bouns;
    }

console.log(caculateBonus(20000,'S'))