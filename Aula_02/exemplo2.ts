namespace exemplo2{
    let vetor: number[] = [1,2,3,4,5];
    console.log(vetor); 
    for (let i = 0; i < vetor.length; i++) {
        console.log(vetor[i]);

        //pop, push, shift, unshift,
       
    }
    
function Soma(a: number,b: number) {
    let result: number = a + b
    return result
}
    let vetor2: number[] = [];
    for (let i = 0; i < vetor.length; i++) {
        if( i == vetor.length -1) {
         vetor2.push(Soma(vetor[i], vetor[0]));
        } 
        else{
            vetor2.push(Soma(vetor[i] , vetor[i+1]))
        }

     console.log(vetor2);
     
}

}