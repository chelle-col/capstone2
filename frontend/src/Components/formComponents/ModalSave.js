import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FormInput from './FormInput';
import { logoPrimary } from '../../styles';

/** Modal Popup to get name and description from user about encounter
 *  Before save
 * 
 * WARING: Depreciated for at least two years!!
 * TODO: refactor to pure bootstrap
 */
const ModalSave = ({ modal, toggle, submit }) => {

  const [ data, setData ] = useState({name: '', description: ''});

  const handleChange = e => {
    setData( data => ({
      ...data,
      [e.target.name]: e.target.value
    }))
  }

  const handleSave = () => {
    submit(data.name, data.description);
    toggle();
  }

   return (
    <div>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Details</ModalHeader>
        <ModalBody>
        </ModalBody>
        <FormInput name='name' 
          title='Name' 
          type='text' 
          placeholder='name me' 
          handleChange={handleChange}
          value={data.name}/>
        <FormInput name='description' 
          title='Description' 
          type='textarea' 
          placeholder='notes' 
          handleChange={handleChange}
          value={data.description}/>
        <ModalFooter>
          <Button style={{background: logoPrimary}} onClick={handleSave}>Save</Button>{' '}
          <Button color="warning" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalSave;