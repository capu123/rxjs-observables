import $ from 'jquery';
import Rx from 'rxjs/Rx';

// Observables from Arrays

const numbers = [33,44,55,66,77];

const numbers$ = Rx.Observable.from(numbers);

numbers$.subscribe(
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


// Observables from complex Arrays
const posts = [
    {title: 'Post One', body: "This is the body 1"},
    {title: 'Post Two', body: "This is the body 2"},
    {title: 'Post Three', body: "This is the body 3"}
];

const postOutput = $('#posts');

const posts$ = Rx.Observable.from(posts);
posts$.subscribe(
    post=> {
        console.log(post);
        $('#posts').append('<li><h3>'+post.title+'</h3><p>'+post.body+'</p></li>');
    },
    err=> {
        console.log(err);
    },
    complete=> {
        console.log('Completed');
    }
);
