/**
 * Drawing operations for Hangman parts
 */
class HangDraw {

    static canvas = document.getElementById('draw');
    static context = this.canvas.getContext('2d');

    static startDraw() {
        this.context.clearRect(0, 0, 1000, 500);
        this.canvas;
        this.context;
        this.context.beginPath();
        this.context.moveTo(200, 500);
        this.context.lineTo(200, 50);
        this.context.lineTo(620, 50);
        this.context.moveTo(580, 50);
        this.context.lineTo(580, 100);
        this.context.moveTo(100, 500);
        this.context.lineTo(200, 400);
        this.context.lineWidth = 40;
        this.context.lineCap='round';
        this.context.lineJoin = 'bevel';
        this.context.fillStyle = 'rgba(185,228,240,1)';
        this.context.fill();
        this.context.strokeStyle = 'rgba(62,45,37,1';
        this.context.stroke(); 
    }

    /**
     * Draw Hangman parts related to number of user's errors
     */
    static draw(errorNumber) {
        switch (errorNumber) {
            case 1:
                this.context.beginPath();
                this.context.ellipse(580, 150, 30, 40, Math.PI / 1, 0, 2 * Math.PI);
                this.context.lineWidth = 10;
                this.context.fillStyle = 'rgba(244, 212, 166, 1)';
                this.context.fill();
                this.context.strokeStyle = 'rgba(230, 193, 151, 1)';
                this.context.stroke();
                this.context.beginPath();
                this.context.arc(590, 140, 1, 0, 2 * Math.PI);
                this.context.stroke();
                this.context.beginPath();
                this.context.arc(565, 140, 1, 0, 2 * Math.PI);
                this.context.stroke();
                this.context.beginPath();
                this.context.ellipse(580, 165, 4, 1, Math.PI / 1, 0, 2 * Math.PI);
                this.context.stroke();
                break;
        
            case 2:
                this.context.beginPath();
                this.context.ellipse(580, 280, 50, 90, Math.PI / 1, 0, 2 * Math.PI);
                this.context.lineWidth = 10;
                this.context.fillStyle = 'rgba(244, 212, 166, 1)';
                this.context.fill();
                this.context.strokeStyle = 'rgba(230, 193, 151, 1)';
                this.context.stroke();
                break;
        
            case 3:
                this.context.beginPath();
                this.context.ellipse(500, 250, 75, 20, Math.PI / 1.4, 0, 2 * Math.PI);
                this.context.lineWidth = 10;
                this.context.fillStyle = 'rgba(244, 212, 166, 1)';
                this.context.fill();
                this.context.strokeStyle = 'rgba(230, 193, 151, 1)';
                this.context.stroke();
                break;
        
            case 4:
                this.context.beginPath();
                this.context.ellipse(655, 255, 75, 20, Math.PI / 0.75, 0, 2 * Math.PI);
                this.context.lineWidth = 10;
                this.context.fillStyle = 'rgba(244, 212, 166, 1)';
                this.context.fill();
                this.context.strokeStyle = 'rgba(230, 193, 151, 1)';
                this.context.stroke();
                break;
        
            case 5:
                this.context.beginPath();
                this.context.ellipse(500, 405, 75, 20, Math.PI / 1.4, 0, 2 * Math.PI);
                this.context.lineWidth = 10;
                this.context.fillStyle = 'rgba(244, 212, 166, 1)';
                this.context.fill();
                this.context.strokeStyle = 'rgba(230, 193, 151, 1)';
                this.context.stroke();
                break;
        
            case 6:
                this.context.beginPath();
                this.context.ellipse(655, 405, 75, 20, Math.PI / 0.75, 0, 2 * Math.PI);
                this.context.lineWidth = 10;
                this.context.fillStyle = 'rgba(244, 212, 166, 1)';
                this.context.fill();
                this.context.strokeStyle = 'rgba(230, 193, 151, 1)';
                this.context.stroke();
                break;
        
            default:
                break;
        }
    }
}