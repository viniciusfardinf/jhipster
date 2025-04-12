import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './aluno.reducer';

export const AlunoDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const alunoEntity = useAppSelector(state => state.aluno.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="alunoDetailsHeading">Aluno</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">Código</span>
          </dt>
          <dd>{alunoEntity.id}</dd>
          <dt>
            <span id="nome">Nome</span>
          </dt>
          <dd>{alunoEntity.nome}</dd>
          <dt>
            <span id="dataNascimento">Data Nascimento</span>
          </dt>
          <dd>
            {alunoEntity.dataNascimento ? (
              <TextFormat value={alunoEntity.dataNascimento} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
        </dl>
        <Button tag={Link} to="/aluno" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Voltar</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/aluno/${alunoEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Editar</span>
        </Button>
      </Col>
    </Row>
  );
};

export default AlunoDetail;
