import { useState } from "react"

/** Forces update if state is not updating
 * 
 */
const useForceUpdate = () => {
    const [ value, setValue ] = useState(0);
    return ()=> setValue( value => value + 1);
}

export default useForceUpdate;