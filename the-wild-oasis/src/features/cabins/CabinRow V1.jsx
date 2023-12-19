import styled from "styled-components";
import Modal from "../../ui/Modal";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";
import CreateCabinForm from "./CreateCabinForm";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useDeleteCabin from "./useDeleteCabin";
import useCreateCabin from "./useCreateCabin";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin }) {
  const { name, maxCapacity, regularPrice, discount, image, description, id } =
    cabin;

  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { isCreating, createCabin } = useCreateCabin();

  function handleDuplicate() {
    createCabin({
      name: `Copy for ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    });
  }

  return (
    <>
      <Table.Row>
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <div>Fits up to {maxCapacity} guests</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        <Discount>{formatCurrency(discount)}</Discount>
        <div>
          <button disabled={isCreating} onClick={handleDuplicate}>
            <HiSquare2Stack />
          </button>

          <Modal>
            <Modal.Open opens="edit-cabin-form">
              <button>
                <HiPencil />
              </button>
            </Modal.Open>
            <Modal.Window opens="edit-cabin-form">
              <CreateCabinForm cabinToEdit={cabin} />
            </Modal.Window>
          </Modal>

          <Modal>
            <Modal.Open opens="delete-cabin-form">
              <button>
                <HiTrash />
              </button>
            </Modal.Open>
            <Modal.Window opens="delete-cabin-form">
              <ConfirmDelete
                resourceName="Cabin"
                onConfirm={() => deleteCabin(cabin.id)}
                disabled={isDeleting}
              />
            </Modal.Window>
          </Modal>

          <Menus.Menu>
            <Menus.Toggle id={id} />

            <Menus.List id={id}>
              <Menus.Button icon={<HiSquare2Stack />} onClick={handleDuplicate}>
                Duplicate
              </Menus.Button>
              <Menus.Button icon={<HiPencil />}> Edit</Menus.Button>
              <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
            </Menus.List>
          </Menus.Menu>
        </div>
      </Table.Row>
    </>
  );
}

export default CabinRow;
