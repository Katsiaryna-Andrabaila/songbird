export function getTime(value) {
    let time = '';
    let resultTime = Math.floor(Number(value));
    if(resultTime < 60) {
        if(resultTime >= 10) {
            time = `00:${resultTime}`;
        } else if(resultTime < 10) {
            time = `00:0${resultTime}`;
        }
    } else if(resultTime >= 60) {
        if(resultTime % 60 === 0) {
            time = `0${resultTime / 60}:00`;
        } else if(resultTime % 60 !== 0) {
            if(Math.floor(resultTime / 60) < 10) {
                if(resultTime % 60 >= 10) {
                    time = `0${Math.floor(resultTime / 60)}:${resultTime % 60}`;
                } else if(resultTime % 60 < 10) {
                    time = `0${Math.floor(resultTime / 60)}:0${resultTime % 60}`;
                }
            } else {
                if(resultTime % 60 >= 10) {
                    time = `${Math.floor(resultTime / 60)}:${resultTime % 60}`;
                } else if(resultTime % 60 < 10) {
                    time = `${Math.floor(resultTime / 60)}:0${resultTime % 60}`;
                }
            }
        }
    }
    return time;
}