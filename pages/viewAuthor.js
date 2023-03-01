import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';
import { showBooks } from './books';

const viewAuthor = (obj) => {
  clearDom();

  const domString = `
  <div class="mt-5 d-flex flex-wrap">
   <div class="d-flex flex-column">
     <img src=${obj.image} alt=${obj.title} style="width: 300px;">
     <div class="mt-5">
       <i id="update-author-btn--${obj.authorObject.firebaseKey}" class="fas fa-edit btn btn-info"></i>
       <i id="delete-author-btn--${obj.authorObject.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
     </div>
   </div>
   <div class="author-info">
   <div class="text-white ms-5 details">
     <h5>${obj.authorObject.first_name} ${obj.authorObject.last_name} ${obj.authorObject.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</h5>
     Author Email: <a href="mailto:${obj.authorObject.email}">${obj.authorObject.email}</a>
     <hr> 
      </div id='authorBooks></div>
    </div>
    </div>`;

  renderToDOM('#view', domString);
  showBooks(obj.authorsBooksArray, '#authorBooks');
};

export default viewAuthor;
