class regression {
    constructor(P) {
        if (P.length>0) {
            this.price = P;
        }
        else {
            console.log(P.length);
            throw new Error("Erro: O Array de preço está vazio")
        }
    }

    run() {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                resolve("regression OK");
                reject("regression Error");
            }, 1000);
        });
    }
}
module.exports = regression;
