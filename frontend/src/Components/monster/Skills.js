import { capitalize } from "./capitalize";
/**Displays the skills
 * 
 */

const Skills = ({ skills }) => {
    
    const skillsArray = Object.entries(skills);
    
    return (
        <p><b>Skills:</b> {skillsArray.map(e=> `${capitalize(e[0])} +${e[1]}`).join(', ')}</p>
    )
}

export default Skills;