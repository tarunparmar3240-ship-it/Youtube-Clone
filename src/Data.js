export const API_KEY = 'AIzaSyA1_e0tusTllbnWBbL5Rl0irV9rkI5D4Ts';

export const value_Counter = (value) => {
    if(value>=1000000) {
        return Math.floor(value/1000000) + "M";
    }else if(value>= 1000){
        return Math.floor(value/1000) + "K";
    } else {
        return value;
    }
}


export const like_Counter = (like) => {
    if(like>= 1000000) {
        return Math.floor(like/1000000 * 10) + "M";
    } else if(value >= 1000) {
        return Math.floor(like/1000) + "K";
    }else {
        return like;
    }
}