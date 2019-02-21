export class Block {
    free: boolean = true;
    value: string = "";
    symbol: string = "";

    setValue(value1){
        this.value = value1;
        
        if(this.value == "tick"){
            this.symbol = "done"
        } else {
            this.symbol = "close"
        }
        this.free = false;
    }
    
}