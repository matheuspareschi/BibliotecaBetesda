import { useState } from "react";
import './loanBook.css';
import { XCircle } from "phosphor-react";

const LoanBook = ({id, setViewLoan}) => {
    const [loan, setLoan] = useState({
        loanDate: '',
        returnDate:'',
        name:'', 
        cellphone: '',
        idBook: {id}
    })

    function onChangeLoanDate(e) {
        setLoan({...loan, loanDate: e.target.value})
    }

    function onChangeReturnDate(e) {
        setLoan({...loan, returnDate: e.target.value})
    }

    function onChangeName(e) {
        setLoan({...loan, name: e.target.value})
    }

    function onChangeCellphone(e) {
        setLoan({...loan, cellphone: e.target.value})
    }

    return (
        <div> 
            <form className="formLoan">
                <XCircle onClick={() => setViewLoan(false)} size={50} color="#b1ab5e" weight="duotone" className="iconLoan" />

                <div className='inputLoanDiv'>
                    <p className='textLoan'> Data do Empréstimo </p>
                    <input 
                     name="loan"
                     className='inputLoan'
                     type = "date"
                     value={loan.loanDate}
                     onChange={(e) => onChangeLoanDate(e)}
                    />
                </ div>

                <div className='inputLoanDiv'>
                    <p className='textLoan'> Data de Devolução </p>
                    <input 
                     name="return"
                     className='inputLoan'
                     type = "date"
                     value={loan.returnDate}
                     onChange={(e) => onChangeReturnDate(e)}
                    />
                </ div>

                <div className='inputLoanDiv'>
                    <p className='textLoan'> Nome: </p>
                    <input 
                     name="name"
                     className='inputLoan'
                     type = "text"
                     value={loan.name}
                     onChange={(e) => onChangeName(e)}
                    />
                </ div>

                <div className='inputLoanDiv'>
                    <p className='textLoan'> Celular: </p>
                    <input 
                     name="cellphone"
                     className='inputLoan'
                     type = "text"
                     value={loan.cellphone}
                     onChange={(e) => onChangeCellphone(e)}
                    />
                </ div>

                <button className="buttonLoan">
                    Confirmar!
                </button>
                
            </form>
        </div>
    )
}

export default LoanBook;