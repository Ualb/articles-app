import Swal from 'sweetalert2';

import '../assets/css/article-add.css'

// for the path traslate
import { useHistory } from 'react-router-dom';

export default function NewArticle(props) {
    let addEditText = 'Add';
    var code, description, price, cost;

    if (props.location.state !== undefined) {
        code = props.location.state.code;
        description = props.location.state.description;
        price = props.location.state.price;
        cost = props.location.state.cost;
    }

    if (code !== undefined) {
        addEditText = 'Edit';
    }

    let history = useHistory();

    const newArticle = () => {
        // create the article
    }

    const redirec = () => {
        history.push('/');
    }

    const newArticleFormHandle = () => {
        newArticle();
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        )
        redirec();
    }


    return (
        <div className="article">
            <p>New Article</p>
            <form onSubmit={newArticleFormHandle} className="article-form">
                <label for="code">CODE</label>
                <input className="article-input article-input-padding" type="text" id="code" name="code" value={code} required></input>
                <label for="description">DESCRIPTION</label>
                <input className="article-input article-input-padding" type="text" id="description" name="description" value={description} required></input>
                <label for="price">PRICE</label>
                <input className="article-input article-input-padding" type="number" id="price" name="price" step=".01" value={price} required></input>
                <label for="cost">COST</label>
                <input className="article-input article-input-padding" type="number" id="cost" name="cost" step=".01" value={cost} required></input>
                <input className="article-input submit-button" type="submit" value={addEditText}></input>
                <button onClick={redirec} className="article-button">Cancel</button>
            </form >
        </div>
    )
}