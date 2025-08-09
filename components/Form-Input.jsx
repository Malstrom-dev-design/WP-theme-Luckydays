export default function FormInput({type}) {
    return(
        <div className="input-wrapper">
            <label for="name" className="required">Namn</label>
            <input type="text" name="namn" placeholder="förnan & efternamn"></input>
        </div>
    )
}