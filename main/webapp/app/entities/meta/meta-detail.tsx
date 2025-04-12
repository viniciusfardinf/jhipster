import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './meta.reducer';

export const MetaDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const metaEntity = useAppSelector(state => state.meta.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="metaDetailsHeading">Meta</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">Código</span>
          </dt>
          <dd>{metaEntity.id}</dd>
          <dt>
            <span id="linguagemCienciasTecnologia">Linguagem Ciencias Tecnologia</span>
          </dt>
          <dd>{metaEntity.linguagemCienciasTecnologia}</dd>
          <dt>
            <span id="cienciasHumanas">Ciencias Humanas</span>
          </dt>
          <dd>{metaEntity.cienciasHumanas}</dd>
          <dt>
            <span id="cienciasNatureza">Ciencias Natureza</span>
          </dt>
          <dd>{metaEntity.cienciasNatureza}</dd>
          <dt>
            <span id="matematica">Matematica</span>
          </dt>
          <dd>{metaEntity.matematica}</dd>
          <dt>Aluno</dt>
          <dd>{metaEntity.aluno ? metaEntity.aluno.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/meta" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Voltar</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/meta/${metaEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Editar</span>
        </Button>
      </Col>
    </Row>
  );
};

export default MetaDetail;
