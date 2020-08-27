const http = new easyHTTP;

// get Posts
http.get('https://jsonplaceholder.typicode.com/posts', function(err,resp) {
    if(err) {
        console.log(err);
    } else {
        console.log(resp)
    }
    // console.log(resp);
})
// 1 post
http.get('https://jsonplaceholder.typicode.com/posts/1', function(rerr,resp) {
    if(rerr) {
        console.log(rerr);
    } else {
        console.log(resp)
    }
    // console.log(resp);
})

//  Post data
const data = {
    title: 'Custom post',
    body: 'This is a custom post'
};

//  Create post
http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
    if(err) {
        console.log(err);
    } else {
        console.log(post)
    }
})

// Update Post
http.put('https://jsonplaceholder.typicode.com/posts/1',data, function(err,post) {
    if(err) {
                console.log(err);
            } else {
                console.log(post)
            }
});

http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err,responce) {
    if(err) {
        console.log(err);
    } else {
        console.log(responce)
    }
})