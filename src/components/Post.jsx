import {useState} from 'react';

function Post({isPosting, onStopPosting}){
  const [posts, setPosts]= useState([]);

    function addPosthandler(postData){
      setPosts((existingPost)=> [postData, ...existingPost]);
    }

    return(
      <>
            {isPosting && (
            <Modal onClose = {onStopPosting} >
            <NewPost 
              onCancel= {onStopPosting} onAddPost = {addPosthandler} />
            </Modal>
            ) }
        <ul className= 'postBody'>
            {posts.map((post)=> <PostList author={post.author} body={post.body} />)}
        </ul>
      </>
    )
  }

function PostList({author, body}) {
    return( <li className= 'post'>
          <p className= 'author'> {author}</p>
          <p className= 'postText'> {body}</p>
            </li>
    );
  }

  function NewPost ({onCancel, onAddPost}){

    const [enteredAuthor, setEnteredAuthor]= useState ('');
    const [enteredBody, setEnteredBody] = useState ('');
  
  
    function authorChangeHandler (event){
      setEnteredAuthor(event.target.value);
    }
  
    function bodyChangeHandler (event){
      setEnteredBody(event.target.value);
    }

    function submitHandler(event){
      event.preventDefault();
      const PostData = {
        author: enteredAuthor,
        body: enteredBody
      };
      onAddPost(PostData)
      onCancel();
    }

    return(
      <form className='form' onSubmit={submitHandler}>
        <div>
            <label htmlFor="name">Enter URL</label>
            <input type="text" id="name" required  onChange = {bodyChangeHandler}/>
        </div>
        <div>
            <label htmlFor="body" >Description</label>
            <textarea id='body' required rows={3} onChange ={authorChangeHandler}/>
        </div>
        <div className='actions'>
          <button type="buttom" onClick={onCancel}>Cancel</button>
          <button>Submit</button>
        </div>
      </form>
    );
  }

    function Modal (props){
      return <>
          <div className="backdrop" onClick={props.backgroundChange}/>
          <dialog open className="modal" > {props.children} </dialog>
      </>
  
  }

  export default Post;


