import { Button } from "../Entity/Button.js";
export class UIChoseLevel
{
    constructor(uimanager)
    {
        this.canvas =uimanager.canvas;
        this.context = uimanager.context;
        this.buttons = [];
        this.background = new Image();
       this.background.src = './Asset/Background/bkmain2.jpg';
        this.init();
    }

    init()
    {
        let  btnEasy = new Button(this.canvas.width/2 -100,this.canvas.height/2 - 150,200,100 ,'black',0,'Easy','white', 'italic bold 25px Verdana');
        let  btnMedium = new Button(this.canvas.width/2 -100,this.canvas.height/2 ,200,100 ,'black',1,'Medium','white', 'italic bold 25px Verdana');
        let  btnHard = new Button(this.canvas.width/2 -100,this.canvas.height/2 + 150,200,100 ,'black',2,'Hard','white', 'italic bold 25px Verdana');
        this.buttons.push(btnEasy);
        this.buttons.push(btnMedium);
        this.buttons.push(btnHard);
    }

    render()
    {
        this.context.imageSmoothingEnabled = true;
        this.context.imageSmoothingQuality = 'high';
        this.context.beginPath();
        this.context.drawImage(this.background,0,0,this.canvas.width,this.canvas.height);
        this.buttons.forEach(button => {
            button.draw(this.context);
        });
    }

    event(pos)
    {
        let result = '';
        this.buttons.forEach(button => {
            if(button.onclick(pos))
            {
                result = button.action;
            }
        });
        console.log(result);
        return result;
    }
}