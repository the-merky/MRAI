export class num {
    constructor(num){
        this.max = null;
        this.array = [];
        this.numSum = 0;
        this.pow = 0;
        let i = 0;
        function maxPow(){
        if (num === Math.pow(2,i)){
            this.max = Math.pow(2, i);
        } else if (num > Math.pow(2, i)) {
            i++;
            maxPow(num, i);
            
            
        } else if (num < Math.pow(2, i)) {
            i= i-1
            this.max = Math.pow(2, i);
            this.pow = i
            return;
        }}
        maxPow(num)
        function listNums(){
        for(i = 0;i< this.array.length();){
            this.numSum = this.numSum + array[i];
        }
        if (num === this.max){
            this.array.push(this.max)
            return;
        } else if (this.numSum < num) {
            if(this.numSum + Math.pow(2, this.pow) === num){
                this.array.push(Math.pow(2, this.pow))
            } else if(this.numSum + Math.pow(2, this.pow) < num) {
                this.pow++;

            }

        } else if (this.numSum > num){
        }
    }


    }
     
}
