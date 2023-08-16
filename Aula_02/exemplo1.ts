namespace exemplo {
    let valor: number = 1; 
    let cont: number = 0;
    do {
            console.log (`Contador: ${valor}`)
            cont++
            cont = 10 ? valor = 0 : valor = 1
        }
        while (valor >= 1);


    while (valor >= 0) {
        console.log("Entrou no while");
        valor ++
        if(valor >= 20){
            break;
        }
    }

    for (let i = 1; i <= 10; i++){
        console.log (i);
    }

    const nome = "carro"
        for (const letras of nome){ 
            console.log (letras) 
        }

    let vetor =[1,2,3,4,5]
        for(const index in vetor){
            console.log(index);
        }

        for(const valor of vetor){
            console.log(valor);
        } 

        interface Carro {
            marca: string;
            ano: string;
            cor: string;
        }

    let carro: Carro = {
        marca: "Gol",
        ano: "1998",
        cor:"Roxo"
    }
    console.log(carro);
    
    for(let props in carro) {
        console.log(`${props}: ${carro[props as keyof Carro]}`);
        
    }

}