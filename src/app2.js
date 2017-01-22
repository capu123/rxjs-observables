import $ from 'jquery';
import Rx from 'rxjs/Rx';

/*
//using interval--------------------------------------------
const source$ = Rx.Observable.interval(3000)
                    .take(5);
source$.subscribe(
    v=> {
        console.log(v);
    },
    err=> {
        console.log(err);
    },
    complete=> {
        console.log('Completed');
    }
);
*/

/*
//using timer( time from page loads to start, time betwn each one) -------------------------------------------
const source$ = Rx.Observable.timer(5000, 2000)
                    .take(5);
source$.subscribe(
    v=> {
        console.log(v);
    },
    err=> {
        console.log(err);
    },
    complete=> {
        console.log('Completed');
    }
);
*/

//using timer( start, how many times) -------------------------------------------
const source$ = Rx.Observable.range(0, 5);
source$.subscribe(
    v=> {
        console.log(v);
    },
    err=> {
        console.log(err);
    },
    complete=> {
        console.log('Completed');
    }
);
