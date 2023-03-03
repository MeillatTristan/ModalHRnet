# Modal HRnet
A simple component modal with custom text.

## Installation
To install the component run this command :
```
npm i modal-component-hrnet
```

## Usage
To use the component import it like that :
```
import Modal from 'modal-component-hrnet/Modal';
```

We have 2 options : text and open.
Text is the string display in the modal.
Open is a boolean, set it to true and the modal will be open, set it to false and the modal will be closed.

Exemple :
```
const [isOpen, onChangeOpen] = useState(false);

return (
  <Modal
      text="Employee Created!"
      open={isOpen}
  />
);

```
Change the state of isOpen and automatically open or close the modal
