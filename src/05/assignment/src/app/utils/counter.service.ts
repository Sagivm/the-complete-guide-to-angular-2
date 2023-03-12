export class CounterService{
    
    a2i:number=0
    i2a:number=0

    constructor(){}

    countA2I( ){
        this.a2i+=1;
        console.log( "active -> inactive : " + this.a2i );
    }
    countI2A( ){
        this.i2a+=1;
        console.log( "inactive -> active : " +this.i2a );
    }

}