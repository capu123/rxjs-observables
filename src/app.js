import $ from 'jquery';
import Rx from 'rxjs/Rx';

// Observables from Arrays
/*-------------------------------------------------------
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
        $('#posts').append('<li><h3>'
                            +post.title+
                            '</h3><p>'
                            +post.body+
                            '</p></li>');
    },
    err=> {
        console.log(err);
    },
    complete=> {
        console.log('Completed');
    }
);
*/

/*-------------------------------------------------------------
const set = new Set(['Hello', 2017, {title: 'My Title'}]);
const set$ = Rx.Observable.from(set);
set$.subscribe(
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
const map = new Map([[1,2],[3,4],[5,6]]);
const map$ = Rx.Observable.from(map);
map$.subscribe(
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


// Observables from Promises
//------------------------------------------------------------
/*
const myPromise = new Promise((resolve, reject) => {
    console.log('Creating Promise');
    setTimeout(()=> {
        resolve('Hello from promise');
    }, 3000);
});
*/

/*
myPromise.then(x=> {
    console.log(x);
})
*/

/*
const sourse$ = Rx.Observable.fromPromise(myPromise);
sourse$.subscribe(x=> console.log(x));
*/

/*
function getUser(username){
    return $.ajax({
        url: 'https://api.github.com/users/'+username,
        dataType: 'jsonp'
    }).promise();
}

const inputSource$ = Rx.Observable.fromEvent($('#input'), 'keyup');

inputSource$.subscribe(e=> {
    Rx.Observable.fromPromise(getUser(e.target.value))
        .subscribe(x=> {
            $('#imgAvatar').attr("src", x.data.avatar_url);
            $('#name').text(x.data.name);
            $('#bio').text(x.data.bio);
            $('#repos').text(x.data.public_repos);
            console.log(x);
        });
});
*/



