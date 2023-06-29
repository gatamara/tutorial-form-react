import './App.css'

export function Uncontrolled() {
    const submit = (e) => {
        e.preventDefault()
        const data = Array.from(new FormData(e.target))
    }

    return (
        <>
            <form onSubmit={submit}>
                <div>
                    <span>
                        lala
                    </span>
                    <input type="text" name='campo' />
                </div>
                <input type="text" name='campo-2' />
                <input type="submit" value='Enviar' />
            </form>
        </>
    )
}



// console.log(Array.from(new FormData(e.target)));