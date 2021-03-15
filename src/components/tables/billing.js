import Swal from 'sweetalert2';

import '../../assets/css/billing.css'

export default function Billing() {

    const today = new Date();

    const addArticle = () => {
        Swal.mixin({
            input: 'text',
            confirmButtonText: 'Next &rarr;',
            showCancelButton: true,
            progressSteps: ['1', '2']
        }).queue([
            {
                title: 'Code Article',
                text: 'Select the article',
                input: 'select',
                inputOptions: {
                    'Codes': ['0001A', '0001B']
                },
            },
            {
                title: 'Quantity',
                text: 'Select the queantity of articles',
                input: 'number'
            },
        ]).then((result) => {
            if (!result.isConfirmed) {
                if (result.value === undefined) {
                    return
                }
                if (result.value[1] <= 0) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!'
                    })
                } else {
                    Swal.fire(
                        'Your data is save!',
                        'You clicked the button!',
                        'success'
                    )
                }

            }

        })
    }

    const deleteArticleFromBilling = () => {
        Swal.fire({
            title: 'Wait!',
            text: "Are you sure you want to delete the article of the list?",
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

    const keyboardEvent = (event) => {
        if (event.key === 'Enter') {
            addArticle();
        }
    }

    return (
        <div className="billing-view" onKeyPress={keyboardEvent}>
            <div className="billing-head">
                <h2>BILLING</h2>
                <div className="billing-information">
                    <div className="information-date">
                        <h3>Date</h3>
                        <span>{today.getMonth() + 1}</span>/
                        <span>{today.getDate()}</span>/
                        <span>{today.getFullYear()}</span>
                    </div>
                    <div className="information-vat">
                        <h3>VAT</h3>
                        <span>15%</span>
                    </div>
                    <button onClick={addArticle} className="add-article" title="Use '+' Keyboard">+</button>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>CODE</th>
                        <th>DESCRIPTION</th>
                        <th>PRICE</th>
                        <th>QUANTITY</th>
                        <th>SUB-TOTAL</th>
                        <th>VAT</th>
                        <th>TOTAL</th>
                        <th>DELETE</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>SUB-TOTAL :<span> 1100</span></td>
                        <td>VAT : <span>165</span></td>
                        <td>TOTAL : <span>1265</span></td>
                    </tr>
                </tfoot>
                <tbody>
                    <tr>
                        <td>0001A</td>
                        <td>En algún lugar de la mancha</td>
                        <td>100</td>
                        <td>11</td>
                        <td>1100</td>
                        <td>165</td>
                        <td>1265</td>
                        <td><button onClick={deleteArticleFromBilling} className="deleted">Delete</button></td>
                    </tr>
                    <tr>
                        <td>0001A</td>
                        <td>En algún lugar de la mancha</td>
                        <td>100</td>
                        <td>11</td>
                        <td>1100</td>
                        <td>165</td>
                        <td>1265</td>
                        <td><button onClick={deleteArticleFromBilling} className="deleted">Delete</button></td>
                    </tr>
                    <tr>
                        <td>0001A</td>
                        <td>En algún lugar de la mancha</td>
                        <td>100</td>
                        <td>11</td>
                        <td>1100</td>
                        <td>165</td>
                        <td>1265</td>
                        <td><button onClick={deleteArticleFromBilling} className="deleted">Delete</button></td>
                    </tr>
                    <tr>
                        <td>0001A</td>
                        <td>En algún lugar de la mancha</td>
                        <td>100</td>
                        <td>11</td>
                        <td>1100</td>
                        <td>165</td>
                        <td>1265</td>
                        <td><button onClick={deleteArticleFromBilling} className="deleted">Delete</button></td>
                    </tr>
                    <tr>
                        <td>0001A</td>
                        <td>En algún lugar de la mancha</td>
                        <td>100</td>
                        <td>11</td>
                        <td>1100</td>
                        <td>165</td>
                        <td>1265</td>
                        <td><button onClick={deleteArticleFromBilling} className="deleted">Delete</button></td>
                    </tr>
                    <tr>
                        <td>0001A</td>
                        <td>En algún lugar de la mancha</td>
                        <td>100</td>
                        <td>11</td>
                        <td>1100</td>
                        <td>165</td>
                        <td>1265</td>
                        <td><button onClick={deleteArticleFromBilling} className="deleted">Delete</button></td>
                    </tr>
                    <tr>
                        <td>0001A</td>
                        <td>En algún lugar de la mancha</td>
                        <td>100</td>
                        <td>11</td>
                        <td>1100</td>
                        <td>165</td>
                        <td>1265</td>
                        <td><button onClick={deleteArticleFromBilling} className="deleted">Delete</button></td>
                    </tr>
                    <tr>
                        <td>0001A</td>
                        <td>En algún lugar de la mancha</td>
                        <td>100</td>
                        <td>11</td>
                        <td>1100</td>
                        <td>165</td>
                        <td>1265</td>
                        <td><button onClick={deleteArticleFromBilling} className="deleted">Delete</button></td>
                    </tr>
                    <tr>
                        <td>0001A</td>
                        <td>En algún lugar de la mancha</td>
                        <td>100</td>
                        <td>11</td>
                        <td>1100</td>
                        <td>165</td>
                        <td>1265</td>
                        <td><button onClick={deleteArticleFromBilling} className="deleted">Delete</button></td>
                    </tr>
                    <tr>
                        <td>0001A</td>
                        <td>En algún lugar de la mancha</td>
                        <td>100</td>
                        <td>11</td>
                        <td>1100</td>
                        <td>165</td>
                        <td>1265</td>
                        <td><button onClick={deleteArticleFromBilling} className="deleted">Delete</button></td>
                    </tr>
                    <tr>
                        <td>0001A</td>
                        <td>En algún lugar de la mancha</td>
                        <td>100</td>
                        <td>11</td>
                        <td>1100</td>
                        <td>165</td>
                        <td>1265</td>
                        <td><button onClick={deleteArticleFromBilling} className="deleted">Delete</button></td>
                    </tr>
                    <tr>
                        <td>0001A</td>
                        <td>En algún lugar de la mancha</td>
                        <td>100</td>
                        <td>11</td>
                        <td>1100</td>
                        <td>165</td>
                        <td>1265</td>
                        <td><button onClick={deleteArticleFromBilling} className="deleted">Delete</button></td>
                    </tr>
                    <tr>
                        <td>0001A</td>
                        <td>En algún lugar de la mancha</td>
                        <td>100</td>
                        <td>11</td>
                        <td>1100</td>
                        <td>165</td>
                        <td>1265</td>
                        <td><button onClick={deleteArticleFromBilling} className="deleted">Delete</button></td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}