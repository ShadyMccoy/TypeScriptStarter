import { Map } from './Map';

export class BackgroundMap {
    private canvas : HTMLCanvasElement;
    private map : Map;
    private CurrentView : MapView;
    private ctx: CanvasRenderingContext2D;
    private selected : Tile;
    
    constructor(Values : Object) {
        Object.assign(this,Values);
        this.ctx = this.canvas.getContext("2d");
    }

    public drawMap() {
        this.ctx.beginPath();
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 1;

        let tw = this.getTileWidth();
        let th = this.getTileHeight();
        for (let w=0; w<this.map.width; w++) {
            for (let h=0; h<this.map.height; h++) {
                this.ctx.rect(w*tw,h*th,tw,th);
            }
        }
        this.ctx.rect
        this.ctx.stroke();

        if (this.selected) { 
            this.selected.draw(this.getTileWidth(),this.getTileHeight(),this.ctx);
        }
    }

    private getTileWidth() : number {
        return this.canvas.width / this.map.width;
    }
    
    private getTileHeight() : number {
        return this.canvas.height / this.map.height;
    }

    public SelectTile(x : number, y : number) {
        this.selected = new Tile(
            Math.floor(x/this.getTileWidth()),
            Math.floor(y/this.getTileHeight()));
            
        console.log('x: ' + this.selected.x + ',y: ' + this.selected.y);
    }

}

class MapView {
    public XPos : number;
    public YPos : number;
    public scale : number;
}


class Tile {
    readonly x : number;
    readonly y : number;
    constructor(x : number, y : number) {
        this.x = x;
        this.y = y;
    }

    public draw(width : number, height : number, ctx : CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.rect(width*this.x + 5, height*this.y+5, width - 10, height -10);
        console.log('x: '+  (width*this.x+5) + ',y: ' + (height*this.y+5));
        console.log('drawTile');
        ctx.rect
        ctx.stroke();
    }
}