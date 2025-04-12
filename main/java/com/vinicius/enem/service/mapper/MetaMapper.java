package com.vinicius.enem.service.mapper;

import com.vinicius.enem.domain.Aluno;
import com.vinicius.enem.domain.Meta;
import com.vinicius.enem.service.dto.AlunoDTO;
import com.vinicius.enem.service.dto.MetaDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Meta} and its DTO {@link MetaDTO}.
 */
@Mapper(componentModel = "spring")
public interface MetaMapper extends EntityMapper<MetaDTO, Meta> {
    @Mapping(target = "aluno", source = "aluno", qualifiedByName = "alunoId")
    MetaDTO toDto(Meta s);

    @Named("alunoId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    AlunoDTO toDtoAlunoId(Aluno aluno);
}
