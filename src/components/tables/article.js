
import { useHistory } from 'react-router-dom';

import Swal from 'sweetalert2';

import '../../assets/css/table.css';
import '../../assets/css/article.css';

export default function Article() {

    let history = useHistory();

    const searchHandle = () => {

    }

    const addArticle = () => {
        history.push('/article/');
    }

    const editArticle = () => {
        history.push({
            pathname: '/article/',
            search: '?query=abc',
            state: {
                code: '0001A',
                description: 'En algún lugar de la mancha',
                price: 100,
                cost: 50
            }
        })
    }

    const deleteArticle = () => {
        Swal.fire({
            title: 'Wait!',
            text: "Are you sure you want to delete the article?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your article has been deleted.',
                    'success'
                )
            }
        })
    }

    return (
        <div className="article-view">
            <div className="article-options">
                <form onSubmit={searchHandle} className="article-search">
                    <input
                        type="Text"
                        placeholder="Search Article By Code (Press Enter)"
                        id="search"
                        name="search"
                    />
                </form>
                <button onClick={addArticle} className="article-new-article">Add Article</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>CODE</th>
                        <th>DESCRIPTION</th>
                        <th>PRICE</th>
                        <th>COST</th>
                        <th>EDIT</th>
                        <th>DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0001A</td>
                        <td>En algún lugar de la mancha</td>
                        <td>100</td>
                        <td>50</td>
                        <td><button className="edit" onClick={editArticle}>Edit</button></td>
                        <td><button className="deleted" onClick={deleteArticle}>Delete</button></td>
                    </tr>
                    <tr>
                        <td>0001A</td>
                        <td>En algún lugar de la mancha</td>
                        <td>100</td>
                        <td>50</td>
                        <td><button className="edit" onClick={editArticle}>Edit</button></td>
                        <td><button className="deleted" onClick={deleteArticle}>Delete</button></td>
                    </tr>
                    <tr>
                        <td>0001A</td>
                        <td>En algún lugar de la mancha</td>
                        <td>100</td>
                        <td>50</td>
                        <td><button className="edit" onClick={editArticle}>Edit</button></td>
                        <td><button className="deleted" onClick={deleteArticle}>Delete</button></td>
                    </tr>
                    <tr>
                        <td>0001A</td>
                        <td>En algún lugar de la mancha</td>
                        <td>100</td>
                        <td>50</td>
                        <td><button className="edit" onClick={editArticle}>Edit</button></td>
                        <td><button className="deleted" onClick={deleteArticle}>Delete</button></td>
                    </tr>
                    <tr>
                        <td>0001A</td>
                        <td>En algún lugar de la mancha</td>
                        <td>100</td>
                        <td>50</td>
                        <td><button className="edit" onClick={editArticle}>Edit</button></td>
                        <td><button className="deleted" onClick={deleteArticle}>Delete</button></td>
                    </tr>
                    <tr>
                        <td>0001A</td>
                        <td>En algún lugar de la mancha</td>
                        <td>100</td>
                        <td>50</td>
                        <td><button className="edit" onClick={editArticle}>Edit</button></td>
                        <td><button className="deleted" onClick={deleteArticle}>Delete</button></td>
                    </tr>

                    <tr>
                        <td>0001A</td>
                        <td>En algún lugar de la mancha</td>
                        <td>100</td>
                        <td>50</td>
                        <td><button className="edit" onClick={editArticle}>Edit</button></td>
                        <td><button className="deleted" onClick={deleteArticle}>Delete</button></td>
                    </tr>
                    <tr>
                        <td>0001A</td>
                        <td>En algún lugar de la mancha</td>
                        <td>100</td>
                        <td>50</td>
                        <td><button className="edit" onClick={editArticle}>Edit</button></td>
                        <td><button className="deleted" onClick={deleteArticle}>Delete</button></td>
                    </tr>
                    <tr>
                        <td>0001A</td>
                        <td>En algún lugar de la mancha</td>
                        <td>100</td>
                        <td>50</td>
                        <td><button className="edit" onClick={editArticle}>Edit</button></td>
                        <td><button className="deleted" onClick={deleteArticle}>Delete</button></td>
                    </tr>
                    <tr>
                        <td>0001A</td>
                        <td>En algún lugar de la mancha</td>
                        <td>100</td>
                        <td>50</td>
                        <td><button className="edit" onClick={editArticle}>Edit</button></td>
                        <td><button className="deleted" onClick={deleteArticle}>Delete</button></td>
                    </tr>
                    <tr>
                        <td>0001A</td>
                        <td>En algún lugar de la mancha</td>
                        <td>100</td>
                        <td>50</td>
                        <td><button className="edit" onClick={editArticle}>Edit</button></td>
                        <td><button className="deleted" onClick={deleteArticle}>Delete</button></td>
                    </tr>
                    <tr>
                        <td>0001A</td>
                        <td>En algún lugar de la mancha</td>
                        <td>100</td>
                        <td>50</td>
                        <td><button className="edit" onClick={editArticle}>Edit</button></td>
                        <td><button className="deleted" onClick={deleteArticle}>Delete</button></td>
                    </tr>
                    <tr>
                        <td>0001A</td>
                        <td>En algún lugar de la mancha</td>
                        <td>100</td>
                        <td>50</td>
                        <td><button className="edit" onClick={editArticle}>Edit</button></td>
                        <td><button className="deleted" onClick={deleteArticle}>Delete</button></td>
                    </tr>
                    <tr>
                        <td>0001A</td>
                        <td>En algún lugar de la mancha</td>
                        <td>100</td>
                        <td>50</td>
                        <td><button className="edit" onClick={editArticle}>Edit</button></td>
                        <td><button className="deleted" onClick={deleteArticle}>Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}