
const blogPost = async () => {
const posts = [];

const  createPost =  new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve(post);
        }, 1000);
    });


const updateLastUserActivityTime = new Promise((resolve, reject) => {
        setTimeout(() => {
            const lastActivityTime = new Date().toLocaleTimeString();
            resolve(lastActivityTime);
        }, 1000);
    });

const deleteLastPost = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deletedPost = posts.pop();
                resolve(deletedPost);
            } else {
                reject("ERROR: No posts to delete");
            }
        }, 1000);
    });

    let Post = await createPost;

    
    let [post,lastActivityTime,deletedPost]=Promise.all([createPost, updateLastUserActivityTime,deletedPost])
   
        console.log('Posts:', posts);
        console.log('Last Activity Time:', lastActivityTime);
        return deleteLastPost();
    
    }
      
     
 
    
