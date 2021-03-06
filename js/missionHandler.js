class MissionHandler {
    constructor(levels, f) {
        this.progress = 0;
        this.levels = levels;
        this.f = f;
        this.level = 0;
    }
    inc(n) {
        this.progress += n;
        
        while (true) {
            if (this.levels.length === 0) {
                break;
            }
            
            const current = this.levels.shift();
            
            if (current.target > this.progress) {
                this.levels.unshift(current);
                break;
            } else {
                this.f(current.reward);
                this.level++;
            }
        }
    }
}