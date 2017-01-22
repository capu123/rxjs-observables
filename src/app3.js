import $ from 'jquery'
import Rx from 'rxjs/Rx'

/*
//merge
const source1$ = Rx.Observable.interval(2000)
                                .map(v=> 'Merge1: ' +v);
const source2$ = Rx.Observable.interval(500)
                                .map(v=> 'Merge2: ' +v);

Rx.Observable.merge(source1$, source2$)
        .take(25)
        .subscribe(x=> console.log(x));
*/


//concat
const source1$ = Rx.Observable.range(0, 5)
                                .map(v=> 'Source: ' +v);
const source2$ = Rx.Observable.range(5, 11)
                                .map(v=> 'Source: ' +v);

Rx.Observable.concat(source1$, source2$)
        .subscribe(x=> console.log(x));