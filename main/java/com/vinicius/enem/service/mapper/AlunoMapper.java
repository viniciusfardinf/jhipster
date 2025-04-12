package com.vinicius.enem.service.mapper;

import com.vinicius.enem.domain.Aluno;
import com.vinicius.enem.service.dto.AlunoDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Aluno} and its DTO {@link AlunoDTO}.
 */
@Mapper(componentModel = "spring")
public interface AlunoMapper extends EntityMapper<AlunoDTO, Aluno> {}
