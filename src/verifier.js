

const Verifier = (card_number) => {
    if(typeof card_number == 'string' || typeof card_number == 'number' ) {
        let number = [...String(card_number)];
        if(number.length === 16){
            let newCard = []
            for(n in number){
                if(n != 15){
                    if([0,2,4,6,8,10,12,14].includes(Number(n))){
                        newCard.push(Number(number[n]) * 2)
                    }else {
                        newCard.push(Number(number[n]))
                    }
                }
            }
            let result = [...String(eval(newCard.join("+"))/10)]
            if(result[result.length - 1] === Number(number[15])){
                return true;
            }
            return false;
        }
        return false;
    }
    return false;
}
export default Verifier;