import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';
import { ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntities as getAlunos } from 'app/entities/aluno/aluno.reducer';
import { createEntity, getEntity, reset, updateEntity } from './meta.reducer';

export const MetaUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const alunos = useAppSelector(state => state.aluno.entities);
  const metaEntity = useAppSelector(state => state.meta.entity);
  const loading = useAppSelector(state => state.meta.loading);
  const updating = useAppSelector(state => state.meta.updating);
  const updateSuccess = useAppSelector(state => state.meta.updateSuccess);

  const handleClose = () => {
    navigate(`/meta${location.search}`);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }

    dispatch(getAlunos({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    if (values.id !== undefined && typeof values.id !== 'number') {
      values.id = Number(values.id);
    }
    if (values.linguagemCienciasTecnologia !== undefined && typeof values.linguagemCienciasTecnologia !== 'number') {
      values.linguagemCienciasTecnologia = Number(values.linguagemCienciasTecnologia);
    }
    if (values.cienciasHumanas !== undefined && typeof values.cienciasHumanas !== 'number') {
      values.cienciasHumanas = Number(values.cienciasHumanas);
    }
    if (values.cienciasNatureza !== undefined && typeof values.cienciasNatureza !== 'number') {
      values.cienciasNatureza = Number(values.cienciasNatureza);
    }
    if (values.matematica !== undefined && typeof values.matematica !== 'number') {
      values.matematica = Number(values.matematica);
    }

    const entity = {
      ...metaEntity,
      ...values,
      aluno: alunos.find(it => it.id.toString() === values.aluno?.toString()),
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {}
      : {
          ...metaEntity,
          aluno: metaEntity?.aluno?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="enemApp.meta.home.createOrEditLabel" data-cy="MetaCreateUpdateHeading">
            Criar ou editar Meta
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="meta-id" label="Código" validate={{ required: true }} /> : null}
              <ValidatedField
                label="Linguagem Ciencias Tecnologia"
                id="meta-linguagemCienciasTecnologia"
                name="linguagemCienciasTecnologia"
                data-cy="linguagemCienciasTecnologia"
                type="text"
              />
              <ValidatedField
                label="Ciencias Humanas"
                id="meta-cienciasHumanas"
                name="cienciasHumanas"
                data-cy="cienciasHumanas"
                type="text"
              />
              <ValidatedField
                label="Ciencias Natureza"
                id="meta-cienciasNatureza"
                name="cienciasNatureza"
                data-cy="cienciasNatureza"
                type="text"
              />
              <ValidatedField label="Matematica" id="meta-matematica" name="matematica" data-cy="matematica" type="text" />
              <ValidatedField id="meta-aluno" name="aluno" data-cy="aluno" label="Aluno" type="select">
                <option value="" key="0" />
                {alunos
                  ? alunos.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/meta" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">Voltar</span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp; Salvar
              </Button>
            </ValidatedForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default MetaUpdate;
