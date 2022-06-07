import React, { Fragment } from 'react';
import './Create.css';
import Header from '../Header/Header';
import {FirebaseContext, AuthContext} from '../../Store/FirebaseContext';
import { useContext } from 'react/cjs/react.production.min';
import { useNavigate } from 'react-router-dom';





const Create = () => {

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const date = new Date();
  const {db} = useContext(FirebaseContext); // ith oru func aanu
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();


  const handleSubmit = ()=> {

     db.storage()
     .ref(`/image/${image.name}`)
     .put(image)
     .then(
       ({ref})=> {
         ref.getDownloadURL()
         .then(
           (url)=>{
             console.log(url);
             db.collection('Products').add(
               {
                 name,
                 category,
                 price,
                 url,userId: user.uid,
                 createdAt: date.toDateString
               }
             )
             navigate('/home')
           }
         )
       }

     )
  }
  

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">

          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price" />
            <br />
          </form>
          <br />
          <img 
              alt="Posts" 
              width="200px"
              height="200px" 
              src={image ? URL.createObjectURL(): ''}>
          </img>
          <form>
            <br />
            <input onChange={
              (e)=>{
                setImage(e.target.files[0])
              }
            } type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          </form>
        </div>
      </card>
    </Fragment>
  );
};



export default Create;
