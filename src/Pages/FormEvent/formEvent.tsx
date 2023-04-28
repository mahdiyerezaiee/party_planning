import HeaderList from "../../Components/Header/HeaderList/headerList";
import FormData from "../../Components/Card/formEvent/formData";

/**
 * Functional component for the event form page
 *
 * @constructor
 */
const FormEvent = () => {

    return (
        <div>
            <HeaderList now={30}/>
            <FormData/>
        </div>
    )
}
export default FormEvent
