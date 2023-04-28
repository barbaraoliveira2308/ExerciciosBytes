class Porta{
    construtor(color){
        this.trinco=false
        this.color=color
    }
    trancar(){
        this.trinco = true
    }
    destrancar (){
        this.trinco= false
    }

    bater(){
        this.trancar()
        console.log("BARULHO")
    }
    mudarCor(cor){
        this.color= cor
    }
}


const porta = new porta ("azul")

porta.trancar()

porta.destrancar () 