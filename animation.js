function redCyan() {
    //var ctx = canvas.getContext('2d');
    //var canvasData = ctx.getImageData(0, 0, width, height);
    //for (var i = 0; i < canvasData.data.length; i += 4) {
    //    var red = canvasData.data[i];
    //    var cyan = (canvasData.data[i + 1] + canvasData.data[i + 2]) * 2;
    //    if (red > cyan) {
    //        canvasData.data[i] = 255;
    //        canvasData.data[i + 1] = 0;
    //        canvasData.data[i + 2] = 0;
    //    }
    //    else if (red < cyan) {
    //        canvasData.data[i] = 0;
    //        canvasData.data[i + 1] = 255;
    //        canvasData.data[i + 2] = 255;
    //    }
    //    else {
    //        canvasData.data[i] = 255;
    //        canvasData.data[i + 1] = 255;
    //        canvasData.data[i + 2] = 255;
    //    }
    //}
    //ctx.putImageData(canvasData, 0, 0);
}

function text(str) {
    ctx.font = "500 63px Raleway";
    ctx.fillStyle = '#ff0000';
    if (Math.round(Math.random())) {
        ctx.fillStyle = '#00ffff';
    }
    ctx.fillText(str, 30, 90);
}

function tone() {
    toneX = 'X';
    if (Math.round(Math.random())) {
        toneX = 'Y';
    }
    toneA = Math.round(Math.random() * 90);
    toneXa = width;
    toneW = 'square';
    toneF = Math.round(Math.random() * 1) + 1;
    toneP = Math.round(Math.random() * 100);
    tonePer = width / toneF;
    toneGen();
}

function toneGen() {
    //ctx.fillStyle = "#000000";
    //ctx.fillRect(0, 0, width, height);
    if (toneW == 'sine') {
        if (toneX == 'X') {
            for (var i = 0; i < width; i++) {
                var t = i + toneP;
                var shift = toneA * Math.sin(2 * Math.PI * toneF * (t / width));
                ctx.drawImage(ctx.canvas, i, 0, 1, height, i, shift, 1, height);
            }
        }
        else {
            for (var i = 0; i < height; i++) {
                var t = i + toneP;
                var shift = toneA * Math.sin(2 * Math.PI * toneF * (t / width));
                ctx.drawImage(ctx.canvas, 0, i, width, 1, shift, i, width, 1);
            }
        }
    }
    if (toneW == 'saw') {
        if (toneX == 'X') {
            for (var i = 0; i < width; i++) {
                var t = i - toneP;
                var shift = toneA * 2 * ((t / tonePer) - Math.floor(.5 + (t / tonePer)));
                ctx.drawImage(ctx.canvas, i, 0, 1, height, i, shift, 1, height);
            }
        }
        else {
            for (var i = 0; i < height; i++) {
                var t = i - toneP;
                var shift = toneA * 2 * ((t / tonePer) - Math.floor(.5 + (t / tonePer)));
                ctx.drawImage(ctx.canvas, 0, i, width, 1, shift, i, width, 1);

            }
        }
    }
    if (toneW == 'triangle') {
        if (toneX == 'X') {
            for (var i = 0; i < width; i++) {
                var t = i - toneP;
                var a = tonePer;
                var shift = toneA * ((2 / a) * (t - a * Math.floor((t / a) + .5))) * Math.pow(-1, Math.floor((t / a) + .5));
                ctx.drawImage(ctx.canvas, i, 0, 1, height, i, shift, 1, height);
            }
        }
        else {
            for (var i = 0; i < height; i++) {
                var t = i - toneP;
                var a = tonePer;
                var shift = toneA * ((2 / a) * (t - a * Math.floor((t / a) + .5))) * Math.pow(-1, Math.floor((t / a) + .5));
                ctx.drawImage(ctx.canvas, 0, i, width, 1, shift, i, width, 1);

            }
        }
    }
    if (toneW == 'square') {
        if (toneX == 'X') {
            for (var i = 0; i < width; i++) {
                var t = i - toneP;
                var shift = Math.sin(t / tonePer * 3);
                if (shift > 0) {
                    shift = toneA;
                }
                else if (shift < 0) {
                    shift = -toneA;
                }
                else {
                    shift = 0;
                }
                ctx.drawImage(ctx.canvas, i, 0, 1, height, i, shift, 1, height);
            }
        }
        else {
            for (var i = 0; i < height; i++) {
                var t = i - toneP;
                var shift = Math.sin(t / tonePer * 3);
                if (shift > 0) {
                    shift = toneA;
                }
                else if (shift < 0) {
                    shift = -toneA;
                }
                else {
                    shift = 0;
                }
                ctx.drawImage(ctx.canvas, 0, i, width, 1, shift, i, width, 1);
            }
        }
    }
}