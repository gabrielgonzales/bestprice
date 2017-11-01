class compare {
    constructor(P, ...REST) {
        if (P.length > 0) {
            this.NumArrays = REST.length + 1;
            this.vet = [];
            this.vet.push(P);
            this.vet.push(REST);
        } else {
            console.log(P.length);
            throw new Error("Erro: Primeiro Array eestá vazio")
        }
    }
    run() {
        if (this.NumArrays == 1) { //Comparar preços entre estabelecimentos e retorna o menor
            return new Promise(function (resolve, reject) {
                setTimeout(() => {
                    resolve("Compare Ok 1");
                    reject("Compare Error");
                }, 1000);
            });
        }
        else { //Cada array é um estabelecimento, retornar a soma dos preço
            return new Promise(function (resolve, reject) {
                setTimeout(() => {
                    resolve("Compare Ok 2");
                    reject("Compare Error");
                }, 1000);
            });
        }
    }
}

module.exports = compare;