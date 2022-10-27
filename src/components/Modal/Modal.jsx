import { ModalField, Overlay } from './Modal.styled';

export const Modal = ({ image }) => {
  return (
    <Overlay>
      <ModalField>
        <img src={image} alt="" />
      </ModalField>
    </Overlay>
  );
};
