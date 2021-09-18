import React, { useContext } from "react";

import { Button } from "@material-ui/core";

import PipelineContext from "contexts/PipelineContext";
import { ModalContainer } from "./ModalStyles/ModalContainer";
import Title from "../Title/Title";
import { ModalStyled } from "./ModalStyles/Modal";

const DeleteModal: React.FC = () => {
  const { deleteModalState, useDeleteModal, deletePipeline } =
    useContext(PipelineContext);

  const body = (
    <ModalContainer>
      <Title
        title="Deletar Pipeline"
        subtitle={
          <>
            <p>Tem certeza que deseja deletar esse pipeline?</p>

            <p>
              <strong>Todas as negociações do pipeline serão arquivadas</strong>
            </p>
          </>
        }
      />

      <Button
        onClick={() => deletePipeline()}
        variant="contained"
        color="error"
      >
        Deletar
      </Button>
    </ModalContainer>
  );

  return (
    <>
      <ModalStyled
        open={deleteModalState}
        onClose={useDeleteModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </ModalStyled>
    </>
  );
};
export default DeleteModal;
